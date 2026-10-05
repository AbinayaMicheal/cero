function Navbar() {
    return (
        <nav className="bg-[#FFFCF9] border-b border-[#E9DDD6] px-5 md:px-10 py-5">

            <div className="flex justify-between items-center">

                {/* Logo */}
                <div>
                    <h1 className="font-serif text-3xl font-semibold text-[#382522]">
                        CERO
                    </h1>

                    <p className="text-xs text-[#8B7B76] tracking-widest">
                        BRIDAL COUTURE
                    </p>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">

                    <a
                        href="#"
                        className="text-[#382522] hover:text-[#98676A]"
                    >
                        Home
                    </a>

                    <a
                        href="#"
                        className="text-[#382522] hover:text-[#98676A]"
                    >
                        Collections
                    </a>

                    <a
                        href="#"
                        className="text-[#382522] hover:text-[#98676A]"
                    >
                        Customize
                    </a>

                    <a
                        href="#"
                        className="text-[#382522] hover:text-[#98676A]"
                    >
                        About
                    </a>

                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-[#382522] text-2xl">
                    ☰
                </button>

            </div>

        </nav>
    )
}

export default Navbar