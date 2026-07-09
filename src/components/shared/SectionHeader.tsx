import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
  titleClassName,
  eyebrowClassName,
}: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={cn(
      "max-w-xl mb-8 sm:mb-12 lg:mb-14",
      centered && "mx-auto text-center max-w-2xl",
      className,
    )}
  >
    <span className={cn("v3-eyebrow", eyebrowClassName)}>{eyebrow}</span>
    <h2 className={cn("v3-section-title mt-4 mb-4", titleClassName)}>{title}</h2>
    {subtitle && (
      <p className={cn("v3-lead", centered && "mx-auto")}>{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeader;
