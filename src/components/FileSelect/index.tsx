import { UploadOutlined } from '@ant-design/icons';
import {Button} from 'antd'


function FileSelect() {
  const selectFile = ()=>{
    
   window.Main.sendMessage('selectFile')
  }
  return (
    <Button type='primary' icon={<UploadOutlined />} onClick={()=>selectFile()}>
      点击选择文件
    </Button>
  );
}

export default FileSelect;
