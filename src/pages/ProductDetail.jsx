import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Heart, Share2, Truck, ShieldCheck, Ruler } from 'lucide-react';

const galleryImages = [
    '/images/hero_saree_1773968871592.png',
    '/images/designer_saree_1773968888726.png',
    '/images/bridal_wear_1773968919046.png',
];

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="pt-28 pb-24 min-h-screen bg-background"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Breadcrumb */}
                <div className="text-xs uppercase tracking-widest text-[#5A3A31]/50 mb-8 flex space-x-2">
                    <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
                    <span>/</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">Shop</span>
                    <span>/</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">Silk</span>
                    <span>/</span>
                    <span className="text-primary font-medium">Royal Kanjivaram Silk</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Image Gallery */}
                    <div className="flex flex-col-reverse lg:flex-row gap-6 lg:h-[800px]">
                        {/* Thumbnails */}
                        <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto w-full lg:w-24 shrink-0 no-scrollbar">
                            {galleryImages.map((img, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`w-20 h-28 lg:w-full lg:h-32 shrink-0 border-2 transition-all duration-300 overflow-hidden ${activeImage === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img} alt="Thumbnail" loading="lazy" className="w-full h-full object-cover object-top" />
                                </button>
                            ))}
                        </div>
                        {/* Main Image */}
                        <div className="flex-grow bg-[#F5EBE1] relative group overflow-hidden h-[500px] lg:h-full w-full">
                            <motion.img 
                                key={activeImage}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                src={galleryImages[activeImage]} 
                                alt="Main Product" 
                                loading="lazy"
                                className="w-full h-full object-cover object-top" 
                            />
                            {/* Hover to Zoom placeholder logic usually goes here */}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center py-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-secondary tracking-[0.2em] uppercase text-xs mb-3 block font-medium">Silk Heritage</span>
                                    <h1 className="font-heading text-4xl lg:text-5xl text-primary leading-tight mb-4">Royal Kanjivaram Silk</h1>
                                </div>
                                <button className="p-3 border border-[#5A3A31]/10 rounded-full hover:bg-red-50 hover:border-red-100 hover:text-red-500 transition-colors text-[#5A3A31]/50 group">
                                    <Heart size={20} className="group-hover:fill-current" />
                                </button>
                            </div>
                            
                            <span className="text-3xl font-heading font-medium text-primary mb-6 block">₹35,000</span>
                            
                            <p className="text-[#5A3A31]/60 mb-10 leading-relaxed font-light text-sm lg:text-base">
                                A majestic drape featuring intricate zari work spanning the pallu and borders, perfect for occasions that demand sheer luxury and traditional elegance. Handwoven by master artisans over 45 days, this piece embodies the pinnacle of Indian craftsmanship.
                            </p>

                            <div className="border-t border-b border-zinc-100 py-8 mb-10 space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm uppercase tracking-wider text-primary">Quantity</span>
                                    <div className="flex items-center border border-[#5A3A31]/20 w-32 h-12">
                                        <button 
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-10 h-full flex items-center justify-center text-[#5A3A31]/60 hover:text-primary hover:bg-[#F9F4EE] transition-colors"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="flex-1 text-center font-medium text-primary">{quantity}</span>
                                        <button 
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-10 h-full flex items-center justify-center text-[#5A3A31]/60 hover:text-primary hover:bg-[#F9F4EE] transition-colors"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <button className="flex-1 btn-primary tracking-[0.2em] text-sm py-4 shadow-xl">
                                    Add to Cart
                                </button>
                                <button className="flex-1 btn-outline tracking-[0.2em] text-sm py-4">
                                    Buy it Now
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-100 text-sm text-[#5A3A31]/80 font-light">
                                <div className="flex items-start">
                                    <Truck size={20} className="text-secondary mr-3 mt-1 shrink-0" strokeWidth={1.5} />
                                    <span>Complimentary global shipping on orders above ₹10,000.</span>
                                </div>
                                <div className="flex items-start">
                                    <ShieldCheck size={20} className="text-secondary mr-3 mt-1 shrink-0" strokeWidth={1.5} />
                                    <span>100% Authentic Handloom Mark certified product.</span>
                                </div>
                                <div className="flex items-start">
                                    <Ruler size={20} className="text-secondary mr-3 mt-1 shrink-0" strokeWidth={1.5} />
                                    <span>Standard saree length: 5.5 meters, Plus 1 meter unstitched blouse.</span>
                                </div>
                                <div className="flex items-start">
                                    <Share2 size={20} className="text-secondary mr-3 mt-1 shrink-0" strokeWidth={1.5} />
                                    <span className="cursor-pointer hover:text-primary hover:underline transition-colors uppercase tracking-widest text-xs mt-0.5">Share this piece</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductDetail;
