import { Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href="tel:18001021994" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>1800-102-1994</span>
            </a>
            <a href="tel:8300113000" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>83001 13000</span>
            </a>
            <div className="hidden lg:flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Bharathidasan Salai, Cantonment, Tiruchirappalli 620001</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
