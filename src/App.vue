<script setup lang="ts">
import { ref } from 'vue'

const product = ref('socks')
const productDescription = ref('this socks are amazing!')
</script>

<template>
  <main class="max-w-screen min-h-screen flex justify-center items-start bg-amber-100">
    <div class="flex flex-col gap-2">
      <h1 class="text-3xl">{{ product }}</h1>
      <p class="text-base">
        {{ productDescription }}
      </p>
    </div>
  </main>
</template>

<style scoped></style>
