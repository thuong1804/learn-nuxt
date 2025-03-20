export const { format: formatCurrency } = new Intl.NumberFormat('en-GB', {
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 1
});