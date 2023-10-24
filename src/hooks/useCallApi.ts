import { useState, useEffect } from 'react'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { api } from '../lib/api'

interface UseCallApiHook<T> {
  data: T | null
  isLoading: boolean
  error: string | null
}

export function useCallApi<T>(
  url: string,
  params?: AxiosRequestConfig,
): UseCallApiHook<T> {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response: AxiosResponse<T> = await api.get(url, params)
        setData(response.data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, params])

  return { data, isLoading, error }
}
