 "use client";


import React from 'react';
import { Card } from '@/components/ui/card';
import { Box, LineChart, Settings, Trophy, Globe2, HeadphonesIcon, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Keyword Ranking",
    description: "Customize your business journey effortwith Youflow's dashboard, backed by a suite",
    icon: Box,
  },
  {
    title: "Measure Performance",
    description: "Customize your business journey effortwith Youflow's dashboard, backed by a suite",
    icon: Settings,
  },
  {
    title: "Winning Content",
    description: "Customize your business journey effortwith Youflow's dashboard, backed by a suite",
    icon: Trophy,
  },
  {
    title: "Over 100 Countries",
    description: "Customize your business journey effortwith Youflow's dashboard, backed by a suite",
    icon: Globe2,
  },
  {
    title: "Unlimited Support",
    description: "Customize your business journey effortwith Youflow's dashboard, backed by a suite",
    icon: HeadphonesIcon,
  },
  {
    title: "Advance Analytics",
    description: "Customize your business journey effortwith Youflow's dashboard, backed by a suite",
    icon: BarChart,
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut"
    }}
    whileHover={{ scale: 1.02 }}
    className="bg-white p-8 rounded-lg shadow-sm"
  >
    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
      <div className="w-6 h-6 text-green-500">
        <Icon />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function Features() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#F6F8F7' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-500 font-medium mb-4 inline-block">Our Features</span>
          <h2 className="text-4xl font-bold mb-4">
            The Label For All Traditional<br />Management Apps
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Customize your business journey effortlessly with Youflow&apos;s dashboard,
            backed by a suite of powerful tools at your fingertips.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}