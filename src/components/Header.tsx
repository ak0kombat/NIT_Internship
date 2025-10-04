import { useState } from "react";
import { Menu, X, Search, ChevronDown, Languages } from "lucide-react";
import trichyLogo from "@/assets/trichy-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, toggleLanguage, t } = useLanguage();

  const menuStructure = {
    "THE CITY": [
      { title: "About Tiruchirappalli", href: "#" },
      { title: "History", href: "#" },
      { title: "Geography", href: "#" },
      { title: "Tourist Attractions", href: "#" },
      { title: "Smart City Projects", href: "#" },
    ],
    "COUNCIL": [
      { title: "Mayor", href: "#" },
      { title: "Deputy Mayor", href: "#" },
      { title: "Councillors", href: "#" },
      { title: "Council Meetings", href: "#" },
      { title: "Council Resolutions", href: "#" },
    ],
    "CORPORATION": [
      { title: "Commissioner", href: "#" },
      { title: "Organization Structure", href: "#" },
      { title: "Zonal Offices", href: "#" },
      { title: "Contact Information", href: "#" },
      { title: "RTI Information", href: "#" },
    ],
    "DEPARTMENTS": [
      { title: "Revenue Department", href: "#" },
      { title: "Engineering Department", href: "#" },
      { title: "Health Department", href: "#" },
      { title: "Town Planning", href: "#" },
      { title: "Accounts Department", href: "#" },
      { title: "Education Department", href: "#" },
    ],
    "INFORMATION": [
      { title: "Tenders", href: "#" },
      { title: "Announcements", href: "#" },
      { title: "Notifications", href: "#" },
      { title: "Reports", href: "#" },
      { title: "Acts & Rules", href: "#" },
      { title: "RTI Applications", href: "#" },
    ],
    "SERVICES": [
      { title: "Property Tax Payment", href: "#" },
      { title: "Water Bill Payment", href: "#" },
      { title: "Building Permits", href: "#" },
      { title: "Birth/Death Certificates", href: "#" },
      { title: "Trade License", href: "#" },
      { title: "Grievance Portal", href: "#" },
    ],
  };

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={trichyLogo} 
              alt="Tiruchirappalli Municipal Corporation Logo" 
              className="w-16 h-16 object-contain flex-shrink-0"
            />
            <div className="hidden md:block">
              <h1 className="text-sm lg:text-base font-bold text-foreground leading-tight">
                {t('header.title')}
              </h1>
              <p className="text-xs text-muted-foreground">{t('header.subtitle')}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="/"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent transition-colors rounded-md"
            >
              {t('header.home')}
            </a>

            {Object.entries(menuStructure).map(([key, items]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent transition-colors rounded-md flex items-center gap-1">
                  {key}
                  <ChevronDown className="h-3 w-3" />
                </button>
                
                {openDropdown === key && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-md shadow-lg py-2 z-50">
                    {items.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className="ml-2 p-2 hover:bg-accent rounded-full transition-colors" aria-label="Search">
              <Search className="h-5 w-5 text-foreground" />
            </button>
            
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="ml-2 flex items-center gap-2"
              aria-label="Toggle language"
            >
              <Languages className="h-4 w-4" />
              <span className="text-xs font-medium">{language === 'en' ? 'தமிழ்' : 'English'}</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t max-h-[70vh] overflow-y-auto">
            <div className="px-4 pb-3 flex items-center justify-between border-b mb-3">
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Languages className="h-4 w-4" />
                <span className="text-xs font-medium">{language === 'en' ? 'தமிழ்' : 'English'}</span>
              </Button>
            </div>
            <a
              href="/"
              className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              {t('header.home')}
            </a>
            {Object.entries(menuStructure).map(([key, items]) => (
              <div key={key} className="mb-2">
                <div className="px-4 py-2 text-sm font-bold text-primary">{key}</div>
                {items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block px-8 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            ))}
            <div className="px-4 py-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent rounded-md">
                <Search className="h-4 w-4" />
                <span className="text-sm">Search</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
