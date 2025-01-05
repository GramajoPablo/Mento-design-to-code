"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "19",
      features: [
        "Up to 5 team members",
        "Basic task management",
        "Limited analytics",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "49",
      features: [
        "Up to 20 team members",
        "Advanced task management",
        "Full analytics suite",
        "Priority support",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Team",
      price: "109",
      features: [
        "Unlimited team members",
        "Enterprise-grade security",
        "Advanced analytics & reporting",
        "24/7 phone support",
        "Custom training",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-6 h-full ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-primary mr-2 h-5 w-5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}