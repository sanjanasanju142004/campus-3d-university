import React from 'react';
import Hero from '../components/home/Hero';
import Card from '../components/home/Card';
import Highlights from '../components/home/Highlights';
import Gallery from '../components/home/Gallery';

// Import Icons for Cards
import { BookOpen, Award, FlaskConical, Briefcase } from 'lucide-react';

const Home = () => {
  const quickNav = [
    {
      title: "Departments",
      description: "Explore our diverse range of faculties and specialized academic departments.",
      link: "/departments",
      icon: <BookOpen className="w-7 h-7" />
    },
    {
      title: "Admissions",
      description: "Begin your journey with Nexus. Find everything you need to apply today.",
      link: "/admissions",
      icon: <Award className="w-7 h-7" />
    },
    {
      title: "Research",
      description: "Discover groundbreaking research and our state-of-the-art innovation labs.",
      link: "/research",
      icon: <FlaskConical className="w-7 h-7" />
    },
    {
      title: "Placements",
      description: "Connecting our brilliant graduates with top-tier global companies.",
      link: "/placements",
      icon: <Briefcase className="w-7 h-7" />
    }
  ];

  return (
    <div className="w-full bg-darker overflow-hidden">
      <Hero />
      
      {/* Quick Navigation Cards Section */}
      <section className="py-24 relative z-20 -mt-24 md:-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickNav.map((item, index) => (
              <Card 
                key={index}
                index={index}
                title={item.title}
                description={item.description}
                link={item.link}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <Highlights />
      <Gallery />
    </div>
  );
};

export default Home;
