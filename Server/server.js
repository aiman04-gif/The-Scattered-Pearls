import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix directory path resolution for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Path to the data folder containing 001.json, 002.json, ..., 114.json
const DATA_DIR = path.join(__dirname, 'data');

/**
 * Helper Function: Format surah number to 3-digit padded string (e.g. 1 -> "001")
 */
const getFileName = (surahNum) => {
  const padded = String(surahNum).padStart(3, '0');
  return `${padded}.json`;
};

/**
 * Route 1: Get single verse by verse_key
 * Example: GET /api/verse/1:5
 */
app.get('/api/verse/:key', async (req, res) => {
  try {
    const { key } = req.params; // Extracts "1:5"

    if (!key || !key.includes(':')) {
      return res.status(400).json({ 
        error: 'Invalid key format. Use format like 1:5 (Surah:Verse)' 
      });
    }

    const [surahNumStr] = key.split(':');
    const surahNum = parseInt(surahNumStr, 10);

    if (isNaN(surahNum) || surahNum < 1 || surahNum > 114) {
      return res.status(400).json({ error: 'Surah number must be between 1 and 114' });
    }

    const fileName = getFileName(surahNum);
    const filePath = path.join(DATA_DIR, fileName);

    const rawData = await fs.readFile(filePath, 'utf8');
    const verses = JSON.parse(rawData);

    // Search array for matching verse_key
    const matchedVerse = verses.find((v) => v.verse_key === key);

    if (!matchedVerse) {
      return res.status(404).json({ error: `Verse key '${key}' not found` });
    }

    res.json({
      success: true,
      data: matchedVerse
    });
  } catch (err) {
    res.status(404).json({ error: 'Surah file not found' });
  }
});

/**
 * Route 2: Get entire Surah OR filter by range/verse ID
 * Examples:
 *   GET /api/surah/1              --> Returns all verses in Surah 1
 *   GET /api/surah/1?verse=5      --> Returns verse with verse_id = 5
 *   GET /api/surah/1?from=1&to=3  --> Returns verses 1 through 3
 */
app.get('/api/surah/:surahNum', async (req, res) => {
  try {
    const surahNum = parseInt(req.params.surahNum, 10);

    if (isNaN(surahNum) || surahNum < 1 || surahNum > 114) {
      return res.status(400).json({ error: 'Surah number must be between 1 and 114' });
    }

    const fileName = getFileName(surahNum);
    const filePath = path.join(DATA_DIR, fileName);

    const rawData = await fs.readFile(filePath, 'utf8');
    const verses = JSON.parse(rawData);

    // 1. Specific verse query: ?verse=5
    if (req.query.verse) {
      const verseId = parseInt(req.query.verse, 10);
      const matchedVerse = verses.find((v) => v.verse_id === verseId);

      if (!matchedVerse) {
        return res.status(404).json({ error: `Verse ID ${verseId} not found in Surah ${surahNum}` });
      }

      return res.json({
        success: true,
        surah: surahNum,
        data: matchedVerse
      });
    }

    // 2. Range query: ?from=1&to=5
    if (req.query.from || req.query.to) {
      const from = parseInt(req.query.from, 10) || 1;
      const to = parseInt(req.query.to, 10) || Infinity;

      const filtered = verses.filter((v) => v.verse_id >= from && v.verse_id <= to);

      return res.json({
        success: true,
        surah: surahNum,
        range: { from, to },
        count: filtered.length,
        data: filtered
      });
    }

    // 3. Default: Full Surah
    res.json({
      success: true,
      surah: surahNum,
      count: verses.length,
      data: verses
    });
  } catch (err) {
    res.status(404).json({ error: 'Surah file not found' });
  }
});

// Root route check
app.get('/', (req, res) => {
  res.send('Quran Data API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});