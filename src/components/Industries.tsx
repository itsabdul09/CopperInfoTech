
import { Building2, Globe, Database, Building, FlaskConical, Briefcase, Heart, Scale } from 'lucide-react';
import { Button } from './ui/button';

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Banking & Finance",
      description: "Secure financial data and transactions with military-grade encryption and compliance measures.",
    },
    {
      icon: Database,
      title: "Technology",
      description: "Protect intellectual property and sensitive data with advanced cybersecurity solutions.",
    },
    {
      icon: Building,
      title: "Manufacturing",
      description: "Safeguard industrial systems and protect operational technology infrastructure.",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant security solutions to protect sensitive patient data and medical records.",
    },
    {
      icon: Scale,
      title: "Legal Services",
      description: "Secure client communications and confidential legal documents with encrypted systems.",
    },
    {
      icon: Globe,
      title: "E-Commerce",
      description: "Protect customer data and ensure secure online transactions for your business.",
    },
    {
      icon: FlaskConical,
      title: "Research",
      description: "Secure valuable research data and intellectual property with advanced protection.",
    },
    {
      icon: Briefcase,
      title: "Insurance",
      description: "Protect sensitive client information and ensure regulatory compliance.",
    }
  ];

  return (
    <section id="industries" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Industries We Serve
          </h2>
          <p className="section-subtitle">
            Tailored cybersecurity solutions for diverse sectors, ensuring comprehensive protection for your specific industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="glass-card p-6 flex flex-col items-center text-center group hover:bg-primary/5 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-lg font-montserrat font-bold mb-2">
                {industry.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="glass-card p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div id='contact'>
                <h3 className="text-2xl lg:text-3xl font-montserrat font-bold mb-4">
                  Don't See Your Industry?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We provide custom cybersecurity solutions for all industries. Contact us to discuss your specific requirements and how we can help protect your business.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://forms.gle/73yUxN1NEcyCfSQr5" target="_blank" rel="noopener noreferrer">
                  <Button size="lg">Contact Us</Button>
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background rounded-[var(--radius)] filter blur-3xl"></div>
                <div className="relative glass-card p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-semibold">Global Expertise</h4>
                        <p className="text-sm text-muted-foreground">Experience across various sectors worldwide</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-semibold">Industry Standards</h4>
                        <p className="text-sm text-muted-foreground">Compliance with sector-specific regulations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
