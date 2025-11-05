const stats = [
  { value: "50K+", label: "Homes Transformed" },
  { value: "2M+", label: "Tons CO₂ Reduced" },
  { value: "15M+", label: "Liters Water Purified" },
  { value: "98%", label: "Customer Satisfaction" },
]

export function Impact() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-light tracking-tight text-[#1B5E20] sm:text-5xl">
            Our Environmental Impact
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-[#2E7D32]">
            Together, we're making a real difference for our planet
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-8 sm:mt-20 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-3xl bg-[#E8F5E9] p-8 text-center transition-all duration-500 hover:bg-[#2E7D32] hover:text-white"
            >
              <div className="text-4xl font-light sm:text-5xl">{stat.value}</div>
              <div className="mt-4 text-sm leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
