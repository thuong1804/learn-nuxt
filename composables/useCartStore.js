import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart(product) {
      const existing = this.cart.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      this.saveCart()
    },
    updateQuantity(productId, newQuantity) {
      const product = this.cart.find((item) => item.id === productId)
      if (product) {
        product.quantity = Math.max(1, newQuantity)
        this.saveCart()
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId)
      this.saveCart()
    },
    saveCart() {
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    },
    loadCart() {
      if (process.client) {
        this.cart = JSON.parse(localStorage.getItem('cart') || '[]')
      }
    },
    totalCart() {
      if (process.client) {
        return this.cart.length
      }
    }
  },
})
