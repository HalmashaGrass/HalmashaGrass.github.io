import { getAllDocuments } from "@/services/firestore"
import ArticleCard from "./ArticleCard"

const articles = await getAllDocuments('articles')
export default function ArticlesSection() {
    console.log(articles)
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">המאמרים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id}>
              <ArticleCard
              id={article.id}
              title={article.name}
              imageUrl={article.image}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}