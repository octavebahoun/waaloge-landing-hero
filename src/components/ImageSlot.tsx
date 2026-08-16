import { cn } from "@/lib/utils";

type ImageSlotProps = {
  label: string;
  className?: string;
  round?: boolean;
};

/**
 * <image-slot> placeholder — à remplacer par les vraies photos.
 * Rendu en style Organic "washed".
 */
export function ImageSlot({ label, className, round = false }: ImageSlotProps) {
  return (
    <div
      data-image-slot={label}
      className={cn(
        "washed flex items-center justify-center overflow-hidden",
        round ? "rounded-full" : "rounded-xl",
        className,
      )}
    >
      <span className="px-4 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
