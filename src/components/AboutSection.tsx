import { Mail, Github, Linkedin } from 'lucide-react';

const AboutSection = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/a-thul2', label: 'GitHub' },
    { icon: Mail, href: 'mailto:athul.menon10@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/athul-menon-p/', label: 'LinkedIn' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#0d1224]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-[#4ef0d8] neon-text">Me</span>
        </h2>

        <div className="flex flex-col items-center space-y-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#4ef0d8]/20 rounded-full blur-xl" />
            <img
              src="public/About.png"
              alt="Athul Menon P"
              className="relative w-48 h-48 rounded-full border-4 border-[#4ef0d8] neon-glow object-cover"
            />
          </div>

          {/* Name and Bio */}
          <div className="text-center space-y-4">
            {/*<h3 className="text-3xl font-bold">Athul Menon P</h3> */}
            <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl">
              I'm a passionate Software Developer and AI Engineer with experience in building scalable full-stack applications and AI-driven systems. I am skilled in Python, Machine Learning, Deep Learning, and Agentic AI frameworks. I specialize in modernizing legacy enterprise systems and delivering solutions aligned with business goals. I love turning complex problems into elegant solutions, and when I am not coding, I am usually exploring new technologies and sharpening my craft.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a2332] border border-[#4ef0d8]/30 text-[#4ef0d8] hover:bg-[#4ef0d8] hover:text-[#0d1224] transition-all duration-300 hover:scale-110 neon-glow"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
