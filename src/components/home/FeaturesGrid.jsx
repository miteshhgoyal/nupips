import React from "react";
import {
  TrendingUp,
  Bot,
  Shield,
  Clock,
  BarChart3,
  Settings,
} from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      title: "Automation",
      description:
        "Automation is a powerful tool that can streamline processes, reduce human error, and improve efficiency.",

      icon: Bot,
    },
    {
      title: "Algorithms",
      description:
        "Access a diverse range of pre-built strategies or create your own custom algorithms to tailor your trading approach.",

      icon: TrendingUp,
    },
    {
      title: "Risk Management",
      description:
        "Utilize stop-loss, take-profit, and position sizing tools to manage and mitigate risks, safeguarding your investments.",

      icon: Shield,
    },
    {
      title: "Real-time",
      description:
        "Stay up to date with live market data and execute orders instantly, ensuring you make informed, timely decisions.",

      icon: Clock,
    },
    {
      title: "Backtesting",
      description:
        "Analyze your strategies using historical data, assess performance, and fine-tune your algorithms for improved results.",

      icon: BarChart3,
    },
    {
      title: "Customization",
      description:
        "Personalize your user interface and strategy settings to match your trading style, enhancing your overall trading experience.",

      icon: Settings,
    },
  ];

  return (
    <section className="flex items-center justify-center py-16 sm:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-6"
              >
                {/* Icon Circle */}

                <IconComponent className={`w-16 h-16 text-primary`} />

                {/* Title */}
                <h3 className={`text-2xl sm:text-3xl font-bold text-primary`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 leading-relaxed text-base sm:text-lg max-w-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
