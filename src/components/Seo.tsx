import { Helmet } from "react-helmet-async";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  TWITTER_HANDLE,
  absoluteUrl,
} from "@/lib/site";

interface SeoImage {
  /** Site path (e.g. "/og-image.png") or absolute URL. */
  src: string;
  width: number;
  height: number;
}

interface SeoProps {
  /** Under 60 characters. */
  title: string;
  /** 120–160 characters, unique per page. */
  description: string;
  /** Route path, e.g. "/contact". Used for canonical and og:url. */
  path: string;
  image?: SeoImage;
  noindex?: boolean;
  /** Page-specific schema.org JSON-LD objects. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const Seo = ({ title, description, path, image, noindex, jsonLd }: SeoProps) => {
  const url = absoluteUrl(path);
  const img = image ?? {
    src: DEFAULT_OG_IMAGE.path,
    width: DEFAULT_OG_IMAGE.width,
    height: DEFAULT_OG_IMAGE.height,
  };
  const imageUrl = /^https?:\/\//.test(img.src) ? img.src : absoluteUrl(img.src);
  const ldItems = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : null}
      {noindex ? null : <link rel="canonical" href={url} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {noindex ? null : <meta property="og:url" content={url} />}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={String(img.width)} />
      <meta property="og:image:height" content={String(img.height)} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {ldItems.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
