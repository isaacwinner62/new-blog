import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BarChart3, Users, Eye, Target, TrendingUp, Award, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Advertise with Premium Blog | Reach 100K+ Engaged Readers",
  description:
    "Partner with Premium Blog to reach our highly engaged audience of 100K+ monthly readers. Premium advertising opportunities with proven ROI.",
  openGraph: {
    title: "Advertise with Premium Blog",
    description: "Reach 100K+ engaged readers with our premium advertising opportunities.",
    url: "https://premiumblog.com/advertise",
  },
}

export default function AdvertisePage() {
  const stats = [
    { label: "Monthly Readers", value: "100K+", icon: Users },
    { label: "Page Views", value: "500K+", icon: Eye },
    { label: "Avg. Session Duration", value: "4.5 min", icon: Target },
    { label: "Return Visitors", value: "65%", icon: TrendingUp },
  ]

  const adFormats = [
    {
      name: "Leaderboard Banner",
      size: "728x90",
      placement: "Top of page, high visibility",
      price: "$2,500/month",
      features: ["Above the fold placement", "Desktop & mobile optimized", "Premium positioning"],
    },
    {
      name: "Sidebar Display",
      size: "300x250",
      placement: "Article sidebar, contextual",
      price: "$1,800/month",
      features: ["Contextual placement", "High engagement", "Multiple positions available"],
    },
    {
      name: "In-Article Native",
      size: "Responsive",
      placement: "Within article content",
      price: "$3,200/month",
      features: ["Native content integration", "High click-through rates", "Non-intrusive design"],
    },
    {
      name: "Newsletter Sponsorship",
      size: "Email format",
      placement: "Weekly newsletter",
      price: "$1,200/week",
      features: ["Direct inbox access", "25K+ subscribers", "Exclusive positioning"],
    },
  ]

  const benefits = [
    {
      icon: Target,
      title: "Targeted Audience",
      description: "Reach professionals and decision-makers in technology, business, health, and lifestyle sectors.",
    },
    {
      icon: Award,
      title: "Premium Content Context",
      description: "Your ads appear alongside high-quality, editorial content that readers trust and engage with.",
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Comprehensive reporting on impressions, clicks, conversions, and audience demographics.",
    },
    {
      icon: Zap,
      title: "Fast Loading",
      description: "Optimized ad delivery ensures fast page loads and positive user experience.",
    },
  ]

  const testimonials = [
    {
      quote: "Premium Blog delivered exceptional results for our B2B campaign. The audience quality is outstanding.",
      author: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "Marketing Director",
    },
    {
      quote: "We saw a 300% increase in qualified leads after advertising with Premium Blog. Highly recommended!",
      author: "Michael Chen",
      company: "HealthTech Innovations",
      role: "Growth Manager",
    },
    {
      quote: "The native ad integration felt natural and generated great engagement from their audience.",
      author: "Lisa Rodriguez",
      company: "Design Studio Pro",
      role: "Brand Manager",
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
              Advertise with Premium Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Reach our highly engaged audience of 100K+ monthly readers who trust our editorial content and are
              actively seeking solutions in technology, business, health, and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Media Kit
              </Link>
              <Link href="#pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Our Reach & Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium Blog delivers consistent, high-quality traffic with exceptional engagement metrics.
            </p>
          </div>
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

      {/* Audience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Audience
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Demographics</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 65% aged 25-45 (prime decision-making years)</li>
                    <li>• 58% male, 42% female</li>
                    <li>• 78% college-educated</li>
                    <li>• Average household income: $75K+</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Background</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 35% Technology professionals</li>
                    <li>• 25% Business executives & managers</li>
                    <li>• 20% Healthcare professionals</li>
                    <li>• 20% Creative & design professionals</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interests</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional development</li>
                    <li>• Latest technology trends</li>
                    <li>• Health & wellness</li>
                    <li>• Business strategy & innovation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Audience+Analytics"
                alt="Audience analytics dashboard"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">4.5 min</div>
                <div className="text-sm">Avg. Session Duration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Advertising Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of premium advertising formats designed to maximize your reach and engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adFormats.map((format, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{format.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {format.size} • {format.placement}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-indigo-600">{format.price}</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {format.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
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
              Why Advertise with Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with Premium Blog and benefit from our commitment to quality content and engaged readership.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our advertising partners have to say about their experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-indigo-600 font-medium">{testimonial.company}</div>
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
            Ready to Reach Our Audience?
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Join leading brands who trust Premium Blog to deliver their message to engaged, high-quality readers.
            Contact us today to discuss your advertising goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Request Media Kit
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
