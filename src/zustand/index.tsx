import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useBearStore = create(
  immer<{
    filePaths: string[]
    loading: boolean
    push: (newArr?: string[]) => void
    init: (newArr?: string[]) => void
    setLoading: (flag?:boolean) => void

  }>(set => ({
    filePaths: [],
    loading: false,
    push: (newArr: string[] = []) => {
      set(state => {
        state.filePaths = state.filePaths.concat(newArr)
      })
    },
    init: (newArr: string[] = []) => {
      set(state => {
        state.filePaths = newArr
      })
    },
    setLoading: (flag:boolean=true) => {
      set(state => {
        state.loading = flag
      })
    },
   
  }))
)
