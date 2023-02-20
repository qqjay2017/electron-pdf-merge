import { GlobalStyle } from './styles/GlobalStyle'

import FileSelect from './components/FileSelect'

import FileList from './components/FileList'
import { MergeBtn } from './components/MergeBtn'

export function App() {

  return (
    <>
      <GlobalStyle />
      <div>
        <FileList />
        <FileSelect />
        <MergeBtn />
      </div>
    </>
  )
}