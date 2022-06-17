import { selector } from 'recoil'
import globalState from 'src/_state'

export const somethingUpdated = selector({
  // newListState này sẽ chứa danh sách các action có trạng thái là new.
  key: 'somethingUpdated',
  get: ({ get }) => {
    const global = get(globalState) // đây là cách để lấy cả list todo đã tạo với atom ở bước trên.

    return global.update // chọn và trả về những thằng có status là new.
  },
  set: ({ get, set }) => {
    const global = get(globalState)

    // tạo 1 cái hành động mới
    set(globalState, { ...global, update: !global.update }) // hàm set dùng để thay đổi giá trị của recoil state từ atom
  }
})
