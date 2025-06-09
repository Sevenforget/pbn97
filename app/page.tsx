import { getPosts } from "@/lib/data"
import PostCard from "@/components/post-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const posts = getPosts()

  return (
    <main className="min-h-screen">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/hero-bg.png')", filter: "brightness(0.4)" }}
        />
        <div className="relative z-10 px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">성장하는 삶의 기록</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            자기개발, 건강, 그리고 일상의 소소한 이야기들을 공유합니다.
          </p>
          <div className="mt-8 flex justify-center">
            <Button className="rounded-full px-8 py-6 text-lg font-medium">
              최신 글 보기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">최근 게시글</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            자기개발과 건강한 라이프스타일에 관한 이야기들
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                건강한 삶을 위한 여정
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                매일의 작은 습관들이 모여 건강한 삶을 만듭니다. 이 블로그에서는 신체적, 정신적 건강을 위한 다양한 팁과
                경험을 공유합니다.
              </p>
              <div className="mt-8">
                <Button variant="outline" className="rounded-full px-6 py-5 text-base font-medium">
                  건강 카테고리 보기
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img src="/images/wellness.png" alt="건강한 라이프스타일" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
