import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MacWindowProps {
  title: string;
  dark?: boolean;
  float?: boolean;
  className?: string;
  children: ReactNode;
}

const MacWindow = ({ title, dark = false, float = false, className, children }: MacWindowProps) => (
  <div className={cn("mac-win", float && "shot-float", dark && "dark", className)}>
    <div className="mac-bar">
      <span className="tl r shrink-0" />
      <span className="tl y shrink-0" />
      <span className="tl g shrink-0" />
      <span className="mac-title">{title}</span>
    </div>
    {children}
  </div>
);

export default MacWindow;
