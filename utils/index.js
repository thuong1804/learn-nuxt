export const { format: formatCurrency } = new Intl.NumberFormat('en-GB', {
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 1
});

export const formatTextSlug = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const formatSlugUrl = (slug) => {
  return slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

const getApiUrl = (path) => {
  const config = useRuntimeConfig();
  return `${config.public.API_URL}${path}`;
};

export const apiFetch = async (endpoint, method = 'GET', options) => {
  return useFetch(getApiUrl(endpoint), {
    method: method,
    ...options,
  });
};