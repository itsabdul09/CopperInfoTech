
import { Check, Shield, Users, Trophy, Clock, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Worldwide' },
    { icon: Shield, value: '1000+', label: 'Security Audits' },
    { icon: Trophy, value: '50+', label: 'Industry Awards' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Securing Digital Assets Since 2010
          </h2>
          <p className="section-subtitle">
            We're a team of cybersecurity experts dedicated to protecting businesses from evolving digital threats
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background rounded-[var(--radius)] filter blur-3xl"></div>
            <div className="relative glass-card p-8">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6"
                alt="Team at Work"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-montserrat font-bold">
                Why Choose CopperInfoTech?
              </h3>
              
              <div className="space-y-4">
                {[
                  'Industry-leading cybersecurity solutions',
                  'Expert team with 100+ years combined experience',
                  'Customized security strategies for your business',
                  'Proactive threat detection and prevention',
                  'Comprehensive security assessments',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold font-montserrat mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Our Mission',
                  description: 'To provide cutting-edge cybersecurity solutions that protect organizations from evolving digital threats.',
                },
                {
                  icon: Globe,
                  title: 'Our Vision',
                  description: 'To be the global leader in innovative cybersecurity solutions, setting the standard for digital protection.',
                },
                {
                  icon: Users,
                  title: 'Our Values',
                  description: 'Integrity, innovation, and dedication to client success drive everything we do.',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
