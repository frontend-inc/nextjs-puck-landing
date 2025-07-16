import type { Config } from "@measured/puck";
import type { PuckConfigProps } from "./puck.config.types";
// Headers
import Header1 from "@/components/headers/header-1";
// Heroes
import Hero from "@/components/heros/hero-1";
import Hero2 from "@/components/heros/hero-2";
import Hero3 from "@/components/heros/hero-3";
// Features
import Features1 from "@/components/features/features-1";
import Features2 from "@/components/features/features-2";
import Features3 from "@/components/features/features-3";
import Features4 from "@/components/features/features-4";
import Features5 from "@/components/features/features-5";
// Content
import Content1 from "@/components/content/content-1";
import Content2 from "@/components/content/content-2";
// Contact Us
import Contact1 from "@/components/contact-us/contact-1";
import Contact2 from "@/components/contact-us/contact-2";
import Contact3 from "@/components/contact-us/contact-3";
// Call to Actions
import CTA1 from "@/components/call-to-actions/cta-1";
import CTA2 from "@/components/call-to-actions/cta-2";
import CTA3 from "@/components/call-to-actions/cta-3";
import CTA4 from "@/components/call-to-actions/cta-4";
// FAQs
import Faq1 from "@/components/faqs/faq-1";
import Faq2 from "@/components/faqs/faq-2";
import Faq3 from "@/components/faqs/faq-3";
import Faq4 from "@/components/faqs/faq-4";
// Pricing
import Pricing1 from "@/components/pricing/pricing-1";
import Pricing2 from "@/components/pricing/pricing-2";
// Testimonials
import Testimonials1 from "@/components/testimonials/testimonials-1";
import Testimonials2 from "@/components/testimonials/testimonials-2";
import Testimonials3 from "@/components/testimonials/testimonials-3";
import Testimonials4 from "@/components/testimonials/testimonials-4";
// Quotes
import Quote1 from "@/components/quotes/quote-1";
// Logos
import Logos1 from "@/components/logos/logos-1";
import Logos2 from "@/components/logos/logos-2";
// Footers
import Footer1 from "@/components/footers/footer-1";
import Footer2 from "@/components/footers/footer-2";
// Teams
import Team1 from "@/components/teams/team-1";
import Team2 from "@/components/teams/team-2";
import Team3 from "@/components/teams/team-3";
import Team4 from "@/components/teams/team-4";
import Team5 from "@/components/teams/team-5";

// Stats
import Stats1 from "@/components/stats/stats-1";
import Stats2 from "@/components/stats/stats-2";
import Stats3 from "@/components/stats/stats-3";
// Blogs
import BlogList1 from "@/components/blogs/blog-list-1";
import BlogList2 from "@/components/blogs/blog-list-2";
import BlogList3 from "@/components/blogs/blog-list-3";
import BlogList4 from "@/components/blogs/blog-list-4";
import BlogList5 from "@/components/blogs/blog-list-5";
import BlogHeading1 from "@/components/blogs/blog-heading-1";
import BlogHeading2 from "@/components/blogs/blog-heading-2";
import BlogHeading3 from "@/components/blogs/blog-heading-3";
import BlogList6 from "@/components/blogs/blog-list-6";
import BlogList7 from "@/components/blogs/blog-list-7";
// Events
import EventList1 from "@/components/events/event-list-1";
import EventList2 from "@/components/events/event-list-2";
import EventList3 from "@/components/events/event-list-3";
import EventHero1 from "@/components/events/event-hero-1";
import EventHero2 from "@/components/events/event-hero-2";
import EventHero3 from "@/components/events/event-hero-3";

const darkMode = {
  darkMode: {
    type: "select",
    label: "Dark Mode",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true }
    ]
  }
}

const bgColor = { 
  bgColor: {
    type: "text",
    label: "Background Color (Tailwind class)"
  }        
}

export const config: Config<PuckConfigProps> = {
  categories: {
    headers: {
      title: "Headers",
      components: ["Header1"]
    },
    heroes: {
      title: "Heroes",
      components: ["Hero", "Hero2", "Hero3"]
    },
    features: {
      title: "Features",
      components: ["Features1", "Features2", "Features3", "Features4", "Features5"]
    },
    content: {
      title: "Content",
      components: ["Content1", "Content2"]
    },
    contact: {
      title: "Contact Us",
      components: ["Contact1", "Contact2", "Contact3"]
    },
    cta: {
      title: "Call to Actions",
      components: ["CTA1", "CTA2", "CTA3", "CTA4"]
    },
    faqs: {
      title: "FAQs",
      components: ["Faq1", "Faq2", "Faq3", "Faq4"]
    },
    pricing: {
      title: "Pricing",
      components: ["Pricing1", "Pricing2"]
    },
    testimonials: {
      title: "Testimonials",
      components: ["Testimonials1", "Testimonials2", "Testimonials3", "Testimonials4"]
    },
    quotes: {
      title: "Quotes",
      components: ["Quote1"]
    },
    logos: {
      title: "Logos",
      components: ["Logos1", "Logos2"]
    },
    footers: {
      title: "Footers",
      components: ["Footer1", "Footer2"]
    },
    teams: {
      title: "Teams",
      components: ["Team1", "Team2", "Team3", "Team4", "Team5"]
    },
    stats: {
      title: "Stats",
      components: ["Stats1", "Stats2", "Stats3"]
    },
    blogs: {
      title: "Blogs",
      components: ["BlogList1", "BlogList2", "BlogList3", "BlogList4", "BlogList5", "BlogList6", "BlogList7", "BlogHeading1", "BlogHeading2", "BlogHeading3"]
    },
    events: {
      title: "Events",
      components: ["EventList1", "EventList2", "EventList3", "EventHero1", "EventHero2", "EventHero3"]
    }
  },
  components: {
    // Headers
    Header1: {
      fields: {
        ...darkMode,
        ...bgColor,
        imageUrl: {
          type: "text",
          label: "Logo Image URL"
        },
        menuLinks: {
          type: "array",
          label: "Menu Links",
          arrayFields: {
            label: { type: "text", label: "Label" },
            href: { type: "text", label: "URL" },
            subItems: {
              type: "array",
              label: "Dropdown Items",
              arrayFields: {
                label: { type: "text", label: "Label" },
                href: { type: "text", label: "URL" }
              }
            }
          },
        },
        buttonCta: {
          type: "text",
          label: "Primary Button Text"
        },
        buttonUrl: {
          type: "text",
          label: "Primary Button URL"
        },
        secondaryButtonCta: {
          type: "text",
          label: "Secondary Button Text"
        },
        secondaryButtonUrl: {
          type: "text",
          label: "Secondary Button URL"
        }
      },
      defaultProps: {
        darkMode: false,
        bgColor: "bg-white",
        imageUrl: "",
        menuLinks: [
          { label: "Link One", href: "#" },
          { label: "Link Two", href: "#" },
          { label: "Link Three", href: "#" },
          {
            label: "Link Four",
            href: "#",
            subItems: [
              { label: "Link Five", href: "#" },
              { label: "Link Six", href: "#" },
              { label: "Link Seven", href: "#" }
            ]
          }
        ],
        buttonCta: "Button",
        buttonUrl: "#",
        secondaryButtonCta: "Button",
        secondaryButtonUrl: "#"
      },
      render: Header1,
    },
    
    // Heroes
    Hero: {
      fields: {
        ...darkMode,
        ...bgColor,
        title: { 
          type: "text",
          label: "Title"
        },
        subtitle: { 
          type: "textarea",
          label: "Subtitle"
        },
        imageUrl: { 
          type: "text",
          label: "Image URL"
        },
        buttonCta: { 
          type: "text",
          label: "Primary Button Text"
        },
        buttonUrl: { 
          type: "text",
          label: "Primary Button URL"
        },
        secondaryButtonCta: { 
          type: "text",
          label: "Secondary Button Text"
        },
        secondaryButtonUrl: { 
          type: "text",
          label: "Secondary Button URL"
        },
        bgColor: { 
          type: "text",
          label: "Background Color"
        }
      },
      defaultProps: {
        title: "Medium length hero headline goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        imageUrl: "https://placehold.co/800x600.jpg",
        buttonCta: "Button",
        buttonUrl: "#",
        secondaryButtonCta: "Button",
        secondaryButtonUrl: "#",
        bgColor: "",
        darkMode: false
      },
      render: Hero,
    },
    Hero2: {
      fields: {
        title: { 
          type: "text",
          label: "Title"
        },
        subtitle: { 
          type: "textarea",
          label: "Subtitle"
        },
        imageUrl: { 
          type: "text",
          label: "Background Image URL"
        },
        buttonCta: { 
          type: "text",
          label: "Primary Button Text"
        },
        buttonUrl: { 
          type: "text",
          label: "Primary Button URL"
        },
        secondaryButtonCta: { 
          type: "text",
          label: "Secondary Button Text"
        },
        secondaryButtonUrl: { 
          type: "text",
          label: "Secondary Button URL"
        },        
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        title: "Medium length hero heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        imageUrl: "https://placehold.co/1920x1080",
        buttonCta: "Button",
        buttonUrl: "#",
        secondaryButtonCta: "Button",
        secondaryButtonUrl: "#",
        bgColor: "bg-gray-900",
        darkMode: true
      },
      render: Hero2,
    },
    Hero3: {
      fields: {
        title: { 
          type: "text",
          label: "Title"
        },
        subtitle: { 
          type: "textarea",
          label: "Subtitle"
        },
        videoUrl: { 
          type: "text",
          label: "Video URL"
        },
        buttonCta: { 
          type: "text",
          label: "Primary Button Text"
        },
        buttonUrl: { 
          type: "text",
          label: "Primary Button URL"
        },
        secondaryButtonCta: { 
          type: "text",
          label: "Secondary Button Text"
        },
        secondaryButtonUrl: { 
          type: "text",
          label: "Secondary Button URL"
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        title: "Medium length hero headline goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        buttonCta: "Button",
        buttonUrl: "#",
        secondaryButtonCta: "Button",
        secondaryButtonUrl: "#",
        bgColor: "bg-gray-50",
        darkMode: false,
      },
      render: Hero3,
    },
    
    // Features
    Features1: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle"
        },
        imageUrl: {
          type: "text",
          label: "Image URL"
        },
        features: {
          type: "array",
          label: "Features",
          arrayFields: {
            title: { type: "text", label: "Feature Title" },
            description: { type: "textarea", label: "Feature Description" }
          }
        },
        buttonCta: {
          type: "text",
          label: "Primary Button Text"
        },
        buttonUrl: {
          type: "text",
          label: "Primary Button URL"
        },
        secondaryButtonCta: {
          type: "text",
          label: "Secondary Button Text"
        },
        secondaryButtonUrl: {
          type: "text",
          label: "Secondary Button URL"
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Medium length section heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        imageUrl: "",
        features: [
          {
            title: "Subheading one",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          },
          {
            title: "Subheading two",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        ],
        buttonCta: "Button",
        buttonUrl: "#",
        secondaryButtonCta: "Button",
        secondaryButtonUrl: "#"
      },
      render: Features1,
    },
    Features2: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle"
        },
        features: {
          type: "array",
          label: "Features",
          arrayFields: {
            icon: { type: "text", label: "Remix Icon Class (e.g. ri-check-line)" },
            title: { type: "text", label: "Feature Title" },
            description: { type: "textarea", label: "Feature Description" }
          }
        },
        buttonCta: {
          type: "text",
          label: "Primary Button Text"
        },
        buttonUrl: {
          type: "text",
          label: "Primary Button URL"
        },
        secondaryButtonCta: {
          type: "text",
          label: "Secondary Button Text"
        },
        secondaryButtonUrl: {
          type: "text",
          label: "Secondary Button URL"
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Medium length section heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        features: [
          {
            icon: "ri-check-line",
            title: "Feature one",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          },
          {
            icon: "ri-settings-line",
            title: "Feature two", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          },
          {
            icon: "ri-star-line",
            title: "Feature three",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        ],
        buttonCta: "Button",
        buttonUrl: "#",
        secondaryButtonCta: "Button",
        secondaryButtonUrl: "#"
      },
      render: Features2,
    },
    Features3: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle"
        },
        features: {
          type: "array",
          label: "Features",
          arrayFields: {
            icon: { type: "text", label: "Remix Icon Class (e.g. ri-check-line)" },
            title: { type: "text", label: "Feature Title" },
            description: { type: "textarea", label: "Feature Description" },
            buttonText: { type: "text", label: "Button Text (optional)" },
            buttonUrl: { type: "text", label: "Button URL (optional)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Medium length section heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        features: [
          {
            icon: "ri-check-line",
            title: "Feature one",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
            buttonText: "Learn more"
          },
          {
            icon: "ri-settings-line",
            title: "Feature two",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
            buttonText: "Learn more"
          }
        ]
      },
      render: Features3,
    },
    Features4: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        imageUrl: {
          type: "text",
          label: "Image URL"
        },
        items: {
          type: "array",
          label: "Feature Items",
          arrayFields: {
            icon: { type: "text", label: "Remix Icon Class (e.g. ri-check-line)" },
            title: { type: "text", label: "Title" },
            description: { type: "textarea", label: "Description" },
            buttonText: { type: "text", label: "Button Text (optional)" },
            buttonUrl: { type: "text", label: "Button URL (optional)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        imageUrl: "",
        items: [
          {
            icon: "ri-check-line",
            title: "Short heading here",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            buttonText: "Button"
          },
          {
            icon: "ri-settings-line",
            title: "Short heading here",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            buttonText: "Button"
          },
          {
            icon: "ri-star-line",
            title: "Short heading here",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            buttonText: "Button"
          },
          {
            icon: "ri-heart-line",
            title: "Short heading here",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            buttonText: "Button"
          }
        ]
      },
      render: Features4,
    },
    Features5: {
      fields: {        
        title: {
          type: "text",
          label: "Title"
        },
        features: {
          type: "array",
          label: "Features",
          arrayFields: {
            icon: { type: "text", label: "Remix Icon Class (e.g. ri-check-line)" },
            title: { type: "text", label: "Feature Title" },
            description: { type: "textarea", label: "Feature Description" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        title: "Long heading is what you see here in this feature section",
        features: [
          {
            icon: "ri-check-line",
            title: "Long heading is what you see here in this feature section",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
          },
          {
            icon: "ri-settings-line",
            title: "Long heading is what you see here in this feature section",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
          },
          {
            icon: "ri-star-line",
            title: "Long heading is what you see here in this feature section",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
          }
        ]
      },
      render: Features5,
    },
    
    // Content
    Content1: {
      fields: {
        title: {
          type: "text",
          label: "Title"
        },
        items: {
          type: "array",
          label: "Content Items",
          arrayFields: {
            imageUrl: { type: "text", label: "Image URL (optional)" },
            title: { type: "text", label: "Title" },
            description: { type: "textarea", label: "Description" },
            linkText: { type: "text", label: "Link Text (optional)" },
            linkUrl: { type: "text", label: "Link URL (optional)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        title: "Highlight key features of the product or service",
        items: [
          {
            title: "Describe feature one and its benefits",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
            linkText: "Learn",
            linkUrl: "#"
          },
          {
            title: "Describe feature two and its benefits",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
            linkText: "Learn",
            linkUrl: "#"
          },
          {
            title: "Describe feature three and its benefits",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
            linkText: "Learn",
            linkUrl: "#"
          }
        ]
      },
      render: Content1,
    },
    Content2: {
      fields: {        
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        items: {
          type: "array",
          label: "Content Items",
          arrayFields: {
            backgroundImage: { type: "text", label: "Background Image URL" },
            tagline: { type: "text", label: "Item Tagline (optional)" },
            title: { type: "text", label: "Title" },
            description: { type: "textarea", label: "Description" },
            buttonText: { type: "text", label: "Button Text (optional)" },
            buttonUrl: { type: "text", label: "Button URL (optional)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        items: [
          {
            backgroundImage: "https://placehold.co/400x500.jpg",
            tagline: "Tagline",
            title: "Short heading goes here",
            description: "Lorem ipsum dolor sit amet...",
            buttonText: "Button",
            buttonUrl: "#"
          },
          {
            backgroundImage: "https://placehold.co/400x500.jpg",
            tagline: "Tagline",
            title: "Short heading goes here",
            description: "Lorem ipsum dolor sit amet...",
            buttonText: "Button",
            buttonUrl: "#"
          },
          {
            backgroundImage: "https://placehold.co/400x500.jpg",
            tagline: "Tagline",
            title: "Short heading goes here",
            description: "Lorem ipsum dolor sit amet...",
            buttonText: "Button",
            buttonUrl: "#"
          }
        ]
      },
      render: Content2,
    },
    
    // Contact Us
    Contact1: {
      fields: {        
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        nameLabel: {
          type: "text",
          label: "Name Field Label"
        },
        emailLabel: {
          type: "text",
          label: "Email Field Label"
        },
        messageLabel: {
          type: "text",
          label: "Message Field Label"
        },
        messagePlaceholder: {
          type: "text",
          label: "Message Placeholder"
        },
        checkboxLabel: {
          type: "text",
          label: "Checkbox Label"
        },
        buttonText: {
          type: "text",
          label: "Button Text"
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Contact us",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        messagePlaceholder: "Type your message...",
        checkboxLabel: "I accept the Terms",
        buttonText: "Submit"
      },
      render: Contact1,
    },
    Contact2: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        contacts: {
          type: "array",
          label: "Contact Items",
          arrayFields: {
            icon: { type: "text", label: "Remix Icon Class (e.g. ri-mail-line)" },
            title: { type: "text", label: "Title" },
            description: { type: "textarea", label: "Description" },
            contactInfo: { type: "text", label: "Contact Information" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Contact us",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        contacts: [
          {
            icon: "ri-mail-line",
            title: "Email",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            contactInfo: "email@example.com"
          },
          {
            icon: "ri-phone-line",
            title: "Phone",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            contactInfo: "+1 (555) 000-0000"
          },
          {
            icon: "ri-map-pin-line",
            title: "Office",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            contactInfo: "123 Sample St, Sydney NSW 2000 AU"
          }
        ]
      },
      render: Contact2,
    },
    Contact3: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        contactInfo: {
          type: "array",
          label: "Contact Information",
          arrayFields: {
            icon: { type: "text", label: "Remix Icon Class (e.g. ri-mail-line)" },
            value: { type: "text", label: "Contact Value" }
          }
        },
        nameLabel: {
          type: "text",
          label: "Name Field Label"
        },
        emailLabel: {
          type: "text",
          label: "Email Field Label"
        },
        messageLabel: {
          type: "text",
          label: "Message Field Label"
        },
        messagePlaceholder: {
          type: "text",
          label: "Message Placeholder"
        },
        checkboxLabel: {
          type: "text",
          label: "Checkbox Label"
        },
        buttonText: {
          type: "text",
          label: "Button Text"
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Contact us",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        contactInfo: [
          {
            icon: "ri-mail-line",
            value: "email@example.com"
          },
          {
            icon: "ri-phone-line",
            value: "+1 (555) 000-0000"
          },
          {
            icon: "ri-map-pin-line",
            value: "123 Sample St, Sydney NSW 2000 AU"
          }
        ],
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        messagePlaceholder: "Type your message...",
        checkboxLabel: "I accept the Terms",
        buttonText: "Submit"
      },
      render: Contact3,
    },
    
    // Call to Actions
    CTA1: {
      fields: {        
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle"
        },
        buttonCta: {
          type: "text",
          label: "Primary Button Text"
        },
        buttonUrl: {
          type: "text",
          label: "Primary Button URL"
        },
        secondaryButtonCta: {
          type: "text",
          label: "Secondary Button Text"
        },
        secondaryButtonUrl: {
          type: "text",
          label: "Secondary Button URL"
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-gray-50",
        title: "Medium length hero heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        buttonCta: "Button",
        buttonUrl: "#",
        secondaryButtonCta: "Button",
        secondaryButtonUrl: "#"
      },
      render: CTA1,
    },
    CTA2: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle"
        },
        placeholder: {
          type: "text",
          label: "Input Placeholder"
        },
        buttonText: {
          type: "text",
          label: "Button Text"
        },
        hint: {
          type: "text",
          label: "Hint Text (below input)"
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-gray-50",
        title: "Medium length hero heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        placeholder: "Enter your email",
        buttonText: "Sign up",
        hint: "By clicking Sign Up you're confirming that you agree with our Terms and Conditions."
      },
      render: CTA2,
    },
    CTA3: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle"
        },
        buttonCta: {
          type: "text",
          label: "Primary Button Text"
        },
        buttonUrl: {
          type: "text",
          label: "Primary Button URL"
        },
        secondaryButtonCta: {
          type: "text",
          label: "Secondary Button Text"
        },
        secondaryButtonUrl: {
          type: "text",
          label: "Secondary Button URL"
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-gray-50",
        tagline: "Tagline",
        title: "Short heading here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        buttonCta: "Button",
        buttonUrl: "#",
        secondaryButtonCta: "Button",
        secondaryButtonUrl: "#"
      },
      render: CTA3,
    },
    CTA4: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle"
        },
        placeholder: {
          type: "text",
          label: "Input Placeholder"
        },
        buttonText: {
          type: "text",
          label: "Button Text"
        },
        hint: {
          type: "text",
          label: "Hint Text (below input)"
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-gray-50",
        tagline: "Tagline",
        title: "Short heading here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        placeholder: "Enter your email",
        buttonText: "Sign up",
        hint: "By clicking Sign Up you're confirming that you agree with our Terms and Conditions."
      },
      render: CTA4,
    },

    // FAQs
    Faq1: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle"
        },
        faqs: {
          type: "array",
          label: "FAQ Items",
          arrayFields: {
            question: { type: "text", label: "Question" },
            answer: { type: "textarea", label: "Answer" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Support",
        title: "Frequently asked questions",
        subtitle: "Everything you need to know about our product and billing.",
        faqs: [
          {
            question: "What's the best thing about Switzerland?",
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
          },
          {
            question: "How do you make holy water?",
            answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
          },
          {
            question: "Why do you never see elephants hiding in trees?",
            answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
          }
        ]
      },
      render: Faq1,
    },

    Faq2: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle"
        },
        faqs: {
          type: "array",
          label: "FAQ Items",
          arrayFields: {
            question: { type: "text", label: "Question" },
            answer: { type: "textarea", label: "Answer" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Support",
        title: "Frequently asked questions",
        subtitle: "Everything you need to know about our product and billing.",
        faqs: [
          {
            question: "What's the best thing about Switzerland?",
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
          },
          {
            question: "How do you make holy water?",
            answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
          },
          {
            question: "Why do you never see elephants hiding in trees?",
            answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
          }
        ]
      },
      render: Faq2,
    },

    Faq3: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle"
        },
        faqs: {
          type: "array",
          label: "FAQ Items",
          arrayFields: {
            question: { type: "text", label: "Question" },
            answer: { type: "textarea", label: "Answer" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Support",
        title: "Frequently asked questions",
        subtitle: "Everything you need to know about our product and billing.",
        faqs: [
          {
            question: "What's the best thing about Switzerland?",
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
          },
          {
            question: "How do you make holy water?",
            answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
          },
          {
            question: "Why do you never see elephants hiding in trees?",
            answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
          }
        ]
      },
      render: Faq3,
    },

    Faq4: {
      fields: {     
        tagline: {
          type: "text",
          label: "Tagline"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle"
        },
        faqs: {
          type: "array",
          label: "FAQ Items",
          arrayFields: {
            question: { type: "text", label: "Question" },
            answer: { type: "textarea", label: "Answer" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Support",
        title: "FAQs",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        faqs: [
          {
            question: "Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          },
          {
            question: "Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          },
          {
            question: "Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          },
          {
            question: "Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          },
          {
            question: "Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          },
          {
            question: "Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          }
        ]
      },
      render: Faq4,
    },

    // Pricing
    Pricing1: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle (optional)"
        },
        plans: {
          type: "array",
          label: "Pricing Plans",
          arrayFields: {
            name: { type: "text", label: "Plan Name" },
            price: { type: "text", label: "Price" },
            period: { type: "text", label: "Period (e.g., /month)" },
            yearlyPrice: { type: "text", label: "Yearly Price (optional)" },
            features: { 
              type: "array", 
              label: "Features",
              arrayFields: {
                feature: { type: "text", label: "Feature" }
              }
            },
            buttonText: { type: "text", label: "Button Text" },
            buttonUrl: { type: "text", label: "Button URL" },
            highlighted: { type: "select", label: "Highlighted", options: [
              { label: "No", value: false },
              { label: "Yes", value: true }
            ]}
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Pricing",
        title: "Choose your plan",
        subtitle: "Start building for free, then add a site plan to go live. Account plans unlock additional features.",
        plans: [
          {
            name: "Basic",
            price: "$9",
            period: "/month",
            yearlyPrice: "$99/year",
            features: [
              { feature: "Up to 5 projects" },
              { feature: "Basic support" },
              { feature: "1GB storage" },
              { feature: "Email support" }
            ],
            buttonText: "Get started",
            buttonUrl: "#",
            highlighted: false
          },
          {
            name: "Pro",
            price: "$29",
            period: "/month",
            yearlyPrice: "$299/year",
            features: [
              { feature: "Up to 50 projects" },
              { feature: "Priority support" },
              { feature: "10GB storage" },
              { feature: "Phone support" },
              { feature: "Advanced analytics" }
            ],
            buttonText: "Get started",
            buttonUrl: "#",
            highlighted: true
          },
          {
            name: "Enterprise",
            price: "$99",
            period: "/month",
            yearlyPrice: "$999/year",
            features: [
              { feature: "Unlimited projects" },
              { feature: "24/7 support" },
              { feature: "100GB storage" },
              { feature: "Dedicated account manager" },
              { feature: "Custom integrations" }
            ],
            buttonText: "Contact sales",
            buttonUrl: "#",
            highlighted: false
          }
        ]
      },
      render: Pricing1,
    },
    Pricing2: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle (optional)"
        },
        plans: {
          type: "array",
          label: "Pricing Plans",
          arrayFields: {
            name: { type: "text", label: "Plan Name" },
            price: { type: "text", label: "Price" },
            period: { type: "text", label: "Period (e.g., month)" },
            description: { type: "text", label: "Description" },
            buttonText: { type: "text", label: "Button Text" },
            buttonUrl: { type: "text", label: "Button URL" },
            highlighted: { type: "select", label: "Highlighted", options: [
              { label: "No", value: false },
              { label: "Yes", value: true }
            ]}
          }
        },
        featureCategories: {
          type: "array",
          label: "Feature Categories",
          arrayFields: {
            categoryName: { type: "text", label: "Category Name" },
            features: {
              type: "array",
              label: "Features",
              arrayFields: {
                name: { type: "text", label: "Feature Name" },
                basic: { type: "text", label: "Basic Plan Value" },
                business: { type: "text", label: "Business Plan Value" },
                enterprise: { type: "text", label: "Enterprise Plan Value" }
              }
            }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Pricing",
        title: "Choose your plan",
        subtitle: "Compare features and find the perfect plan for your needs.",
        plans: [
          {
            name: "Basic",
            price: "$9",
            period: "month",
            description: "Perfect for individuals and small teams",
            buttonText: "Get started",
            buttonUrl: "#",
            highlighted: false
          },
          {
            name: "Business",
            price: "$29",
            period: "month",
            description: "Best for growing businesses",
            buttonText: "Get started",
            buttonUrl: "#",
            highlighted: true
          },
          {
            name: "Enterprise",
            price: "$99",
            period: "month",
            description: "For large organizations",
            buttonText: "Contact sales",
            buttonUrl: "#",
            highlighted: false
          }
        ],
        featureCategories: [
          {
            categoryName: "Core Features",
            features: [
              {
                name: "Projects",
                basic: "Up to 5",
                business: "Up to 50",
                enterprise: "Unlimited"
              },
              {
                name: "Storage",
                basic: "1GB",
                business: "10GB",
                enterprise: "100GB"
              },
              {
                name: "Support",
                basic: "Email",
                business: "Priority",
                enterprise: "24/7 Phone"
              }
            ]
          },
          {
            categoryName: "Advanced Features",
            features: [
              {
                name: "Analytics",
                basic: "false",
                business: "true",
                enterprise: "true"
              },
              {
                name: "API Access",
                basic: "false",
                business: "true",
                enterprise: "true"
              },
              {
                name: "Custom Integrations",
                basic: "false",
                business: "false",
                enterprise: "true"
              }
            ]
          }
        ]
      },
      render: Pricing2,
    },
    
    // Testimonials
    Testimonials1: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle (optional)"
        },
        testimonials: {
          type: "array",
          label: "Testimonials",
          arrayFields: {
            quote: { type: "textarea", label: "Quote" },
            name: { type: "text", label: "Name" },
            position: { type: "text", label: "Position" },
            company: { type: "text", label: "Company" },
            avatar: { type: "text", label: "Avatar Image URL (optional)" },
            logo: { type: "text", label: "Company Logo URL (optional)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Testimonials",
        title: "What our customers say",
        subtitle: "Don't just take our word for it - hear from some of our satisfied customers.",
        testimonials: [
          {
            quote: "This product has completely transformed how we work. The team is more productive and our clients are happier than ever.",
            name: "Sarah Johnson",
            position: "CEO",
            company: "TechCorp",
            avatar: "https://placehold.co/400x400",
            logo: ""
          },
          {
            quote: "The support team is incredible and the features are exactly what we needed. Highly recommend to anyone looking for a reliable solution.",
            name: "Michael Chen",
            position: "CTO",
            company: "InnovateLabs",
            avatar: "https://placehold.co/400x400",
            logo: ""
          },
          {
            quote: "Game-changer for our business. We've seen a 40% increase in efficiency since implementing this solution.",
            name: "Emily Rodriguez",
            position: "Operations Manager",
            company: "GrowthCo",
            avatar: "https://placehold.co/400x400",
            logo: ""
          }
        ]
      },
      render: Testimonials1,
    },
    Testimonials2: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle (optional)"
        },
        testimonials: {
          type: "array",
          label: "Testimonials",
          arrayFields: {
            quote: { type: "textarea", label: "Quote" },
            name: { type: "text", label: "Name" },
            position: { type: "text", label: "Position" },
            company: { type: "text", label: "Company" },
            avatar: { type: "text", label: "Avatar Image URL (optional)" },
            rating: { type: "number", label: "Rating (1-5)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Testimonials",
        title: "What our customers say",
        subtitle: "Don't just take our word for it - hear from some of our satisfied customers.",
        testimonials: [
          {
            quote: "This product has completely transformed how we work. The team is more productive and our clients are happier than ever.",
            name: "Sarah Johnson",
            position: "CEO",
            company: "TechCorp",
            avatar: "https://placehold.co/400x400",
            rating: 5
          },
          {
            quote: "The support team is incredible and the features are exactly what we needed. Highly recommend to anyone looking for a reliable solution.",
            name: "Michael Chen",
            position: "CTO",
            company: "InnovateLabs",
            avatar: "https://placehold.co/400x400",
            rating: 5
          },
          {
            quote: "Game-changer for our business. We've seen a 40% increase in efficiency since implementing this solution.",
            name: "Emily Rodriguez",
            position: "Operations Manager",
            company: "GrowthCo",
            avatar: "https://placehold.co/400x400",
            rating: 5
          }
        ]
      },
      render: Testimonials2,
    },
    Testimonials3: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle (optional)"
        },
        testimonials: {
          type: "array",
          label: "Testimonials",
          arrayFields: {
            quote: { type: "textarea", label: "Quote" },
            name: { type: "text", label: "Name" },
            position: { type: "text", label: "Position" },
            company: { type: "text", label: "Company" },
            avatar: { type: "text", label: "Avatar Image URL (optional)" },
            logo: { type: "text", label: "Company Logo URL (optional)" },
            rating: { type: "number", label: "Rating (1-5)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Testimonials",
        title: "What our customers say",
        subtitle: "Don't just take our word for it - hear from some of our satisfied customers.",
        testimonials: [
          {
            quote: "This product has completely transformed how we work. The team is more productive and our clients are happier than ever.",
            name: "Sarah Johnson",
            position: "CEO",
            company: "TechCorp",
            avatar: "https://placehold.co/400x400",
            logo: "",
            rating: 5
          },
          {
            quote: "The support team is incredible and the features are exactly what we needed. Highly recommend to anyone looking for a reliable solution.",
            name: "Michael Chen",
            position: "CTO",
            company: "InnovateLabs",
            avatar: "https://placehold.co/400x400",
            logo: "",
            rating: 5
          },
          {
            quote: "Game-changer for our business. We've seen a 40% increase in efficiency since implementing this solution.",
            name: "Emily Rodriguez",
            position: "Operations Manager",
            company: "GrowthCo",
            avatar: "https://placehold.co/400x400",
            logo: "",
            rating: 5
          }
        ]
      },
      render: Testimonials3,
    },
    Testimonials4: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle (optional)"
        },
        testimonials: {
          type: "array",
          label: "Testimonials",
          arrayFields: {
            quote: { type: "textarea", label: "Quote" },
            name: { type: "text", label: "Name" },
            position: { type: "text", label: "Position" },
            company: { type: "text", label: "Company" },
            avatar: { type: "text", label: "Avatar Image URL (optional)" },
            logo: { type: "text", label: "Company Logo URL (optional)" },
            ctaText: { type: "text", label: "CTA Button Text (optional)" },
            ctaUrl: { type: "text", label: "CTA Button URL (optional)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Testimonials",
        title: "What our customers say",
        subtitle: "Don't just take our word for it - hear from some of our satisfied customers.",
        testimonials: [
          {
            quote: "This product has completely transformed how we work. The team is more productive and our clients are happier than ever.",
            name: "Sarah Johnson",
            position: "CEO",
            company: "TechCorp",
            avatar: "https://placehold.co/400x400",
            logo: "",
            ctaText: "Read case study",
            ctaUrl: "#"
          },
          {
            quote: "The support team is incredible and the features are exactly what we needed. Highly recommend to anyone looking for a reliable solution.",
            name: "Michael Chen",
            position: "CTO",
            company: "InnovateLabs",
            avatar: "https://placehold.co/400x400",
            logo: "",
            ctaText: "Learn more",
            ctaUrl: "#"
          },
          {
            quote: "Game-changer for our business. We've seen a 40% increase in efficiency since implementing this solution.",
            name: "Emily Rodriguez",
            position: "Operations Manager",
            company: "GrowthCo",
            avatar: "https://placehold.co/400x400",
            logo: "",
            ctaText: "View results",
            ctaUrl: "#"
          }
        ]
      },
      render: Testimonials4,
    },

    // Quotes
    Quote1: {
      fields: {
        logo: {
          type: "text",
          label: "Company Logo URL (optional)"
        },
        quote: {
          type: "textarea",
          label: "Quote"
        },
        name: {
          type: "text",
          label: "Name"
        },
        position: {
          type: "text",
          label: "Position"
        },
        company: {
          type: "text",
          label: "Company"
        },
        avatar: {
          type: "text",
          label: "Avatar Image URL (optional)"
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        logo: "",
        quote: "This product has completely transformed how we work. The team is more productive and our clients are happier than ever.",
        name: "Sarah Johnson",
        position: "CEO",
        company: "TechCorp",
        avatar: "https://placehold.co/400x400"
      },
      render: Quote1,
    },

    // Logos
    Logos1: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title (optional)"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        logos: {
          type: "array",
          label: "Logos",
          arrayFields: {
            src: { type: "text", label: "Logo Image URL" },
            alt: { type: "text", label: "Alt Text" },
            width: { type: "number", label: "Width (optional)" },
            height: { type: "number", label: "Height (optional)" }
          }
        },
        speed: {
          type: "select",
          label: "Animation Speed",
          options: [
            { label: "Slow", value: "slow" },
            { label: "Normal", value: "normal" },
            { label: "Fast", value: "fast" }
          ]
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Trusted by",
        title: "Companies using our product",
        subtitle: "Join thousands of companies that trust our platform",
        logos: [
          {
            src: "https://logo.clearbit.com/webflow.com",
            alt: "Webflow Logo",
            width: 120,
            height: 60
          },
          {
            src: "https://logo.clearbit.com/github.com",
            alt: "GitHub Logo",
            width: 120,
            height: 60
          },
          {
            src: "https://logo.clearbit.com/stripe.com",
            alt: "Stripe Logo",
            width: 120,
            height: 60
          },
          {
            src: "https://logo.clearbit.com/figma.com",
            alt: "Figma Logo",
            width: 120,
            height: 60
          },
          {
            src: "https://logo.clearbit.com/notion.so",
            alt: "Notion Logo",
            width: 120,
            height: 60
          },
          {
            src: "https://logo.clearbit.com/slack.com",
            alt: "Slack Logo",
            width: 120,
            height: 60
          }
        ],
        speed: "normal"
      },
      render: Logos1,
    },
    Logos2: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title (optional)"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        logos: {
          type: "array",
          label: "Logos",
          arrayFields: {
            src: { type: "text", label: "Logo Image URL" },
            alt: { type: "text", label: "Alt Text" },
            width: { type: "number", label: "Width (optional)" },
            height: { type: "number", label: "Height (optional)" }
          }
        },
        columns: {
          type: "select",
          label: "Number of Columns",
          options: [
            { label: "2 Columns", value: 2 },
            { label: "3 Columns", value: 3 },
            { label: "4 Columns", value: 4 },
            { label: "5 Columns", value: 5 },
            { label: "6 Columns", value: 6 }
          ]
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Trusted by",
        title: "Companies using our product",
        subtitle: "Join thousands of companies that trust our platform",
        logos: [
          {
            src: "https://logo.clearbit.com/webflow.com",
            alt: "Webflow Logo",
            width: 120,
            height: 60
          },
          {
            src: "https://logo.clearbit.com/github.com",
            alt: "GitHub Logo",
            width: 120,
            height: 60
          },
          {
            src: "https://logo.clearbit.com/stripe.com",
            alt: "Stripe Logo",
            width: 120,
            height: 60
          },
          {
            src: "https://logo.clearbit.com/figma.com",
            alt: "Figma Logo",
            width: 120,
            height: 60
          },
          {
            src: "https://logo.clearbit.com/notion.so",
            alt: "Notion Logo",
            width: 120,
            height: 60
          },
          {
            src: "https://logo.clearbit.com/slack.com",
            alt: "Slack Logo",
            width: 120,
            height: 60
          },
          {
            src: "https://logo.clearbit.com/spotify.com",
            alt: "Spotify Logo",
            width: 120,
            height: 60
          },
          {
            src: "https://logo.clearbit.com/shopify.com",
            alt: "Shopify Logo",
            width: 120,
            height: 60
          }
        ],
        columns: 4
      },
      render: Logos2,
    },

    // Footers
    Footer1: {
      fields: {
        imageUrl: {
          type: "text",
          label: "Logo Image URL"
        },
        menuLinks: {
          type: "array",
          label: "Menu Links",
          arrayFields: {
            label: { type: "text", label: "Label" },
            href: { type: "text", label: "URL" }
          }
        },
        socialLinks: {
          type: "array",
          label: "Social Links",
          arrayFields: {
            platform: { type: "text", label: "Platform Name" },
            href: { type: "text", label: "URL" }
          }
        },
        copyrightText: {
          type: "text",
          label: "Copyright Text"
        },
        legalLinks: {
          type: "array",
          label: "Legal Links",
          arrayFields: {
            label: { type: "text", label: "Label" },
            href: { type: "text", label: "URL" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        imageUrl: "/logo.png",
        menuLinks: [
          { label: "Link One", href: "#" },
          { label: "Link Two", href: "#" },
          { label: "Link Three", href: "#" },
          { label: "Link Four", href: "#" },
          { label: "Link Five", href: "#" }
        ],
        socialLinks: [
          { platform: "Facebook", href: "#" },
          { platform: "Instagram", href: "#" },
          { platform: "Twitter", href: "#" },
          { platform: "LinkedIn", href: "#" },
          { platform: "YouTube", href: "#" }
        ],
        darkMode: false,
        copyrightText: "© 2025 Frontend AI, Inc. All rights reserved.",
        legalLinks: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Cookies Settings", href: "#" }
        ]
      },
      render: Footer1,
    },
    Footer2: {
      fields: {
        imageUrl: {
          type: "text",
          label: "Logo Image URL"
        },
        footerLinks: {
          type: "array",
          label: "Footer Links",
          arrayFields: {
            label: { type: "text", label: "Label" },
            href: { type: "text", label: "URL" }
          }
        },
        privacyPolicyUrl: {
          type: "text",
          label: "Privacy Policy URL"
        },
        copyrightText: {
          type: "text",
          label: "Copyright Text"
        },
        legalLinks: {
          type: "array",
          label: "Legal Links",
          arrayFields: {
            label: { type: "text", label: "Label" },
            href: { type: "text", label: "URL" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        imageUrl: "/logo.png",
        footerLinks: [
          { label: "Link One", href: "#" },
          { label: "Link Two", href: "#" },
          { label: "Link Three", href: "#" },
          { label: "Link Four", href: "#" },
          { label: "Link Five", href: "#" }
        ],
        privacyPolicyUrl: "#",
        darkMode: false,
        copyrightText: "© 2025 Frontend AI, Inc. All rights reserved.",
        legalLinks: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Cookies Settings", href: "#" }
        ]
      },
      render: Footer2,
    },

    // Teams
    Team1: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        teamMembers: {
          type: "array",
          label: "Team Members",
          arrayFields: {
            name: { type: "text", label: "Full Name" },
            jobTitle: { type: "text", label: "Job Title" },
            description: { type: "textarea", label: "Description" },
            imageUrl: { type: "text", label: "Profile Image URL (optional)" },
            linkedinUrl: { type: "text", label: "LinkedIn URL (optional)" },
            twitterUrl: { type: "text", label: "Twitter URL (optional)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Our team",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        teamMembers: [
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          }
        ],
        darkMode: false
      },
      render: Team1,
    },
    Team2: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        teamMembers: {
          type: "array",
          label: "Team Members",
          arrayFields: {
            name: { type: "text", label: "Full Name" },
            jobTitle: { type: "text", label: "Job Title" },
            description: { type: "textarea", label: "Description" },
            imageUrl: { type: "text", label: "Profile Image URL (optional)" },
            linkedinUrl: { type: "text", label: "LinkedIn URL (optional)" },
            twitterUrl: { type: "text", label: "Twitter URL (optional)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Our team",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        teamMembers: [
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          }
        ],
        darkMode: false
      },
      render: Team2,
    },
    Team3: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        teamMembers: {
          type: "array",
          label: "Team Members",
          arrayFields: {
            name: { type: "text", label: "Full Name" },
            jobTitle: { type: "text", label: "Job Title" },
            description: { type: "textarea", label: "Description" },
            imageUrl: { type: "text", label: "Profile Image URL (optional)" },
            linkedinUrl: { type: "text", label: "LinkedIn URL (optional)" },
            twitterUrl: { type: "text", label: "Twitter URL (optional)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Our team",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        teamMembers: [
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          }
        ],
        darkMode: false
      },
      render: Team3,
    },
    Team4: {
      fields: {        
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        teamMembers: {
          type: "array",
          label: "Team Members",
          arrayFields: {
            name: { type: "text", label: "Full Name" },
            jobTitle: { type: "text", label: "Job Title" },
            description: { type: "textarea", label: "Description" },
            imageUrl: { type: "text", label: "Profile Image URL (optional)" },
            linkedinUrl: { type: "text", label: "LinkedIn URL (optional)" },
            twitterUrl: { type: "text", label: "Twitter URL (optional)" }
          }
        },
        buttonText: {
          type: "text",
          label: "Button Text (optional)"
        },
        buttonUrl: {
          type: "text",
          label: "Button URL (optional)"
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Our team",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        teamMembers: [
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          }
        ],
        buttonText: "Open positions",
        buttonUrl: "#",
        darkMode: false
      },
      render: Team4,
    },
    Team5: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        teamMembers: {
          type: "array",
          label: "Team Members",
          arrayFields: {
            name: { type: "text", label: "Full Name" },
            jobTitle: { type: "text", label: "Job Title" },
            description: { type: "textarea", label: "Description" },
            imageUrl: { type: "text", label: "Profile Image URL (optional)" },
            linkedinUrl: { type: "text", label: "LinkedIn URL (optional)" },
            twitterUrl: { type: "text", label: "Twitter URL (optional)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Our team",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        teamMembers: [
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          },
          {
            name: "Full name",
            jobTitle: "Job title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            imageUrl: "https://placehold.co/400x400",
            linkedinUrl: "#",
            twitterUrl: "#"
          }
        ],
        darkMode: false
      },
      render: Team5,
    },

    // Stats
    Stats1: {
      fields: {
        title: {
          type: "text",
          label: "Title"
        },
        description: {
          type: "textarea",
          label: "Description"
        },
        stats: {
          type: "array",
          label: "Statistics",
          arrayFields: {
            percentage: { type: "text", label: "Percentage (e.g., 30%)" },
            label: { type: "text", label: "Label" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        title: "Long heading is what you see here in this feature section",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
        stats: [
          { percentage: "30%", label: "Short heading goes here" },
          { percentage: "30%", label: "Short heading goes here" },
          { percentage: "30%", label: "Short heading goes here" }
        ],
        bgColor: "bg-gray-50",
        darkMode: false
      },
      render: Stats1,
    },

    Stats2: {
      fields: {
        title: {
          type: "text",
          label: "Title (optional)"
        },
        description: {
          type: "textarea",
          label: "Description (optional)"
        },
        stats: {
          type: "array",
          label: "Statistics",
          arrayFields: {
            icon: { type: "text", label: "Icon (React component or SVG string)" },
            label: { type: "text", label: "Label" },
            value: { type: "text", label: "Value (e.g., 200K)" },
            description: { type: "text", label: "Description (optional)" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        title: "Social Media Presence",
        description: "Reach millions of engaged followers across all major platforms",
        stats: [
          {
            icon: "📱",
            label: "TikTok",
            value: "200K",
            description: "Followers"
          },
          {
            icon: "📷",
            label: "Instagram",
            value: "150K",
            description: "Followers"
          },
          {
            icon: "🎥",
            label: "YouTube",
            value: "80K",
            description: "Subscribers"
          },
          {
            icon: "🐦",
            label: "Twitter",
            value: "45K",
            description: "Followers"
          }
        ],
        bgColor: "bg-white",
        darkMode: false
      },
      render: Stats2,
    },

    Stats3: {
      fields: {
        tagline: {
          type: "text",
          label: "Tagline"
        },
        title: {
          type: "text",
          label: "Title"
        },
        description: {
          type: "textarea",
          label: "Description"
        },
        primaryButtonText: {
          type: "text",
          label: "Primary Button Text"
        },
        primaryButtonHref: {
          type: "text",
          label: "Primary Button URL (optional)"
        },
        secondaryButtonText: {
          type: "text",
          label: "Secondary Button Text (optional)"
        },
        secondaryButtonHref: {
          type: "text",
          label: "Secondary Button URL (optional)"
        },
        stats: {
          type: "array",
          label: "Statistics",
          arrayFields: {
            percentage: { type: "text", label: "Percentage (e.g., 50%)" },
            label: { type: "text", label: "Label" },
            description: { type: "text", label: "Description" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        tagline: "Tagline",
        title: "Medium length section heading goes here",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        primaryButtonText: "Button",
        secondaryButtonText: "Button",
        stats: [
          {
            percentage: "50%",
            label: "Short heading goes here",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            percentage: "50%",
            label: "Short heading goes here",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        ],
        bgColor: "bg-white",
        darkMode: false
      },
      render: Stats3,
    },

    // Blogs
    BlogList1: {
      fields: {        
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        posts: {
          type: "array",
          label: "Blog Posts",
          arrayFields: {
            id: { type: "text", label: "Post ID" },
            title: { type: "text", label: "Title" },
            excerpt: { type: "textarea", label: "Excerpt" },
            category: { type: "text", label: "Category" },
            author: {
              type: "object",
              label: "Author",
              objectFields: {
                name: { type: "text", label: "Author Name" },
                avatar: { type: "text", label: "Author Avatar URL (optional)" }
              }
            },
            publishedAt: { type: "text", label: "Published Date (YYYY-MM-DD)" },
            readTime: { type: "text", label: "Read Time" },
            imageUrl: { type: "text", label: "Featured Image URL (optional)" },
            slug: { type: "text", label: "URL Slug" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Blog",
        title: "Short heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        posts: [
          {
            id: "1",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-1"
          },
          {
            id: "2",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-2"
          },
          {
            id: "3",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-3"
          }
        ],
        darkMode: false
      },
      render: BlogList1,
    },

    BlogList2: {
      fields: {        
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        posts: {
          type: "array",
          label: "Blog Posts",
          arrayFields: {
            id: { type: "text", label: "Post ID" },
            title: { type: "text", label: "Title" },
            excerpt: { type: "textarea", label: "Excerpt" },
            category: { type: "text", label: "Category" },
            author: {
              type: "object",
              label: "Author",
              objectFields: {
                name: { type: "text", label: "Author Name" },
                avatar: { type: "text", label: "Author Avatar URL (optional)" }
              }
            },
            publishedAt: { type: "text", label: "Published Date (YYYY-MM-DD)" },
            readTime: { type: "text", label: "Read Time" },
            imageUrl: { type: "text", label: "Featured Image URL (optional)" },
            slug: { type: "text", label: "URL Slug" }
          }
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Blog",
        title: "Short heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        posts: [
          {
            id: "1",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-1"
          },
          {
            id: "2",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-2"
          },
          {
            id: "3",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-3"
          },
          {
            id: "4",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-4"
          }
        ],
        darkMode: false
      },
      render: BlogList2,
    },

    BlogList3: {
      fields: {    
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        posts: {
          type: "array",
          label: "Blog Posts",
          arrayFields: {
            id: { type: "text", label: "Post ID" },
            title: { type: "text", label: "Title" },
            excerpt: { type: "textarea", label: "Excerpt" },
            category: { type: "text", label: "Category" },
            author: {
              type: "object",
              label: "Author",
              objectFields: {
                name: { type: "text", label: "Author Name" },
                avatar: { type: "text", label: "Author Avatar URL (optional)" }
              }
            },
            publishedAt: { type: "text", label: "Published Date (YYYY-MM-DD)" },
            readTime: { type: "text", label: "Read Time" },
            imageUrl: { type: "text", label: "Featured Image URL (optional)" },
            slug: { type: "text", label: "URL Slug" }
          }
        },
       ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Blog",
        title: "Short heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        posts: [
          {
            id: "1",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-1"
          },
          {
            id: "2",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-2"
          },
          {
            id: "3",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-3"
          },
          {
            id: "4",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-4"
          }
        ],
        darkMode: false
      },
      render: BlogList3,
    },

    BlogList4: {
      fields: {     
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        posts: {
          type: "array",
          label: "Blog Posts",
          arrayFields: {
            id: { type: "text", label: "Post ID" },
            title: { type: "text", label: "Title" },
            excerpt: { type: "textarea", label: "Excerpt" },
            category: { type: "text", label: "Category" },
            author: {
              type: "object",
              label: "Author",
              objectFields: {
                name: { type: "text", label: "Author Name" },
                avatar: { type: "text", label: "Author Avatar URL (optional)" }
              }
            },
            publishedAt: { type: "text", label: "Published Date (YYYY-MM-DD)" },
            readTime: { type: "text", label: "Read Time" },
            imageUrl: { type: "text", label: "Featured Image URL (optional)" },
            slug: { type: "text", label: "URL Slug" }
          }
        },
        viewAllText: {
          type: "text",
          label: "View All Button Text"
        },
        viewAllUrl: {
          type: "text",
          label: "View All Button URL"
        },
        ...darkMode,
        ...bgColor,
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Blog",
        title: "Short heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        posts: [
          {
            id: "1",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-1"
          },
          {
            id: "2",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-2"
          },
          {
            id: "3",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-3"
          }
        ],
        viewAllText: "View all",
        viewAllUrl: "/blog",
        darkMode: false
      },
      render: BlogList4,
    },

    BlogList5: {
      fields: {        
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        posts: {
          type: "array",
          label: "Blog Posts",
          arrayFields: {
            id: {
              type: "text",
              label: "ID"
            },
            title: {
              type: "text",
              label: "Title"
            },
            excerpt: {
              type: "textarea",
              label: "Excerpt"
            },
            category: {
              type: "text",
              label: "Category"
            },
            author: {
              type: "object",
              label: "Author",
              objectFields: {
                name: {
                  type: "text",
                  label: "Name"
                },
                avatar: {
                  type: "text",
                  label: "Avatar URL (optional)"
                }
              }
            },
            publishedAt: {
              type: "text",
              label: "Published Date (YYYY-MM-DD)"
            },
            readTime: {
              type: "text",
              label: "Read Time"
            },
            imageUrl: {
              type: "text",
              label: "Featured Image URL (optional)"
            },
            slug: {
              type: "text",
              label: "Slug"
            }
          },
          defaultValue: [],
          getItemSummary: (item: any) => item.title || "Blog Post"
        },
        darkMode: {
          type: "radio",
          label: "Dark Mode",
          options: [
            { label: "Light", value: false },
            { label: "Dark", value: true }
          ]
        }
      },
      defaultProps: {
        bgColor: "bg-white",
        title: "Blog",
        subtitle: "Discover the latest insights and updates from our team",
        posts: [
          {
            id: "1",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-1"
          },
          {
            id: "2",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-2"
          },
          {
            id: "3",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-3"
          }
        ],
        darkMode: false
      },
      render: BlogList5,
    },

    BlogList6: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        posts: {
          type: "array",
          label: "Blog Posts",
          arrayFields: {
            id: {
              type: "text",
              label: "ID"
            },
            title: {
              type: "text",
              label: "Title"
            },
            excerpt: {
              type: "textarea",
              label: "Excerpt"
            },
            category: {
              type: "text",
              label: "Category"
            },
            author: {
              type: "object",
              label: "Author",
              objectFields: {
                name: {
                  type: "text",
                  label: "Name"
                },
                avatar: {
                  type: "text",
                  label: "Avatar URL (optional)"
                }
              }
            },
            publishedAt: {
              type: "text",
              label: "Published Date (YYYY-MM-DD)"
            },
            readTime: {
              type: "text",
              label: "Read Time"
            },
            imageUrl: {
              type: "text",
              label: "Featured Image URL (optional)"
            },
            slug: {
              type: "text",
              label: "Slug"
            }
          },
          defaultValue: [],
          getItemSummary: (item: any) => item.title || "Blog Post"
        },
        darkMode: {
          type: "radio",
          label: "Dark Mode",
          options: [
            { label: "Light", value: false },
            { label: "Dark", value: true }
          ]
        }
      },
      defaultProps: {
        bgColor: "bg-white",
        title: "Short heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        posts: [
          {
            id: "1",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-1"
          },
          {
            id: "2",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-2"
          },
          {
            id: "3",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-3"
          }
        ],
        darkMode: false
      },
      render: BlogList6,
    },

    BlogList7: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        tagline: {
          type: "text",
          label: "Tagline (optional)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        posts: {
          type: "array",
          label: "Blog Posts",
          arrayFields: {
            id: {
              type: "text",
              label: "ID"
            },
            title: {
              type: "text",
              label: "Title"
            },
            excerpt: {
              type: "textarea",
              label: "Excerpt"
            },
            category: {
              type: "text",
              label: "Category"
            },
            author: {
              type: "object",
              label: "Author",
              objectFields: {
                name: {
                  type: "text",
                  label: "Name"
                },
                avatar: {
                  type: "text",
                  label: "Avatar URL (optional)"
                }
              }
            },
            publishedAt: {
              type: "text",
              label: "Published Date (YYYY-MM-DD)"
            },
            readTime: {
              type: "text",
              label: "Read Time"
            },
            imageUrl: {
              type: "text",
              label: "Featured Image URL (optional)"
            },
            slug: {
              type: "text",
              label: "Slug"
            }
          },
          defaultValue: [],
          getItemSummary: (item: any) => item.title || "Blog Post"
        },
        darkMode: {
          type: "radio",
          label: "Dark Mode",
          options: [
            { label: "Light", value: false },
            { label: "Dark", value: true }
          ]
        }
      },
      defaultProps: {
        bgColor: "bg-white",
        title: "Short heading goes here",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        posts: [
          {
            id: "1",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-1"
          },
          {
            id: "2",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-2"
          },
          {
            id: "3",
            title: "Blog title heading will go here",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            author: {
              name: "Full name",
              avatar: "https://placehold.co/400x400"
            },
            publishedAt: "2024-01-11",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/800x600",
            slug: "blog-title-heading-will-go-here-3"
          }
        ],
        darkMode: false
      },
      render: BlogList7,
    },

    BlogHeading1: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        breadcrumbs: {
          type: "array",
          label: "Breadcrumbs",
          arrayFields: {
            label: {
              type: "text",
              label: "Label"
            },
            href: {
              type: "text",
              label: "Link URL (optional)"
            }
          },
          defaultValue: [],
          getItemSummary: (item: any) => item.label || "Breadcrumb"
        },
        title: {
          type: "text",
          label: "Title"
        },
        author: {
          type: "object",
          label: "Author",
          objectFields: {
            name: {
              type: "text",
              label: "Name"
            },
            avatar: {
              type: "text",
              label: "Avatar URL (optional)"
            }
          }
        },
        publishedAt: {
          type: "text",
          label: "Published Date"
        },
        readTime: {
          type: "text",
          label: "Read Time"
        },
        featuredImage: {
          type: "text",
          label: "Featured Image URL (optional)"
        },
        showSocialShare: {
          type: "radio",
          label: "Show Social Share",
          options: [
            { label: "Show", value: true },
            { label: "Hide", value: false }
          ]
        },
        darkMode: {
          type: "radio",
          label: "Dark Mode",
          options: [
            { label: "Light", value: false },
            { label: "Dark", value: true }
          ]
        }
      },
      defaultProps: {
        bgColor: "bg-white",
        breadcrumbs: [
          { label: "Blog", href: "/blog" },
          { label: "Category" }
        ],
        title: "Blog title heading will go here",
        author: {
          name: "Full name",
          avatar: "https://placehold.co/400x400"
        },
        publishedAt: "11 Jan 2022",
        readTime: "5 min read",
        featuredImage: "https://placehold.co/1200x600",
        showSocialShare: true,
        darkMode: false
      },
      render: BlogHeading1,
    },

    BlogHeading2: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        breadcrumbs: {
          type: "array",
          label: "Breadcrumbs",
          arrayFields: {
            label: {
              type: "text",
              label: "Label"
            },
            href: {
              type: "text",
              label: "Link URL (optional)"
            }
          },
          defaultValue: [],
          getItemSummary: (item: any) => item.label || "Breadcrumb"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "textarea",
          label: "Subtitle (optional)"
        },
        author: {
          type: "object",
          label: "Author",
          objectFields: {
            name: {
              type: "text",
              label: "Name"
            },
            avatar: {
              type: "text",
              label: "Avatar URL (optional)"
            },
            role: {
              type: "text",
              label: "Role (optional)"
            }
          }
        },
        publishedAt: {
          type: "text",
          label: "Published Date"
        },
        readTime: {
          type: "text",
          label: "Read Time"
        },
        featuredImage: {
          type: "text",
          label: "Featured Image URL (optional)"
        },
        showSocialShare: {
          type: "radio",
          label: "Show Social Share",
          options: [
            { label: "Show", value: true },
            { label: "Hide", value: false }
          ]
        },
        darkMode: {
          type: "radio",
          label: "Dark Mode",
          options: [
            { label: "Light", value: false },
            { label: "Dark", value: true }
          ]
        }
      },
      defaultProps: {
        bgColor: "bg-white",
        breadcrumbs: [
          { label: "Blog", href: "/blog" },
          { label: "Category" }
        ],
        title: "Blog title heading will go here",
        subtitle: "This is a subtitle that provides additional context about the blog post content",
        author: {
          name: "Full name",
          avatar: "https://placehold.co/400x400",
          role: "Author"
        },
        publishedAt: "11 Jan 2022",
        readTime: "5 min read",
        featuredImage: "https://placehold.co/1200x600",
        showSocialShare: true,
        darkMode: false
      },
      render: BlogHeading2,
    },

    BlogHeading3: {
      fields: {
        category: {
          type: "text",
          label: "Category"
        },
        title: {
          type: "text",
          label: "Title"
        },
        author: {
          type: "object",
          label: "Author",
          objectFields: {
            name: {
              type: "text",
              label: "Name"
            },
            avatar: {
              type: "text",
              label: "Avatar URL (optional)"
            }
          }
        },
        publishedAt: {
          type: "text",
          label: "Published Date"
        },
        readTime: {
          type: "text",
          label: "Read Time"
        },
        backgroundImage: {
          type: "text",
          label: "Background Image URL"
        },
        overlayOpacity: {
          type: "number",
          label: "Overlay Opacity (0-1)",
          min: 0,
          max: 1,
          step: 0.1
        },
        darkMode: {
          type: "radio",
          label: "Dark Mode",
          options: [
            { label: "Light", value: false },
            { label: "Dark", value: true }
          ]
        }
      },
      defaultProps: {
        category: "Category",
        title: "Blog title heading will go here",
        author: {
          name: "Full name",
          avatar: "https://placehold.co/400x400"
        },
        publishedAt: "11 Jan 2022",
        readTime: "5 min read",
        backgroundImage: "https://placehold.co/1920x1080",
        overlayOpacity: 0.6,
        darkMode: false
      },
      render: BlogHeading3,
    },

    EventList1: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        tagline: {
          type: "text",
          label: "Tagline"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        events: {
          type: "array",
          label: "Events",
          arrayFields: {
            id: {
              type: "text",
              label: "ID"
            },
            title: {
              type: "text",
              label: "Title"
            },
            description: {
              type: "textarea",
              label: "Description"
            },
            category: {
              type: "text",
              label: "Category"
            },
            date: {
              type: "text",
              label: "Date (YYYY-MM-DD)"
            },
            location: {
              type: "text",
              label: "Location"
            },
            imageUrl: {
              type: "text",
              label: "Featured Image URL (optional)"
            },
            slug: {
              type: "text",
              label: "Slug"
            }
          },
          defaultValue: [],
          getItemSummary: (item: any) => item.title || "Event"
        },
        darkMode: {
          type: "radio",
          label: "Dark Mode",
          options: [
            { label: "Light", value: false },
            { label: "Dark", value: true }
          ]
        }
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Events",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        events: [
          {
            id: "1",
            title: "Event title heading",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            date: "2024-02-09",
            location: "Location",
            imageUrl: "https://placehold.co/800x600",
            slug: "event-title-heading-1"
          },
          {
            id: "2",
            title: "Event title heading",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            date: "2024-02-10",
            location: "Location",
            imageUrl: "https://placehold.co/800x600",
            slug: "event-title-heading-2"
          },
          {
            id: "3",
            title: "Event title heading",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            date: "2024-02-11",
            location: "Location",
            imageUrl: "https://placehold.co/800x600",
            slug: "event-title-heading-3"
          }
        ],
        darkMode: false
      },
      render: EventList1,
    },

    EventList2: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        tagline: {
          type: "text",
          label: "Tagline"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        events: {
          type: "array",
          label: "Events",
          arrayFields: {
            id: {
              type: "text",
              label: "ID"
            },
            title: {
              type: "text",
              label: "Title"
            },
            description: {
              type: "textarea",
              label: "Description"
            },
            category: {
              type: "text",
              label: "Category"
            },
            date: {
              type: "text",
              label: "Date (YYYY-MM-DD)"
            },
            location: {
              type: "text",
              label: "Location"
            },
            imageUrl: {
              type: "text",
              label: "Featured Image URL (optional)"
            },
            slug: {
              type: "text",
              label: "Slug"
            }
          },
          defaultValue: [],
          getItemSummary: (item: any) => item.title || "Event"
        },
        darkMode: {
          type: "radio",
          label: "Dark Mode",
          options: [
            { label: "Light", value: false },
            { label: "Dark", value: true }
          ]
        }
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Events",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        events: [
          {
            id: "1",
            title: "Event title heading",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            date: "2024-02-09",
            location: "Location",
            imageUrl: "https://placehold.co/800x600",
            slug: "event-title-heading-1"
          },
          {
            id: "2",
            title: "Event title heading",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            date: "2024-02-10",
            location: "Location",
            imageUrl: "https://placehold.co/800x600",
            slug: "event-title-heading-2"
          },
          {
            id: "3",
            title: "Event title heading",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            date: "2024-02-11",
            location: "Location",
            imageUrl: "https://placehold.co/800x600",
            slug: "event-title-heading-3"
          }
        ],
        darkMode: false
      },
      render: EventList2,
    },

    EventList3: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        tagline: {
          type: "text",
          label: "Tagline"
        },
        title: {
          type: "text",
          label: "Title"
        },
        subtitle: {
          type: "text",
          label: "Subtitle (optional)"
        },
        events: {
          type: "array",
          label: "Events",
          arrayFields: {
            id: {
              type: "text",
              label: "ID"
            },
            title: {
              type: "text",
              label: "Title"
            },
            description: {
              type: "textarea",
              label: "Description"
            },
            category: {
              type: "text",
              label: "Category"
            },
            date: {
              type: "text",
              label: "Date (YYYY-MM-DD)"
            },
            location: {
              type: "text",
              label: "Location"
            },
            imageUrl: {
              type: "text",
              label: "Featured Image URL (optional)"
            },
            slug: {
              type: "text",
              label: "Slug"
            }
          },
          defaultValue: [],
          getItemSummary: (item: any) => item.title || "Event"
        },
        darkMode: {
          type: "radio",
          label: "Dark Mode",
          options: [
            { label: "Light", value: false },
            { label: "Dark", value: true }
          ]
        }
      },
      defaultProps: {
        bgColor: "bg-white",
        tagline: "Tagline",
        title: "Events",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        events: [
          {
            id: "1",
            title: "Event title heading",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            date: "2024-02-09",
            location: "Location",
            imageUrl: "https://placehold.co/800x600",
            slug: "event-title-heading-1"
          },
          {
            id: "2",
            title: "Event title heading",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            date: "2024-02-10",
            location: "Location",
            imageUrl: "https://placehold.co/800x600",
            slug: "event-title-heading-2"
          },
          {
            id: "3",
            title: "Event title heading",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            category: "Category",
            date: "2024-02-11",
            location: "Location",
            imageUrl: "https://placehold.co/800x600",
            slug: "event-title-heading-3"
          }
        ],
        darkMode: false
      },
      render: EventList3,
    },

    EventHero1: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        backLink: {
          type: "object",
          label: "Back Link",
          objectFields: {
            text: {
              type: "text",
              label: "Link Text"
            },
            href: {
              type: "text",
              label: "Link URL"
            }
          }
        },
        title: {
          type: "text",
          label: "Title"
        },
        description: {
          type: "textarea",
          label: "Description"
        },
        eventDate: {
          type: "text",
          label: "Event Date & Time (YYYY-MM-DD HH:MM)"
        },
        spotsLeft: {
          type: "number",
          label: "Spots Left"
        },
        featuredImage: {
          type: "text",
          label: "Featured Image URL"
        },
        emailPlaceholder: {
          type: "text",
          label: "Email Input Placeholder"
        },
        ctaText: {
          type: "text",
          label: "CTA Button Text"
        },
        termsText: {
          type: "text",
          label: "Terms Text"
        },
        termsLink: {
          type: "text",
          label: "Terms Link Text"
        },
        darkMode: {
          type: "radio",
          label: "Dark Mode",
          options: [
            { label: "Light", value: false },
            { label: "Dark", value: true }
          ]
        }
      },
      defaultProps: {
        bgColor: "bg-white",
        backLink: {
          text: "All events",
          href: "/events"
        },
        title: "Event title heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        eventDate: "2024-02-10 10:00",
        spotsLeft: 10,
        featuredImage: "https://placehold.co/1200x800",
        emailPlaceholder: "Enter your email",
        ctaText: "Save my spot",
        termsText: "By clicking Save my spot you're confirming that you agree with our",
        termsLink: "Terms and Conditions",
        darkMode: false
      },
      render: EventHero1,
    },

    EventHero2: {
      fields: {
        backLink: {
          type: "object",
          label: "Back Link",
          objectFields: {
            text: {
              type: "text",
              label: "Link Text"
            },
            href: {
              type: "text",
              label: "Link URL"
            }
          }
        },
        title: {
          type: "text",
          label: "Title"
        },
        description: {
          type: "textarea",
          label: "Description"
        },
        eventDate: {
          type: "text",
          label: "Event Date & Time (YYYY-MM-DD HH:MM)"
        },
        spotsLeft: {
          type: "number",
          label: "Spots Left"
        },
        backgroundImage: {
          type: "text",
          label: "Background Image URL"
        },
        overlayOpacity: {
          type: "number",
          label: "Overlay Opacity (0-1)",
          min: 0,
          max: 1,
          step: 0.1
        },
        emailPlaceholder: {
          type: "text",
          label: "Email Input Placeholder"
        },
        ctaText: {
          type: "text",
          label: "CTA Button Text"
        },
        termsText: {
          type: "text",
          label: "Terms Text"
        },
        termsLink: {
          type: "text",
          label: "Terms Link Text"
        }
      },
      defaultProps: {
        backLink: {
          text: "All events",
          href: "/events"
        },
        title: "Event title heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        eventDate: "2024-02-10 10:00",
        spotsLeft: 10,
        backgroundImage: "https://placehold.co/1920x1080",
        overlayOpacity: 0.6,
        emailPlaceholder: "Enter your email",
        ctaText: "Save my spot",
        termsText: "By clicking Save my spot you're confirming that you agree with our",
        termsLink: "Terms and Conditions"
      },
      render: EventHero2,
    },

    EventHero3: {
      fields: {
        bgColor: {
          type: "text",
          label: "Background Color (Tailwind class)"
        },
        title: {
          type: "text",
          label: "Title"
        },
        description: {
          type: "textarea",
          label: "Description"
        },
        eventDate: {
          type: "text",
          label: "Event Date & Time (YYYY-MM-DD HH:MM)"
        },
        eventTime: {
          type: "text",
          label: "Event Time Display"
        },
        location: {
          type: "text",
          label: "Location"
        },
        emailPlaceholder: {
          type: "text",
          label: "Email Input Placeholder"
        },
        ctaText: {
          type: "text",
          label: "CTA Button Text"
        },
        termsText: {
          type: "text",
          label: "Terms Text"
        },
        termsLink: {
          type: "text",
          label: "Terms Link Text"
        },
        darkMode: {
          type: "radio",
          label: "Dark Mode",
          options: [
            { label: "Light", value: false },
            { label: "Dark", value: true }
          ]
        }
      },
      defaultProps: {
        bgColor: "bg-white",
        title: "Event title heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        eventDate: "2024-02-10 10:00",
        eventTime: "10:00 AM",
        location: "Online Event",
        emailPlaceholder: "Enter your email",
        ctaText: "Register now",
        termsText: "By registering you agree to our",
        termsLink: "Terms and Conditions",
        darkMode: false
      },
      render: EventHero3,
    },

  },
};

export default config;