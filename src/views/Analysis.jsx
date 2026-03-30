import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '../components/Layout';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Scan, Brain, Sparkles, AlertCircle } from 'lucide-react';

const ANALYSIS_STEPS = [
    { message: "Scanning head structure in 360°...", duration: 1500, icon: Scan },
    { message: "Analyzing hair density and texture...", duration: 1200, icon: Sparkles },
    { message: "Evaluating growth direction...", duration: 1000, icon: Brain },
    { message: "Identifying sensitive zones...", duration: 800, icon: AlertCircle },
];

export default function Analysis() {
    const navigate = useNavigate();
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let totalDuration = ANALYSIS_STEPS.reduce((acc, step) => acc + step.duration, 0);
        let elapsed = 0;

        // Global progress timer
        const progressInterval = setInterval(() => {
            elapsed += 100;
            const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                clearInterval(progressInterval);
                setTimeout(() => navigate('/selection'), 1000);
            }
        }, 100);

        // Step switcher
        let stepTimeout;
        const runStep = (index) => {
            if (index >= ANALYSIS_STEPS.length) return;

            stepTimeout = setTimeout(() => {
                setCurrentStepIndex(prev => prev + 1);
                runStep(index + 1);
            }, ANALYSIS_STEPS[index].duration);
        };

        runStep(0);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(stepTimeout);
        };
    }, [navigate]);

    const currentStep = ANALYSIS_STEPS[Math.min(currentStepIndex, ANALYSIS_STEPS.length - 1)];
    const StepIcon = currentStep.icon;

    return (
        <Layout className="flex items-center justify-center p-8" centered>
            <div className="w-full max-w-2xl space-y-16 text-center">

                {/* Dynamic 360 Visual */}
                <div className="relative w-80 h-80 mx-auto">
                    <motion.div
                        className="absolute inset-0 rounded-full border-[6px] border-blue-500/30 border-t-blue-500"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute inset-6 rounded-full border-[3px] border-indigo-500/20 border-b-indigo-400"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStepIndex}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="bg-slate-800 p-8 rounded-full shadow-2xl shadow-blue-500/20"
                            >
                                <StepIcon className="w-24 h-24 text-blue-400" />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Text & Progress */}
                <div className="space-y-8">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={currentStepIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-3xl font-light text-slate-200"
                        >
                            {currentStep.message}
                        </motion.h2>
                    </AnimatePresence>

                    <div className="space-y-3">
                        <ProgressBar progress={progress} className="h-4" /> {/* Assuming ProgressBar accepts className or style, checking simple props usage first */}
                        <div className="flex justify-between text-sm text-slate-500 uppercase tracking-widest font-mono">
                            <span>System Active</span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}
