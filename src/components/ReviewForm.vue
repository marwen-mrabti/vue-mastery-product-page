<script setup lang="ts">
import type { TReview } from '@/types'
import { reactive } from 'vue'

const emit = defineEmits<{
  'review-submitted': [Omit<TReview, 'id'>]
}>()

const review = reactive({
  name: '',
  content: '',
  rating: null,
})

const onReviewSubmit = () => {
  if (review.name.trim() === '' || review.content.trim() === '' || review.rating === null) {
    alert('review incomplete. Please fill out every field.')
    return
  }
  const productReview = {
    name: review.name.trim(),
    content: review.content.trim(),
    rating: review.rating,
  }
  emit('review-submitted', productReview)
  review.name = ''
  review.content = ''
  review.rating = null
}
</script>

<template>
  <form class="review-form" @submit.prevent="onReviewSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="review.name" required class="ring-1 ring-gray-300" />

    <label for="review">Review:</label>
    <textarea id="review" v-model="review.content" required class="ring-1 ring-gray-300"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="review.rating" required class="ring-1 ring-gray-300">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit" />
  </form>
</template>
