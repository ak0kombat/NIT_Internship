import { MapPin, Users, Building, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const AboutTiruchirappalli = () => {
  const stats = [
    { icon: Users, label: "Population", value: "10.7 Lakhs" },
    { icon: MapPin, label: "Area", value: "167.23 km²" },
    { icon: Building, label: "Wards", value: "65" },
    { icon: Award, label: "Established", value: "1866" },
  ];

  const famousSpots = [
    {
      name: "Rock Fort Temple",
      image: "https://github.com/ak0kombat/NIT_Internship/blob/main/src/assets/Rockfort.jpeg?raw=true?w=500",
      description: "Ancient 7th century fort and temple complex",
    },
    {
      name: "Sri Ranganathaswamy Temple",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500",
      description: "Largest functioning Hindu temple in the world",
    },
    {
      name: "Kallanai Dam",
      image: "https://images.unsplash.com/photo-1595855759920-86e2d133e7a2?w=500",
      description: "Ancient dam built across Kaveri river",
    },
    {
      name: "St. Joseph's Church",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500",
      description: "Historic church built in 1846",
    },
    {
      name: "Mukkombu",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
      description: "Popular picnic spot with lush greenery",
    },
    {
      name: "Government Museum",
      image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=500",
      description: "Houses art gallery and archaeological artifacts",
    },
  ];

  return (
    <section className="py-16 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            About Tiruchirappalli
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Tiruchirappalli, also known as Trichy, is a major tier II city in Tamil Nadu and 
            the administrative headquarters of Tiruchirappalli district. It is the fourth largest 
            municipal corporation in Tamil Nadu and also the fourth largest urban agglomeration 
            in the state.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Details Section */}
          <div>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">City Overview</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tiruchirappalli is situated almost at the geographic center of Tamil Nadu. 
                  The city is an important educational hub, home to several nationally recognized 
                  institutes including NIT Trichy, BHEL, and various medical colleges.
                </p>
                <p>
                  The city has a rich cultural heritage dating back to the Sangam period. 
                  It served as the early capital of the Cholas, which later fell to the 
                  Pandyas, Pallavas, Vijayanagar Empire, Nayaks, Carnatic state, and the British.
                </p>
                <p>
                  Known as the "Gateway to South India," Tiruchirappalli is a major industrial 
                  and commercial center. The city is famous for its cigars, textiles, and 
                  artificial diamonds. It's also developing as an IT hub with several 
                  technology parks.
                </p>
                <div className="pt-4 border-t">
                  <h4 className="font-semibold text-foreground mb-2">Key Highlights:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Major pilgrimage destination</li>
                    <li>Educational and industrial hub</li>
                    <li>Strategic transportation center</li>
                    <li>Rich cultural and historical significance</li>
                    <li>Smart City Mission participant</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Famous Spots Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Famous Tourist Spots</h3>
            <Card className="p-6">
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-4">
                  {famousSpots.map((spot) => (
                    <div
                      key={spot.name}
                      className="group relative overflow-hidden rounded-lg cursor-pointer"
                    >
                      <img
                        src={spot.image}
                        alt={spot.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                        <h4 className="text-white font-bold text-lg mb-1">{spot.name}</h4>
                        <p className="text-white/90 text-sm">{spot.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTiruchirappalli;
