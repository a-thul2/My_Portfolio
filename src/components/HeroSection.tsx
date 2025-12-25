import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-[#0d1224]">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-[#4ef0d8] text-sm font-medium tracking-wider uppercase">
            Software Developer
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Athul Menon P
          </h1>
          <p className="text-[#94a3b8] text-lg text-justify leading-relaxed max-w-xl">I'm a Software Developer and AI Engineer who builds scalable web apps and smart AI systems. I work with Python, MERN stack, and modern Agentic AI tools like OpenAI SDK, CrewAI, and LangGraph. I enjoy creating practical, high-impact solutions and love working with teams to turn ideas into real products.</p>
          <Button
            onClick={scrollToContact}
            className="bg-[#4ef0d8] text-[#0d1224] hover:bg-[#3dd4bf] font-semibold px-8 py-6 text-base neon-glow-strong transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>

        {/* Right Illustration */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-80 h-80 bg-[#4ef0d8]/10 rounded-full blur-3xl" />
          <div className="relative w-full max-w-md aspect-square">
            <img
              src="/My_photo.jpeg"
              alt="Athul Menon P"
              className="w-full h-full object-contain rounded-full neon-glow border-4 border-[#4ef0d8]/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
