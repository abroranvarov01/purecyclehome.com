import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#E8F5E9] px-8 py-20 text-center sm:px-16">
          <div className="relative z-10">
            <h2 className="text-balance text-4xl font-light tracking-tight text-[#1B5E20] sm:text-5xl">Stay Updated</h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[#2E7D32]">
              Subscribe to our newsletter for eco-tips, product updates, and exclusive offers
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border-[#2E7D32] bg-white px-6 text-[#1B5E20] placeholder:text-[#2E7D32]/50 focus-visible:ring-[#2E7D32]"
              />
              <Button
                type="submit"
                className="rounded-full bg-[#2E7D32] px-8 text-white hover:bg-[#1B5E20] transition-all duration-300"
              >
                Subscribe
              </Button>
            </form>
          </div>

          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#2E7D32] opacity-10" />
          <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-[#2E7D32] opacity-10" />
        </div>
      </div>
    </section>
  )
}
