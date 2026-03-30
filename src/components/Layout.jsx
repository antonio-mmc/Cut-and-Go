import { motion } from 'framer-motion';
import logoIcon from '../assets/logo_icon.png';

export function Layout({ children, className = "", centered = false, hideLogo = false }) {
    return (
        <div className={`min-h-screen bg-slate-900 text-white overflow-hidden relative ${className}`}>
            {/* Background Ambience - Simplified and Clean */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Primary orbs with high blur for smooth blending */}
                <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-blue-600/15 blur-[150px] rounded-full" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[75%] h-[75%] bg-indigo-600/10 blur-[130px] rounded-full" />
            </div>

            {/* Global Logo - Absolute Top (Z-Index 9999) */}
            {!hideLogo && (
                <div className="fixed top-4 right-4 z-[9999] pointer-events-none select-none">
                    <img
                        src={logoIcon}
                        alt="Cut & Go Logo"
                        className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] opacity-95"
                    />
                </div>
            )}

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`relative z-10 w-full h-full flex flex-col ${centered ? 'items-center justify-center' : ''}`}
            >
                {children}
            </motion.div>
        </div>
    );
}
