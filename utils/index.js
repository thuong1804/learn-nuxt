export const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format;

export const formatTextSlug = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const formatProductSlugDetail = (titleProduct, idProduct) => {
 return `/product/${formatSlugUrl(titleProduct)}-p-${idProduct}`
}

export const formatSlugUrl = (slug) => {
  return slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

const getApiUrl = (path) => {
  const config = useRuntimeConfig();
  return `${config.public.API_URL}${path}`;
};

export const apiFetch = async (endpoint, method = 'GET', options) => {
  return $fetch(getApiUrl(endpoint), {
    method: method,
    ...options,
  });
};