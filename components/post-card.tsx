import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"
import type { Post } from "@/lib/data"

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`} className="block h-full">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <img
            src={post.coverImage || `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(post.title)}`}
            alt={post.title}
            className="object-cover w-full h-48 rounded-t-lg"
          />
        </div>
        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 line-clamp-2">{post.title}</h3>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-gray-500 line-clamp-3">{post.excerpt || post.content.substring(0, 120)}...</p>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{post.author || "관리자"}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="w-full mt-3 flex flex-wrap gap-2">
            {post.tags &&
              post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                  {tag}
                </Badge>
              ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
