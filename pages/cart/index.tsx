import React from 'react'
import Image from 'next/image'
import _ from 'lodash'

import { useAppSelector, useAppDispatch } from '../../store'
import { deleteCart } from '../../features/cart/cartSlices'

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  return (
    <div className="flex h-screen items-center justify-center bg-purple-100 ">
      {_.size(cart) === 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        <table className="min-w-[800px] rounded-md bg-white">
          <thead className="border-b">
            <tr>
              <th className="min-w-[300px] py-4 pl-4 text-start">Product</th>
              <th className="min-w-[100px]">Quantity</th>
              <th className="min-w-[100px]">Total Price</th>
              <th className="min-w-[100px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {_.map(cart, (item) => (
              <tr className=" border-b text-center">
                <td className="flex items-center space-x-4 py-4 pl-4">
                  <Image src={item.image} alt="Picture of the author" width={100} height={100} />
                  <h2 className="font-bold text-slate-800">title {item.title}</h2>
                </td>
                <td>
                  <p className="font-medium">{item.quantity}</p>
                </td>
                <td>
                  <p className="text-sky-500">{item.price * item.quantity} ฿</p>
                </td>
                <td onClick={() => dispatch(deleteCart(item.id))}>X</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default CartPage
