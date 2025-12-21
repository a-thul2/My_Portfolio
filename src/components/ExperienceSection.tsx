import { Briefcase } from 'lucide-react';
import { useState } from 'react';

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string[];
};

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      role: 'Software Developer - 1',
      company: 'UST',
      duration: 'December 2024 — Present',
      description: [
        'Specializing in modernizing enterprise applications and migrating legacy systems to the cloud.',
        'Streamlined documentation and migration processes, resulting in a 40% increase in workflow efficiency.',
        'Collaborating with cross-functional teams to ensure complete understanding of system behavior and integration points.',
        'Delivering robust, maintainable solutions under tight deadlines with strong software engineering fundamentals.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#0d1224]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Work <span className="text-[#4ef0d8] neon-text">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const [expanded, setExpanded] = useState(false);

            return (
              <div
                key={index}
                className="bg-[#1a2332] rounded-2xl p-8 border border-[#4ef0d8]/30 shadow-[0_0_15px_rgba(78,240,216,0.1)] hover:shadow-[0_0_25px_rgba(78,240,216,0.2)] hover:border-[#4ef0d8]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#4ef0d8]/10 rounded-xl flex items-center justify-center border border-[#4ef0d8]/20 group-hover:border-[#4ef0d8]/40 transition-all duration-300">
                    <Briefcase className="w-6 h-6 text-[#4ef0d8]" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-white/90 mt-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-[#4ef0d8]/80 font-medium mt-2">
                        {exp.duration}
                      </p>
                    </div>

                    {/* Bullet-point description */}
                    <ul
                      className={`list-disc pl-5 space-y-2 text-[#ebedf0] leading-relaxed
                      ${expanded ? 'block' : 'line-clamp-3 md:line-clamp-none'}`}
                    >
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    {/* Button only visible on small screens */}
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="md:hidden text-[#4ef0d8] font-semibold hover:underline"
                    >
                      {expanded ? 'Read less' : 'Read more'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
