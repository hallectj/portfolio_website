import Image from 'next/image';

export default function AboutPage() {
  return (
    <article className="py-16 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Travis Halleck"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          
          <div className="text-gray-300 leading-relaxed">
            <p>
              Hi, I'm Travis Halleck, a passionate web developer with over 5 years of experience in creating modern web applications. 
              I specialize in Angular React, Next.js, and TypeScript, with a strong focus on building performant and user-friendly interfaces.
            </p>
            
            <p className="mt-4">
              Throughout my career, I've worked on various projects ranging from small apps to developing large-scale enterprise applications. 
              I'm particularly interested in web performance optimization and creating accessible user interfaces.
            </p>
            
            <p className="mt-4">
              When I'm not coding, you can find me blogging here on my website, playing video games and chess, or exploring new web technologies. 
              I believe in continuous learning and sharing knowledge with the developer community.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Skills</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Frontend Development (Angular, React, Next.js, Vue.js)</li>
              <li>TypeScript / JavaScript</li>
              <li>Responsive Web Design</li>
              <li>UI/UX Design Principles</li>
              <li>Performance Optimization</li>
              <li>Web Accessibility</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}