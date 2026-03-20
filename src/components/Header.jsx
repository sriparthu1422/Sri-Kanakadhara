import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';

const Header = ({ onOpenCart }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Collections', path: '/shop?category=collections' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-40 transition-all duration-700 bg-[#FAF5F0]/95 backdrop-blur-sm border-b border-[#e5dcd5] ${isScrolled ? 'shadow-sm' : ''} py-1`}>
            <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">

                {/* Left: Logo and Mobile Menu */}
                <div className="flex items-center gap-6">
                    <button
                        className="lg:hidden text-primary p-2 -ml-2 hover:bg-secondary/10 rounded-full transition-all"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    <Link to="/" className="flex items-center group transition-all duration-500">
                        <img
                            src="/logo.png"
                            alt="Srikanakadhara Designer Studio Logo"
                            className="h-[90px] md:h-[90px] w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        />
                    </Link>
                </div>

                {/* Center: Desktop Nav - Perfectly Spaced */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-[12px] uppercase tracking-[0.2em] text-[#3E2723] transition-all duration-300 font-semibold hover:text-secondary whitespace-nowrap relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Right: Utility Icons */}
                <div className="flex items-center space-x-6 md:space-x-8">
                    <button className="text-[#3E2723] hover:text-secondary transition-colors hidden sm:block">
                        <Search size={21} strokeWidth={1.5} />
                    </button>
                    <button className="text-[#3E2723] hover:text-secondary transition-colors hidden sm:block">
                        <User size={21} strokeWidth={1.5} />
                    </button>
                    <button
                        className="text-[#3E2723] hover:text-secondary transition-colors relative"
                        onClick={onOpenCart}
                    >
                        <ShoppingBag size={21} strokeWidth={1.5} />
                        <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm">2</span>
                    </button>
                </div>
            </div>

            {/* SVG Filter to remove white background from the logo JPEG */}
            <svg style={{ visibility: 'hidden', position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
                <filter id="remove-white">
                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 3 0" />
                </filter>
            </svg>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-background z-50 p-8 shadow-2xl lg:hidden flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <span className="font-heading text-2xl font-bold text-primary uppercase">Menu</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 bg-background rounded-full shadow-sm hover:bg-[#F5EBE1] transition-colors"
                                >
                                    <X size={20} className="text-[#5A3A31]/80" />
                                </button>
                            </div>
                            <nav className="flex flex-col space-y-6 flex-grow">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="text-lg uppercase tracking-wider text-primary hover:text-secondary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-auto border-t border-[#5A3A31]/10 pt-6 flex justify-around">
                                <button className="flex flex-col items-center text-primary/70 hover:text-secondary transition-colors">
                                    <Search size={24} strokeWidth={1.5} className="mb-2" />
                                    <span className="text-xs uppercase tracking-wider">Search</span>
                                </button>
                                <button className="flex flex-col items-center text-primary/70 hover:text-secondary transition-colors">
                                    <User size={24} strokeWidth={1.5} className="mb-2" />
                                    <span className="text-xs uppercase tracking-wider">Account</span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
