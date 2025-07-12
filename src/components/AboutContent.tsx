import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Compass, Users, Target, Award } from "lucide-react";

const AboutContent = () => {
  const values = [
    {
      icon: Compass,
      title: "Vision",
      description: "We envision a world where architecture serves as a bridge between human aspirations and environmental harmony.",
      color: "bg-primary text-primary-foreground"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Every project is a partnership, where your dreams meet our expertise to create something extraordinary.",
      color: "bg-warm-accent text-accent-foreground"
    },
    {
      icon: Target,
      title: "Purpose",
      description: "We design with intention, creating spaces that tell stories and serve communities for generations.",
      color: "bg-secondary text-secondary-foreground"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to quality and innovation drives us to exceed expectations in every detail.",
      color: "bg-accent text-accent-foreground"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-up">
            <Badge className="mb-4 text-primary border-primary">Our Story</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building a Strong Online Brand with 
              <span className="text-primary"> Architecture</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Today's digital age demands more than just awe-inspiring structures. It calls for an online presence that's equally captivating. Your website is not just a digital portfolio; it's the cornerstone of your brand's online identity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That's where architecture website design comes into play. It's about crafting a website that's as meticulously designed as your architectural projects.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-subtle rounded-2xl p-8 shadow-elegant">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-warm-accent rounded-full opacity-30"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Your Digital Identity
                </h3>
                <p className="text-muted-foreground mb-6">
                  Imagine a website that not only showcases your portfolio in the most visually stunning way but also conveys a great deal about who you are and whom you serve.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Compass className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Digital Business Card</h4>
                    <p className="text-sm text-muted-foreground">Gallery, and first handshake with potential clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-primary border-primary">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values are the foundation of every design decision, guiding us to create spaces that inspire and endure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-architectural transition-all duration-300 border-0 shadow-card-elegant">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-subtle rounded-3xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              But it's not just about looking good. Functionality is key. A great architecture website strikes a balance between aesthetic appeal and user-friendly design, ensuring visitors can easily find exactly what they need without getting lost in the details.
            </p>
            <p className="text-lg text-muted-foreground">
              From showcasing your portfolio to providing clear contact information, every element should be strategically placed to create an experience as thoughtful as your architectural designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;