import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    // Reveal variants for scroll animations
    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative min-h-screen w-full flex items-end justify-center overflow-hidden pb-[10vh] sm:pb-[15vh]">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        className="w-full h-full bg-[url('/images/hero_saree_1773968871592.png')] bg-cover bg-top"
                    />
                    <div
                        className="absolute inset-0 z-[1]"
                        style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(62,39,35,0.6))' }}
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-3 md:px-10 lg:px-16 w-full max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-white/90 tracking-[0.5em] uppercase text-xs sm:text-[13px] font-medium mb-4 block"
                    >
                        Where Tradition Meets Timeless Elegance
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="font-heading text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-4 leading-[1.3] tracking-wider drop-shadow-2xl"
                    >
                        Timeless Elegance<br /><span className="italic font-light text-white/90">Crafted Just for You</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-white/90 text-sm md:text-base mb-6 font-light leading-relaxed tracking-wide max-w-2xl"
                    >
                        At Srikanakadhara Designer Studio, we transform your vision into exquisite designer wear. From luxurious sarees to perfectly tailored outfits, every piece reflects elegance, craftsmanship, and individuality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-row items-center justify-center gap-4"
                    >
                        <Link to="/shop" className="btn-primary rounded-full px-6 py-3 text-sm md:text-base hover:shadow-[0_0_20px_rgba(200,160,90,0.4)] hover:scale-105 transition-all duration-300">
                            Explore Collection
                        </Link>
                        <Link to="/contact" className="btn-outline rounded-full px-6 py-3 text-sm md:text-base !border-white !text-white hover:!bg-white hover:!text-primary hover:scale-105 transition-all duration-300">
                            Design Your Outfit
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* About Blurb Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="mb-12"
                    >
                        <h2 className="font-heading text-4xl text-primary font-bold mb-8">The Studio Artistry</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                        <p className="text-[#5A3A31]/80 leading-relaxed text-lg font-light mb-6">
                            At Srikanakadhara Designer Studio, every design begins with a story — your story. Rooted in tradition and inspired by modern elegance, we specialize in creating timeless outfits that celebrate individuality. What started as a passion for sarees has evolved into a trusted name in designer fashion.
                        </p>
                        <p className="text-[#5A3A31]/80 leading-relaxed text-lg font-light mb-6">
                            We work with premium fabrics like organza, silk, and linen, enhanced by intricate maggam work, zardosi, and hand embroidery. Every stitch is crafted with precision, ensuring unmatched quality and a flawless finish.
                        </p>
                        <p className="text-[#5A3A31]/80 leading-relaxed text-lg font-light mb-8">
                            Our strength lies in customization — understanding your vision and bringing it to life with elegance and perfection. Because we don’t just design outfits — we design confidence, grace, and unforgettable moments.
                        </p>
                        <Link to="/about" className="text-primary uppercase text-sm tracking-widest font-medium border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
                            Read Our Full Story
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-[#F5EBE1]">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={revealVariants}
                        className="text-center mb-16"
                    >
                        <h2 className="font-heading text-4xl text-primary font-bold uppercase tracking-wider mb-4">Our Services</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                        <p className="text-[#5A3A31]/80 text-sm tracking-widest uppercase">All Types of Stitching Available</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Designer Sarees', img: '/images/designer_saree_1773968888726.png' },
                            { title: 'Customized Outfits', img: '/images/customized_outfit_1773968953402.png' },
                            { title: 'Blouse Designing', img: '/images/blouse_design_1773968973750.png', subtitle: 'Trendy & Traditional' },
                            { title: 'Lehengas & Frocks', img: '/images/lehenga_frock_1773968904795.png' },
                            { title: 'Maggam Work', img: '/images/maggam_work_1773968935823.png', subtitle: '& Embroidery' },
                            { title: 'Bridal & Occasion Wear', img: '/images/bridal_wear_1773968919046.png' },
                        ].map((srv, index) => (
                            <motion.div
                                key={srv.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.15 } }
                                }}
                                className="relative h-[400px] group overflow-hidden shadow-lg bg-background flex items-center justify-center cursor-pointer"
                            >
                                <img
                                    src={srv.img}
                                    alt={`Woman wearing ${srv.title}`}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-90 transition-opacity duration-500" />
                                <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                                    <h3 className="text-white font-heading text-2xl tracking-wide mb-1 drop-shadow-md">{srv.title}</h3>
                                    {srv.subtitle && <p className="text-secondary text-xs uppercase tracking-widest drop-shadow-md">{srv.subtitle}</p>}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-block border border-secondary px-8 py-4 bg-background">
                            <p className="text-primary font-medium tracking-wide">
                                <span className="text-secondary">✦</span> Urgent Orders Accepted <span className="text-xs uppercase text-[#5A3A31]/60 tracking-widest ml-2">(Priority Charges Apply)</span> <span className="text-secondary">✦</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us & Process */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Why Choose Us */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={revealVariants}
                        >
                            <h2 className="font-heading text-4xl text-primary font-bold uppercase tracking-wider mb-4">Why Choose Us</h2>
                            <div className="w-24 h-1 bg-secondary block mb-10"></div>

                            <ul className="space-y-6">
                                {[
                                    'Personalized Designs tailored to your vision',
                                    'Premium Fabric Selection strictly curated',
                                    'Fine Handwork & Detailing by master artisans',
                                    'Perfect Fit & Finishing verified through measurements',
                                    'Trusted by Happy Customers worldwide',
                                    'On-Time Delivery guaranteed'
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="w-2 h-2 mt-2 bg-secondary rounded-full mr-4 flex-shrink-0"></div>
                                        <p className="text-[#5A3A31]/80 text-lg font-light">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Our Process */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="bg-[#F5EBE1] p-10 md:p-14 shadow-lg border border-[#5A3A31]/10"
                        >
                            <h2 className="font-heading text-3xl text-primary font-bold uppercase tracking-wider mb-4">Our Process</h2>
                            <div className="w-16 h-1 bg-secondary block mb-10"></div>

                            <div className="relative">
                                {[
                                    { step: '01', title: 'Consultation', desc: 'We understand your style and requirements' },
                                    { step: '02', title: 'Design', desc: 'We create a concept tailored to you' },
                                    { step: '03', title: 'Crafting', desc: 'Skilled artisans bring the design to life' },
                                    { step: '04', title: 'Delivery', desc: 'Perfectly finished outfit, ready for your moment' },
                                ].map((item, i) => (
                                    <div key={item.step} className="flex">
                                        <div className="flex flex-col items-center mr-6">
                                            <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-heading font-bold shadow-md">
                                                {item.step}
                                            </div>
                                            {i !== 3 && <div className="w-px h-full bg-secondary/30 my-2"></div>}
                                        </div>
                                        <div className="pb-8">
                                            <h4 className="font-heading text-xl text-primary font-bold mb-1">{item.title}</h4>
                                            <p className="text-[#5A3A31]/70 font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-[#F9F4EE] border-y border-[#5A3A31]/10">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="text-center mb-16"
                    >
                        <h2 className="font-heading text-4xl text-primary font-bold uppercase tracking-wider mb-4">Client Love</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {[
                            { text: "Absolutely loved the design and fitting. The detailing is just perfect!", author: "Sneha R." },
                            { text: "My bridal blouse turned out even better than I imagined. Highly recommended!", author: "Kavya M." },
                            { text: "Perfect finishing, on-time delivery, and very professional work.", author: "Lakshmi P." },
                        ].map((test, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.2 } }
                                }}
                                className="bg-background p-10 shadow border border-transparent hover:border-secondary transition-colors duration-500 flex flex-col justify-between"
                            >
                                <span className="text-4xl text-secondary font-heading leading-none opacity-50 mb-4">"</span>
                                <p className="text-[#5A3A31]/80 italic font-light mb-8 flex-grow">{test.text}</p>
                                <span className="text-primary font-heading font-medium tracking-wide block">— {test.author}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-background text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/blouse_design_1773968973750.png')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>

                <div className="container mx-auto px-6 max-w-3xl relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">Let's Create Something Beautiful Together</h2>
                        <div className="w-24 h-[1px] bg-secondary mx-auto mb-8"></div>
                        <p className="text-[#FAF5F0]/80 text-lg md:text-xl font-light mb-12">
                            Have a design in mind? We're here to bring it to life.<br />
                            Book your custom outfit today and experience true elegance.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link to="/contact" className="bg-secondary text-white px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-primary transition-all duration-300 shadow-xl hover:-translate-y-1">
                                Book Now
                            </Link>
                            <Link to="/contact" className="border border-secondary text-secondary px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
