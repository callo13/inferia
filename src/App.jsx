import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import StatsSection from './components/StatsSection';
import Process from './components/Process';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black relative overflow-hidden">
      {/* Animated lime gradient background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 30% 20%, hsl(85, 85%, 60%, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, hsl(85, 80%, 55%, 0.12) 0%, transparent 50%)",
        animation: "pulse-slow 8s ease-in-out infinite"
      }} />

      {/* Additional lime accent gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-lime-400/8 rounded-full blur-3xl animate-pulse-slow" style={{
        animationDelay: "2s"
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-500/5 rounded-full blur-3xl animate-pulse-slow" style={{
        animationDelay: "4s"
      }} />

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
