function Features() {

    const features = [
        {
            title: "Explore",
            description:
                "Browse Quranic verses and that are critical in recitation."
        },
        {
            title: "Search",
            description:
                "Find verses and information quickly."
        },
        {
            title: "Discover",
            description:
                "Access recitation information through a simple interface."
        }
    ];

    return (
        <section id="features" className="features">

            <div className="section-heading">
                <p>FEATURES</p>

                <h2>
                    Everything you need
                    to explore.
                </h2>
            </div>

            <div className="features-grid">

                {features.map((feature) => (
                    <div
                        className="feature-card"
                        key={feature.title}
                    >
                        <h3>{feature.title}</h3>

                        <p>
                            {feature.description}
                        </p>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default Features;