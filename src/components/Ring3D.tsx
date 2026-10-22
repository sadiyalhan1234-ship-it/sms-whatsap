type Props = {
  className?: string;
  /** tilt applied to the ring plane */
  tilt?: number;
  /** border color class */
  border?: string;
  /** speed of the spin animation (seconds) */
  duration?: number;
  /** reverse spin direction */
  reverse?: boolean;
  children?: React.ReactNode;
};

/**
 * A ring that is tilted in 3D space by the parent wrapper while the inner
 * element spins around the Y axis — combining both transforms correctly.
 */
export default function Ring3D({
  className = "",
  tilt = 70,
  border = "border-emerald-400/25",
  duration = 26,
  reverse = false,
  children,
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{ perspective: "900px" }}
    >
      <div className="h-full w-full" style={{ transform: `rotateX(${tilt}deg)`, transformStyle: "preserve-3d" }}>
        <div
          className={`h-full w-full rounded-full border-2 ${border} animate-spin-slow`}
          style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
        />
        {children}
      </div>
    </div>
  );
}
