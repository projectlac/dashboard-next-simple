import { selector } from 'recoil'
import { IUser } from 'src/models'
import globalState from 'src/_state'

export const loginInState = selector({
  // newListState này sẽ chứa danh sách các action có trạng thái là new.
  key: 'loginInState',
  get: ({ get }) => {
    const global = get(globalState) // đây là cách để lấy cả list todo đã tạo với atom ở bước trên.

    return global.user // chọn và trả về những thằng có status là new.
  },
  set: ({ get, set }, newValue) => {
    const global = get(globalState)

    // tạo 1 cái hành động mới
    set(globalState, { ...global, user: newValue as IUser }) // hàm set dùng để thay đổi giá trị của recoil state từ atom
  }
})
