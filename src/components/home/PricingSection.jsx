"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("Pro");

  const plans = [
    {
      name: "Starter Plan",
      description: "Perfect for individual traders getting started",
      features: [
        "Pre-built bots",
        "Basic dashboard access",
        "Email support",
        "1 trading account",
        "Basic risk controls",
        "Standard execution speed",
      ],
      color: "green",
      price: "Contact for pricing",
      popular: false,
    },
    {
      name: "Pro Plan",
      description: "Advanced features for serious traders",
      features: [
        "Custom bot development",
        "Advanced risk controls",
        "Priority support & updates",
        "Multiple trading accounts",
        "Advanced analytics",
        "API access",
        "Fast execution",
        "Full customization",
      ],
      color: "primary",
      price: "Contact for pricing",
      popular: true,
    },
    {
      name: "Enterprise Plan",
      description: "Institutional-grade solutions",
      features: [
        "Institutional-grade infrastructure",
        "API connectivity & multi-bot deployment",
        "Dedicated support team",
        "Custom integrations",
        "White-label solutions",
        "SLA guarantees",
        "Priority execution",
        "Custom development",
      ],
      color: "red",
      price: "Contact for pricing",
      popular: false,
    },
  ];

  return (
    <div className="flex items-center justify-center py-16 sm:py-20">
      <div className="bg-transparent flex flex-col items-center justify-center px-4 space-y-16">
        <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
          <div className="w-full mb-16 max-w-6xl mx-auto text-white">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                Pricing Plans
              </h1>
              <p className="text-gray-400 text-sm sm:text-base px-2 sm:px-0 max-w-2xl mx-auto">
                We offer flexible plans for different needs
              </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-lg border ${
                    plan.popular
                      ? "border-primary bg-black/60 transform scale-105"
                      : "border-white/10 bg-black/30"
                  } hover:border-primary/50 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-neutral-400 text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="text-2xl font-bold text-primary">
                      {plan.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 min-h-[240px]">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-neutral-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            {/* How It Works Section */}
            <div className="mt-20 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                How It Works
              </h2>
              <p className="text-lg text-neutral-400 mb-12">
                Simple 4-Step Process
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    number: "1",
                    title: "Consultation & Strategy Discussion",
                    description: "Share your trading goals.",
                  },
                  {
                    number: "2",
                    title: "Bot Development / Selection",
                    description:
                      "Choose from our ready-made bots or request a custom build.",
                  },
                  {
                    number: "3",
                    title: "Testing & Optimization",
                    description: "Backtest + demo testing before live use.",
                  },
                  {
                    number: "4",
                    title: "Deployment & Support",
                    description: "Go live with 24/7 support and monitoring.",
                  },
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold mb-4">{step.title}</h3>
                    <p className="text-neutral-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
