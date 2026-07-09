const brands = [
  "MaheTri",
  "Muditam",
  "Coral Haze",
  "GRAZA",
  "Pakt",
  "javvy",
  "JUNESHINE",
  "Classy Leather Bags",
];

const LogoStrip = () => {
  const track = [...brands, ...brands];

  return (
    <div className="border-y border-border bg-card overflow-x-hidden w-full">
      <div className="section-container py-5 overflow-x-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full min-w-0">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.16em] text-muted-foreground shrink-0 text-center px-2">
            Trusted by growing Shopify brands
          </span>
          <div className="logo-marquee relative w-full min-w-0 flex-1 max-w-3xl overflow-hidden">
            <div className="logo-marquee-track" aria-hidden="true">
              {track.map((brand, i) => (
                <span key={`${brand}-${i}`} className="logo-marquee-item">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoStrip;
