import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/Button';
import { Star, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Feedback() {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        // In real app, submit feedback
        navigate('/');
    };

    return (
        <Layout className="flex items-center justify-center p-6" centered>
            <div className="max-w-lg w-full text-center space-y-8">

                <div className="space-y-4">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-28 h-28 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <ThumbsUp className="w-14 h-14 text-green-500" />
                    </motion.div>
                    <h1 className="text-5xl font-bold text-white">All Done!</h1>
                    <p className="text-slate-400 text-lg">Your cut is complete. You look great.</p>
                </div>

                <div className="bg-slate-800 rounded-3xl p-6 space-y-4">
                    <h3 className="text-xl font-medium text-white">How was your experience?</h3>

                    <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => setRating(star)}
                                className="transition-transform hover:scale-110 focus:outline-none"
                            >
                                <Star
                                    className={`w-12 h-12 ${rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`}
                                />
                            </button>
                        ))}
                    </div>

                    <textarea
                        placeholder="Optional comment..."
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none h-24"
                    />
                </div>

                <div className="space-y-4">
                    <Button variant="primary" onClick={handleSubmit} className="w-full h-14 text-lg font-semibold">
                        Submit Feedback
                    </Button>
                    <button
                        onClick={() => navigate('/')}
                        className="text-slate-500 hover:text-white transition"
                    >
                        Skip
                    </button>
                </div>

            </div>
        </Layout>
    );
}
