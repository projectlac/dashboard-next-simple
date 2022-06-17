// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

// import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import EditIcon from '@mui/icons-material/Edit'
import {
  Button,
  CardHeader,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TablePagination
} from '@mui/material'
import { ChangeEvent, useState } from 'react'
import toMoney from '../../utility/toMoney'

// ** Types Imports
// import { ThemeColor } from 'src/@core/layouts/types'

interface RowType {
  accumulate: number
  name: string
  date: string
  game: string
  salary: string
  price: number
}

// interface priceOb100000{
//     color: ThemeColor
//   }
// }

const rows: RowType[] = [
  {
    accumulate: 27,
    price: 100000,
    date: '09/27/2018',
    name: 'Sally Quinn',
    salary: '$19586.23',
    game: 'Genshin Impact'
  },
  {
    accumulate: 61,
    date: '09/23/2016',
    salary: '$23896.35',
    price: 100000,
    name: 'Margaret Bowers',
    game: 'Genshin Impact'
  },
  {
    accumulate: 59,
    date: '10/15/2017',
    name: 'Minnie Roy',
    price: 100000,
    salary: '$18991.67',
    game: 'Genshin Impact'
  },
  {
    accumulate: 30,
    date: '06/12/2018',
    price: 100000,
    salary: '$19252.12',
    name: 'Ralph Leonard',
    game: 'Genshin Impact'
  },
  {
    accumulate: 66,
    price: 100000,
    date: '03/24/2018',
    salary: '$13076.28',
    name: 'Annie Martin',

    game: 'Honkai Impact'
  },
  {
    accumulate: 33,
    date: '08/25/2017',
    salary: '$10909.52',
    name: 'Adeline Day',
    price: 100000,
    game: 'Honkai Impact'
  },
  {
    accumulate: 61,
    price: 100000,
    date: '06/01/2017',
    salary: '$17803.80',
    name: 'Lora Jackson',

    game: 'Honkai Impact'
  },
  {
    accumulate: 22,
    date: '12/03/2017',
    salary: '$12336.17',
    name: 'Rodney Sharp',
    price: 100000,

    game: 'Honkai Impact'
  }
]

interface Filters {
  game?: string | null
}

const TableIndex = () => {
  const [filters, setFilters] = useState<Filters>({
    game: null
  })
  const [page, setPage] = useState<number>(0)
  const [limit, setLimit] = useState<number>(10)
  const statusOptions = [
    { name: 'Tất cả', id: 'all' },
    { name: 'Genshin Impact', id: 'Genshin Impact' },
    { name: 'Honkai Impact', id: 'Honkai Impact' }
  ]
  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage)
  }

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value))
  }
  const applyFilters = (cryptoOrders: RowType[], filters: Filters): RowType[] => {
    return cryptoOrders.filter(cryptoOrder => {
      let matches = true

      if (filters.game && cryptoOrder.game !== filters.game) {
        matches = false
      }

      return matches
    })
  }

  const applyPagination = (cryptoOrders: RowType[], paccumulate: number, limit: number): RowType[] => {
    return cryptoOrders.slice(page * limit, page * limit + limit)
  }

  const filteredCryptoOrders = applyFilters(rows, filters)
  const paginatedCryptoOrders = applyPagination(filteredCryptoOrders, page, limit)

  const handleStatusChange = (e: SelectChangeEvent<string>): void => {
    let value: any = null

    if (e.target.value !== 'all') {
      value = e.target.value
    }

    setFilters(prevFilters => ({
      ...prevFilters,
      game: value
    }))
  }

  return (
    <Card>
      <CardHeader action={<Button variant='contained'>Thêm mới +</Button>} />
      <Divider />
      <CardHeader
        sx={{
          '& .MuiCardHeader-content': {
            '& .MuiCardHeader-title': {
              fontSize: {
                md: '1.2rem',
                xs: '15px'
              }
            }
          }
        }}
        action={
          <Box width={200}>
            <FormControl fullWidth variant='outlined'>
              <InputLabel>Lọc theo game</InputLabel>
              <Select
                value={filters.game || 'all'}
                sx={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}
                onChange={handleStatusChange}
                label='Lọc theo game'
                autoWidth
              >
                {statusOptions.map(statusOption => (
                  <MenuItem key={statusOption.id} value={statusOption.id} sx={{ fontFamily: 'Montserrat' }}>
                    {statusOption.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        }
        title='Dach sách gói nạp'
      />
      <Divider />

      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Tên gói nạp</TableCell>
              <TableCell>Game</TableCell>
              <TableCell>Điểm tích lũy</TableCell>

              <TableCell>Giá tiền</TableCell>
              <TableCell>Ngày cập nhật</TableCell>
              <TableCell>Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCryptoOrders.map((row: RowType) => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.game}</TableCell>
                <TableCell>{row.accumulate}</TableCell>
                <TableCell>{toMoney(row.price)} VND</TableCell>
                <TableCell>{row.date}</TableCell>

                <TableCell>
                  <Box>
                    <IconButton>
                      <EditIcon sx={{ mr: 1 }} />
                    </IconButton>
                    <IconButton>
                      <DeleteForeverRoundedIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component='div'
          count={filteredCryptoOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  )
}

export default TableIndex
