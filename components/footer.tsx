import { Recycle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#E8F5E9] px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <Recycle className="h-6 w-6 text-[#2E7D32]" />
            <span className="text-xl font-light text-[#1B5E20]">
              PureCycle<span className="font-semibold">Home</span>
            </span>
          </div>

          <nav className="flex gap-8">
            <a href="#" className="text-sm text-[#2E7D32] transition-colors duration-300 hover:text-[#1B5E20]">
              About
            </a>
            <a href="#" className="text-sm text-[#2E7D32] transition-colors duration-300 hover:text-[#1B5E20]">
              Products
            </a>
            <a href="#" className="text-sm text-[#2E7D32] transition-colors duration-300 hover:text-[#1B5E20]">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-[#2E7D32]/20 pt-8 text-center">
          <p className="text-sm text-[#2E7D32]">© 2025 PureCycleHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
