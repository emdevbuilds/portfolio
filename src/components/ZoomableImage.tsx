import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const ZoomableImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* The thumbnail */}
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className={`cursor-zoom-in transition-transform hover:scale-[1.02] ${className}`}
        />
      </DialogTrigger>
      {/* The full-screen view */}
      <DialogContent className="max-w-7xl border-0 bg-transparent p-0 shadow-none">
        <DialogTitle>
          <VisuallyHidden>Zoomed Profile Image</VisuallyHidden>
        </DialogTitle>
        <DialogDescription>
          <VisuallyHidden>Zoomed Profile Image</VisuallyHidden>
        </DialogDescription>
        <div className="relative h-[80vh] w-full">
          <Image
            src="/emmanuel-chukwu-full.jpg"
            alt={alt}
            fill
            className="object-contain"
            quality={100}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ZoomableImage;
