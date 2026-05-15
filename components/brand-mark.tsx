import Image from "next/image";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className={`brand-mark ${compact ? "brand-mark--compact" : ""}`}>
      <Image
        src="/images/worldofworkflow-logo-source.png"
        alt="WorldofWorkflow Logo"
        fill
        priority
        sizes={compact ? "44px" : "58px"}
        className="brand-mark__image"
      />
    </span>
  );
}
