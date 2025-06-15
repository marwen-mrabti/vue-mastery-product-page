<script setup lang="ts">
import { ref } from 'vue'
import socksGreenImg from '@/assets/images/socks_green.jpeg'

const product = ref('Socks')
const productDescription = ref('this socks are amazing!')
const details = ref(['50% coton', '30% wool', '20% polyester'])

const variants = ref([
  { id: 2234, color: 'green' },
  { id: 2235, color: 'blue' },
])

const sizes = ref(['small', 'medium', 'large'])

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
          <ul class="pl-6 max-w-fit">
            <li v-for="(detail, index) in details" :key="index" class="capitalize">
              {{ detail }}
            </li>
          </ul>
          <ul>
            <li v-for="variant in variants" :key="variant.id">
              {{ variant.color }}
            </li>
          </ul>
          <ul class="flex gap-1">
            <span>Available sizes : </span>
            <li v-for="(size, index) in sizes" :key="index" class="capitalize">
              {{ size }}
              <span class="font-bold" v-show="index < 2"> - </span>
            </li>
          </ul>
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
