import { useEffect, useState } from "react";
import { fetchNews } from "@/features/news/news.api";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const data = await fetchNews();
        setNews(data.news ?? []);        // ← only change
        setLastUpdated(data.last_updated);
      } catch (err) {
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  return { news, loading, error, lastUpdated };
};
