import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Clock, Info } from 'lucide-react';
import { motion } from 'framer-motion';

import buzzImg from '../assets/buzz_cut.png';
import crewImg from '../assets/crew_cut.png';
import lowFadeImg from '../assets/low_fade.png';
import highFadeImg from '../assets/high_fade.png';
import caesarImg from '../assets/caesar_cut.png';
import texturedImg from '../assets/textured_crop.png';

const FEASIBLE_CUTS = [
    { id: 'buzz', name: 'Buzz Cut', time: '5 min', desc: 'Uniform length, extremely low maintenance.', image: buzzImg },
    { id: 'crew', name: 'Crew Cut', time: '5 min', desc: 'Short on sides, slightly longer on top.', image: crewImg },
    { id: 'fade-low', name: 'Low Fade', time: '5 min', desc: 'Gradual fade starting lower near ears.', image: lowFadeImg },
    { id: 'fade-high', name: 'High Fade', time: '5 min', desc: 'High contrast fade for a sharp look.', image: highFadeImg },
    { id: 'caesar', name: 'Caesar Cut', time: '5 min', desc: 'Short, horizontally straight cut bangs.', image: caesarImg },
    { id: 'textured', name: 'Textured Crop', time: '5 min', desc: 'Choppy layers for added volume.', image: texturedImg },
];

export default function ManualSelection() {
    const navigate = useNavigate();

    const handleSelect = (cut) => {
        navigate('/simulation', { state: { cutId: cut.id, mode: 'manual', cutDetails: cut } });
    };

    return (
        <Layout className="h-screen overflow-hidden flex flex-col p-6 pb-2" centered={false}>
            <div className="flex items-center gap-6 mb-8">
                <button
                    onClick={() => navigate('/selection')}
                    className="p-3 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-all transform hover:scale-110 active:scale-95 group"
                >
                    <ArrowLeft className="w-16 h-16" />
                </button>
                <div className="flex-1">
                    <h1 className="text-6xl text-center font-bold text-white tracking-tight"> Select <span className="text-blue-500">Your Style</span></h1>
                    <div className="h-6" />
                    <p className="text-slate-400 text-center text-xl font-light">Only styles feasible for your hair profile are shown.</p>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden mb-6">
                {FEASIBLE_CUTS.map((cut) => (
                    <motion.div
                        key={cut.id}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="bg-slate-900/40 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-blue-500/50 transition-all group flex flex-col h-full"
                        onClick={() => handleSelect(cut)}
                    >
                        {/* Style Preview Image - Balanced Area */}
                        <div className="relative h-52 bg-slate-950 flex items-center justify-center overflow-hidden">
                            <img
                                src={cut.image}
                                alt={cut.name}
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                            <div className="absolute top-4 right-4 flex items-center text-[10px] text-white bg-blue-600/90 backdrop-blur-md px-2 py-1 rounded-full border border-white/10 uppercase font-black tracking-widest shadow-lg">
                                <Clock className="w-3 h-3 mr-1" />
                                {cut.time}
                            </div>
                        </div>

                        {/* Text Content - More spacious and larger fonts */}
                        <div className="px-5 py-4 bg-slate-900/80 border-t border-white/5 flex-1 flex flex-col justify-center">
                            <h3 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors leading-tight mb-2">{cut.name}</h3>
                            <p className="text-sm text-slate-400 line-clamp-1 font-medium">{cut.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Layout>
    );
}
