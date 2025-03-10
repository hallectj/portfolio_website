import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Husband, Programmer, Christian, Web Developer and Blogger
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            You can see what I am about by visiting the about section, or get started by seeing some of the projects I have completed below.
          </p>
          
          {/* Tech Stack Logos */}
          <div className="flex justify-center items-center space-x-8">
            <div className="relative bg-white w-16 h-16">
              <Image
                src="typescript_icon.svg"
                alt="TypeScript"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative bg-white w-16 h-16">
              <Image
                src="angular_icon.svg"
                alt="Angular"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative bg-white w-16 h-16">
              <Image
                src="react_icon.svg"
                alt="React"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative bg-white w-16 h-16">
              <Image
                src="javascript_icon.svg"
                alt="JavaScript"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative bg-white w-16 h-16">
              <Image
                src="nodejs_icon.svg"
                alt="Node.js"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative bg-white w-16 h-16">
              <Image
                src="postgresql_icon.svg"
                alt="PostgreSQL"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;