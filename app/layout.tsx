import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Growth Journal - 성장하는 삶의 기록",
  description: "자기개발, 건강, 그리고 일상의 소소한 이야기들을 공유하는 블로그입니다.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">소개</h3>
                  <p className="mt-4 text-base text-gray-500">
                    Growth Journal은 자기개발과 건강한 라이프스타일에 관한 이야기를 공유하는 블로그입니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">카테고리</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="/category/self-improvement" className="text-base text-gray-500 hover:text-gray-900">
                        자기개발
                      </a>
                    </li>
                    <li>
                      <a href="/category/wellness" className="text-base text-gray-500 hover:text-gray-900">
                        건강
                      </a>
                    </li>
                    <li>
                      <a href="/category/daily" className="text-base text-gray-500 hover:text-gray-900">
                        일상
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">연락처</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        이메일
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        인스타그램
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        유튜브
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                <div className="flex space-x-6 md:order-2">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                  &copy; 2023 Growth Journal. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
