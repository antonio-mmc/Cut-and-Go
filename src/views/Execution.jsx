import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Scissors, Youtube, Music, Tv, Chrome, PlayCircle, Radio, Pause, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProgressBar } from '../components/ui/ProgressBar';

export default function Execution() {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [activeApp, setActiveApp] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval);
                    setTimeout(() => navigate('/feedback'), 1000);
                    return 100;
                }
                return p + 2.5; // Faster progress
            });
        }, 100);
        return () => clearInterval(interval);
    }, [navigate, isPaused]);

    const apps = [
        { id: 'youtube', icon: Youtube, color: 'from-red-500 to-red-600', name: 'YouTube', bgColor: 'bg-red-500/10' },
        { id: 'netflix', icon: Tv, color: 'from-red-600 to-red-700', name: 'Netflix', bgColor: 'bg-red-600/10' },
        { id: 'spotify', icon: Music, color: 'from-green-500 to-green-600', name: 'Spotify', bgColor: 'bg-green-500/10' },
        { id: 'twitch', icon: PlayCircle, color: 'from-purple-500 to-purple-600', name: 'Twitch', bgColor: 'bg-purple-500/10' },
        { id: 'podcast', icon: Radio, color: 'from-orange-500 to-orange-600', name: 'Podcast', bgColor: 'bg-orange-500/10' },
        { id: 'browser', icon: Chrome, color: 'from-blue-500 to-blue-600', name: 'Browser', bgColor: 'bg-blue-500/10' },
    ];

    return (
        <Layout className="flex h-screen overflow-hidden" hideLogo>
            {/* Control Button - Top Left */}
            <div className="absolute top-6 left-6 z-[10000]">
                <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white font-semibold hover:bg-white/20 transition-all active:scale-95 shadow-xl"
                >
                    {isPaused ? (
                        <>
                            <Play className="w-5 h-5 fill-current" />
                            <span>Continue</span>
                        </>
                    ) : (
                        <>
                            <Pause className="w-5 h-5 fill-current" />
                            <span>Stop</span>
                        </>
                    )}
                </button>
            </div>

            <div className="flex w-full h-full">

                {/* Left Side - Haircut Monitor */}
                <div className="w-2/5 bg-slate-900 border-r border-slate-800 flex flex-col p-8">
                    <div className="flex-1 flex flex-col items-center justify-center space-y-8">

                        {/* Status Icon */}
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Scissors className={`w-16 h-16 text-blue-400 ${isPaused ? '' : 'animate-pulse'}`} />
                            </div>
                        </div>

                        {/* Title */}
                        <div className="text-center space-y-3">
                            <h1 className="text-4xl font-bold text-white">
                                {progress < 100 ? 'Haircut in Progress' : 'Cut Complete!'}
                            </h1>
                            <p className="text-slate-400 text-lg">
                                Precision styling active. Sit back and relax.
                            </p>
                        </div>

                        {/* Progress Section */}
                        <div className="w-full max-w-md space-y-4">
                            <ProgressBar progress={progress} />
                            <div className="flex justify-between text-sm text-slate-400 font-mono">
                                <span>{Math.round(progress)}% Complete</span>
                                <span>{(5 - (progress / 20)).toFixed(1)} min remaining</span>
                            </div>
                        </div>

                        {/* Live Feed Placeholder */}
                        <div className="w-full max-w-md h-72 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="w-20 h-20 bg-slate-700 rounded-full mx-auto flex items-center justify-center">
                                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                                </div>
                                <p className="text-slate-500 text-xl">Live Camera Feed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Entertainment Apps */}
                <div className="flex-1 bg-slate-950 p-4 overflow-y-auto">
                    <div className={`max-w-4xl mx-auto ${activeApp ? 'space-y-4' : 'space-y-6'}`}>

                        <div className="text-center space-y-4">
                            <h2 className={`font-bold text-white tracking-tight transition-all duration-700 ease-spring ${activeApp ? 'text-4xl' : 'text-5xl'}`}>Entertainment</h2>
                            <p className={`text-slate-400 font-light transition-all duration-700 ease-spring ${activeApp ? 'text-base' : 'text-lg'}`}>Choose something to watch while we work</p>
                        </div>

                        {/* Apps Grid */}
                        <div className={`grid grid-cols-2 md:grid-cols-3 ${activeApp ? 'gap-3' : 'gap-6'}`}>
                            {apps.map((app) => (
                                <motion.button
                                    key={app.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    layout // Add layout prop for smooth position/size changes
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    onClick={() => setActiveApp(activeApp === app.id ? null : app.id)}
                                    className={`relative rounded-3xl bg-slate-900 border-2 transition-all duration-500 ease-in-out group ${activeApp
                                        ? 'p-5'
                                        : 'p-8'
                                        } ${activeApp === app.id
                                            ? 'border-indigo-500 shadow-lg shadow-indigo-500/20'
                                            : 'border-slate-800 hover:border-slate-700'
                                        }`}
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <div className={`rounded-2xl bg-gradient-to-br ${app.color} ${app.bgColor} group-hover:scale-110 transition-transform ${activeApp ? 'p-4' : 'p-6'}`}>
                                            <app.icon className={`text-white ${activeApp ? 'w-9 h-9' : 'w-12 h-12'}`} />
                                        </div>
                                        <span className={`font-semibold text-white ${activeApp ? 'text-sm' : 'text-lg'}`}>{app.name}</span>
                                    </div>

                                    {activeApp === app.id && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-500 rounded-full"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Active App Content Area */}
                        {activeApp && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="w-full h-full min-h-[300px] flex-1 bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center p-4"
                            >
                                <div className="text-center space-y-3">
                                    <div className="w-16 h-16 bg-slate-800 rounded-full mx-auto flex items-center justify-center">
                                        <PlayCircle className="w-8 h-8 text-slate-600" />
                                    </div>
                                    <p className="text-slate-500">
                                        {apps.find(a => a.id === activeApp)?.name} content would load here
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
