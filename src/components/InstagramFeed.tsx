import { Instagram, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/LanguageContext";

const InstagramFeed = () => {
  const { t } = useLanguage();
  // CUSTOMIZE: Replace with your actual Instagram post URLs and images
  const posts = [
    {
      id: 1,
      image: "https://github.com/ak0kombat/NIT_Internship/blob/main/src/assets/1.jpg?raw=truew=500", // CHANGE THIS: Add your image
      postUrl: "https://www.instagram.com/p/DNhtYN1TIkJ/?utm_source=ig_web_copy_link&igsh=MWo0dGkzbnB3dTNsYg==", // CHANGE THIS: Add actual Instagram post URL
    },
    {
      id: 2,
      image: "https://github.com/ak0kombat/NIT_Internship/blob/main/src/assets/2.jpg?raw=true?w=500", // CHANGE THIS: Add your image
      postUrl: "https://www.instagram.com/p/DPVfCyygaT1/?utm_source=ig_web_copy_link", // CHANGE THIS: Add actual Instagram post URL
    },
    {
      id: 3,
      image: "https://github.com/ak0kombat/NIT_Internship/blob/main/src/assets/3.jpg?raw=true?w=500", // CHANGE THIS: Add your image
      postUrl: "https://www.instagram.com/p/DPVeaPkgek5/?utm_source=ig_web_copy_link", // CHANGE THIS: Add actual Instagram post URL
    },
    {
      id: 4,
      image: "https://github.com/ak0kombat/NIT_Internship/blob/main/src/assets/4.jpg?raw=true?w=500", // CHANGE THIS: Add your image
      postUrl: "https://www.instagram.com/p/DPOja9rAY3v/?utm_source=ig_web_copy_link", // CHANGE THIS: Add actual Instagram post URL
    },
    {
      id: 5,
      image: "https://github.com/ak0kombat/NIT_Internship/blob/main/src/assets/5.jpg?raw=true?w=500", // CHANGE THIS: Add your image
      postUrl: "https://www.instagram.com/p/DPGtNXnAXAo/?utm_source=ig_web_copy_link", // CHANGE THIS: Add actual Instagram post URL
    },
    {
      id: 6,
      image: "https://github.com/ak0kombat/NIT_Internship/blob/main/src/assets/6.jpg?raw=true?w=500", // CHANGE THIS: Add your image
      postUrl: "https://www.instagram.com/p/DPGtEVugTgy/?utm_source=ig_web_copy_link", // CHANGE THIS: Add actual Instagram post URL
    },
  ];

  return (
    <section className="py-16 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Instagram className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('instagram.title')}
              </h2>
              <p className="text-muted-foreground">{t('instagram.subtitle')}</p>
            </div>
          </div>
          <a
            href="https://instagram.com/trichycorp"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"
          >
            <Instagram className="h-4 w-4" />
            <span className="text-sm font-medium">{t('instagram.follow')}</span>
          </a>
        </div>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-6 pb-4">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Card className="w-[280px] h-[280px] overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer border-2 hover:border-primary">
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={post.image}
                      alt="Instagram post"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
                        <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                          <Instagram className="h-4 w-4" />
                          <span className="text-sm font-medium">View on Instagram</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="mt-8 text-center md:hidden">
          <a
            href="https://instagram.com/trichycorp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"
          >
            <Instagram className="h-4 w-4" />
            <span className="text-sm font-medium">{t('instagram.followFull')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
