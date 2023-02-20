import { dialog } from 'electron'
import { mainWindow } from './main'

export function selectFile() {
  dialog
    .showOpenDialog({
      title: '选择pdf文件',
      properties: ['openFile'],
      filters: [{ name: 'Pdf', extensions: ['pdf'] }],
    })
    .then(({ filePaths }) => {
      
        mainWindow?.webContents.send('selectFile',filePaths)
    })
}
