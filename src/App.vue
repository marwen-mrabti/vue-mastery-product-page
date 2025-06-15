<script setup lang="ts">
import { ref } from 'vue'
import socksGreenImg from '@/assets/images/socks_green.jpeg'

const product = ref('socks')
const productDescription = ref('this socks are amazing!')
const greenSocksImg = ref(socksGreenImg)
</script>

<template>
  <main class="bg-amber-100 max-w-screen min-h-screen">
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="greenSocksImg" alt="green socks with vue mastery logo" />
        </div>
        <div class="product-info">
          <h1>{{ product }}</h1>
          <p>{{ productDescription }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
