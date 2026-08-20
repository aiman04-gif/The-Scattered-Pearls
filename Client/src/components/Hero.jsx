function Hero() {
    return (
        <section className="hero">

            {/* Animated SVG Geometric Pattern Background */}
            <div className="hero-bg" aria-hidden="true">
                <div className="pattern-layer pattern-1"></div>
                <div className="pattern-layer pattern-2"></div>
                <div className="radial-vignette"></div>
            </div>

            <div className="hero-content">

                <p className="hero-label">
                    Critical Points of Recitation
                </p>

                <div className="hero-divider">
                    <span></span>
                    <span className="hero-diamond">◇</span>
                    <span></span>
                </div>

                <h1>
                    Hafs An Asim
                </h1>

                <p className="hero-description">
                    Explore Quranic verses that are critical in recitation
                    in the Qira'at of <i>Hafs An Asim</i>.
                    Learn about the rules of recitation and discover
                    the beauty of the Quran.
                </p>

                <div className="hero-buttons">
                    <a
                        href="/quran"
                        className="primary-button"
                    >
                        Explore
                        <span className="button-arrow">→</span>
                    </a>

                    <a
                        href="#features"
                        className="secondary-button"
                    >
                        Learn More
                    </a>
                </div>

            </div>

        </section>
    );
}

export default Hero;