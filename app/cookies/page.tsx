import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookie Policy | Premium Blog",
  description:
    "Learn about how Premium Blog uses cookies and similar technologies to enhance your browsing experience.",
  robots: "index, follow",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            Cookie Policy
          </h1>

          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 1, 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Premium Blog uses cookies for several purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To remember your preferences and settings</li>
                <li>To analyze how our website is used and improve performance</li>
                <li>To provide personalized content and advertisements</li>
                <li>To ensure website security and prevent fraud</li>
                <li>To enable social media features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Essential Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like
                    page navigation and access to secure areas of the website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Analytics Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously. We use Google Analytics to track website usage.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Functionality Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies allow the website to remember choices you make and provide enhanced, more personal
                    features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Advertising Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies are used to deliver advertisements that are relevant to you and your interests. They
                    may also be used to limit the number of times you see an advertisement.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may also use third-party services that place cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> For website analytics and performance monitoring
                </li>
                <li>
                  <strong>Social Media Platforms:</strong> For social sharing and embedded content
                </li>
                <li>
                  <strong>Advertising Networks:</strong> For displaying relevant advertisements
                </li>
                <li>
                  <strong>Content Delivery Networks:</strong> For faster content delivery
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You have several options for managing cookies:</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Browser Settings</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Most web browsers allow you to control cookies through their settings preferences. You can set your
                    browser to refuse cookies or delete certain cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Opt-Out Tools</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Advertising Preferences</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You can manage your advertising preferences through the Digital Advertising Alliance's opt-out page
                    or similar industry tools.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Please note that disabling cookies may affect your ability to use certain features of our website. Some
                functionality may not work properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. Please check this page periodically for updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> privacy@premiumblog.com
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Address:</strong> 123 Blog Street, Content City, CC 12345
                </p>
                <p className="text-gray-600">
                  <strong>Contact Form:</strong>{" "}
                  <Link href="/contact" className="text-indigo-600 hover:text-indigo-800">
                    Visit our contact page
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
