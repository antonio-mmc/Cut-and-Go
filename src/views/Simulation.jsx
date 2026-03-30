import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Check, RotateCw, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';
import modernFadeImg from '../assets/modernfade.png';

export default function Simulation() {
    const navigate = useNavigate();
    const location = useLocation();
    const { cutId, mode, cutDetails } = location.state || { cutId: 'default', mode: 'recommended', cutDetails: { name: 'Modern Fade', time: '5 min', image: modernFadeImg } };



    return (
        <Layout>
            <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
                {/* Details Panel (Left) */}
                <div className="w-full md:w-1/3 bg-slate-900 border-r border-slate-800 p-8 flex flex-col z-20 shadow-xl relative">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-xl text-slate-400 hover:text-white transition group">
                        <ArrowLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform" /> Back
                    </button>

                    <div className="space-y-6 flex-1 flex flex-col justify-center">
                        <div>
                            <span className="text-indigo-400 text-center text-3xl font-bold tracking-wider uppercase mb-6 block">
                                {mode === 'recommended' ? 'AI Recommendation' : 'Selected Style'}
                            </span>
                            <h1 className="text-5xl text-center font-bold text-white mb-8">{cutDetails?.name || 'Modern Fade'}</h1>
                            <p className="text-slate-400 text-lg text-base leading-relaxed">
                                {cutDetails?.desc || "A classic taper that fades into the skin. sharp, clean, and professional. Perfectly adapted to your head shape."}
                            </p>
                        </div>

                        <div className="pt-6">
                            <div className="flex justify-between text-lg items-center py-6 border-t border-slate-800">
                                <span className="text-slate-400">Estimated Duration</span>
                                <span className="text-white font-mono">5 min</span>
                            </div>
                            <div className="flex justify-between text-lg items-center py-6 border-t border-slate-800">
                                <span className="text-slate-400">Precision Level</span>
                                <span className="text-white font-mono">0.01mm</span>
                            </div>
                            <div className="flex justify-between text-lg items-center py-6 border-t border-slate-800 border-b border-slate-800">
                                <span className="text-slate-400">Price</span>
                                <span className="text-2xl font-bold text-white leading-none">€2.50</span>
                            </div>
                        </div>

                        <div className="mt-auto pt-8 space-y-8">
                            <Button
                                variant="primary"
                                className="w-full h-16 text-2xl font-bold shadow-lg shadow-blue-900/40 hover:shadow-blue-900/60 transition-all transform hover:scale-[1.02]"
                                onClick={() => navigate('/payment', { state: { mode, cutDetails } })}
                            >
                                Confirm & Pay
                            </Button>
                            <p className="text-center text-slate-400">
                                Final verification step before execution.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Preview Image Area (Right) */}
                <div className="flex-1 relative bg-slate-950 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-l from-slate-900 via-transparent to-transparent z-10 pointer-events-none" />

                    <img
                        src={cutDetails?.image || modernFadeImg}
                        alt="Haircut Preview"
                        className="w-full h-full object-contain opacity-90"
                    />



                    {/* Preview Badge - Moved to top left to avoid logo overlap */}
                    <div className="absolute top-8 left-8 z-20">
                        <div className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/70 font-medium uppercase tracking-wider">
                            Preview Mode
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
