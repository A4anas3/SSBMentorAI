import { api } from "@/lib/api";

export const fetchNews = async () => {
  const response = await api.get("/api/news");
  return response.data;
};
