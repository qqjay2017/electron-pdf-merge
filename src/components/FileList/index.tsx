import { useEffect } from 'react'
import { useBearStore } from '../../zustand'

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
  return <div>
    {
       bearStore.filePaths.map((item, index) => {
        return <div key={index}>{item}</div>
       })
    }
  </div>
}

export default FileList
