import { cn } from "@/lib/utils";

interface ProductScreenshotProps {
  src: string;
  alt: string;
  className?: string;
}

const ProductScreenshot = ({ src, alt, className }: ProductScreenshotProps) => (
  <div className={cn("product-screenshot overflow-hidden bg-muted/30", className)}>
    <img
      src={src}
      alt={alt}
      width={2048}
      height={1154}
      className="block w-full h-auto select-none"
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  </div>
);

export default ProductScreenshot;
