import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Assessment",
    description: "We analyze your home to identify the best eco-friendly solutions for your needs.",
  },
  {
    number: "02",
    title: "Custom Plan",
    description: "Receive a personalized plan tailored to your lifestyle and environmental goals.",
  },
  {
    number: "03",
    title: "Installation",
    description: "Our experts install your systems with minimal disruption to your daily routine.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Enjoy continuous monitoring and support to ensure optimal performance.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-light tracking-tight text-[#1B5E20] sm:text-5xl">How It Works</h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-[#2E7D32]">
            Four simple steps to transform your home into an eco-friendly haven
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex gap-6 rounded-3xl bg-[#E8F5E9] p-8 transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2E7D32] text-2xl font-light text-white">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-[#1B5E20]">{step.title}</h3>
                  <p className="mt-4 text-pretty leading-relaxed text-[#2E7D32]">{step.description}</p>
                  <CheckCircle2 className="mt-4 h-6 w-6 text-[#2E7D32]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
