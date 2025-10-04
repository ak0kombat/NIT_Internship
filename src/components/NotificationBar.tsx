import { ChevronLeft, ChevronRight, Bell } from "lucide-react";
import { useState } from "react";

const NotificationBar = () => {
  const notifications = [
    "Panjapur Truck Terminal Auction Contract Announcement",
    "Public Grievance Redressal Meeting - Date: 05.10.2025",
    "Waste Management Awareness Campaign - Register Now",
    "Smart City Development Projects Update",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? notifications.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === notifications.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-notification text-notification-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-3">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Bell className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase">Notification</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-sm text-notification-foreground/90">
              {notifications[currentIndex]}
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handlePrev}
              className="p-1 hover:bg-white/10 rounded transition-colors"
              aria-label="Previous notification"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1 hover:bg-white/10 rounded transition-colors"
              aria-label="Next notification"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
