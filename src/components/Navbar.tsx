import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Work Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Me' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1224]/95 backdrop-blur-sm border-b border-[#1a2332]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold text-[#4ef0d8] neon-text">
          Athul Menon P
        </div>

        {/* Nav Links + Download CV Button */}
        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-sm font-medium transition-colors duration-300 hover:text-[#4ef0d8] group ${
                activeSection === item.id ? 'text-[#4ef0d8]' : 'text-[#94a3b8]'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#4ef0d8] transition-all duration-300 ${
                  activeSection === item.id ? 'w-full neon-glow' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}

          {/* Glowing Download CV Button */}
          <a
            href="public/Athul_Menon_Resume.pdf"   // <-- Replace this with your real CV file name
            download
            className="px-4 py-2 rounded-lg border border-[#4ef0d8] text-[#4ef0d8] 
                       transition-all duration-300 font-medium
                       hover:bg-[#4ef0d8] hover:text-[#0d1224] 
                       hover:shadow-[0_0_12px_#4ef0d8,0_0_24px_#4ef0d8] 
                       hover:scale-105"
          >
            Download CV
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
