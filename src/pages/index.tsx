// ** MUI Imports

import { Box } from '@mui/material'
import Link from 'next/link'
import { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Icons Imports

// ** Demo Components Imports

const Index = () => {
  return (
    <Box>
      Home <Link href='/dashboard'> Vào trang quản trị</Link>
    </Box>
  )
}
Index.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
export default Index
