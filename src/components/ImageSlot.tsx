import { cn } from "@/lib/utils";

type ImageSlotProps = {
  label: string;
  className?: string;
  round?: boolean;
  src?: string;
  priority?: boolean;
};

/**
 * Emplacement photo en style Organic "washed".
 * Affiche la vraie photo si `src` est fourni, sinon un placeholder.
 */
export function ImageSlot({ label, className, round = false, src, priority }: ImageSlotProps) {
  return (
    <div
      data-image-slot={label}
      className={cn(
        "washed flex items-center justify-center overflow-hidden",
        round ? "rounded-full" : "rounded-xl",
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={label}
          loading={priority ? "eager" : "lazy"}
          className="size-full object-cover mix-blend-multiply opacity-95"
        />
      ) : (
        <span className="px-4 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}
