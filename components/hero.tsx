import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-5xl font-light tracking-tight text-[#1B5E20] sm:text-7xl lg:text-8xl">
            PureCycle<span className="font-semibold">Home</span>
          </h1>
          <p className="mt-8 text-pretty text-xl font-light leading-relaxed text-[#2E7D32] sm:text-2xl">
            Eco-friendly solutions for your home. Recycling, water filtration, and cleanliness in harmony with nature.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#2E7D32] text-white hover:bg-[#1B5E20] transition-all duration-300 rounded-full px-8"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#E8F5E9] transition-all duration-300 rounded-full px-8 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-[#E8F5E9] opacity-50 blur-3xl" />
      <div className="absolute -bottom-24 left-0 -z-10 h-96 w-96 rounded-full bg-[#E8F5E9] opacity-50 blur-3xl" />
    </section>
  )
}
