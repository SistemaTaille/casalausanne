import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ImageItem {
  src: string;
  label: string;
  caption: string;
}

interface ImageCarouselProps {
  images: ImageItem[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Seta Esquerda */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-border bg-background/90 backdrop-blur-md flex items-center justify-center transition hover:bg-background hover:scale-105 active:scale-95"
        aria-label="Imagem anterior"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Seta Direita */}
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 md:translate-x-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-border bg-background/90 backdrop-blur-md flex items-center justify-center transition hover:bg-background hover:scale-105 active:scale-95"
        aria-label="Próxima imagem"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Viewport */}
      <div className="overflow-hidden px-8 md:px-12" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6">
          {images.map((img, index) => (
            <div
              key={img.src}
              className="flex-[0_0_85%] md:flex-[0_0_70%] min-w-0 pl-4 md:pl-6 transition-opacity duration-500"
              style={{ opacity: index === selectedIndex ? 1 : 0.35 }}
            >
              <figure>
                <div className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-4">
                  <span className="kicker text-muted-foreground">{img.label}</span>
                  <p className="mt-1 text-sm font-light italic text-muted-foreground">{img.caption}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores */}
      <div className="mt-8 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-8 bg-foreground"
                : "w-4 bg-foreground/25 hover:bg-foreground/40"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
