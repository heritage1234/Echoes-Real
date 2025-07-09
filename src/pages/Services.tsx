import { Building, Home, Palette, Settings, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Custom homes and renovations tailored to your lifestyle and dreams.",
      features: ["Custom Home Design", "Renovations & Extensions", "Interior Space Planning", "Sustainable Solutions"],
      price: "Starting from $5,000"
    },
    {
      icon: Building,
      title: "Commercial Architecture",
      description: "Professional spaces that enhance productivity and reflect your brand.",
      features: ["Office Buildings", "Retail Spaces", "Hospitality Design", "Mixed-Use Developments"],
      price: "Starting from $15,000"
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Complete interior solutions that complement your architectural vision.",
      features: ["Space Planning", "Material Selection", "Furniture Design", "Lighting Design"],
      price: "Starting from $3,000"
    },
    {
      icon: Settings,
      title: "Project Management",
      description: "End-to-end project coordination to ensure seamless execution.",
      features: ["Construction Oversight", "Timeline Management", "Quality Assurance", "Budget Control"],
      price: "10-15% of project cost"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We begin with understanding your vision, needs, and budget through detailed consultations."
    },
    {
      step: "02", 
      title: "Concept Development",
      description: "Our team creates initial design concepts and presents multiple options for your consideration."
    },
    {
      step: "03",
      title: "Design Development", 
      description: "We refine the chosen concept, developing detailed plans and specifications."
    },
    {
      step: "04",
      title: "Construction & Delivery",
      description: "We oversee the construction process to ensure your vision becomes reality."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <Badge variant="architectural" className="mb-6">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Architectural Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial concept to final construction, we provide end-to-end architectural services 
            that bring your vision to life with precision and creativity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">{service.price}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures every project is delivered with excellence and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your architectural needs and discover how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="architectural" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;