export type TProduct = {
  id: string
  name: string
  imageUrl: string
  price: number
}
export type TVariant = {
  id: number
  color: 'blue' | 'green'
  imageUrl: string
  quantity: number
}

export type TReview = {
  id:string,
  name: string
  content: string
  rating: number | null
}
