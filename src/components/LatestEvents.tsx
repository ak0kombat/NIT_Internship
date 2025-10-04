import { Calendar, Instagram, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LatestEvents = () => {
  const { t } = useLanguage();
  // CUSTOMIZE: Replace with your actual Instagram post URLs and images for events
  const events = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600", // CHANGE THIS: Add your event image
      postUrl: "https://www.instagram.com/p/YOUR_EVENT_POST_ID_1/", // CHANGE THIS: Add actual Instagram post URL
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600", // CHANGE THIS: Add your event image
      postUrl: "https://www.instagram.com/p/YOUR_EVENT_POST_ID_2/", // CHANGE THIS: Add actual Instagram post URL
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600", // CHANGE THIS: Add your event image
      postUrl: "https://www.instagram.com/p/YOUR_EVENT_POST_ID_3/", // CHANGE THIS: Add actual Instagram post URL
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600", // CHANGE THIS: Add your event image
      postUrl: "https://www.instagram.com/p/YOUR_EVENT_POST_ID_4/", // CHANGE THIS: Add actual Instagram post URL
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509099652299-30938b0aeb63?w=600", // CHANGE THIS: Add your event image
      postUrl: "https://www.instagram.com/p/YOUR_EVENT_POST_ID_5/", // CHANGE THIS: Add actual Instagram post URL
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600", // CHANGE THIS: Add your event image
      postUrl: "https://www.instagram.com/p/YOUR_EVENT_POST_ID_6/", // CHANGE THIS: Add actual Instagram post URL
    },
  ];

  return (
    <section className="py-16 bg-primary-light overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-3 justify-center">
          <Calendar className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('events.title')}
          </h2>
        </div>
        <p className="text-center text-muted-foreground mt-2">
          Stay updated with our recent activities and initiatives
        </p>
      </div>

      {/* Auto-scrolling container */}
      <div className="relative">
        <div className="flex animate-scroll-left gap-6">
          {/* First set of events */}
          {events.map((event) => (
            <a
              key={`first-${event.id}`}
              href={event.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[350px] relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg h-[350px]">
                <img
                  src={event.image}
                  alt="Event post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <Instagram className="h-4 w-4" />
                      <span className="text-sm font-medium">View on Instagram</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
          {/* Duplicate set for seamless loop */}
          {events.map((event) => (
            <a
              key={`second-${event.id}`}
              href={event.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[350px] relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg h-[350px]">
                <img
                  src={event.image}
                  alt="Event post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <Instagram className="h-4 w-4" />
                      <span className="text-sm font-medium">View on Instagram</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LatestEvents;
