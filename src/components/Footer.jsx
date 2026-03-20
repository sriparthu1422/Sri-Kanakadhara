import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8 border-t-[8px] border-secondary">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex flex-col items-start mb-6 w-max">
                            <img src="/logo.jpeg" alt="Srikanakadhara Designer Studio Logo" className="h-24 w-auto object-contain brightness-0 invert" />
                        </Link>
                        <p className="text-sm text-[#FAF5F0]/80 leading-relaxed max-w-sm mb-6 font-light">
                            Discover the finest collection of premium sarees, crafted with tradition and styled for the modern luxury experience.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-[#FAF5F0]/30 flex items-center justify-center text-[#FAF5F0]/80 hover:text-secondary hover:border-secondary transition-colors">
                                <Instagram size={18} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-[#FAF5F0]/30 flex items-center justify-center text-[#FAF5F0]/80 hover:text-secondary hover:border-secondary transition-colors">
                                <Facebook size={18} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-[#FAF5F0]/30 flex items-center justify-center text-[#FAF5F0]/80 hover:text-secondary hover:border-secondary transition-colors">
                                <Twitter size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading text-xl font-medium mb-6 text-secondary uppercase tracking-widest relative inline-block">
                            Shop
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[1px] bg-secondary-light"></span>
                        </h4>
                        <ul className="space-y-3 mt-4 text-sm text-[#FAF5F0]/80 font-light">
                            <li><Link to="/shop?category=new" className="hover:text-white hover:underline transition-colors">New Arrivals</Link></li>
                            <li><Link to="/shop?category=silk" className="hover:text-white hover:underline transition-colors">Heritage Silk</Link></li>
                            <li><Link to="/shop?category=bridal" className="hover:text-white hover:underline transition-colors">Bridal Couture</Link></li>
                            <li><Link to="/shop?category=cotton" className="hover:text-white hover:underline transition-colors">Linen & Cotton</Link></li>
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="font-heading text-xl font-medium mb-6 text-secondary uppercase tracking-widest relative inline-block">
                            About Us
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[1px] bg-secondary-light"></span>
                        </h4>
                        <ul className="space-y-3 mt-4 text-sm text-[#FAF5F0]/80 font-light">
                            <li><Link to="/about" className="hover:text-white hover:underline transition-colors">Our Story</Link></li>
                            <li><Link to="/contact" className="hover:text-white hover:underline transition-colors">Contact Us</Link></li>
                            <li><a href="#" className="hover:text-white hover:underline transition-colors">Shipping Returns</a></li>
                            <li><a href="#" className="hover:text-white hover:underline transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading text-xl font-medium mb-6 text-secondary uppercase tracking-widest relative inline-block">
                            Get In Touch
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[1px] bg-secondary-light"></span>
                        </h4>
                        <ul className="space-y-4 mt-4 text-sm text-[#FAF5F0]/80 font-light">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 text-secondary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <span>123 Heritage Ave, Vasant Vihar<br/>New Delhi, India 110057</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-secondary flex-shrink-0" strokeWidth={1.5} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-3 text-secondary flex-shrink-0" strokeWidth={1.5} />
                                <span>hello@srikanakadhara.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#FAF5F0]/20 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#5A3A31]/50 font-light tracking-wide">
                    <p>&copy; {new Date().getFullYear()} Srikanakadhara Designer Studio. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
