// ** Icon imports

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Quản lý game',
      path: '/dashboard'
    },
    {
      sectionTitle: 'Quản lý'
    },
    {
      title: 'Gói nạp',
      path: '/dashboard/pack'
    }

    // {
    //   title: 'Tin tức',
    //   path: '/dashboard/news'
    // }

    // {
    //   title: 'Icons',
    //   path: '/dashboard/icons'
    // },
    // {
    //   title: 'Cards',

    //   path: '/dashboard/cards'
    // }
  ]
}

export default navigation
