import { atom } from 'recoil'

const defaultData = {
  user: {
    id: 0,
    name: ''
  },
  update: true
}

const globalState = atom({
  key: 'authState',
  default: defaultData
})
export default globalState
