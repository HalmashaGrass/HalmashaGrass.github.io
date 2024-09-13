import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

interface ArticleProps {
  title: string
  imageUrl: string
  id: number
  content: string,
  author: string
}

export default function ArticleCard({ title, imageUrl, id }: ArticleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={id}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <img
            src={`/images/${imageUrl}`}
            alt={title}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 p-4">
          <Link to={`/articles/${id}`}>
          <Button className="w-full">קרא עוד</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}