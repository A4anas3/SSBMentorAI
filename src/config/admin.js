import { getAccessToken } from "@/lib/authApi";

/**
 * Check if current user has ADMIN role
 * 
 * ⚠️ SECURITY WARNING: This is for UI/UX purposes only!
 * Client-side role checks can be bypassed. Always verify permissions on the backend.
 * Never use this to protect sensitive data or operations.
 */
import { useState, useEffect } from 'react';

/**
 * Check if current user has ADMIN role (Hook)
 * 
 * ⚠️ SECURITY WARNING: This is for UI/UX purposes only!
 * Client-side role checks can be bypassed. Always verify permissions on the backend.
 * Never use this to protect sensitive data or operations.
 */
export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkRole = async () => {
      try {
        const token = await getAccessToken();
        if (!token) {
          setIsAdmin(false);
          return;
        }
        const payload = JSON.parse(atob(token.split(".")[1]));
        setIsAdmin(payload.realm_access?.roles?.includes("ADMIN") || false);
      } catch (error) {
        console.warn("Failed to check admin role:", error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };
    checkRole();
  }, []);

  return { isAdmin, loading };
};

/**
 * Get all roles of current user
 * 
 * ⚠️ SECURITY WARNING: Client-side role retrieval is for display purposes only.
 */
export const useUserRoles = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const token = await getAccessToken();
        if (!token) {
          setRoles([]);
          return;
        }
        const payload = JSON.parse(atob(token.split(".")[1]));
        setRoles(payload.realm_access?.roles || []);
      } catch (error) {
        console.warn("Failed to get user roles:", error);
        setRoles([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRoles();
  }, []);

  return { roles, loading };
};
