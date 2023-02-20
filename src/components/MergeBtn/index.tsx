import { Button, message } from "antd";
import { useBearStore } from "../../zustand";



export function MergeBtn() {
  const bearStore =useBearStore();
  const handleMerge =async ()=>{
    if(!bearStore.filePaths||!bearStore.filePaths.length||bearStore.filePaths.length===1){
      message.error('请先选择一个以上文件')
       
    }
   
    // const buffer = await merger.saveAsBuffer();
    // console.log(buffer,'buffer')
    window.Main.sendMessage('merge')
  }
  return (
    <Button type="primary" onClick={()=>handleMerge()}>
      点击合并
    </Button>
  );
}


