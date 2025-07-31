import { ArrowRight, Award, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  const stats = [
    { icon: Building, label: "Projects Completed", value: "150+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: Award, label: "Awards Won", value: "25+" },
  ];

  const featuredProjects = [
    {
      title: "Modern Residential Complex",
      category: "Residential",
      image: "https://buildingpractice.biz/wp-content/uploads/2024/01/2-29.jpg",
      description: "Contemporary living spaces that blend comfort with style"
    },
    {
      title: "Corporate Headquarters",
      category: "Commercial", 
      image: "https://buildingpractice.biz/wp-content/uploads/2024/01/1-23.jpg",
      description: "Innovative workspace design for modern businesses"
    },
    {
      title: "Cultural Center",
      category: "Public",
      image: "https://s3.amazonaws.com/europaconcorsi/project_images/387233/1774189824_large.jpg", 
      description: "Community spaces that inspire and connect"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="architectural" className="mb-6">
              Award-Winning Architecture Firm
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-100 mb-6 animate-fade-in">
              Creating Spaces That
              <span className="block text-warm-accent">Echo Excellence</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-8 animate-slide-in-up">
              We transform visions into architectural masterpieces that stand the test of time, 
              combining innovative design with sustainable practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm shadow-card-elegant border-0">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our latest architectural achievements that showcase our commitment to excellence and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <div className="aspect-[4/3] rounded-t-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{project.category}</Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="architectural" size="lg" asChild>
              <Link to="/services">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Begin Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary. Get in touch with our team today.
          </p>
          <Button size="lg" variant="architectural" asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;