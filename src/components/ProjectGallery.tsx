import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectGallery = () => {
  const projects = [
    {
      title: "Sky Tower Residences",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=400&fit=crop",
      description: "Luxury high-rise living with panoramic city views"
    },
    {
      title: "Innovation Hub",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop",
      description: "Cutting-edge workspace for tech companies"
    },
    {
      title: "Serenity Pavilion",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop",
      description: "Peaceful retreat blending traditional and modern elements"
    },
    {
      title: "Glass House",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=600&h=400&fit=crop",
      description: "Transparent living spaces connected to nature"
    },
    {
      title: "Urban Plaza",
      category: "Public",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop",
      description: "Community gathering space in the heart of the city"
    },
    {
      title: "Wave Building",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
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