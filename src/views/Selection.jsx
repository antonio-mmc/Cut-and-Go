import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/Button';
import { Sparkles, Grid } from 'lucide-react';
import { motion } from 'framer-motion';
import modernFadeImg from '../assets/modernfade.png';

export default function Selection() {
    const navigate = useNavigate();

    const handleChoice = (type) => {
        if (type === 'recommended') {
            // Pass a "recommended" cut ID state or param
            navigate('/simulation', {
                state: {
                    cutId: 'recommended-1',
                    mode: 'recommended',
                    cutDetails: {
                        name: 'Modern Fade',
                        time: '5 min',
                        image: modernFadeImg,
                        desc: 'A classic taper that fades into the skin. sharp, clean, and professional. Perfectly adapted to your head shape.'
                    }
                }
            });
        } else {
            navigate('/manual');
        }
    };

    return (
        <Layout className="flex items-center justify-center p-8" centered>
            <div className="max-w-6xl w-full text-center space-y-16">

                <div className="space-y-6">
                    <h1 className="text-7xl text-center font-bold text-white"> Analysis <span className="text-blue-500">Complete</span></h1>
                    <p className="text-slate-300 text-2xl max-w-3xl mx-auto font-light">
                        Based on your hair density, growth patterns, and head shape, we have curated the perfect style for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Option 1: AI Recommendation */}
                    <motion.button
                        whileHover={{ scale: 1.03, borderColor: '#6366f1' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleChoice('recommended')}
                        className="flex flex-col items-center justify-center p-16 bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 rounded-[2rem] hover:bg-slate-800 transition-all group relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-5">
                            <span className="bg-indigo-500 text-white text-sm font-bold px-4 py-2 rounded-full tracking-wider">98% MATCH</span>
                        </div>
                        <div className="p-8 rounded-full bg-indigo-500/20 mb-8 group-hover:bg-indigo-500/30 transition-colors shadow-lg shadow-indigo-500/20">
                            <Sparkles className="w-20 h-20 text-indigo-400" />
                        </div>
                        <h3 className="text-4xl font-semibold text-white mb-4">System Recommendation</h3>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                            The "Modern Fade" - Optimized for your face shape and hair density.
                        </p>
                    </motion.button>

                    {/* Option 2: Manual Selection */}
                    <motion.button
                        whileHover={{ scale: 1.03, borderColor: '#94a3b8' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleChoice('manual')}
                        className="flex flex-col items-center justify-center p-16 bg-slate-900/60 border border-slate-700/50 rounded-[2rem] hover:bg-slate-800 transition-all group shadow-2xl"
                    >
                        <div className="p-8 rounded-full bg-slate-800 mb-8 group-hover:bg-slate-700 transition-colors shadow-lg">
                            <Grid className="w-20 h-20 text-slate-400" />
                        </div>
                        <h3 className="text-4xl font-semibold text-white mb-4">Choose Manually</h3>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                            Browse from 12 styles that are technically feasible for your profile.
                        </p>
                    </motion.button>
                </div>

            </div>
        </Layout>
    );
}
