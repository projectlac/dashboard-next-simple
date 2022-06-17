import { ILogin, IResponLogin } from '../models'
import axiosClient from './axiosClient'

const loginApi = {
  async login(params: ILogin): Promise<IResponLogin> {
    const url = '/api/auth/login'
    const response = await axiosClient.post<IResponLogin>(url, params)

    return response.data
  }
}
export default loginApi
