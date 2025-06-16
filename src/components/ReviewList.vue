<script setup lang="ts">
import type { TReview } from '@/types'

const props = defineProps<{
  reviews: TReview[]
}>()
</script>

<template>
  <div class="review-container rounded-lg">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="review in props.reviews" :key="review.id" class="bg-amber-50">
        <span
          ><em class="font-semibold">{{ review.name }}</em> gave this product
          <em class="font-semibold">{{ review.rating }}</em> stars</span
        >
        <br />
        <p class="font-medium capitalize">{{ review.content }}</p>
      </li>
    </ul>
  </div>
</template>
