export type PuckConfigProps = {
  // Headers
  Header1: {
    bgColor?: string;
    imageUrl?: string;
    menuLinks?: Array<{
      label: string;
      href: string;
      subItems?: Array<{
        label: string;
        href: string;
      }>;
    }>;
    buttonCta?: string;
    buttonUrl?: string;
    secondaryButtonCta?: string;
    secondaryButtonUrl?: string;
  };
  
  // Heroes
  Hero: {
    title: string;
    subtitle: string;
    imageUrl: string;
    buttonCta: string;
    buttonUrl: string;
    secondaryButtonCta: string;
    secondaryButtonUrl: string;
    bgColor?: string;
  };
  Hero2: {
    title: string;
    subtitle: string;
    imageUrl: string;
    buttonCta: string;
    buttonUrl: string;
    secondaryButtonCta: string;
    secondaryButtonUrl: string;
    bgColor?: string;
  };
  Hero3: {
    title: string;
    subtitle: string;
    videoUrl: string;
    buttonCta: string;
    buttonUrl: string;
    secondaryButtonCta: string;
    secondaryButtonUrl: string;
    bgColor?: string;
  };
  
  // Features
  Features1: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle: string;
    imageUrl?: string;
    features?: Array<{
      title: string;
      description: string;
    }>;
    buttonCta?: string;
    buttonUrl?: string;
    secondaryButtonCta?: string;
    secondaryButtonUrl?: string;
  };
  Features2: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle: string;
    features?: Array<{
      icon?: string;
      title: string;
      description: string;
    }>;
    buttonCta?: string;
    buttonUrl?: string;
    secondaryButtonCta?: string;
    secondaryButtonUrl?: string;
  };
  Features3: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle: string;
    features?: Array<{
      icon?: string;
      title: string;
      description: string;
      buttonText?: string;
      buttonUrl?: string;
    }>;
  };
  Features4: {
    bgColor?: string;
    imageUrl?: string;
    items?: Array<{
      icon?: string;
      title: string;
      description: string;
      buttonText?: string;
      buttonUrl?: string;
    }>;
  };
  Features5: {
    bgColor?: string;
    title: string;
    features?: Array<{
      icon?: string;
      title: string;
      description: string;
    }>;
  };
  
  // Content
  Content1: {
    bgColor?: string;
    title: string;
    items?: Array<{
      imageUrl?: string;
      title: string;
      description: string;
      linkText?: string;
      linkUrl?: string;
    }>;
  };
  Content2: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    items?: Array<{
      backgroundImage?: string;
      tagline?: string;
      title: string;
      description: string;
      buttonText?: string;
      buttonUrl?: string;
    }>;
  };
  
  // Contact Us
  Contact1: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    nameLabel?: string;
    emailLabel?: string;
    messageLabel?: string;
    messagePlaceholder?: string;
    checkboxLabel?: string;
    buttonText?: string;
    onSubmit?: (data: {
      name: string;
      email: string;
      message: string;
      acceptTerms: boolean;
    }) => void;
  };
  Contact2: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    contacts?: Array<{
      icon: string;
      title: string;
      description: string;
      contactInfo: string;
    }>;
  };
  Contact3: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    contactInfo?: Array<{
      icon: string;
      value: string;
    }>;
    nameLabel?: string;
    emailLabel?: string;
    messageLabel?: string;
    messagePlaceholder?: string;
    checkboxLabel?: string;
    buttonText?: string;
    onSubmit?: (data: {
      name: string;
      email: string;
      message: string;
      acceptTerms: boolean;
    }) => void;
  };
  
  // Call to Actions
  CTA1: {
    bgColor?: string;
    title: string;
    subtitle: string;
    buttonCta: string;
    buttonUrl: string;
    secondaryButtonCta?: string;
    secondaryButtonUrl?: string;
  };
  CTA2: {
    bgColor?: string;
    title: string;
    subtitle: string;
    placeholder?: string;
    buttonText?: string;
    hint?: string;
    onSubmit?: (email: string) => void;
  };
  CTA3: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle: string;
    buttonCta: string;
    buttonUrl: string;
    secondaryButtonCta?: string;
    secondaryButtonUrl?: string;
  };
  CTA4: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle: string;
    placeholder?: string;
    buttonText?: string;
    hint?: string;
    onSubmit?: (email: string) => void;
  };
  
  // FAQs
  Faq1: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
  };
  Faq2: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
  };
  Faq3: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
  };
  Faq4: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
  };
  
  // Pricing
  Pricing1: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    plans?: Array<{
      name: string;
      price: string;
      period: string;
      yearlyPrice?: string;
      features: Array<{ feature: string }>;
      buttonText: string;
      buttonUrl: string;
      highlighted?: boolean;
    }>;
  };
  Pricing2: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    plans?: Array<{
      name: string;
      price: string;
      period: string;
      description: string;
      buttonText: string;
      buttonUrl: string;
      highlighted?: boolean;
    }>;
    featureCategories?: Array<{
      categoryName: string;
      features: Array<{
        name: string;
        basic: string | boolean;
        business: string | boolean;
        enterprise: string | boolean;
      }>;
    }>;
  };
  
  // Testimonials
  Testimonials1: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    testimonials?: Array<{
      quote: string;
      name: string;
      position: string;
      company: string;
      avatar?: string;
      logo?: string;
    }>;
  };
  Testimonials2: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    testimonials?: Array<{
      quote: string;
      name: string;
      position: string;
      company: string;
      avatar?: string;
      rating?: number;
    }>;
  };
  Testimonials3: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    testimonials?: Array<{
      quote: string;
      name: string;
      position: string;
      company: string;
      avatar?: string;
      logo?: string;
      rating?: number;
    }>;
  };
  Testimonials4: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    testimonials?: Array<{
      quote: string;
      name: string;
      position: string;
      company: string;
      avatar?: string;
      logo?: string;
      ctaText?: string;
      ctaUrl?: string;
    }>;
  };
  
  // Quotes
  Quote1: {
    bgColor?: string;
    logo?: string;
    quote: string;
    name: string;
    position: string;
    company: string;
    avatar?: string;
  };
  
  // Logos
  Logos1: {
    bgColor?: string;
    tagline?: string;
    title?: string;
    subtitle?: string;
    logos?: Array<{
      src: string;
      alt: string;
      width?: number;
      height?: number;
    }>;
    speed?: "slow" | "normal" | "fast";
  };
  Logos2: {
    bgColor?: string;
    tagline?: string;
    title?: string;
    subtitle?: string;
    logos?: Array<{
      src: string;
      alt: string;
      width?: number;
      height?: number;
    }>;
    columns?: number;
  };
  
  // Footers
  Footer1: {
    imageUrl?: string;
    menuLinks?: Array<{
      label: string;
      href: string;
    }>;
    socialLinks?: Array<{
      platform: string;
      href: string;
      icon: React.ReactNode;
    }>;
    darkMode?: boolean;
    copyrightText?: string;
    legalLinks?: Array<{
      label: string;
      href: string;
    }>;
  };
  Footer2: {
    imageUrl?: string;
    footerLinks?: Array<{
      label: string;
      href: string;
    }>;
    privacyPolicyUrl?: string;
    darkMode?: boolean;
    copyrightText?: string;
    legalLinks?: Array<{
      label: string;
      href: string;
    }>;
    onSubmit?: (email: string) => void;
  };
  
  // Teams
  Team1: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    teamMembers?: Array<{
      name: string;
      jobTitle: string;
      description: string;
      imageUrl?: string;
      linkedinUrl?: string;
      twitterUrl?: string;
    }>;
    darkMode?: boolean;
  };
  Team2: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    teamMembers?: Array<{
      name: string;
      jobTitle: string;
      description: string;
      imageUrl?: string;
      linkedinUrl?: string;
      twitterUrl?: string;
    }>;
    darkMode?: boolean;
  };
  Team3: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    teamMembers?: Array<{
      name: string;
      jobTitle: string;
      description: string;
      imageUrl?: string;
      linkedinUrl?: string;
      twitterUrl?: string;
    }>;
    darkMode?: boolean;
  };
  Team4: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    teamMembers?: Array<{
      name: string;
      jobTitle: string;
      description: string;
      imageUrl?: string;
      linkedinUrl?: string;
      twitterUrl?: string;
    }>;
    darkMode?: boolean;
    buttonText?: string;
    buttonUrl?: string;
  };
  Team5: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    teamMembers?: Array<{
      name: string;
      jobTitle: string;
      description: string;
      imageUrl?: string;
      linkedinUrl?: string;
      twitterUrl?: string;
    }>;
    darkMode?: boolean;
  };

  // Stats
  Stats1: {
    title: string;
    description: string;
    stats: Array<{
      percentage: string;
      label: string;
    }>;
    bgColor?: string;
    darkMode?: boolean;
  };

  Stats2: {
    title?: string;
    description?: string;
    stats: Array<{
      icon: React.ReactNode;
      label: string;
      value: string;
      description?: string;
    }>;
    bgColor?: string;
    darkMode?: boolean;
  };

  Stats3: {
    tagline: string;
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonHref?: string;
    primaryButtonOnClick?: () => void;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    secondaryButtonOnClick?: () => void;
    stats: Array<{
      percentage: string;
      label: string;
      description: string;
    }>;
    bgColor?: string;
    darkMode?: boolean;
  };

  // Blogs
  BlogList1: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    posts?: Array<{
      id: string;
      title: string;
      excerpt: string;
      category: string;
      author: {
        name: string;
        avatar?: string;
      };
      publishedAt: string;
      readTime: string;
      imageUrl?: string;
      slug: string;
    }>;
    darkMode?: boolean;
  };

  BlogList2: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    posts?: Array<{
      id: string;
      title: string;
      excerpt: string;
      category: string;
      author: {
        name: string;
        avatar?: string;
      };
      publishedAt: string;
      readTime: string;
      imageUrl?: string;
      slug: string;
    }>;
    darkMode?: boolean;
  };

  BlogList3: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    posts?: Array<{
      id: string;
      title: string;
      excerpt: string;
      category: string;
      author: {
        name: string;
        avatar?: string;
      };
      publishedAt: string;
      readTime: string;
      imageUrl?: string;
      slug: string;
    }>;
    darkMode?: boolean;
  };

  BlogList4: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    posts?: Array<{
      id: string;
      title: string;
      excerpt: string;
      category: string;
      author: {
        name: string;
        avatar?: string;
      };
      publishedAt: string;
      readTime: string;
      imageUrl?: string;
      slug: string;
    }>;
    viewAllText?: string;
    viewAllUrl?: string;
    darkMode?: boolean;
  };

  BlogList5: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    posts?: Array<{
      id: string;
      title: string;
      excerpt: string;
      category: string;
      author: {
        name: string;
        avatar?: string;
      };
      publishedAt: string;
      readTime: string;
      imageUrl?: string;
      slug: string;
    }>;
    darkMode?: boolean;
  };

  BlogList6: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    posts?: Array<{
      id: string;
      title: string;
      excerpt: string;
      category: string;
      author: {
        name: string;
        avatar?: string;
      };
      publishedAt: string;
      readTime: string;
      imageUrl?: string;
      slug: string;
    }>;
    darkMode?: boolean;
  };

  BlogList7: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    posts?: Array<{
      id: string;
      title: string;
      excerpt: string;
      category: string;
      author: {
        name: string;
        avatar?: string;
      };
      publishedAt: string;
      readTime: string;
      imageUrl?: string;
      slug: string;
    }>;
    darkMode?: boolean;
  };

  BlogHeading1: {
    bgColor?: string;
    breadcrumbs?: Array<{
      label: string;
      href?: string;
    }>;
    title: string;
    author?: {
      name: string;
      avatar?: string;
    };
    publishedAt?: string;
    readTime?: string;
    featuredImage?: string;
    showSocialShare?: boolean;
    darkMode?: boolean;
  };

  BlogHeading2: {
    bgColor?: string;
    breadcrumbs?: Array<{
      label: string;
      href?: string;
    }>;
    title: string;
    subtitle?: string;
    author?: {
      name: string;
      avatar?: string;
      role?: string;
    };
    publishedAt?: string;
    readTime?: string;
    featuredImage?: string;
    showSocialShare?: boolean;
    darkMode?: boolean;
  };

  BlogHeading3: {
    category?: string;
    title: string;
    author?: {
      name: string;
      avatar?: string;
    };
    publishedAt?: string;
    readTime?: string;
    backgroundImage?: string;
    overlayOpacity?: number;
    darkMode?: boolean;
  };

  EventList1: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    events?: Array<{
      id: string;
      title: string;
      description: string;
      category: string;
      date: string;
      location: string;
      imageUrl?: string;
      slug: string;
    }>;
    darkMode?: boolean;
  };

  EventList2: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    events?: Array<{
      id: string;
      title: string;
      description: string;
      category: string;
      date: string;
      location: string;
      imageUrl?: string;
      slug: string;
    }>;
    darkMode?: boolean;
  };

  EventList3: {
    bgColor?: string;
    tagline?: string;
    title: string;
    subtitle?: string;
    events?: Array<{
      id: string;
      title: string;
      description: string;
      category: string;
      date: string;
      location: string;
      imageUrl?: string;
      slug: string;
    }>;
    darkMode?: boolean;
  };

  EventHero1: {
    bgColor?: string;
    backLink?: {
      text: string;
      href: string;
    };
    title: string;
    description: string;
    eventDate: string;
    spotsLeft?: number;
    featuredImage?: string;
    emailPlaceholder?: string;
    ctaText?: string;
    termsText?: string;
    termsLink?: string;
    darkMode?: boolean;
  };

  EventHero2: {
    backLink?: {
      text: string;
      href: string;
    };
    title: string;
    description: string;
    eventDate: string;
    spotsLeft?: number;
    backgroundImage?: string;
    overlayOpacity?: number;
    emailPlaceholder?: string;
    ctaText?: string;
    termsText?: string;
    termsLink?: string;
  };

  EventHero3: {
    bgColor?: string;
    title: string;
    description: string;
    eventDate: string;
    eventTime?: string;
    location?: string;
    emailPlaceholder?: string;
    ctaText?: string;
    termsText?: string;
    termsLink?: string;
    darkMode?: boolean;
  };
};