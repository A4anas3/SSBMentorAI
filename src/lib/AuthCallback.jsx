import { useEffect, useRef } from "react";
import { exchangeCodeForToken } from "@/lib/authApi";

const AuthCallback = () => {
  const ranOnce = useRef(false);

  useEffect(() => {
    // Prevent double execution in React Strict Mode
    if (ranOnce.current) return;
    ranOnce.current = true;

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");

    // Debug: Check return URL
    const returnUrl = localStorage.getItem("return_url");
    console.log("[AuthCallback] return_url:", returnUrl);

    if (!code) {
      window.location.href = "/";
      return;
    }

    exchangeCodeForToken(code, state)
      .then(() => {
        // 🔄 Get return URL and redirect there instead of home
        const finalUrl = returnUrl || "/";
        localStorage.removeItem("return_url");
        console.log("[AuthCallback] Redirecting to:", finalUrl);
        window.location.href = finalUrl;
      })
      .catch((err) => {
        console.error("Auth callback failed:", err.message);
        // Only redirect to home if we really failed
        // (If it was a duplicate request that failed, we might want to ignore it, 
        // but with the ref check we shouldn't get here for duplicates)
        localStorage.removeItem("return_url");
        window.location.href = "/";
      });
  }, []);

  return <p>Signing you in securely…</p>;
};

export default AuthCallback;
