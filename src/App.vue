<script setup lang="ts">
import { ref } from 'vue'
import GreenSocksImg from '@/assets/images/socks_green.jpeg'
import BlueSocksImg from '@/assets/images/socks_blue.jpeg'

const cart = ref<string[]>([])

const product = ref('Socks')
const productDescription = ref('this socks are amazing!')
const details = ref(['50% coton', '30% wool', '20% polyester'])

const variants = ref([
  { id: 2234, color: 'green', imageUrl: GreenSocksImg },
  { id: 2235, color: 'blue' },
])

const productImg = ref(GreenSocksImg)
const inventory = ref(10)
const onSale = ref(true)

const addToCart = () => {
  cart.value.push(product.value)
}

const setProductImage = (variant: string) => {
  if (variant === 'green') {
    productImg.value = GreenSocksImg
  } else {
    productImg.value = BlueSocksImg
  }
}
</script>

<template>
  <main class="bg-amber-100 max-w-screen min-h-screen">
    <div class="cart">Cart ({{ cart.length }})</div>
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img
            :src="productImg"
            alt="socks with vue mastery logo"
            class="transition-all duration-200 ease-linear"
          />
        </div>
        <div class="product-info">
          <h1>{{ product }}</h1>
          <p>{{ productDescription }}</p>
          <ul class="pl-6 max-w-fit">
            <li v-for="(detail, index) in details" :key="index" class="capitalize">
              {{ detail }}
            </li>
          </ul>
          <ul class="my-3 flex gap-2">
            <li
              v-for="variant in variants"
              :key="variant.id"
              @mouseover="setProductImage(variant.color)"
              @mouseout="setProductImage('green')"
              class="outline-1 capitalize text-gray-50 font-medium outline-blue-100 w-fit px-4 py-1 rounded-md cursor-pointer"
              :class="variant.color === 'green' ? 'bg-green-700' : 'bg-cyan-700'"
            >
              {{ variant.color }}
            </li>
          </ul>

          <p v-if="inventory > 10" class="text-green-400">In Stock</p>
          <p v-else-if="inventory <= 10" class="text-orange-400">Almost Out of Stock</p>
          <p v-else class="text-red-400">Out of Stock</p>
          <small v-show="onSale" class="text-sm text-blue-400 font-semibold capitalize">
            On Sale
          </small>
          <button class="button hover:brightness-90" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
