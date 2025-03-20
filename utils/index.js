export const { format: formatCurrency } = new Intl.NumberFormat('en-GB', {
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 1
});

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