export const withImageWidth = (src, width) => {
  if (!src || !width) return src;
  const joiner = src.includes("?") ? "&" : "?";
  return `${src}${joiner}width=${width}`;
};

export const scendentImages = {
  community: "https://scendent.co.nz/cdn/shop/files/IMG_4034.jpg?v=1661904070",
  support: "https://cdn.shopify.com/s/files/1/0610/4183/6088/files/help.jpg?v=1730974517",
  tshirtFront: "https://cdn.shopify.com/s/files/1/0610/4183/6088/products/WhiteSHIRT.png?v=1661890108",
  tshirtBack: "https://cdn.shopify.com/s/files/1/0610/4183/6088/products/shirtyes.png?v=1661928785",
  tshirtLifestyle: "https://cdn.shopify.com/s/files/1/0610/4183/6088/products/263828298_1029447544284580_2214947835096128734_n.png?v=1661928785",
  mugFront: "https://cdn.shopify.com/s/files/1/0610/4183/6088/products/d911a77f3da388f54ad45d010d38c609.jpg?v=1678827636",
  mugAngle: "https://cdn.shopify.com/s/files/1/0610/4183/6088/products/bdf46132d18d9af71e9bba72dd08f063.jpg?v=1678827637",
  mugStack: "https://cdn.shopify.com/s/files/1/0610/4183/6088/products/b5a87a6e8e9574f5d4344184c723cc6b.jpg?v=1678827637",
  shirtLogo: "https://scendent.co.nz/cdn/shop/files/Shirt_logo.png?v=1663648653",
};
