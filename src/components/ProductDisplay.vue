<script setup lang="ts">
import { computed, ref } from 'vue'
import GreenSocksImg from '@/assets/images/socks_green.jpeg'
import BlueSocksImg from '@/assets/images/socks_blue.jpeg'
import type { TVariant } from '@/types'

const props = defineProps<{
  premium: boolean
}>()

const emits = defineEmits<{
  addToCart: [number]
  removeFromCart: [number]
}>()

const product = ref('Socks')
const brand = ref('Vue Mastery')

const title = computed(() => {
  return brand.value + ' ' + product.value
})

const productDescription = ref('this socks are amazing!')
const details = ref(['50% coton', '30% wool', '20% polyester'])

const variants = ref<TVariant[]>([
  { id: 2234, color: 'green', imageUrl: GreenSocksImg, quantity: 0 },
  { id: 2235, color: 'blue', imageUrl: BlueSocksImg, quantity: 50 },
])
const selectedVariantIndex = ref<number>(0)

const productImg = computed(() => {
  return selectedVariantIndex.value !== -1
    ? variants.value[selectedVariantIndex.value].imageUrl
    : ''
})
const inStock = computed(() => {
  return selectedVariantIndex.value !== -1 && !!variants.value[selectedVariantIndex.value].quantity
})
const shipping = computed(() => {
  return props.premium ? 'free' : 2.99
})
const onSale = ref(true)

const updateVariant = (variantIndex: number) => {
  selectedVariantIndex.value = variantIndex
}
</script>

<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img
          :src="productImg"
          alt="socks with vue mastery logo"
          class="transition-all duration-200 ease-linear"
          :class="!inStock && 'out-of-stock-img'"
        />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ productDescription }}</p>
        <ul class="pl-6 max-w-fit">
          <li v-for="(detail, index) in details" :key="index" class="capitalize">
            {{ detail }}
          </li>
        </ul>
        <p>Shipping: {{ shipping }}</p>
        <ul class="my-3 flex gap-2">
          <li
            v-for="(variant, index) in variants"
            :key="variant.id"
            @mouseover="updateVariant(index)"
            class="px-4 py-1 cursor-pointer color-circle"
            :class="variant.color === 'green' ? 'bg-green-700' : 'bg-cyan-700'"
          >
            <span class="sr-only">
              {{ variant.color }}
            </span>
          </li>
        </ul>
        <p v-if="inStock" class="text-green-400">In Stock</p>
        <p v-else class="text-red-400">Out of Stock</p>
        <small v-show="onSale && inStock" class="text-sm text-blue-400 font-semibold capitalize">
          {{ title }} is On Sale
        </small>
        <div class="flex gap-4">
          <button
            class="button min-w-fit"
            @click="emits('addToCart', variants[selectedVariantIndex].id)"
            :disabled="!inStock"
            :class="!inStock && 'disabled-button'"
          >
            Add to Cart
          </button>
          <button
            class="button min-w-fit !bg-red-400"
            @click="emits('removeFromCart', variants[selectedVariantIndex].id)"
          >
            remove from cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
