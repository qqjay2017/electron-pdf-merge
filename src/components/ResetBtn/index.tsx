import { Button } from 'antd'
import { useBearStore } from '../../zustand'

function ResetBtn() {
  const {init} = useBearStore()
  const handleReset = () => {
    window.Main.sendMessage('merger:initMerger');
    init([])
  }
  return <Button onClick={() => handleReset()}>重置</Button>
}

export default ResetBtn
