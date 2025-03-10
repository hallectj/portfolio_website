import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const webProjects = [
    {
      title: 'Web Project 1',
      description: 'A full-stack web application built with React and Node.js',
      image: '/placeholder.svg',
      link: '#'
    },
    {
      title: 'Web Project 2',
      description: 'An e-commerce platform using Next.js and Stripe',
      image: '/placeholder.svg',
      link: '#'
    },
    {
      title: 'Web Project 3',
      description: 'A real-time chat application with WebSocket',
      image: '/placeholder.svg',
      link: '#'
    }
  ];

  const otherProjects = [
    {
      title: 'Music Player',
      description: 'A Java Swing-based music player application',
      tech: 'Java, Swing',
      link: '#'
    },
    {
      title: 'Curb Your Addiction Blocker',
      description: 'An application to help users manage their screen time',
      tech: 'C++, C#',
      link: '#'
    },
    {
      title: 'Etch-a-Sketch',
      description: 'A browser-based drawing application',
      tech: 'HTML, CSS, JavaScript',
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Featured Web Projects
        </h2>
        
        {/* Web Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {webProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Other Projects
        </h2>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">Technologies: {project.tech}</p>
              <Link
                href={project.link}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;