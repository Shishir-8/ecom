import React from "react"
import { Truck, ShieldCheck, BadgeCheck, Headset } from "lucide-react"

const features = [
  {
    id: 1,
    title: "Premium Quality",
    description:
      "We offer carefully selected products that meet high quality standards.",
    icon: BadgeCheck,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    id: 2,
    title: "Fast Delivery",
    description:
      "Quick and reliable shipping so you get your order on time.",
    icon: Truck,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    id: 3,
    title: "Secure Payments",
    description:
      "Safe and trusted payment methods for peace of mind.",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id: 4,
    title: "24/7 Online Support",
    description:
      "Our support team is available around the clock to help you anytime.",
    icon: Headset,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto py-16 px-4">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Us
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          We focus on quality, reliability, and customer satisfaction.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {features.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl ${item.bg} mb-4`}
              >
                <Icon className={`w-6 h-6 ${item.color}`} />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}