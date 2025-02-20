import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Server } from 'lucide-react';

const Hero = () => {
  const handleGetStartedClick = () => {
    const industriesSection = document.getElementById('industries');
    if (industriesSection) {
      industriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="glass-card px-4 py-2 text-sm font-medium text-primary">
                Trusted by Fortune 500 Companies
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold leading-tight">
              Secure Your Digital Future
            </h1>

            <p className="text-xl text-muted-foreground">
              Advanced cybersecurity solutions to protect your business from evolving digital threats. Stay one step ahead with CopperInfoTech.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg" onClick={handleGetStartedClick}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Shield, label: "99.9% Uptime" },
                { icon: Lock, label: "Bank-Grade Security" },
                { icon: Server, label: "24/7 Support" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background rounded-[var(--radius)] filter blur-3xl"></div>
            <div className="relative glass-card p-8">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="Cybersecurity Visualization"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
