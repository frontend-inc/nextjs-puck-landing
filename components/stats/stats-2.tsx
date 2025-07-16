import React from 'react';
import Section from '../shared/section';

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  description?: string;
}

interface Stats2Props {
  title?: string;
  description?: string;
  stats: StatItem[];
  bgColor?: string;
  darkMode?: boolean;
}

const Stats2: React.FC<Stats2Props> = ({
  title,
  description,
  stats,
  bgColor = "bg-white",
  darkMode = false
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode} paddingY="lg" maxWidth="xl">
      <div className="space-y-12">
        {/* Header section */}
        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {title && (
              <h2 className={`text-3xl lg:text-4xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center space-y-4 p-6 rounded-lg transition-all duration-200 ${
                darkMode 
                  ? 'hover:bg-gray-800/50' 
                  : 'hover:bg-gray-50'
              }`}
            >
              {/* Icon */}
              <div className={`flex justify-center ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                <div className="w-12 h-12 flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>

              {/* Value */}
              <div className={`text-3xl lg:text-4xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.value}
              </div>

              {/* Label */}
              <div className={`text-sm font-medium uppercase tracking-wider ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>

              {/* Optional description */}
              {stat.description && (
                <div className={`text-sm ${
                  darkMode ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Stats2;