import axios from 'axios'

export const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
})

export const setToken = (token: string | undefined) => {
  return {
    headers: { Authorization: `Bearer ${token}` },
  }
}

export const retryhandle = (count = 3) => {
  return (failureCount: number, error: any) => {
    if (error?.response?.status < 500 || failureCount > count) {
      return false
    }
    return true
  }
}
