import { getArticles } from "@/lib/api";
import NewsCard from "@/components/NewsCard";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    return {
        title: `${capitalizedCategory} News - News Site ACT`,
        description: `Latest ${category} news and updates.`,
    };
}

export default async function CategoryPage({ params }: Props) {
    const { category } = await params;

   
    const validCategories = ["nation", "world", "sports", "technology", "city", "business", "science", "education", "health", "environment"];
    if (!validCategories.includes(category.toLowerCase())) {
        notFound();
    }

    const articles = await getArticles(category);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 border-b-2 border-orange-600 pb-2 inline-block capitalize">
                {category} News
            </h1>

            {articles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
            ) : (
                <div className="p-12 text-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-lg">No articles found for this category.</p>
                </div>
            )}
        </div>
    );
}

