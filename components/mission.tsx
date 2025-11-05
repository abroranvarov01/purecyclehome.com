import { Globe2, Users, Lightbulb } from "lucide-react"

export function Mission() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-balance text-4xl font-light tracking-tight text-[#1B5E20] sm:text-5xl">Our Mission</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-[#2E7D32]">
              At PureCycleHome, we believe that sustainable living should be accessible, affordable, and effortless. Our
              mission is to empower every household to make a positive environmental impact without compromising on
              comfort or convenience.
            </p>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-[#2E7D32]">
              Since 2018, we've been pioneering innovative solutions that combine cutting-edge technology with timeless
              environmental principles. Every product we offer is designed to last, perform exceptionally, and
              contribute to a healthier planet.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#E8F5E9]">
                <Globe2 className="h-7 w-7 text-[#2E7D32]" />
              </div>
              <div>
                <h3 className="text-xl font-light text-[#1B5E20]">Planet First</h3>
                <p className="mt-2 text-pretty leading-relaxed text-[#2E7D32]">
                  Every decision we make prioritizes environmental sustainability and long-term ecological health.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#E8F5E9]">
                <Users className="h-7 w-7 text-[#2E7D32]" />
              </div>
              <div>
                <h3 className="text-xl font-light text-[#1B5E20]">Community Driven</h3>
                <p className="mt-2 text-pretty leading-relaxed text-[#2E7D32]">
                  We work closely with local communities to create solutions that truly make a difference.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#E8F5E9]">
                <Lightbulb className="h-7 w-7 text-[#2E7D32]" />
              </div>
              <div>
                <h3 className="text-xl font-light text-[#1B5E20]">Innovation Always</h3>
                <p className="mt-2 text-pretty leading-relaxed text-[#2E7D32]">
                  We continuously research and develop new technologies to stay ahead of environmental challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
