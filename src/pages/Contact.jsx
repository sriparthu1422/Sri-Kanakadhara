import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="w-full bg-background pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6 max-w-6xl">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-heading text-5xl text-primary uppercase tracking-wider mb-6">Get in Touch</h1>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                    <p className="text-[#5A3A31]/80 max-w-2xl mx-auto font-light">
                        Our concierge team is dedicated to providing you with a seamless and luxurious experience. Whether you need style advice or order assistance, we are here for you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-10 bg-background p-10 shadow-lg border-t-4 border-primary"
                    >
                        <h3 className="font-heading text-2xl text-primary">Concierge Details</h3>
                        
                        <div className="flex items-start">
                            <MapPin size={24} className="text-secondary mr-4 shrink-0 mt-1" />
                            <div>
                                <h4 className="uppercase text-xs tracking-widest text-[#5A3A31]/60 font-bold mb-2">Boutique Address</h4>
                                <p className="text-primary font-light leading-relaxed">123 Heritage Ave, Vasant Vihar<br/>New Delhi, India 110057</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Phone size={24} className="text-secondary mr-4 shrink-0 mt-1" />
                            <div>
                                <h4 className="uppercase text-xs tracking-widest text-[#5A3A31]/60 font-bold mb-2">Phone Inquiries</h4>
                                <p className="text-primary font-light">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Mail size={24} className="text-secondary mr-4 shrink-0 mt-1" />
                            <div>
                                <h4 className="uppercase text-xs tracking-widest text-[#5A3A31]/60 font-bold mb-2">Email</h4>
                                <p className="text-primary font-light">namaste@ananyasarees.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Clock size={24} className="text-secondary mr-4 shrink-0 mt-1" />
                            <div>
                                <h4 className="uppercase text-xs tracking-widest text-[#5A3A31]/60 font-bold mb-2">Operating Hours</h4>
                                <p className="text-primary font-light leading-relaxed">Mon - Sat: 10:00 AM - 7:00 PM<br/>Sunday: Closed</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form className="space-y-8 bg-background p-10 shadow-lg">
                            <h3 className="font-heading text-2xl text-primary mb-6">Send a Message</h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-[#5A3A31]/60">First Name</label>
                                    <input type="text" className="w-full border-b border-[#5A3A31]/10 py-2 focus:outline-none focus:border-secondary bg-background/0 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-[#5A3A31]/60">Last Name</label>
                                    <input type="text" className="w-full border-b border-[#5A3A31]/10 py-2 focus:outline-none focus:border-secondary bg-background/0 transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#5A3A31]/60">Email Address</label>
                                <input type="email" className="w-full border-b border-[#5A3A31]/10 py-2 focus:outline-none focus:border-secondary bg-background/0 transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#5A3A31]/60">Subject</label>
                                <input type="text" className="w-full border-b border-[#5A3A31]/10 py-2 focus:outline-none focus:border-secondary bg-background/0 transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#5A3A31]/60">Message</label>
                                <textarea rows="4" className="w-full border-b border-[#5A3A31]/10 py-2 focus:outline-none focus:border-secondary bg-background/0 transition-colors resize-none"></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full uppercase tracking-[0.2em] font-medium py-4">
                                Send Inquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
