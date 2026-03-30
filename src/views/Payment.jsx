import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Smartphone, CreditCard, CheckCircle, Loader, Lock, Clock, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Payment() {
    const navigate = useNavigate();
    const location = useLocation();
    const { cutDetails } = location.state || { cutDetails: { name: 'Modern Fade', time: '5 min' } };
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

    const handlePay = () => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            setSuccess(true);
            setTimeout(() => {
                navigate('/execution');
            }, 2000);
        }, 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Layout className="h-screen overflow-hidden flex items-center justify-center p-8" centered>
            <div className="max-w-5xl w-full">
                <AnimatePresence mode="wait">
                    {!success ? (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="space-y-10"
                        >
                            {/* Header Section */}
                            <motion.div variants={itemVariants} className="text-center space-y-6">
                                <h1 className="text-8xl font-black text-white tracking-tighter">Checkout</h1>
                                <p className="text-slate-400 text-2xl font-light tracking-wide">Almost there! Complete your secure payment.</p>
                            </motion.div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                {/* Order Summary Card - Scaled Up */}
                                <motion.div variants={itemVariants} className="bg-slate-900/50 backdrop-blur-xl rounded-[3rem] p-10 border border-white/5 space-y-8 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-blue-500/20 transition-colors" />

                                    <div className="flex items-center gap-4 text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase">
                                        <Scissors className="w-5 h-5" />
                                        Order Summary
                                    </div>

                                    <div className="flex items-center gap-8">
                                        <div className="w-28 h-28 rounded-3xl bg-slate-800 overflow-hidden border border-white/10 shrink-0 shadow-xl">
                                            <img src={cutDetails?.image} alt={cutDetails?.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-bold text-white tracking-tight">{cutDetails?.name}</h3>
                                            <div className="flex items-center text-slate-400 text-lg gap-2">
                                                <Clock className="w-5 h-5 text-indigo-500/50" />
                                                {cutDetails?.time} Premium Service
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-white/5 space-y-4">
                                        <div className="flex justify-between text-slate-400 text-lg">
                                            <span>Subtotal</span>
                                            <span className="font-mono">€2.50</span>
                                        </div>
                                        <div className="flex justify-between text-slate-400 text-lg">
                                            <span>Service Fee</span>
                                            <span className="font-mono">€0.00</span>
                                        </div>
                                        <div className="flex justify-between items-center text-white pt-6">
                                            <span className="text-xl font-bold">Total Amount</span>
                                            <span className="text-5xl font-black bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">€2.50</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Payment Methods - Scaled Up */}
                                <motion.div variants={itemVariants} className="space-y-6">
                                    <p className="text-slate-500 text-center text-xl font-bold uppercase tracking-widest pl-4">Choose Payment Method</p>

                                    <button
                                        onClick={handlePay}
                                        disabled={processing}
                                        className="w-full bg-slate-900/40 hover:bg-slate-800/60 backdrop-blur-md border border-white/5 hover:border-blue-500/30 p-8 rounded-3xl flex items-center gap-6 transition-all group relative overflow-hidden"
                                    >
                                        <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
                                            <Smartphone className="w-8 h-8" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <div className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">MB Way</div>
                                            <div className="text-slate-500 text-lg font-light">Fast & Secure via mobile</div>
                                        </div>
                                    </button>

                                    <button
                                        onClick={handlePay}
                                        disabled={processing}
                                        className="w-full bg-slate-900/40 hover:bg-slate-800/60 backdrop-blur-md border border-white/5 hover:border-indigo-500/30 p-8 rounded-3xl flex items-center gap-6 transition-all group relative overflow-hidden"
                                    >
                                        <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-inner">
                                            <CreditCard className="w-8 h-8" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <div className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">Card Payment</div>
                                            <div className="text-slate-500 text-lg font-light">Visa, Mastercard, Apple Pay</div>
                                        </div>
                                    </button>

                                    <div className="flex items-center justify-center gap-3 p-4 border border-white/5 rounded-2xl bg-white/5">
                                        <Lock className="w-4 h-4 text-emerald-400" />
                                        <span className="text-xs uppercase font-bold tracking-widest text-slate-400">Encrypted 512-bit Security Layer</span>
                                    </div>

                                    {processing && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex justify-center items-center gap-4 text-blue-400 text-lg font-medium pt-2"
                                        >
                                            <Loader className="w-6 h-6 animate-spin" /> Verifying transaction...
                                        </motion.div>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-6"
                        >
                            <div className="w-64 h-64 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle className="w-32 h-32 text-emerald-500" />
                            </div>
                            <div className="space-y-12">
                                <h2 className="text-6xl font-black text-white">Payment Confirmed!</h2>
                                <p className="text-2xl text-slate-400 font-light">Your session is ready. Starting systems...</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Layout>
    );
}
