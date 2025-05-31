"use client"

import { Phone, Calendar, Clock, Shield } from "lucide-react"
import { useEffect, useState } from "react"

const features = [
  {
    icon: Phone,
    title: "Proactive Reminders",
    description: "MK.AI calls you before important events, ensuring you never miss a meeting or appointment.",
  },
  {
    icon: Calendar,
    title: "On-Demand Access",
    description: "Call MK.AI anytime to get instant information about your schedule and upcoming events.",
  },
  {
    icon: Clock,
    title: "Smart Timing",
    description: "Intelligent scheduling ensures reminders come at the perfect time for maximum effectiveness.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your calendar data is encrypted and protected with enterprise-grade security measures.",
  },
]

export function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("features")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">Designed for your life.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MK.AI seamlessly integrates with your calendar to provide intelligent, timely assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
