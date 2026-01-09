import { productsDummyData } from "@/assets/assets";
import ProductDetail from "@/components/ProductDetail";

export const dynamic = "force-static";
export const dynamicParams = false;

const categoryImages = {
  Tees: "/images/scendent_product_tee.svg",
  Hoodies: "/images/scendent_product_hoodie.svg",
  Caps: "/images/scendent_product_cap.svg",
  Stickers: "/images/scendent_product_sticker.svg",
  Accessories: "/images/scendent_product_tote.svg",
  Bundle: "/images/scendent_product_bundle.svg",
};

export function generateStaticParams() {
  return productsDummyData.map((product) => ({
    id: product._id,
  }));
}

export function generateMetadata({ params }) {
  const product = productsDummyData.find((item) => item._id === params?.id);
  if (!product) {
    return {
      title: "Product not found | Scendent",
      description: "Browse the latest Scendent merch drops and limited bundles.",
    };
  }

  const title = `${product.name} | Scendent Merch`;
  const description = product.seoDescription || product.description;
  const image = categoryImages[product.category] || "/images/scendent_hero_merch.svg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function ProductPage({ params }) {
  const product = productsDummyData.find((item) => item._id === params?.id) || null;
  const image = product ? categoryImages[product.category] || "/images/scendent_hero_merch.svg" : null;
  const productJsonLd = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: [image],
        sku: product._id,
        brand: {
          "@type": "Brand",
          name: "Scendent",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "NZD",
          price: product.offerPrice,
          availability: "https://schema.org/InStock",
          url: `https://scendent.co.nz/product/${product._id}/`,
        },
      }
    : null;

  return (
    <>
      {productJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      ) : null}
      <ProductDetail
        product={product}
        featuredProducts={productsDummyData}
        isLoading={false}
      />
    </>
  );
}
