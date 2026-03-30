import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/Button';
import { User, Lock, Mail, ChevronLeft, ArrowRight, AlertCircle } from 'lucide-react';
import { authDB } from '../utils/authDB';

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Validation
            if (!formData.fullName || !formData.email || !formData.password) {
                setError('Please fill in all fields');
                setLoading(false);
                return;
            }

            // Simulate network delay
            setTimeout(() => {
                try {
                    authDB.register(formData);
                    // Automatically login
                    authDB.setSession({ email: formData.email });

                    setLoading(false);
                    navigate('/analysis');
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                }
            }, 1000);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <Layout className="flex items-center justify-center p-6 bg-slate-900 relative" centered>


            <div className="w-full max-w-lg space-y-8 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl p-10 relative z-10">
                <button
                    onClick={() => navigate('/', { state: { skipSplash: true } })}
                    className="flex items-center text-slate-400 hover:text-white transition-colors group text-lg"
                >
                    <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>

                <div className="space-y-5">
                    <h1 className="text-5xl text-center font-bold text-white"> Create <span className="text-blue-500">Account</span></h1>
                    <p className="text-slate-400 text-center text-xl">Join Cut & Go for a personalized experience.</p>
                </div>

                {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
                        <AlertCircle className="w-5 h-5" />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-4">
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                            <input
                                name="fullName"
                                type="text"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-12 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-lg"
                                required
                            />
                        </div>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-12 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-lg"
                                required
                            />
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-12 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-lg"
                                required
                            />
                        </div>
                    </div>

                    <Button
                        variant="primary"
                        className="w-full h-14 text-lg font-semibold shadow-lg shadow-blue-500/20"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
                        {!loading && <ArrowRight className="w-5 h-5 ml-2" />}
                    </Button>
                </form>

                <p className="text-center text-slate-500 text-base">
                    Already have an account? <button onClick={() => navigate('/login')} className="text-blue-400 font-medium hover:text-blue-300 hover:underline transition-colors">Sign In</button>
                </p>
            </div>
        </Layout>
    );
}
