import { Spin } from 'antd'
import { GlobalLoadingInner, GlobalLoadingWrap } from './styles'

function GlobalLoading() {
  return (
    <GlobalLoadingWrap>
      <GlobalLoadingInner>
        <Spin />
      </GlobalLoadingInner>
    </GlobalLoadingWrap>
  )
}

export default GlobalLoading
