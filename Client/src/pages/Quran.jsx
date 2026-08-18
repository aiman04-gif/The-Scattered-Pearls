import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Quran() {

    const juz = Array.from({ length: 30 }, (_, index) => index + 1);

    return (
        <>
            <Navbar />

            <main className="quran-page">

                <section className="juz-section">

                    <div className="juz-header">
                        <p>EXPLORE THE QURAN</p>

                        <h1>Choose a Juz</h1>

                        <span>
                            Select a Juz to explore its critical ayahs.
                        </span>
                    </div>


                    <div className="juz-orbit">

                        {/* Center */}
                        <a
                            href="/rules"
                            className="rules-center"
                        >
                            <span>General Rules</span>
                        </a>


                        {/* Juz buttons */}
                        {juz.map((number) => (

                            <a
                                key={number}
                                href={`/juz/${number}`}
                                className="juz-button"
                                style={{
                                    "--i": number - 1
                                }}
                            >
                                {String(number).padStart(2, "0")}
                            </a>

                        ))}

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Quran;