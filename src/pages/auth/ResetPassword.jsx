import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Lock, CheckCircle, Home, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/AuthContext";

export default function ResetPassword() {
    const { user, loading: authLoading } = useAuth();
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [verifying, setVerifying] = useState(true);

    const navigate = useNavigate();
    const { toast } = useToast();

    useEffect(() => {
        // If we have a user (from context), verification is done
        if (user) {
            setVerifying(false);
            return;
        }

        // If context is done loading and no user, try to exchange code manually
        // (This handles cases where AuthContext might have missed the initial hash or it's a specific recovery flow)
        const handleRecovery = async () => {
            // Check if we have a hash/code in URL
            const hash = window.location.hash;
            const query = window.location.search;

            if (!hash && !query && !user && !authLoading) {
                // No code, no user -> probably just visited the page directly
                // But we'll wait a bit just in case
                return;
            }

            try {
                const { data, error } = await supabase.auth.exchangeCodeForSession(
                    window.location.href
                );

                if (error) {
                    // Only show error if we really don't have a user after a delay
                    console.error("Link invalid or expired", error);
                    if (!user) {
                        toast({
                            variant: "destructive",
                            title: "Link Expired or Invalid",
                            description: "This password reset link is invalid or has expired.",
                        });
                    }
                } else {
                    console.log("Session established explicitly");
                }
            } catch (err) {
                console.error(err);
            } finally {
                setVerifying(false);
            }
        };

        if (!authLoading) {
            handleRecovery();
        }
    }, [user, authLoading, toast]);

    const handleUpdate = async () => {
        if (!password) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please enter a new password",
            });
            return;
        }

        if (!user) {
            toast({
                variant: "destructive",
                title: "Session Error",
                description: "Session not active. Please click the email link again.",
            });
            return;
        }

        setLoading(true);
        const { error } = await supabase.auth.updateUser({
            password: password,
        });
        setLoading(false);

        if (error) {
            toast({
                variant: "destructive",
                title: "Error",
                description: error.message,
            });
        } else {
            setSuccess(true);
            toast({
                title: "Success",
                description: "Password updated successfully",
            });
        }
    };

    if (authLoading || (verifying && !user)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background px-4">
                <div className="text-center">
                    <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Verifying secure link...</p>
                </div>
            </div>
        );
    }

    // If verification done and still no user, show invalid link state
    if (!user && !verifying) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background px-4">
                <div className="max-w-md w-full bg-card border p-8 rounded-2xl shadow-2xl text-center">
                    <div className="text-red-500 mb-4 text-5xl">⚠️</div>
                    <h2 className="text-2xl font-bold mb-2">Invalid Link</h2>
                    <p className="text-muted-foreground mb-6">This password reset link is invalid or has expired.</p>
                    <button onClick={() => navigate("/")} className="text-primary hover:underline">
                        Go to Home
                    </button>
                </div>
            </div>
        );
    }

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background px-4">
                <div className="max-w-md w-full bg-card border p-8 rounded-2xl shadow-2xl text-center">
                    <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
                        <CheckCircle className="relative w-16 h-16 text-green-500 mx-auto" />
                    </div>

                    <h1 className="text-3xl font-bold mb-3 font-display">
                        Password Updated!
                    </h1>

                    <p className="text-muted-foreground mb-8 text-lg">
                        Your password has been successfully updated. <br />
                        You can now log in with your new password.
                    </p>

                    <button
                        onClick={() => navigate("/")}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-xl shadow-lg shadow-yellow-400/40 hover:shadow-yellow-500/60 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <Home size={18} />
                        Go to Website
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-md w-full bg-card border border-border p-8 rounded-2xl shadow-2xl text-center">
                <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full"></div>
                    <Lock className="relative w-16 h-16 text-yellow-400 mx-auto" />
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-3 font-display">
                    Set New Password
                </h2>

                <p className="text-muted-foreground mb-8 text-lg">
                    Enter your new password below.
                </p>

                <div className="space-y-4 text-left">
                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-xl bg-background border border-input focus:border-yellow-400 outline-none transition-all"
                    />

                    <button
                        onClick={handleUpdate}
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-bold py-3 px-6 rounded-xl shadow-[0_0_25px_rgba(251,191,36,0.5)] hover:shadow-[0_0_35px_rgba(251,191,36,0.7)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Updating..." : "Update Password"}
                    </button>
                </div>
            </div>
        </div>
    );
}
