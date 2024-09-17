import { motion } from "framer-motion"
//import { Card, CardContent, CardFooter } from "@/components/ui/card"
//import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom" 

interface ArticleProps {
  title: string
  imageUrl: string
  myId: string
  author: string
}

export default function ArticleCard({ title, imageUrl, myId, author }: ArticleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={myId}
    >
     {/* <Card className="overflow-hidden">
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
          <Link to={`/articles/${myId}`}>
          <Button className="w-full">קרא עוד</Button>
          </Link>
        </CardFooter>
      </Card> */}
      {/* From Uiverse.io by gharsh11032000 */ }
<Link to={`/articles/${myId}`}>
<div className="card">
<img
            src={`/images/${imageUrl}`}
            alt={title}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />  <div className="card__content">
    <p className="card__title">{title}</p>
    <p className="card__description">מאת: {author}</p>
  </div>
</div>
</Link>

    </motion.div>
  )
}