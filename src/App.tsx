import { GlobalStyle } from './styles/GlobalStyle'

import Portal from './components/Portal'
import GlobalLoading from './components/GlobalLoading'
import { useBearStore } from './zustand'
import { useEffect } from 'react'
import { message } from 'antd'
export function App() {
  const { loading, setLoading } = useBearStore()
  useEffect(() => {
    window.Main.on('setLoading', (flag = true) => {
      setLoading(flag)
    })
    window.Main.on('mergeSuccess', (msg = '') => {
      message.success(`合并成功:${msg}`)
    })
  }, [])
  return (
    <>
      {loading ? <GlobalLoading /> : null}

      <GlobalStyle />
      <Portal />
    </>
  )
}
