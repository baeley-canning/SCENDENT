export const withImageWidth = (src, width) => {
  if (!src || !width) return src;
  const joiner = src.includes("?") ? "&" : "?";
  return `${src}${joiner}width=${width}`;
};

export const scendentImages = {
  community: "https://scendent.co.nz/cdn/shop/files/IMG_4034.jpg?v=1661904070",
  charityGroup: "https://scendent.co.nz/cdn/shop/files/IMG_2957.jpg?v=1714451489",
  eventCrowd: "https://scendent.co.nz/cdn/shop/files/scendent_first_even.png?v=1712479229",
  eventDj: "https://scendent.co.nz/cdn/shop/files/IMG_0853.jpg?v=1668046521",
  eventStage: "https://scendent.co.nz/cdn/shop/files/first-event-video-img.jpg?v=1716079879",
  ourPlace: "https://scendent.co.nz/cdn/shop/files/ourplace.jpg?v=1716082017",
  ryanWorking: "https://scendent.co.nz/cdn/shop/files/Ryan_working_2.png?v=1712455703",
  ryanBlur: "https://scendent.co.nz/cdn/shop/files/ryan_blur.jpg?v=1712454974",
  womanSmile: "https://scendent.co.nz/cdn/shop/files/woman-tilts-her-head-back-and-smiles-outdoors.jpg?v=1716078812",
  lakePortrait: "https://scendent.co.nz/cdn/shop/files/image1.jpg?v=1665029857",
  hopscotch: "https://scendent.co.nz/cdn/shop/files/hopscotch-in-the-sun.jpg?v=1716076174",
  filmReel: "https://scendent.co.nz/cdn/shop/files/a-film-reel-lays-tangled-against-a-white-background.jpg?v=1716079320",
  support: "https://cdn.shopify.com/s/files/1/0610/4183/6088/files/help.jpg?v=1730974517",
  tshirtFront: "https://cdn.shopify.com/s/files/1/0610/4183/6088/products/WhiteSHIRT.png?v=1661890108",
  tshirtBack: "https://cdn.shopify.com/s/files/1/0610/4183/6088/products/shirtyes.png?v=1661928785",
  tshirtSizeChart: "https://cdn.shopify.com/s/files/1/0610/4183/6088/products/263828298_1029447544284580_2214947835096128734_n.png?v=1661928785",
  mugFront: "https://cdn.shopify.com/s/files/1/0610/4183/6088/products/d911a77f3da388f54ad45d010d38c609.jpg?v=1678827636",
  mugAngle: "https://cdn.shopify.com/s/files/1/0610/4183/6088/products/bdf46132d18d9af71e9bba72dd08f063.jpg?v=1678827637",
  mugStack: "https://cdn.shopify.com/s/files/1/0610/4183/6088/products/b5a87a6e8e9574f5d4344184c723cc6b.jpg?v=1678827637",
  shirtLogo: "https://scendent.co.nz/cdn/shop/files/Shirt_logo.png?v=1663648653",
};
