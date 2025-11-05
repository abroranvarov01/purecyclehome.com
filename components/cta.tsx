import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#2E7D32] px-8 py-20 text-center sm:px-16">
          <div className="relative z-10">
            <h2 className="text-balance text-4xl font-light tracking-tight text-white sm:text-5xl">
              Start Your Journey to Eco-Friendly Living
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[#E8F5E9]">
              Join thousands of families who have already chosen a cleaner future
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-[#2E7D32] hover:bg-[#E8F5E9] transition-all duration-300 rounded-full px-8"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#1B5E20] opacity-20" />
          <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-[#1B5E20] opacity-20" />
        </div>
      </div>
    </section>
  )
}
