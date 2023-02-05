import React from 'react'
import Image from 'next/image'
import _ from 'lodash'
import { useAppDispatch } from '../../store'
import { addToCart } from '../../features/cart/cartSlices'

export const products = [
  {
    id: '1',
    image: 'https://api.lorem.space/image/watch?w=150&h=150&r=1',
    title: 'Shirt',
    price: 890
  },
  {
    id: '2',
    image: 'https://api.lorem.space/image/watch?w=150&h=150&r=2',
    title: 'Pants',
    price: 1400
  },
  {
    id: '3',
    image: 'https://api.lorem.space/image/watch?w=150&h=150&r=3',
    title: 'Bag',
    price: 1000
  },
  {
    id: '4',
    image: 'https://api.lorem.space/image/watch?w=150&h=150&r=4',
    title: 'Watch',
    price: 12000
  }
]

const ProductsPage = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex h-screen items-center justify-center bg-purple-100">
      <div className="grid grid-cols-4 gap-4">
        {_.map(products, (product) => (
          <div
            className="rounded-lg border-none bg-white p-4 text-center transition delay-150 hover:scale-110 hover:shadow-md"
            key={`product_${product.id}`}>
            <Image src={product.image} alt="Picture of the author" width={150} height={150} />
            <h2 className="py-2 font-bold text-slate-800">{product.title}</h2>
            <p className="mb-2 font-bold text-sky-500">{product.price} ฿</p>
            <button
              className="w-full rounded-md bg-sky-500 p-2 font-medium text-white hover:bg-sky-600"
              onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
