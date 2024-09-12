import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Bookmark, TrendingUp, Users } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/icons/a2sv.png" alt="A2SV Blog Logo" width={100} height={100} />
          <span className="text-2xl font-bold text-blue-900">A2SV Blog</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="text-gray-600 hover:text-blue-900">Home</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-900">Categories</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-900">About</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-900">Contact</Link>
        </nav>
        <Link href='/auth/signIn'>
            <Button>Sign In</Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
            Discover Insights from Africa to Silicon Valley
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore cutting-edge tech articles, success stories, and expert insights
          </p>
          <div className="flex max-w-md mx-auto">
            <Input type="text" placeholder="Search articles..." className="rounded-r-none" />
            <Button className="rounded-l-none">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Bookmark className="h-8 w-8 text-blue-500" />}
            title="Curated Content"
            description="Handpicked articles from top African tech innovators and Silicon Valley experts."
          />
          <FeatureCard
            icon={<TrendingUp className="h-8 w-8 text-green-500" />}
            title="Success Stories"
            description="Inspiring journeys of African talents making waves in the global tech scene."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-purple-500" />}
            title="Community Driven"
            description="Join discussions, share your experiences, and connect with like-minded individuals."
          />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogPreview
              title="10 Essential Skills for African Developers in 2023"
              excerpt="Stay ahead of the curve with these must-have skills for the evolving tech landscape."
              author="John Doe"
              date="May 15, 2023"
              tags={["Skills", "Career"]}
            />
            <BlogPreview
              title="From Lagos to Silicon Valley: A Developer's Journey"
              excerpt="Follow the inspiring story of a Nigerian developer who made it big in the heart of tech innovation."
              author="Jane Smith"
              date="June 2, 2023"
              tags={["Success Story", "Inspiration"]}
            />
            <BlogPreview
              title="The Rise of AI in African Tech Startups"
              excerpt="Explore how artificial intelligence is transforming the African tech ecosystem."
              author="David Johnson"
              date="June 10, 2023"
              tags={["AI", "Startups"]}
            />
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for weekly curated content and exclusive insights
          </p>
          <div className="flex max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
            <Button className="rounded-l-none">Subscribe</Button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About A2SV Blog</h3>
              <p className="text-sm">Bridging the gap between African talent and global tech opportunities.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="#" className="hover:underline">Home</Link></li>
                <li><Link href="#" className="hover:underline">Categories</Link></li>
                <li><Link href="#" className="hover:underline">About Us</Link></li>
                <li><Link href="#" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-blue-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-blue-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-blue-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm">Email: info@a2svblog.com</p>
              <p className="text-sm">Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} A2SV Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }:any) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
    </Card>
  )
}

function BlogPreview({ title, excerpt, author, date, tags }:any) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">{author}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag:any, index:number) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}