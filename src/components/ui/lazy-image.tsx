import { useState, useCallback, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useLazyImage } from "@/hooks/useLazyImage";

type LazyImageProps = {
  src: string;
  alt: string;
  placeholderSrc?: string;
  className?: string;
  containerClassName?: string;
  transitionDuration?: number;
  showLoader?: boolean;
  loaderSize?: number;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "loading">;

export function LazyImage({
  src,
  alt,
  placeholderSrc,
  className,
  containerClassName,
  transitionDuration = 300,
  showLoader = true,
  loaderSize = 24,
  ...props
}: LazyImageProps) {
  const { imageSrc, setImageRef, isLoaded, isError } = useLazyImage(src, placeholderSrc);
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  
  // Retorna um estilo de transição com a duração fornecida
  const getTransitionStyle = useCallback(
    () => ({
      transition: `opacity ${transitionDuration}ms ease-in-out`,
      opacity: isLoaded ? 1 : 0,
    }),
    [isLoaded, transitionDuration]
  );
  
  // Função chamada quando a imagem de destino é carregada
  const handleLoad = useCallback(() => {
    setIsPlaceholder(false);
  }, []);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Imagem de destino com lazy loading */}
      <img
        ref={setImageRef}
        src={imageSrc || placeholderSrc}
        alt={alt}
        className={cn("w-full h-auto", className)}
        style={getTransitionStyle()}
        onLoad={handleLoad}
        {...props}
      />
      
      {/* Imagem de placeholder enquanto carrega */}
      {isPlaceholder && placeholderSrc && (
        <img
          src={placeholderSrc}
          alt={`Placeholder for ${alt}`}
          className={cn("absolute inset-0 w-full h-full object-cover", className)}
        />
      )}
      
      {/* Loader (opcional) */}
      {showLoader && !isLoaded && !isError && !placeholderSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-navy-dark/20">
          <div 
            className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"
            style={{ width: loaderSize, height: loaderSize }}
          />
        </div>
      )}
      
      {/* Mensagem de erro (para acessibilidade) */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-navy-dark/20">
          <span className="sr-only">Erro ao carregar a imagem: {alt}</span>
          <div className="text-gold/80 text-sm">Imagem indisponível</div>
        </div>
      )}
    </div>
  );
} 