import { getArticles, getTrendingArticles } from "@/lib/api";
import Hero from "@/components/Hero";
import NewsCard from "@/components/NewsCard";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "News Site ACT - Latest News",
  description: "Breaking news, latest updates, and trending stories from India and the world.",
};

export default async function Home() {
  const articles = await getArticles();
  const trendingArticles = await getTrendingArticles();
  const heroArticle = articles[0];

  const gridArticles = articles.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      {heroArticle && <Hero article={heroArticle} />}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-red-600 pb-2 inline-block">
            Latest News
          </h2>

          {gridArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gridArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">No more articles found.</p>
            </div>
          )}
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4">
          <Sidebar articles={trendingArticles} />

          {/* Advertisement Placeholder */}
          <div className="mt-8 bg-gray-100 h-64 flex items-center justify-center rounded border border-gray-200">
            <span className="text-gray-400 font-semibold">Advertisement</span>
          </div>
        </div>
      </div>
    </div>
  );
}
