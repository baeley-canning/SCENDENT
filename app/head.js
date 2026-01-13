export default function Head() {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const trimmed = raw.replace(/^\/+|\/+$/g, "");
  const basePath = trimmed ? `/${trimmed}` : "";
  const fontBase = `${basePath}/fonts`;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
@font-face {
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url("${fontBase}/space-grotesk-variable.woff2") format("woff2");
}

@font-face {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 300 800;
  font-display: swap;
  src: url("${fontBase}/manrope-variable.woff2") format("woff2");
}

@font-face {
  font-family: "Press Start 2P";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("${fontBase}/press-start-2p-regular.ttf") format("truetype");
}

@font-face {
  font-family: "Source Sans 3";
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url("${fontBase}/source-sans-3-variable.woff2") format("woff2");
}
          `,
        }}
      />
      <link
        rel="preload"
        href={`${basePath}/fonts/space-grotesk-variable.woff2`}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={`${basePath}/fonts/manrope-variable.woff2`}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={`${basePath}/fonts/source-sans-3-variable.woff2`}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={`${basePath}/fonts/press-start-2p-regular.ttf`}
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
    </>
  );
}
