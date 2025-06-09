"use client"

import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Menu, Search, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-emerald-600">Growth</span>
              <span className="text-2xl font-light text-gray-700">Journal</span>
            </Link>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600">
              홈
            </Link>
            <Link
              href="/category/self-improvement"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600"
            >
              자기개발
            </Link>
            <Link
              href="/category/wellness"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600"
            >
              건강
            </Link>
            <Link href="/category/daily" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600">
              일상
            </Link>
            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600">
              소개
            </Link>
          </div>

          <div className="flex items-center">
            {isSearchOpen ? (
              <div className="relative">
                <Input type="text" placeholder="검색어를 입력하세요..." className="w-64 pr-8" autoFocus />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            ) : (
              <button
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </button>
            )}

            <div className="ml-4 md:hidden">
              <button
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              홈
            </Link>
            <Link
              href="/category/self-improvement"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              자기개발
            </Link>
            <Link
              href="/category/wellness"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              건강
            </Link>
            <Link
              href="/category/daily"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              일상
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              소개
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
