import { Bell, Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const RecentNotifications = () => {
  const { t } = useLanguage();
  const notifications = [
    {
      title: "Panjapur Truck Terminal Auction Contract Announcement",
      date: "28 Sep 2025",
      category: "Tender",
    },
    {
      title: "Public Grievance Redressal Meeting Schedule",
      date: "27 Sep 2025",
      category: "Meeting",
    },
    {
      title: "Swachhata Hi Seva 2025 - Waste Segregation Campaign",
      date: "26 Sep 2025",
      category: "Campaign",
    },
    {
      title: "Property Tax Payment Due Date Extended",
      date: "25 Sep 2025",
      category: "Notice",
    },
    {
      title: "New Underground Drainage Project - Zone 5",
      date: "24 Sep 2025",
      category: "Project",
    },
    {
      title: "Tree Plantation Drive - Kallangadu Road",
      date: "23 Sep 2025",
      category: "Event",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Tender: "bg-primary/10 text-primary",
      Meeting: "bg-primary/20 text-primary",
      Campaign: "bg-primary/15 text-primary",
      Notice: "bg-primary/10 text-primary",
      Project: "bg-primary/20 text-primary",
      Event: "bg-primary/15 text-primary",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('notifications.title')}
              </h2>
              <p className="text-muted-foreground">{t('notifications.subtitle')}</p>
            </div>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
            <span className="text-sm font-medium">{t('notifications.viewAll')}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notifications.map((notification, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(
                    notification.category
                  )}`}
                >
                  {notification.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{notification.date}</span>
                </div>
              </div>
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {notification.title}
              </h3>
              <button className="mt-4 text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                {t('notifications.readMore')}
                <ArrowRight className="h-3 w-3" />
              </button>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
            <span className="text-sm font-medium">{t('notifications.viewAll')}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentNotifications;
