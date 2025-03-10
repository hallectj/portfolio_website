import Image from "next/image";
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Articles from '@/components/Articles';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Projects />
      <Articles />
    </div>
  );
}
