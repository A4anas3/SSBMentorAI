import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function toSecureUrl(url) {
  if (!url) return null; // ✅ Return null to prevent browser warning
  return url.replace("http://", "https://");
}