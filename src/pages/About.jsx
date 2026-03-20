import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="w-full bg-background">
            {/* Elegant Header */}
            <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary/95 flex items-center justify-center z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center px-6"
                    >
                        <span className="text-secondary tracking-[0.3em] uppercase text-xs mb-6 block">The Heritage</span>
                        <h1 className="font-heading text-5xl md:text-7xl text-white mb-6">Our Story</h1>
                        <div className="w-24 h-[1px] bg-secondary mx-auto"></div>
                    </motion.div>
                </div>
                {/* Background image subtle */}
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/hero_saree_1773968871592.png')] bg-cover bg-fixed"></div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-heading text-3xl text-primary mb-8 leading-tight">Preserving the Art of Six Yards</h2>
                        <p className="text-[#5A3A31]/80 mb-6 leading-relaxed text-lg font-light">
                            At Srikanakadhara Designer Studio, every design begins with a story — your story. Rooted in tradition and inspired by modern elegance, we specialize in creating timeless outfits that celebrate individuality. What started as a passion for sarees has evolved into a trusted name in designer fashion.
                        </p>
                        <p className="text-[#5A3A31]/80 mb-6 leading-relaxed text-lg font-light">
                            We work with premium fabrics like organza, silk, and linen, enhanced by intricate maggam work, zardosi, and hand embroidery. Every stitch is crafted with precision, ensuring unmatched quality and a flawless finish.
                        </p>
                        <p className="text-[#5A3A31]/80 leading-relaxed text-lg font-light">
                            Our strength lies in customization — understanding your vision and bringing it to life with elegance and perfection. Because we don’t just design outfits — we design confidence, grace, and unforgettable moments.
                        </p>
                    </motion.div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="aspect-[4/5] bg-[#F5EBE1] overflow-hidden"
                        >
                            <img src="/images/lehenga_frock_1773968904795.png" alt="Weaving Process" loading="lazy" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="aspect-[4/5] bg-[#F5EBE1] overflow-hidden mt-0 md:mt-16"
                        >
                            <img src="/images/maggam_work_1773968935823.png" alt="Saree Detail" loading="lazy" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
