import { Recycle, Home, Droplets, Building2, FileText, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  // CUSTOMIZE URLS: Replace the URLs below with your actual service page links
  const services = [
    {
      icon: Recycle,
      titleKey: "services.waste.title",
      descKey: "services.waste.desc",
      bgImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
      url: "#", // CHANGE THIS: Add your waste management service URL
    },
    {
      icon: Home,
      titleKey: "services.tax.title",
      descKey: "services.tax.desc",
      bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400",
      url: "#", // CHANGE THIS: Add your property tax payment URL
    },
    {
      icon: Droplets,
      titleKey: "services.water.title",
      descKey: "services.water.desc",
      bgImage: "https://images.unsplash.com/photo-1541980560361-951ab8b3f69d?w=400",
      url: "#", // CHANGE THIS: Add your water supply service URL
    },
    {
      icon: Building2,
      titleKey: "services.building.title",
      descKey: "services.building.desc",
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400",
      url: "#", // CHANGE THIS: Add your building permits URL
    },
    {
      icon: FileText,
      titleKey: "services.certificate.title",
      descKey: "services.certificate.desc",
      bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400",
      url: "#", // CHANGE THIS: Add your certificate service URL
    },
    {
      icon: Phone,
      titleKey: "services.grievance.title",
      descKey: "services.grievance.desc",
      bgImage: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400",
      url: "#", // CHANGE THIS: Add your grievance portal URL
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={service.url}
                target={service.url.startsWith('http') ? '_blank' : '_self'}
                rel={service.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <Card className="relative overflow-hidden p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-2 hover:border-primary h-full">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.bgImage}')` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white/90 group-hover:bg-white/80 transition-colors" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(service.descKey)}
                    </p>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
