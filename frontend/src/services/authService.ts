import api from './api'

export type UserType = {
  id: number
  firstName: string
  lastName: string
  phone: string
  birth: Date
  email: string
  password: string
  role: 'admin' | 'user'
}

interface LoginParams {
  email: string;
  password: string;
}

const authService = {
  login: async (params: LoginParams) => {
    const res = await api.post("/auth/login", params).catch((err)=> {
      if (err.response.status === 400 || err.response.status === 401) {
        return err.response
      }
      return err.response
    })

    if (res.status === 200) {
      sessionStorage.setItem('login-token', res.data.token);
    }

    return res;
  }
}

export default authService;