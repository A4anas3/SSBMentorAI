import { getAccessToken } from "@/lib/authApi";

/**
 * Check if current user has ADMIN role
 * 
 * ⚠️ SECURITY WARNING: This is for UI/UX purposes only!
 * Client-side role checks can be bypassed. Always verify permissions on the backend.
 * Never use this to protect sensitive data or operations.
 */
export const isAdmin = () => {
  const token = getAccessToken();
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.realm_access?.roles?.includes("ADMIN") || false;
  } catch (error) {
    console.warn("Failed to check admin role:", error);
    return false;
  }
};

/**
 * Get all roles of current user
 * 
 * ⚠️ SECURITY WARNING: Client-side role retrieval is for display purposes only.
 */
export const getUserRoles = () => {
  const token = getAccessToken();
  if (!token) return [];

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.realm_access?.roles || [];
  } catch (error) {
    console.warn("Failed to get user roles:", error);
    return [];
  }
};
