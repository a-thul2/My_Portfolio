const SkillsSection = () => {
  const skills = [
    {
      name: 'MERN Stack',
      icon: '🛠️',
      color: '#f89820',
    },
    {
      name: 'Agentic AI',
      icon: '🤖',
      color: '#6db33f',
    },
    {
      name: 'Python',
      icon: '🐍',
      color: '#f7df1e',
    },
    {
      name: 'Java',
      icon: '☕',
      color: '#339933',
    },
    {
      name: 'Google Cloud Platform',
      icon: '☁️',
      color: '#61dafb',
    },
    {
      name: 'Git/GitHub',
      icon: '🔀',
      color: '#f05032',
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      color: '#47a248',
    },
    {
      name: 'PostgreSQL',
      icon: '🐘',
      color: '#336791',
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#0d1224]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical <span className="text-[#4ef0d8] neon-text">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1a2332] rounded-xl p-8 border border-[#4ef0d8]/20 hover:border-[#4ef0d8]/50 transition-all duration-300 hover:scale-105 hover:neon-glow group cursor-pointer"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-center group-hover:text-[#4ef0d8] transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white text-2xl mt-8 font-bold">
          ✨ And much more...!
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;
