import Link from "next/link";
import { Article } from "@/lib/api";

interface SidebarProps {
    articles: Article[];
}

export default function Sidebar({ articles }: SidebarProps) {
    return (
        <aside className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-l-4 border-orange-600 pl-3">
                Trending Now
            </h2>
            <div className="space-y-4">
                {articles.map((article, index) => (
                    <Link
                        key={article.id}
                        href={`/news/${article.id}`}
                        className="block group"
                    >
                        <div className="flex items-start space-x-3">
                            <span className="text-3xl font-bold text-gray-200 group-hover:text-orange-200 transition-colors">
                                {index + 1}
                            </span>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-700 transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <span className="text-xs text-gray-500 mt-1 block">
                                    {article.category}
                                </span>
                            </div>
                        </div>
                        {index < articles.length - 1 && (
                            <hr className="my-3 border-gray-200" />
                        )}
                    </Link>
                ))}
            </div>
        </aside>
    );
}
