import { dialog } from 'electron'
import { mainWindow } from './main'
import { add } from './merger'

export function selectFile() {
  mainWindow?.webContents.send('setLoading', true)
  dialog
    .showOpenDialog({
      title: '选择pdf文件',
      properties: ['openFile'],
      filters: [{ name: 'Pdf', extensions: ['pdf'] }],
    })
    .then(({ filePaths }) => {
      add(filePaths[0])?.then(() => {
        mainWindow?.webContents.send('selectFile', filePaths)
        mainWindow?.webContents.send('setLoading', false)
      })
    })
    .catch(() => {
      mainWindow?.webContents.send('setLoading', false)
    })
}
