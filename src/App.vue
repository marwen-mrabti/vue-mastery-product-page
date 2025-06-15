<script setup lang="ts">
import { ref } from 'vue'

import ProductDisplay from '@/components/ProductDisplay.vue'

const cart = ref<string[]>([])
const addToCart = (product: string) => {
  cart.value.push(product)
}
</script>

<template>
  <div class="nav-bar"></div>
  <main class="max-w-screen overflow-x-hidden">
    <div class="cart">Cart ({{ cart.length }})</div>
    <ProductDisplay @add-to-cart="addToCart" />
  </main>
</template>

<style scoped></style>
