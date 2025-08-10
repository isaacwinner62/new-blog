import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Users, Heart, Zap, Award, Coffee, Laptop } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | Join the Premium Blog Team",
  description:
    "Join our team of passionate writers, editors, and digital marketing experts. Explore career opportunities at Premium Blog.",
  openGraph: {
    title: "Careers at Premium Blog",
    description: "Join our team and help shape the future of premium editorial content.",
    url: "https://premiumblog.com/careers",
  },
}

export default function CareersPage() {
  const benefits = [
    {
      icon: Laptop,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and a focus on results, not location.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness stipends.",
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Learning budget, conference attendance, and mentorship opportunities.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Unlimited PTO, flexible schedules, and a culture that respects personal time.",
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Work with passionate, talented individuals who support each other's success.",
    },
    {
      icon: Award,
      title: "Competitive Package",
      description: "Competitive salary, equity options, and performance-based bonuses.",
    },
  ]

  const openPositions = [
    {
      title: "Senior Content Writer",
      department: "Editorial",
      location: "Remote",
      type: "Full-time",
      description:
        "We're looking for an experienced content writer to create high-quality articles across technology and business topics.",
      requirements: [
        "5+ years of professional writing experience",
        "Strong SEO knowledge and content optimization skills",
        "Experience in technology or business writing",
        "Excellent research and fact-checking abilities",
      ],
    },
    {
      title: "SEO Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Join our marketing team to optimize our content strategy and improve our search engine rankings.",
      requirements: [
        "3+ years of SEO experience",
        "Proficiency with SEO tools (Ahrefs, SEMrush, etc.)",
        "Understanding of technical SEO and content optimization",
        "Experience with Google Analytics and Search Console",
      ],
    },
    {
      title: "Health & Wellness Editor",
      department: "Editorial",
      location: "Remote",
      type: "Part-time",
      description: "Lead our health and wellness content strategy, ensuring accuracy and editorial excellence.",
      requirements: [
        "Medical or health science background preferred",
        "Editorial experience in health/wellness content",
        "Strong fact-checking and research skills",
        "Ability to translate complex topics for general audiences",
      ],
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Manage our social media presence and grow our community across multiple platforms.",
      requirements: [
        "3+ years of social media management experience",
        "Experience with content creation and community management",
        "Knowledge of social media analytics and growth strategies",
        "Creative mindset with strong visual design sense",
      ],
    },
  ]

  const values = [
    {
      title: "Editorial Excellence",
      description:
        "We maintain the highest standards in everything we publish, ensuring our readers receive valuable, accurate, and well-researched content.",
    },
    {
      title: "Continuous Learning",
      description:
        "We encourage curiosity and provide opportunities for professional development, keeping our team at the forefront of industry trends.",
    },
    {
      title: "Inclusive Environment",
      description:
        "We celebrate diversity and create an inclusive workplace where everyone can contribute their unique perspectives and talents.",
    },
    {
      title: "Innovation",
      description:
        "We embrace new technologies and methodologies to improve our content, processes, and reader experience.",
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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Help us shape the future of premium editorial content. We're looking for passionate individuals who share
              our commitment to excellence and innovation in digital publishing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#positions" className="btn-primary">
                View Open Positions
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Culture
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At Premium Blog, we believe that great content comes from great people. Our team is our most valuable
                  asset, and we've built a culture that supports creativity, collaboration, and personal growth.
                </p>
                <p>
                  We're a remote-first company that values results over hours worked. Whether you're an early bird or a
                  night owl, we trust our team members to manage their time effectively and deliver exceptional work.
                </p>
                <p>
                  Our commitment to editorial excellence extends to how we treat each other. We foster an environment of
                  mutual respect, continuous learning, and open communication where every voice is heard and valued.
                </p>
                <p>
                  Join us and be part of a team that's passionate about creating content that informs, inspires, and
                  makes a real difference in our readers' lives.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Team+Culture"
                alt="Premium Blog team collaboration"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits and perks designed to support your professional growth and personal
              well-being.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
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
              These core values guide our decisions, shape our culture, and define how we work together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current openings and find the perfect role to advance your career with Premium Blog.
            </p>
          </div>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-semibold text-gray-900">{position.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium">
                          {position.department}
                        </span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-600">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:ml-8 mt-6 lg:mt-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
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
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals to join our team. If you're passionate about content, SEO, and
            digital publishing, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Send Us Your Resume
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
