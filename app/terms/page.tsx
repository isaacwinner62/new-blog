import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Premium Blog",
  description:
    "Read Premium Blog's Terms of Service. Understand your rights and responsibilities when using our website and services.",
  robots: "index, follow",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            Terms of Service
          </h1>

          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 1, 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Premium Blog ("we," "our," or "us"), you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Premium Blog's website for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials on Premium Blog's website are provided on an 'as is' basis. Premium Blog makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall Premium Blog or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on Premium Blog's website, even if Premium Blog or a Premium Blog
                authorized representative has been notified orally or in writing of the possibility of such damage.
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability
                for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accuracy of Materials</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials appearing on Premium Blog's website could include technical, typographical, or
                photographic errors. Premium Blog does not warrant that any of the materials on its website are
                accurate, complete, or current. Premium Blog may make changes to the materials contained on its website
                at any time without notice. However, Premium Blog does not make any commitment to update the materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Premium Blog has not reviewed all of the sites linked to our website and is not responsible for the
                contents of any such linked site. The inclusion of any link does not imply endorsement by Premium Blog
                of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
              <p className="text-gray-600 leading-relaxed">
                Premium Blog may revise these terms of service for its website at any time without notice. By using this
                website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United
                States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> legal@premiumblog.com
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
