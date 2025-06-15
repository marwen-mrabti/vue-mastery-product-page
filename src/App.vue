<script setup lang="ts">
import { ref } from 'vue'
import socksGreenImg from '@/assets/images/socks_green.jpeg'

const product = ref('Socks')
const productDescription = ref('this socks are amazing!')
const greenSocksImg = ref(socksGreenImg)
const inventory = ref(10)
const onSale = ref(true)
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
          <p v-if="inventory > 10" class="text-green-400">In Stock</p>
          <p v-else-if="inventory <= 10" class="text-orange-400">Almost Out of Stock</p>
          <p v-else class="text-red-400">Out of Stock</p>
          <small v-show="onSale" class="text-sm text-blue-400 font-semibold capitalize">
            On Sale
          </small>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
