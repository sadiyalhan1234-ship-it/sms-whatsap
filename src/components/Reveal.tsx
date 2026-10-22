import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** direction the element travels in when revealed */
  from?: "up" | "down" | "left" | "right" | "none";
  /** 3D rotation applied during reveal */
  tilt3d?: boolean;
  as?: "div" | "section" | "li" | "span";
};

export default function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  tilt3d = true,
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const offsets: Record<NonNullable<Props["from"]>, string> = {
    up: "translate3d(0, 48px, -60px)",
    down: "translate3d(0, -48px, -60px)",
    left: "translate3d(56px, 0, -60px)",
    right: "translate3d(-56px, 0, -60px)",
    none: "translate3d(0, 0, -60px)",
  };

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("transition-all duration-700 ease-out will-change-transform", className)}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible
          ? tilt3d
            ? "translate3d(0,0,0) rotateX(0deg) rotateY(0deg) scale(1)"
            : "none"
          : `${offsets[from]}${tilt3d ? " rotateX(-9deg) rotateY(7deg) scale(0.94)" : ""}`,
      }}
    >
      {children}
    </Tag>
  );
}
