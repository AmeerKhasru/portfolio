import type { ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Reveal({ children, className = "", as: Tag = "div" }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
