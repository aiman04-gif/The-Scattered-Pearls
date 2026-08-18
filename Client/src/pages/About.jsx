import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About(){
    return (
        <>
            <Navbar/>
            <main className="about-page">

                <section className="about-hero">
                    <h1>About</h1>
                </section>

                <section className="about-introduction">
                    <h2>About the Project</h2>

                    <p>
                        This project aims at providing a visual representation of the critical points of recitation that reciters usually
                        encounter in the qiraat of <i>Hafs ‘an ‘Asim</i>. Instead of going through long video lectures and slides, an accessible way of pinpointing the difficult parts 
                        and how they are recited correctly is the driving force behind this.
                    </p>
                </section>

                <section className="about-qiraat">
                    <h2>Hafs An Asim</h2>

                    <p>
                        Tajweed Hafs refers to the complete system of Tajweed rules as transmitted specifically through Hafs ‘an ‘Asim — one of the ten mutawatir Quranic recitation chains (Qira’at). Hafs ibn Sulayman (d. 180 AH) was the foremost student of Imam ‘Asim ibn Abi al-Najud (d. 127 AH), a second-generation Tabi’i who received the Quran through chains reaching the Companions directly. 
                    </p>
                    <p>
                        The chain of transmission for Hafs ‘an ‘Asim is as follows:<br/>
                        <i>Imam Hafs ibn Suleiman ibn al-Mughirah al-Asadi al-Kufi learned from Aasim ibn Abi al-Najud al-Kufi al-Tabi'i from Abu 'Abd al-Rahman al-Sulami from Uthman ibn Affan (RA), Ali ibn Abu Talib (RA), Ubayy ibn Ka'b (RA), and Zaid ibn Thabit (RA) from Muhammad (SAW).</i>
                    </p>
                </section>

            </main>
            <Footer/>
        </>
    );
}

export default About;