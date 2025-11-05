import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "PureCycleHome transformed our house into an eco-friendly paradise. Our water tastes amazing and we've cut our waste by 70%!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Environmental Consultant",
    content:
      "As someone who works in sustainability, I'm impressed by their comprehensive approach. The quality and service are exceptional.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Mother of Three",
    content:
      "Knowing my children are drinking clean water and breathing cleaner air gives me incredible peace of mind. Worth every penny!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#E8F5E9] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-light tracking-tight text-[#1B5E20] sm:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-[#2E7D32]">
            Real stories from families who made the switch
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none bg-white p-8 transition-all duration-500 hover:shadow-2xl">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#2E7D32] text-[#2E7D32]" />
                ))}
              </div>
              <p className="mt-6 text-pretty leading-relaxed text-[#2E7D32]">"{testimonial.content}"</p>
              <div className="mt-6">
                <div className="font-light text-[#1B5E20]">{testimonial.name}</div>
                <div className="text-sm text-[#2E7D32]">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
