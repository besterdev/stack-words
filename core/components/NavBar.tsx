import Link from 'next/link'
import _ from 'lodash'

import { useAppDispatch, useAppSelector } from '../../store'
import { signOut } from '../../features/auth/authSlice'

type Menu = {
  title: string
  path: string
}

const menus: Menu[] = [
  { title: 'Home', path: '/' },
  { title: 'Products', path: '/products' },
  { title: 'Cart', path: '/cart' }
]

const NavBar = () => {
  const cart = useAppSelector((state) => state.cart)
  const auth = useAppSelector((state) => state.auth)

  const dispatch = useAppDispatch()

  return (
    <nav className="sticky top-0 z-40 flex h-[60px] w-full items-center justify-between bg-white/95 px-10 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-slate-900/75 lg:z-50 lg:border-b lg:border-slate-900/10">
      <h1 className="font-bold text-white">Logo</h1>
      <div className="flex space-x-4">
        {_.map(menus, (menu, index) => (
          <div className="relative">
            <Link
              className="font-semibold leading-6 no-underline text-md text-slate-700 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-400"
              href={menu.path}
              key={`menu_${index}`}>
              {menu.title}
            </Link>
            {menu.title === 'Cart' ? <div className="absolute -top-2.5 -right-2.5 rounded-2xl bg-red-500 px-1 text-xs">{_.size(cart)}</div> : null}
          </div>
        ))}
      </div>
      <p className="text-white cursor-pointer" onClick={() => dispatch(signOut())}>
        {auth.user?.username}
      </p>
    </nav>
  )
}

export default NavBar
