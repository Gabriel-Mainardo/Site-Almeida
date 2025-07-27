import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
}

export function ButtonCustom({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "right",
  loading = false,
  disabled,
  ...props
}: ButtonCustomProps) {
  // Variantes de estilo
  const variantStyles = {
    primary: "bg-navy text-gold border-2 border-gold shadow-lg hover:bg-navy-light",
    secondary: "bg-gradient-gold text-navy-dark shadow-lg hover:brightness-110",
    outline: "border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark",
    text: "text-gold hover:bg-navy-light/50",
  };

  // Tamanhos - ajustados para serem consistentes em mobile e desktop
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Classes adicionais para quando o botão estiver em estado de loading
  const loadingStyles = loading
    ? "relative text-transparent pointer-events-none"
    : "";

  return (
    <button
      className={cn(
        "rounded font-medium transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-2",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        disabled ? "opacity-50 pointer-events-none" : "",
        loadingStyles,
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {/* Conteúdo do botão com ícone */}
      {icon && iconPosition === "left" && (
        <span className="relative z-10">{icon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="relative z-10">{icon}</span>
      )}
      
      {/* Indicador de carregamento */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Efeito de hover para variante secundária */}
      {variant === "secondary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
      
      {/* Efeito de hover para variante outline */}
      {variant === "outline" && (
        <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
    </button>
  );
} 