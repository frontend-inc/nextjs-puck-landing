import React from 'react';
import Section from '../shared/section';

interface Stat {
  percentage: string;
  label: string;
}

interface Stats1Props {
  title: string;
  description: string;
  stats: Stat[];
  bgColor?: string;
  darkMode?: boolean;
}

const Stats1: React.FC<Stats1Props> = ({
  title,
  description,
  stats,
  bgColor = "bg-gray-50",
  darkMode = false
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode} paddingY="lg" maxWidth="xl">
      <div className="space-y-12">
        {/* Title and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className={`text-3xl lg:text-4xl font-bold leading-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {title}
            </h2>
          </div>
          <div>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {description}
            </p>
          </div>
        </div>

        {/* Stats - Full width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${
                index !== 0 ? 'md:border-l-2 ' + (darkMode ? 'border-gray-700' : 'border-gray-200') : ''
              }`}
            >
              <div className={`text-5xl lg:text-6xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.percentage}
              </div>
              <div className={`text-base font-medium ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Stats1;