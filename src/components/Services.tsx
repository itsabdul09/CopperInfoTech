
import { 
  Shield, 
  Server, 
  Database, 
  Cloud, 
  Lock, 
  Users, 
  BadgeAlert,
  Laptop
} from 'lucide-react';
import { Button } from './ui/button';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Network Security",
      description: "Protect your network infrastructure with advanced threat detection and prevention systems.",
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Secure cloud solutions with comprehensive monitoring and access control systems.",
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Enterprise-grade encryption and data loss prevention strategies.",
    },
    {
      icon: Lock,
      title: "Identity Management",
      description: "Robust authentication and authorization systems for secure access control.",
    },
    {
      icon: BadgeAlert,
      title: "Incident Response",
      description: "24/7 monitoring and rapid response to security incidents and threats.",
    },
    {
      icon: Laptop,
      title: "Security Training",
      description: "Comprehensive cybersecurity training and awareness programs for your team.",
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Comprehensive Security Solutions
          </h2>
          <p className="section-subtitle">
            Protect your business with our advanced cybersecurity services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-6 group hover:bg-primary/5 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-montserrat font-bold mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <Button variant="ghost" className="group-hover:text-primary">
                Learn More →
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                Need a Custom Security Solution?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our experts can create a tailored security strategy that perfectly fits your organization's unique requirements.
              </p>
              <Button size="lg">
                Schedule a Consultation
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">Certified security professionals</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold">Enterprise Grade</h4>
                  <p className="text-sm text-muted-foreground">Industry-leading solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
