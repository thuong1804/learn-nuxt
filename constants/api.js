export const apiConfig = {
  product: {
    getList: '/api/products',
    productCategory: '/products/categories',
    productListCategory: '/products/category-list',
    productByCategory: (slug) => `/api/product/category/${slug}`,
    productBySearch: (title) => `/products/search?q=${title}`
  },
}