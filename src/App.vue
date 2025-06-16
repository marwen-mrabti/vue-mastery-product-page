<script setup lang="ts">
import { ref } from 'vue'

import ProductDisplay from '@/components/ProductDisplay.vue'
import ReviewForm from '@/components/ReviewForm.vue'
import type { TReview } from '@/types'
import ReviewList from '@/components/ReviewList.vue'

const cart = ref<number[]>([])
const reviews = ref<TReview[]>([])

const addToCart = (productId: number) => {
  cart.value.push(productId)
}

const removeFromCart = (productId: number) => {
  const index = cart.value.findIndex((id) => id === productId)
  if (index !== -1) {
    cart.value.splice(index, 1)
  }
}

const reviewSubmitted = (review: Omit<TReview, 'id'>) => {
  const reviewId = crypto.randomUUID()
  reviews.value.push({ id: reviewId, ...review })
  console.log(reviews.value)
}

const premium = ref(true)
</script>

<template>
  <div class="nav-bar"></div>
  <main class="max-w-screen overflow-x-hidden">
    <div class="cart">Cart ({{ cart.length }})</div>
    <ProductDisplay
      @add-to-cart="addToCart"
      @remove-from-cart="removeFromCart"
      :premium="premium"
    />
    <ReviewList v-show="!!reviews.length" :reviews="reviews" />
    <ReviewForm @review-submitted="reviewSubmitted" />
  </main>
</template>

<style scoped></style>
