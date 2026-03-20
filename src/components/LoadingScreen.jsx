import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="mb-8"
                >
                    <img src="/logo.png" alt="Loading Srikanakadhara Designer Studio..." className="h-24 w-auto object-contain mix-blend-multiply" />
                </motion.div>
                <div className="mt-4 w-48 h-[1px] bg-secondary/30 relative overflow-hidden">
                    <motion.div 
                        className="absolute inset-y-0 left-0 bg-secondary"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
