import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
    // Dummy cart items for now
    const cartItems = [
        { id: 1, name: 'Kanjivaram Silk Saree', price: 25000, quantity: 1, color: 'Maroon/Gold', image: '/images/hero_saree_1773968871592.png' },
        { id: 2, name: 'Chanderi Cotton', price: 4500, quantity: 1, color: 'Mint Green', image: '/images/designer_saree_1773968888726.png' }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 cursor-pointer"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-[90%] sm:w-[400px] bg-background z-50 shadow-2xl flex flex-col"
                    >
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between p-6 border-b border-zinc-100">
                            <div className="flex items-center space-x-2">
                                <ShoppingBag size={20} className="text-primary" />
                                <h3 className="font-heading text-xl font-medium tracking-wide text-primary uppercase">Your Cart</h3>
                                <span className="bg-[#F5EBE1] text-[#5A3A31]/80 text-xs px-2 py-1 rounded-full">{cartItems.length}</span>
                            </div>
                            <button 
                                onClick={onClose}
                                className="p-2 hover:bg-[#F5EBE1] rounded-full transition-colors group"
                            >
                                <X size={20} className="text-[#5A3A31]/60 group-hover:text-primary" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-grow overflow-y-auto p-6 space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex space-x-4 border-b border-zinc-50 pb-6 group">
                                    <div className="w-20 h-28 bg-[#F5EBE1] rounded-sm overflow-hidden flex-shrink-0 relative">
                                        <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="flex flex-col flex-grow justify-between">
                                        <div>
                                            <h4 className="font-medium text-sm text-primary uppercase tracking-wide">{item.name}</h4>
                                            <p className="text-xs text-[#5A3A31]/60 mt-1">{item.color}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center border border-[#5A3A31]/10 rounded-sm">
                                                <button className="px-2 py-1 text-[#5A3A31]/60 hover:text-primary text-xs">-</button>
                                                <span className="px-2 text-xs text-primary">{item.quantity}</span>
                                                <button className="px-2 py-1 text-[#5A3A31]/60 hover:text-primary text-xs">+</button>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <span className="font-heading font-semibold text-primary">₹{item.price.toLocaleString('en-IN')}</span>
                                                <button className="text-[#5A3A31]/50 hover:text-red-500 transition-colors">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Drawer Footer */}
                        <div className="p-6 bg-[#F9F4EE] border-t border-zinc-100 shrink-0">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-sm font-medium text-[#5A3A31]/80 uppercase tracking-wider">Subtotal</span>
                                <span className="font-heading text-2xl font-semibold text-primary">₹{subtotal.toLocaleString('en-IN')}</span>
                            </div>
                            <p className="text-xs text-[#5A3A31]/60 mb-6 text-center">Shipping, taxes, and discounts calculated at checkout.</p>
                            <button className="btn-primary w-full py-4 text-sm tracking-widest uppercase mb-3">
                                Checkout
                            </button>
                            <Link to="/shop" onClick={onClose} className="block text-center text-xs uppercase tracking-widest text-[#5A3A31]/60 hover:text-primary underline-offset-4 hover:underline transition-all">
                                Continue Shopping
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
