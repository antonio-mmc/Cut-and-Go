import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/Button';
import { VideoBackground } from '../components/ui/VideoBackground';
import { User, UserPlus, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoFull from '../assets/logo_full.png';
import logoIcon from '../assets/logo_icon.png';

export default function Welcome() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showSplash, setShowSplash] = useState(!location.state?.skipSplash);

    const handleStart = (mode) => {
        if (mode === 'login') {
            navigate('/login');
        } else if (mode === 'register') {
            navigate('/register');
        } else {
            // Guest mode
            console.log(`Starting as ${mode}`);
            navigate('/analysis');
        }
    };

    const handleEnter = () => {
        setShowSplash(false);
    };

    return (
        <Layout className="flex items-center justify-center p-0 relative" centered hideLogo={showSplash}>

            {/* Background is persistent but covered in Splash */}


            <AnimatePresence mode="wait">

                {/* SPLASH SCREEN */}
                {showSplash ? (
                    <motion.div
                        key="splash"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
                    >
                        <VideoBackground />

                        <div className="relative z-10 flex flex-col items-center text-center space-y-8 p-6">
                            {/* 1. Title */}
                            <motion.h1
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-9xl font-bold text-white tracking-tight"
                            >
                                Cut & <span className="text-blue-500">Go</span>
                            </motion.h1>

                            {/* 2. Logo Image with Glow */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="relative w-80 h-80 flex items-center justify-center p-4"
                            >
                                {/* Decorative Glow Ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border border-blue-500/30 shadow-[0_0_100px_rgba(59,130,246,0.2)]"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Rotating Accent */}
                                <motion.div
                                    className="absolute inset-4 rounded-full border-t border-b border-blue-400/20"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />

                                <img src={logoFull} alt="Cut & Go Logo" className="w-full h-full object-contain drop-shadow-2xl relative z-10" />
                            </motion.div>

                            {/* 3. Slogan & Button Container */}
                            <div className="space-y-8 flex flex-col items-center">
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="text-xl md:text-4xl text-slate-300 font-light"
                                >
                                    O corte certo, no momento certo
                                </motion.p>

                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.0 }}
                                    onClick={handleEnter}
                                    className="group relative px-8 py-4 bg-white text-slate-900 text-lg font-bold rounded-full hover:bg-blue-50 transition-all flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)]"
                                >
                                    Start Experience
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    /* MAIN AUTH SCREEN */
                    <motion.div
                        key="auth"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full h-full flex items-center justify-center relative z-10"
                    >


                        <div className="w-full max-w-md p-8 md:p-12 space-y-10 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl mx-4">

                            <div className="text-center space-y-4">
                                <h1 className="text-3xl md:text-6xl font-bold text-white">
                                    Cut & <span className="text-blue-500">Go</span>
                                </h1>
                                <p className="text-xl text-slate-400">
                                    Ready for your perfect cut?
                                </p>
                            </div>

                            <div className="space-y-6">
                                <Button
                                    variant="primary"
                                    className="w-full h-14 text-xl font-semibold shadow-blue-500/25"
                                    onClick={() => handleStart('login')}
                                    icon={<User className="w-5 h-5" />}
                                >
                                    Sign In
                                </Button>

                                <Button
                                    variant="secondary"
                                    className="w-full h-14 text-xl font-medium"
                                    onClick={() => handleStart('register')}
                                    icon={<UserPlus className="w-5 h-5" />}
                                >
                                    Create Account
                                </Button>

                                <div className="flex items-center gap-4 py-4">
                                    <div className="h-px bg-slate-700/50 flex-1" />
                                    <span className="text-xs uppercase text-slate-500 font-medium tracking-wider whitespace-nowrap">Guest Access</span>
                                    <div className="h-px bg-slate-700/50 flex-1" />
                                </div>

                                <Button
                                    variant="ghost"
                                    className="w-full text-xl text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10"
                                    onClick={() => handleStart('guest')}
                                >
                                    Continue as Guest
                                </Button>
                            </div>

                            <footer className="text-center">
                                <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                                    By continuing, you agree to the Safety Protocols & Terms of Service.
                                </p>
                            </footer>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Layout>
    );
}
