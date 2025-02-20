
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content: "CopperInfoTech transformed our security infrastructure. Their expertise in cybersecurity is unmatched, and their team's dedication to our success was evident throughout the project.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Security Director, Global Finance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: "The level of protection and peace of mind we've gained since partnering with CopperInfoTech has been invaluable. Their proactive approach to security has prevented numerous potential threats.",
      rating: 5
    },
    {
      name: "Emily Roberts",
      role: "CEO, HealthTech Industries",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "Working with CopperInfoTech has been a game-changer for our healthcare organization. Their HIPAA-compliant solutions and dedicated support team exceed all expectations.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">
            What Our Clients Say
          </h2>
          <p className="section-subtitle">
            Trusted by leading organizations worldwide to deliver exceptional cybersecurity solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 flex flex-col h-full relative group"
            >
              <div className="absolute -top-4 -left-4">
                <Quote className="w-8 h-8 text-primary opacity-50" />
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              
              <p className="text-lg mb-6 flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-montserrat font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 bg-primary/5">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-6 h-6 fill-primary text-primary"
                  />
                ))}
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-2">
                Rated 5/5 by Over 500 Clients
              </h3>
              <p className="text-muted-foreground">
                Join our satisfied clients and experience industry-leading cybersecurity solutions
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              <div className="glass-card px-6 py-3">
                <div className="text-2xl font-bold font-montserrat mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
              <div className="glass-card px-6 py-3">
                <div className="text-2xl font-bold font-montserrat mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="glass-card px-6 py-3">
                <div className="text-2xl font-bold font-montserrat mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
