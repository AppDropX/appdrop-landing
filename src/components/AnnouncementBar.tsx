import { APPDROP_BUILDER_URL } from "@/lib/urls";

export const AnnouncementBarContent = () => (
  <div className="announce-bar">
    <div className="section-container">
      <div className="flex items-center justify-center gap-x-3 gap-y-1 py-1.5 flex-wrap text-center text-xs sm:text-sm text-white">
        <span className="announce-tag shrink-0">NEW</span>
        <span className="max-w-[42ch] sm:max-w-none leading-snug">
          <span className="sm:hidden">Shopify listing under review — Builder is live.</span>
          <span className="hidden sm:inline">
            Build your Shopify mobile app visually while our Shopify listing is under review.
          </span>
        </span>
        <a
          href={APPDROP_BUILDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center min-h-7 font-semibold text-accent hover:underline shrink-0"
        >
          <span className="sm:hidden">Builder →</span>
          <span className="hidden sm:inline">Launch Builder →</span>
        </a>
      </div>
    </div>
  </div>
);

export default AnnouncementBarContent;
