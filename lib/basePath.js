export const getBasePath = () => {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const trimmed = raw.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}` : "";
};

export const getAssetPrefix = () => {
  const basePath = getBasePath();
  return basePath ? `${basePath}/` : "/";
};
