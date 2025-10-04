import { Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const OfficialSection = () => {
  // CHANGE IMAGES: Replace the image URLs below with your own leader photos
  const currentCMImage = "https://github.com/ak0kombat/NIT_Internship/blob/main/src/assets/currentCM.jpg?raw=true?w=400"; // Change this URL
  const formerCMImage = "https://github.com/ak0kombat/NIT_Internship/blob/main/src/assets/formerCM.jpg?raw=true?w=400"; // Change this URL
  const mayorImage = "https://github.com/ak0kombat/NIT_Internship/blob/main/src/assets/trichymayor.jpg?raw=true?w=400"; // Change this URL
  const commissionerImage = "https://github.com/ak0kombat/NIT_Internship/blob/main/src/assets/collector.jpg?raw=true?w=400"; // Change this URL

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Chief Ministers Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Current CM */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src={currentCMImage} 
                  alt="Hon'ble Chief Minister Thiru. M.K. Stalin" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm text-muted-foreground mb-2">Hon'ble Chief Minister</h3>
              <h2 className="text-2xl font-bold text-foreground mb-2">Thiru. M.K. Stalin</h2>
              <p className="text-sm text-muted-foreground">
                Government of Tamil Nadu
              </p>
            </Card>

            {/* Former CM */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-muted">
                <img 
                  src={formerCMImage} 
                  alt="Former Chief Minister Dr. M. Karunanidhi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm text-muted-foreground mb-2">Former Chief Minister</h3>
              <h2 className="text-2xl font-bold text-foreground mb-2">Dr. M. Karunanidhi</h2>
              <p className="text-sm text-muted-foreground">
                (1924 - 2018)
              </p>
            </Card>
          </div>
        </div>

        {/* Mayor and Commissioner Section */}
        <div className="border-t pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Municipal Administration
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mayor Section */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={mayorImage} 
                    alt="Hon'ble Mayor Mu. Anbalagan, M.A" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm text-muted-foreground mb-2">Hon'ble Mayor</h3>
                <h2 className="text-2xl font-bold text-foreground mb-1">Mu. Anbalagan, M.A</h2>
              </div>
              <div className="space-y-4">
                <p className="text-center text-muted-foreground leading-relaxed">
                  With a sense of purpose, striving for progress and community pride, I welcome you to the City of Tiruchirappalli. 
                  Our administration is committed to serve everyone at the highest level possible with focus on a healthy and sustainable environment.
                </p>
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">Office: 0431-2415393</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">Mobile: 9629027775</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Commissioner Section */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={commissionerImage} 
                    alt="Commissioner Dr. V. Saravanan, IAS" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm text-muted-foreground mb-2">Commissioner</h3>
                <h2 className="text-2xl font-bold text-foreground mb-1">Dr. V. Saravanan, IAS</h2>
              </div>
              <div className="space-y-4">
                <p className="text-center text-muted-foreground leading-relaxed">
                  As the Municipal Commissioner, I am dedicated to transforming Tiruchirappalli into a model smart city. 
                  Our focus remains on efficient public service delivery, sustainable development, and citizen welfare.
                </p>
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">Office: 0431-2414411</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">commissioner@trichycorp.gov.in</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialSection;
