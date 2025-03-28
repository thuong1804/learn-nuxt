export const apiConfig = {
  product: {
    getList: '/product',
    productCategory: '/products/categories',
    productListCategory: '/products/category-list',
    productByCategory: (slug) => `/products/category/${slug}`,
    productBySearch: (title) => `/products/search?q=${title}`
  },
}