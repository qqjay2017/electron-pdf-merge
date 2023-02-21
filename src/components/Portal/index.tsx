import { Layout, Space } from 'antd'
import FileSelect from '../FileSelect'
import { MergeBtn } from '../MergeBtn'
import FileList from '../FileList'
import { HeaderWrap } from './styles'
import ResetBtn from '../ResetBtn'

function Portal() {
  return (
    <Layout>
      <HeaderWrap>
        <Space>
          <FileSelect />
          <MergeBtn />
          <ResetBtn />
        </Space>
      </HeaderWrap>
    
     <FileList />
  
    </Layout>
  )
}

export default Portal
