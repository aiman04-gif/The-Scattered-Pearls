function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <a href="/" className="logo">
                    The Scattered Pearls
                </a>

                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/quran">Quran</a>
                    <a href="/about">About</a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;