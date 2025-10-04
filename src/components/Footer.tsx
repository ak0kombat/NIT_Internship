import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-notification text-notification-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tiruchirappalli Corporation</h3>
            <p className="text-sm text-notification-foreground/80 leading-relaxed">
              Committed to making Tiruchirappalli a cleaner, greener, and more livable smart city through efficient governance and citizen-centric services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  Council Members
                </a>
              </li>
              <li>
                <a href="#" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  Departments
                </a>
              </li>
              <li>
                <a href="#" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  Tenders & Announcements
                </a>
              </li>
              <li>
                <a href="#" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  RTI Information
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  Property Tax Payment
                </a>
              </li>
              <li>
                <a href="#" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  Water Bill Payment
                </a>
              </li>
              <li>
                <a href="#" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  Building Permits
                </a>
              </li>
              <li>
                <a href="#" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  Birth/Death Certificates
                </a>
              </li>
              <li>
                <a href="#" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  Grievance Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-notification-foreground/80">
                  Bharathidasan Salai, Cantonment, Tiruchirappalli 620001
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:18001021994" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  1800-102-1994
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:8300113000" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  83001 13000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="mailto:info@trichycorp.gov.in" className="text-notification-foreground/80 hover:text-accent transition-colors">
                  info@trichycorp.gov.in
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-notification-foreground/70">
          <p>© 2025 Tiruchirappalli City Municipal Corporation. All rights reserved.</p>
          
        </div>
      </div>
    </footer>;
};
export default Footer;