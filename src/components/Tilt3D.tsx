import { useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

type Props = {
  children: ReactNode;
  className?: string;
  /** max rotation in degrees */
  intensity?: number;
  /** perspective distance in px */
  perspective?: number;
  /** show moving glare highlight */
  glare?: boolean;
  /** floating 3D animation applied to an inner layer */
  float?: boolean;
  /** extra translateZ applied to inner layer when hovered */
  depth?: number;
};

export default function Tilt3D({
  children,
  className,
  intensity = 14,
  perspective = 1100,
  glare = true,
  float = false,
  depth = 40,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [rx, setRx] = useState(0);
  const [ry, setRy] = useState(0);
  const [hover, setHover] = useState(false);
  const [mx, setMx] = useState(50);
  const [my, setMy] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setRx((0.5 - py) * intensity * 2);
    setRy((px - 0.5) * intensity * 2);
    setMx(px * 100);
    setMy(py * 100);
  };

  const handleLeave = () => {
    setRx(0);
    setRy(0);
    setHover(false);
  };

  return (
    <div
      ref={ref}
      className={cn("perspective-3d", className)}
      style={{ perspective: `${perspective}px` }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleLeave}
    >
      <div
        className="preserve-3d relative h-full transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `rotateX(${rx}deg) rotateY(${ry}deg) ${hover ? `translateZ(${depth}px)` : ""}`,
        }}
      >
        <div className={cn("preserve-3d h-full", float && "animate-float-slow")}>{children}</div>
        {glare && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
            style={{
              opacity: hover ? 1 : 0,
              background: `radial-gradient(600px circle at ${mx}% ${my}%, rgba(255,255,255,0.35), transparent 45%)`,
              mixBlendMode: "overlay",
            }}
          />
        )}
      </div>
    </div>
  );
}
