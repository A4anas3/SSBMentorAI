import { useNews } from "@/hooks/news/useNews";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const News = () => {
  const { news, loading, error, lastUpdated } = useNews();

  if (loading) {
    return (
      <div className="pt-24 text-center text-yellow-600">
        Loading latest news...
      </div>
    );
  }

  if (error) {
    return <div className="pt-24 text-center text-red-600">{error}</div>;
  }

  return (
    <>
      {/* FULL WIDTH HEADER */}
      <Header />

      {/* PAGE CONTENT */}
      <section id="news" className="pt-24 container mx-auto px-4">
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
          Defence & World News
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Last updated: {lastUpdated}
        </p>

        <div className="grid gap-6">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-semibold text-yellow-800 bg-yellow-100 px-2 py-1 rounded-full">
                  {item.source}
                </span>

                <span className="text-xs text-gray-500">{item.published}</span>
              </div>

              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {item.heading}
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {item.summary}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-yellow-700 hover:text-yellow-800 hover:underline"
              >
                Read full article →
              </a>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default News;
