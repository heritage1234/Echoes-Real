import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectGallery = () => {
  const projects = [
    {
      title: "Sky Tower Residences",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      description: "Luxury high-rise living with panoramic city views"
    },
    {
      title: "Innovation Hub",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      description: "Cutting-edge workspace for tech companies"
    },
    {
      title: "Serenity Pavilion",
      category: "Cultural",
      image: "https://tourafricamag.com/wp-content/uploads/2025/07/lakowe-lakes-resort-accomodation-1024x683.png",
      description: "Peaceful retreat blending traditional and modern elements"
    },
    {
      title: "Glass House",
      category: "Residential",
      image: "https://i.pinimg.com/736x/59/7c/77/597c7752315ca244b63fc6d333775cff.jpg",
      description: "Transparent living spaces connected to nature"
    },
    {
      title: "Urban Plaza",
      category: "Public",
      image: "https://i.pinimg.com/1200x/81/a3/60/81a3607542d64d782bbfb7f23ce09780.jpg",
      description: "Community gathering space in the heart of the city"
    },
    {
      title: "Wave Building",
      category: "Commercial",
      image: "https://i.pinimg.com/1200x/d6/90/bf/d690bfe96e96290158961c348331eeab.jpg",
      description: "Dynamic facade inspired by ocean waves"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of architectural projects that showcase innovation, sustainability, and timeless design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/placeholder.svg"; }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
      </div>
    </section>
  );
};

export default ProjectGallery;