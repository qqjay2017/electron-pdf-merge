import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useBearStore = create(
  immer<{
    filePaths: string[],
    push:(newArr?: string[])=>void,
    init:(newArr?: string[])=>void,
  }>(set => ({
    filePaths: [],
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
  }))
)
