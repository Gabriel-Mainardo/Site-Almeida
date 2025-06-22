import { useState, useEffect } from "react";

interface UseLazyImageOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useLazyImage = (
  src: string,
  placeholderSrc?: string,
  { threshold = 0.1, rootMargin = "0px" }: UseLazyImageOptions = {}
) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || "");
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!imageRef || !src) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
              observer.unobserve(imageRef);
            };
            img.onerror = () => {
              setIsError(true);
              observer.unobserve(imageRef);
            };
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(imageRef);

    return () => {
      if (imageRef) observer.unobserve(imageRef);
    };
  }, [imageRef, src, threshold, rootMargin]);

  return { imageSrc, setImageRef, isLoaded, isError };
}; 