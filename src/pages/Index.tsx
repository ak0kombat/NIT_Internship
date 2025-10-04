import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NotificationBar from "@/components/NotificationBar";
import HeroCarousel from "@/components/HeroCarousel";
import OfficialSection from "@/components/OfficialSection";
import AboutTiruchirappalli from "@/components/AboutTiruchirappalli";
import ServicesSection from "@/components/ServicesSection";
import RecentNotifications from "@/components/RecentNotifications";
import InstagramFeed from "@/components/InstagramFeed";
import LatestEvents from "@/components/LatestEvents";
import Footer from "@/components/Footer";

const Index = () => {
  // CHANGE BACKGROUND IMAGE: Replace this URL with your own Tiruchirapalli image
  const backgroundImage = "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070";

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-fixed -z-10"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      {/* White overlay for readability */}
      <div className="fixed inset-0 bg-white/85 -z-10" />
      
      <div className="relative">
        <TopBar />
        <Header />
        <NotificationBar />
        <HeroCarousel />
        <OfficialSection />
        <AboutTiruchirappalli />
        <ServicesSection />
        <RecentNotifications />
        <InstagramFeed />
        <LatestEvents />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
