import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Career_Conversation - An Interactive AI Resume',
      description:
        'Career_Conversation is an AI-powered conversational agent that acts as my interactive resume, allowing users to ask questions about my career, skills, and projects in real time. Instead of a static resume, this project provides a dynamic, always-on experience powered by Gemini LLM (via OpenAI-compatible endpoints) and deployed using Gradio on Hugging Face Spaces.',
      image: 'public/AI_Resume.jpg',
      tags: ['Python', 'Gradio', 'Gemini LLM', 'Hugging Face Spaces', 'Pushover API'],
      link: 'https://huggingface.co/spaces/athul8/career_conversation', // used for "Try this project"
    },
    {
      title: 'Prism - Chat App',
      description:
        'A modern real-time chat application built using the MERN stack, featuring live messaging, authentication, and a clean UI. Key features include real-time messaging, online user presence, reliable error handling, and efficient media storage.',
      image: 'public/chat_app.jpg',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Zustand', 'Tailwind CSS', 'DaisyUI', 'JWT'],
      link: 'https://github.com/a-thul2/Prism_Chat-App_MERN',
    },
    {
      title: 'Quality Cafe - Restaurant Website',
      description:
        'A Full-Stack Restaurant Website built using MERN Stack. It includes a hero landing section, a detailed menu showcase, and a dedicated team and about page. Users can make online table reservations. The interface is modern, mobile-friendly, and fully responsive, with smooth scrolling for seamless navigation.',
      image: 'public/cafe.jpg',
      tags: ['React.js', 'Express', 'MongoDB', 'Axios'],
      link: 'https://github.com/a-thul2/Restaurant_Webpage',
    },
    {
      title: 'Weather App',
      description:
        'This is a simple and responsive weather application built using React.js. Users can enter any city name to retrieve real-time weather information from a public weather API. It features a clean, mobile-friendly interface for a smooth user experience.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&q=80',
      tags: ['React.js', 'Fetch API / Axios','OpenWeatherMap API'],
      link: 'https://github.com/a-thul2/Weather-App-React-Project',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#0d1224]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="text-[#4ef0d8] neon-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a2332] rounded-xl overflow-hidden border border-[#4ef0d8]/20 hover:border-[#4ef0d8]/50 transition-all duration-300 hover:-translate-y-2 hover:neon-glow group"
            >

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-[#4ef0d8] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-[#94a3b8] leading-relaxed">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-[#4ef0d8]/10 text-[#4ef0d8] rounded-full border border-[#4ef0d8]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="space-y-3">

                  {/* 👉 Extra button ONLY for Career_Conversation */}
                  {project.title === 'Career_Conversation - An Interactive AI Resume' && (
                    <Button
                      asChild
                      className="w-full bg-[#4ef0d8] text-[#0d1224] hover:bg-[#3bc9b8] transition-all duration-300"
                    >
                      <a
                        href="https://huggingface.co/spaces/athul8/career_conversation"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Live Demo
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}

                  {/* View Project Button */}
                  <Button
                    asChild
                    className="w-full bg-transparent border m-0 border-[#4ef0d8] text-[#4ef0d8] hover:bg-[#4ef0d8] hover:text-[#0d1224] transition-all duration-300"
                  >
                    <a
                      href={
                        project.title === 'Career_Conversation - An Interactive AI Resume'
                          ? 'https://github.com/a-thul2/AI_Career_Conversation' // temp placeholder
                          : project.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-white text-2xl mt-8 font-bold">
          ✨ And much more... All my projects can be viewed on my GitHub profile!
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
