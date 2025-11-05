import { Card } from "@/components/ui/card"

const solutions = [
  {
    title: "Sorting System",
    description: "Intelligent containers for separate waste collection",
    image: "/modern-recycling-bins-minimal-eco-design.jpg",
  },
  {
    title: "Water Filters",
    description: "Multi-stage purification for crystal clear water",
    image: "/water-filtration-system-minimal-clean-design.jpg",
  },
  {
    title: "Eco Products",
    description: "Biodegradable products for home cleaning and care",
    image: "/eco-cleaning-products-minimal-green-design.jpg",
  },
  {
    title: "Quality Monitoring",
    description: "Sensors for real-time air and water quality control",
    image: "/air-quality-monitor-minimal-tech-design.jpg",
  },
]

export function Solutions() {
  return (
    <section className="bg-[#E8F5E9] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-light tracking-tight text-[#1B5E20] sm:text-5xl">
            Products & Services
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-[#2E7D32]">
            Everything you need for an eco-friendly home
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-[#1B5E20]">{solution.title}</h3>
                <p className="mt-4 text-pretty leading-relaxed text-[#2E7D32]">{solution.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
