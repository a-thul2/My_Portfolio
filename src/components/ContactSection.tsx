import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'athul.menon10@gmail.com',
      href: 'mailto:athul.menon10@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'https://github.com/a-thul2',
      href: 'https://github.com/a-thul2',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/athul-menon-p/',
      href: 'https://www.linkedin.com/in/athul-menon-p/',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-[#0d1224]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In <span className="text-[#4ef0d8] neon-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Message */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Let's work together!</h3>
            <p className="text-[#94a3b8] text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out through any of the channels listed here.
            </p>
            <div className="pt-4">
              <div className="w-20 h-1 bg-[#4ef0d8] neon-glow" />
            </div>
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-4">
            {contactDetails.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 bg-[#1a2332] rounded-xl border border-[#4ef0d8]/20 hover:border-[#4ef0d8]/50 transition-all duration-300 hover:neon-glow group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#4ef0d8]/10 rounded-lg flex items-center justify-center text-[#4ef0d8] group-hover:bg-[#4ef0d8] group-hover:text-[#0d1224] transition-all duration-300">
                  <contact.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#94a3b8]">{contact.label}</p>
                  <p className="text-white font-medium group-hover:text-[#4ef0d8] transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
