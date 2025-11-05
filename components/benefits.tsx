import { Leaf, Heart, TrendingDown, Shield } from "lucide-react"

const benefits = [
  {
    name: "Environmental Impact",
    description: "Reduce your carbon footprint by up to 60% with our integrated solutions.",
    icon: Leaf,
  },
  {
    name: "Health & Wellness",
    description: "Breathe cleaner air and drink purer water for better family health.",
    icon: Heart,
  },
  {
    name: "Cost Savings",
    description: "Save up to 40% on utility bills with efficient recycling and filtration.",
    icon: TrendingDown,
  },
  {
    name: "Peace of Mind",
    description: "Know that your home is safe, clean, and sustainable for future generations.",
    icon: Shield,
  },
]

export function Benefits() {
  return (
    <section className="bg-[#E8F5E9] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-light tracking-tight text-[#1B5E20] sm:text-5xl">
            Why Choose PureCycleHome
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-[#2E7D32]">
            Experience the benefits of sustainable living
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.name}
              className="flex gap-6 rounded-3xl bg-white p-8 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2E7D32]">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-light text-[#1B5E20]">{benefit.name}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-[#2E7D32]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
