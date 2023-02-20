import { GlobalStyle } from './styles/GlobalStyle'

import FileSelect from './components/FileSelect'

import FileList from './components/FileList'

export function App() {

  return (
    <>
      <GlobalStyle />
      <div>
        <FileList />
        <FileSelect />
      </div>
    </>
  )
}