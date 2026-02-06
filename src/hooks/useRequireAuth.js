import { useAuth } from "@/lib/AuthContext";

/**
 * Hook to require authentication before proceeding with an action
 * 
 * Usage:
 * ```jsx
 * const requireAuth = useRequireAuth();
 * 
 * const handleProtectedAction = () => {
 *   if (!requireAuth()) return; // Shows login modal if not authenticated
 *   
 *   // Proceed with protected action
 *   doSomething();
 * };
 * ```
 */
export const useRequireAuth = () => {
    const { isAuthenticated, setRequireLogin } = useAuth();

    /**
     * Check if user is authenticated. If not, trigger login modal.
     * @returns {boolean} true if authenticated, false if not (and login modal will show)
     */
    const requireAuth = () => {
        if (!isAuthenticated) {
            setRequireLogin(true);
            return false;
        }
        return true;
    };

    return requireAuth;
};
