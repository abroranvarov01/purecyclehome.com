import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Solutions } from "@/components/solutions"
import { Benefits } from "@/components/benefits"
import { Impact } from "@/components/impact"
import { Testimonials } from "@/components/testimonials"
import { Mission } from "@/components/mission"
import { FAQ } from "@/components/faq"
import { Newsletter } from "@/components/newsletter"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <Solutions />
      <Benefits />
      <Impact />
      <Testimonials />
      <Mission />
      <FAQ />
      <Newsletter />
      <CTA />
      <Footer />
    </main>
  )
}
