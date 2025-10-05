import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const OurVideos = () => {
  const { t } = useLanguage();
  
  // CHANGE THESE: Replace with your actual YouTube video IDs and titles
  const videos = [
    {
      id: "24BdIpNHQ6s", // Change to your video ID
      title: "Trichy Commissioner | N Ravichandran | Home Compost Plant | My Trichy My Responsibility", // Change title
    },
    {
      id: "மாநகராட்சி ஆணையர் அவர்களுடன் சிறப்பு நேரலை நிகழ்ச்சி ¦ 26 05 2020", // Change to your video ID
      title: "E51C9qseQ-4", // Change title
    },
    {
      id: "ibsbFBvFYro", // Change to your video ID
      title: "மாநகராட்சி ஆணையர் அவர்களுடன் சிறப்பு நேரலை நிகழ்ச்சி ¦ 11 05 2020", // Change title
    },
    {
      id: "TN1qcPn_ncQ", // Change to your video ID
      title: "திருச்சி மாநகராட்சி ஆணையர் அவர்களுடன் சிறப்பு நேரலை ¦ 27 04 2020", // Change title
    },
    {
      id: "20kZ947qruk", // Change to your video ID
      title: "திருச்சி மாநகராட்சி ஆணையர் அவர்களுடன் நேரலை நிகழ்ச்சி ¦ 28 03 2020", // Change title
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          {t('ourVideos')}
        </h2>
        
        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <div className="flex gap-6 pb-4">
            {videos.map((video, index) => (
              <Card key={index} className="flex-shrink-0 w-[400px] overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground truncate">
                    {video.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default OurVideos;
