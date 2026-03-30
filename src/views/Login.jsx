import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/Button';
import { Lock, Mail, ChevronLeft, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import { authDB } from '../utils/authDB';

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [resetSent, setResetSent] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Check for saved session email (not full login, just prefill)
    useEffect(() => {
        const session = authDB.getSession();
        if (session && session.email) {
            setEmail(session.email);
            setRememberMe(true);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Validation
            if (!email || !password) {
                setError('Please fill in all fields');
                setLoading(false);
                return;
            }

            setTimeout(() => {
                try {
                    const user = authDB.login(email, password);
                    if (rememberMe) {
                        authDB.setSession({ email: user.email }); // Only save email for "Remember Me"
                    } else {
                        authDB.logout();
                    }
                    setLoading(false);
                    navigate('/analysis');
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                }
            }, 800);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter your email address first.');
            return;
        }
        // Simulate email sending
        setResetSent(true);
        setError('');
        setTimeout(() => setResetSent(false), 5000);
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
                    <h1 className="text-5xl text-center font-bold text-white">Cut & <span className="text-blue-500">Go</span></h1>
                    <p className="text-slate-400 text-center text-xl">Sign in to access your saved styles and history.</p>
                </div>

                {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
                        <AlertCircle className="w-5 h-5" />
                        <span>{error}</span>
                    </div>
                )}

                {resetSent && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-400">
                        <CheckCircle className="w-5 h-5" />
                        <span>Password reset link sent to your email.</span>
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-8">
                    <div className="space-y-5">
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-12 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-lg"
                                required
                            />
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-12 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-lg"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-base">
                        <label className="flex items-center text-slate-400 hover:text-white cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="mr-2 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-offset-0 focus:ring-blue-500/50"
                            />
                            Remember me
                        </label>
                        <button type="button" onClick={handleForgotPassword} className="text-blue-400 hover:text-blue-300 transition-colors">Forgot Password?</button>
                    </div>

                    <Button
                        variant="primary"
                        className="w-full h-14 text-lg font-semibold shadow-lg shadow-blue-500/20"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                        {!loading && <ArrowRight className="w-5 h-5 ml-2" />}
                    </Button>
                </form>

                <p className="text-center text-slate-500 text-base">
                    Don't have an account? <button onClick={() => navigate('/register')} className="text-blue-400 font-medium hover:text-blue-300 hover:underline transition-colors">Sign Up</button>
                </p>
            </div>
        </Layout>
    );
}
