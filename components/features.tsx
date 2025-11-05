import { Recycle, Droplets, Sparkles } from "lucide-react"

const features = [
  {
    name: "Recycling",
    description: "Smart solutions for waste sorting and recycling. Turn trash into resources.",
    icon: Recycle,
  },
  {
    name: "Water Filtration",
    description: "Modern water purification systems for the health of your family and the planet.",
    icon: Droplets,
  },
  {
    name: "Cleanliness",
    description: "Eco-friendly products for maintaining cleanliness without harming the environment.",
    icon: Sparkles,
  },
]

export function Features() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-light tracking-tight text-[#1B5E20] sm:text-5xl">Our Solutions</h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-[#2E7D32]">
            A comprehensive approach to eco-friendly living in your home
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 sm:mt-20 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 transition-all duration-500 hover:bg-[#E8F5E9]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F5E9] transition-all duration-500 group-hover:bg-[#2E7D32]">
                <feature.icon className="h-8 w-8 text-[#2E7D32] transition-all duration-500 group-hover:text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-light text-[#1B5E20]">{feature.name}</h3>
              <p className="mt-4 text-pretty leading-relaxed text-[#2E7D32]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
