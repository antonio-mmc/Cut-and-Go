import { motion } from 'framer-motion';

export function ProgressBar({ progress }) {
    return (
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden relative">
            <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-white/10 w-full h-full animate-pulse" />
        </div>
    );
}
