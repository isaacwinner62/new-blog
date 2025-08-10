import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Users, Award, Globe, Heart, Target, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Premium Blog - Editorial Excellence & SEO Mastery",
  description:
    "Learn about Premium Blog's mission to deliver high-quality editorial content with advanced SEO optimization. Meet our team of expert writers and editors.",
  openGraph: {
    title: "About Premium Blog",
    description: "Discover our story, mission, and the team behind Premium Blog's editorial excellence.",
    url: "https://premiumblog.com/about",
  },
}

export default function AboutPage() {
  const stats = [
    { label: "Articles Published", value: "500+", icon: Award },
    { label: "Expert Writers", value: "25+", icon: Users },
    { label: "Monthly Readers", value: "100K+", icon: Globe },
    { label: "Years of Experience", value: "5+", icon: Heart },
  ]

  const values = [
    {
      icon: Target,
      title: "Editorial Excellence",
      description:
        "We maintain the highest standards of editorial quality, ensuring every piece of content provides genuine value to our readers.",
    },
    {
      icon: Zap,
      title: "SEO Mastery",
      description:
        "Our content is optimized for search engines without compromising readability, helping our articles reach the widest possible audience.",
    },
    {
      icon: Users,
      title: "Expert Insights",
      description:
        "Our team consists of industry experts who bring real-world experience and deep knowledge to every article they write.",
    },
    {
      icon: Heart,
      title: "Reader-Centric",
      description:
        "Every decision we make is guided by what's best for our readers, from content topics to user experience design.",
    },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "Editor-in-Chief",
      bio: "Former design director at top tech companies, Sarah leads our editorial vision with 10+ years of industry experience.",
      avatar: "/placeholder.svg?height=120&width=120&text=SC",
      social: { twitter: "@sarahchen_ux", linkedin: "sarah-chen-ux" },
    },
    {
      name: "Marcus Rodriguez",
      role: "SEO Director",
      bio: "SEO expert with a track record of helping websites achieve top rankings while maintaining editorial integrity.",
      avatar: "/placeholder.svg?height=120&width=120&text=MR",
      social: { twitter: "@marcusseo", linkedin: "marcus-rodriguez-seo" },
    },
    {
      name: "Dr. Emily Watson",
      role: "Health & Wellness Editor",
      bio: "Practicing physician and health technology researcher bringing medical expertise to our health content.",
      avatar: "/placeholder.svg?height=120&width=120&text=EW",
      social: { twitter: "@drwatsonhealth", linkedin: "emily-watson-md" },
    },
    {
      name: "Alex Thompson",
      role: "Technology Editor",
      bio: "Full-stack developer and tech industry veteran covering the latest in software development and digital innovation.",
      avatar: "/placeholder.svg?height=120&width=120&text=AT",
      social: { twitter: "@alexthompsondev", linkedin: "alex-thompson-dev" },
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              About Premium Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              We're on a mission to deliver the highest quality editorial content while mastering the art and science of
              SEO. Our goal is to inform, inspire, and empower our readers with insights that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/careers" className="btn-secondary">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Premium Blog was born from a simple observation: the internet was full of content, but much of it
                  lacked the depth, accuracy, and editorial standards that readers deserved. We set out to change that.
                </p>
                <p>
                  Founded in 2019 by a team of experienced editors, writers, and SEO specialists, we've grown from a
                  small passion project to a trusted source of insights across technology, business, health, design, and
                  lifestyle.
                </p>
                <p>
                  What sets us apart is our commitment to editorial excellence without sacrificing discoverability. We
                  believe that great content should be both valuable to readers and optimized for search engines – and
                  we've proven that these goals aren't mutually exclusive.
                </p>
                <p>
                  Today, we're proud to serve over 100,000 monthly readers who trust us for accurate, insightful, and
                  actionable content that helps them stay ahead in their professional and personal lives.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Our+Story"
                alt="Premium Blog team working together"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from the content we create to the way we interact with our
              community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <value.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in editorial, technology, and digital
              marketing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Image
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.twitter && (
                    <a
                      href={`https://twitter.com/${member.social.twitter.replace("@", "")}`}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.social.linkedin}`}
                      className="text-gray-400 hover:text-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter and be the first to receive our latest insights, trends, and expert analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
