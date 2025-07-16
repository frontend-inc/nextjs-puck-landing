import React from 'react';
import Section from '../shared/section';

interface Stat {
  percentage: string;
  label: string;
  description: string;
}

interface Stats3Props {
  tagline: string;
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryButtonOnClick?: () => void;
  stats: Stat[];
  bgColor?: string;
  darkMode?: boolean;
}

const Stats3: React.FC<Stats3Props> = ({
  tagline,
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  primaryButtonOnClick,
  secondaryButtonText,
  secondaryButtonHref,
  secondaryButtonOnClick,
  stats,
  bgColor = "bg-white",
  darkMode = false
}) => {
  const PrimaryButton = primaryButtonHref ? 'a' : 'button';
  const SecondaryButton = secondaryButtonHref ? 'a' : 'button';

  return (
    <Section bgColor={bgColor} darkMode={darkMode} paddingY="lg" maxWidth="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column - Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <p className={`text-sm font-semibold uppercase tracking-wider ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {tagline}
            </p>
            <h2 className={`text-3xl lg:text-4xl font-bold leading-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {title}
            </h2>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <PrimaryButton
              href={primaryButtonHref}
              onClick={primaryButtonOnClick}
              className={`px-6 py-3 font-medium rounded-md transition-colors ${
                darkMode
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              {primaryButtonText}
            </PrimaryButton>
            {secondaryButtonText && (
              <SecondaryButton
                href={secondaryButtonHref}
                onClick={secondaryButtonOnClick}
                className={`px-6 py-3 font-medium rounded-md border transition-colors flex items-center gap-2 ${
                  darkMode
                    ? 'border-gray-600 text-white hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {secondaryButtonText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SecondaryButton>
            )}
          </div>
        </div>

        {/* Right column - Stats */}
        <div className="space-y-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`border-l-4 pl-6 ${
                darkMode ? 'border-gray-600' : 'border-gray-200'
              }`}
            >
              <div className={`text-5xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.percentage}
              </div>
              <div className={`text-lg font-semibold mb-1 ${
                darkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {stat.label}
              </div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Stats3;