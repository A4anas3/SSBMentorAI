import { useState } from "react";
import { Button } from "@/components/ui/button";
import { login, signup } from "@/lib/authApi";

/**
 * Auth Modal - Redirects to Keycloak for authentication
 * Keycloak handles:
 * - Email/Password login
 * - Google OAuth
 * - Email verification
 * - User registration
 */
const Auth = ({ initialMode = "login", onClose }) => {
  const [mode, setMode] = useState(initialMode);

  // 🔐 Redirect to Keycloak login page
  const handleLogin = async () => {
    await login(); // Redirects to Keycloak with PKCE
  };

  // 🆕 Redirect to Keycloak registration page
  const handleSignup = async () => {
    await signup(); // Redirects to Keycloak with PKCE
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md p-8 bg-white rounded-2xl 
        shadow-xl border border-yellow-200 space-y-6"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-yellow-600 mb-1">
            SSB Preparation Platform
          </p>

          <h2 className="text-3xl font-semibold text-gray-900">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h2>

          <div className="mt-2 h-1 w-12 mx-auto bg-yellow-400 rounded-full"></div>

          <p className="text-sm text-gray-600 mt-3">
            {mode === "login"
              ? "Login to continue your preparation"
              : "Join us and start your SSB journey"}
          </p>
        </div>

        {/* Info Box */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            {mode === "login" ? (
              <>
                You'll be redirected to our secure login page where you can:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Login with Email & Password</li>
                  <li>Login with Google</li>
                </ul>
              </>
            ) : (
              <>
                You'll be redirected to our registration page where you can:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Sign up with Email (verification required)</li>
                  <li>Sign up with Google</li>
                </ul>
              </>
            )}
          </p>
        </div>

        {/* Action Button */}
        <Button
          onClick={mode === "login" ? handleLogin : handleSignup}
          className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium"
        >
          {mode === "login" ? "Continue to Login" : "Continue to Sign Up"}
        </Button>

        {/* Toggle Mode */}
        <p className="text-sm text-center text-gray-600">
          {mode === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="text-yellow-600 font-medium hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="text-yellow-600 font-medium hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
