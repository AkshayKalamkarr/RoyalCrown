import Hero from '@/components/Hero';
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'


export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Hero/>
     <Home/>
     <Projects/>
     <Testimonials/>
    </main>
  );
}
