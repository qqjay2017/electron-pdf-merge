import { useEffect } from 'react'
import { useBearStore } from '../../zustand'
import { FileBadge, FileItem, FileListWrap } from './styles'

// import { ipcMain } from 'electron'
function FileList() {
  const bearStore =useBearStore()
  useEffect(() => {
    // ipcMain.on('selectFile', (e, filePaths) => {
    //   console.log(filePaths, 'filePaths')
    // })
    window.Main.on('selectFile', (filePaths = []) => {
      bearStore.push(filePaths)
      // bearStore.filePaths =   bearStore.filePaths.concat(filePaths)

    })
  }, [])
  return <FileListWrap>
    {
       bearStore.filePaths.map((item, index) => {
        return <FileItem key={index}>
          <span>{item}</span>
          <FileBadge>{index+1}</FileBadge>
        </FileItem>
       })
    }
  </FileListWrap>
}

export default FileList
