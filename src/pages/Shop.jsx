import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const dummyProducts = [
    { id: 1, name: 'Royal Kanjivaram Silk', price: 35000, category: 'Silk', color: 'Maroon', img: '/images/hero_saree_1773968871592.png' },
    { id: 2, name: 'Chanderi Handloom', price: 8500, category: 'Cotton', color: 'Pastel Green', img: '/images/designer_saree_1773968888726.png' },
    { id: 3, name: 'Banarasi Brocade', price: 42000, category: 'Bridal', color: 'Gold', img: '/images/bridal_wear_1773968919046.png' },
    { id: 4, name: 'Organza Floral Drape', price: 12500, category: 'Designer', color: 'Soft Pink', img: '/images/lehenga_frock_1773968904795.png' },
    { id: 5, name: 'Gadwal Silk Saree', price: 18000, category: 'Silk', color: 'Deep Blue', img: '/images/customized_outfit_1773968953402.png' },
    { id: 6, name: 'Kasavu Cotton Stripe', price: 5500, category: 'Cotton', color: 'Off White', img: '/images/maggam_work_1773968935823.png' },
];

const categories = ['All', 'Silk', 'Cotton', 'Bridal', 'Designer'];

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const filteredProducts = selectedCategory === 'All' 
        ? dummyProducts 
        : dummyProducts.filter(p => p.category === selectedCategory);

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="pt-32 pb-24 min-h-screen bg-background"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl sm:text-5xl text-primary uppercase tracking-wider mb-6">Our Collection</h1>
                    <p className="text-[#5A3A31]/60 max-w-2xl mx-auto font-light text-sm sm:text-base">
                        Explore our extensive range of hand-loom sarees. Each drape tells a unique story of tradition and artistry perfectly woven by master craftsmen.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden flex justify-between items-center border-b border-[#5A3A31]/10 pb-4">
                        <span className="text-sm uppercase tracking-widest text-primary font-medium">{filteredProducts.length} Results</span>
                        <button 
                            className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <Filter size={18} />
                            <span className="text-sm uppercase tracking-widest">Filters</span>
                        </button>
                    </div>

                    {/* Sidebar / Filters */}
                    <AnimatePresence>
                        {(isFilterOpen || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
                            <motion.aside 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="lg:w-64 flex-shrink-0 lg:block overflow-hidden lg:overflow-visible"
                            >
                                <div className="space-y-10 pr-6 pl-2">
                                    {/* Category Filter */}
                                    <div>
                                        <h3 className="font-heading text-xl text-primary uppercase tracking-widest border-b border-zinc-100 pb-4 mb-6 relative">
                                            Categories
                                            <span className="absolute bottom-[-1px] left-0 w-8 h-[1px] bg-secondary"></span>
                                        </h3>
                                        <ul className="space-y-4">
                                            {categories.map(cat => (
                                                <li key={cat}>
                                                    <button 
                                                        onClick={() => setSelectedCategory(cat)}
                                                        className={`flex items-center w-full group transition-colors ${selectedCategory === cat ? 'text-primary' : 'text-[#5A3A31]/60 hover:text-primary'}`}
                                                    >
                                                        <div className={`w-4 h-4 rounded-full border mr-3 flex items-center justify-center transition-colors ${selectedCategory === cat ? 'border-primary bg-primary' : 'border-[#5A3A31]/20 group-hover:border-primary'}`}>
                                                            {selectedCategory === cat && <Check size={10} className="text-white" />}
                                                        </div>
                                                        <span className="text-sm uppercase tracking-wide">{cat}</span>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* Sort By Placeholder */}
                                    <div>
                                        <h3 className="font-heading text-xl text-primary uppercase tracking-widest border-b border-zinc-100 pb-4 mb-6 relative">
                                            Sort By
                                            <span className="absolute bottom-[-1px] left-0 w-8 h-[1px] bg-secondary"></span>
                                        </h3>
                                        <div className="relative">
                                            <select className="w-full appearance-none border border-[#5A3A31]/10 rounded-sm py-3 px-4 text-sm text-[#5A3A31]/80 focus:outline-none focus:border-primary bg-background/0 uppercase tracking-wider cursor-pointer">
                                                <option>Featured</option>
                                                <option>Price: Low to High</option>
                                                <option>Price: High to Low</option>
                                                <option>Newest Arrivals</option>
                                            </select>
                                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5A3A31]/50 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                            </motion.aside>
                        )}
                    </AnimatePresence>

                    {/* Product Grid Area */}
                    <div className="flex-grow">
                        <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-zinc-100">
                            <span className="text-sm uppercase tracking-widest text-[#5A3A31]/60">{filteredProducts.length} Products Found</span>
                        </div>

                        <motion.div 
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                        >
                            <AnimatePresence>
                                {filteredProducts.map((product) => (
                                    <motion.div 
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                        key={product.id}
                                        className="group cursor-pointer"
                                    >
                                        <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-[#F5EBE1] mb-5">
                                            <img 
                                                src={product.img} 
                                                alt={product.name} 
                                                loading="lazy"
                                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                                            />
                                            {/* Hover Action */}
                                            <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                                <div className="bg-background text-primary px-6 py-3 uppercase text-xs tracking-widest font-medium shadow-xl hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0">
                                                    View Details
                                                </div>
                                            </div>
                                        </Link>
                                        <div>
                                            <div className="flex justify-between items-start mb-1">
                                                <Link to={`/product/${product.id}`}>
                                                    <h3 className="font-heading text-lg text-primary group-hover:text-secondary transition-colors duration-300 pr-2 leading-tight">{product.name}</h3>
                                                </Link>
                                                <span className="font-heading font-semibold text-primary">₹{product.price.toLocaleString('en-IN')}</span>
                                            </div>
                                            <p className="text-[#5A3A31]/60 text-xs uppercase tracking-wider font-light">{product.color}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Shop;
