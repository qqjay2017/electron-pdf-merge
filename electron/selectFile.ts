import { dialog } from 'electron'
import { mainWindow } from './main'
import { add } from './merger'

export function selectFile() {
  dialog
    .showOpenDialog({
      title: '选择pdf文件',
      properties: ['openFile'],
      filters: [{ name: 'Pdf', extensions: ['pdf'] }],
    })
    .then(({ filePaths }) => {
      add(filePaths[0])

      mainWindow?.webContents.send('selectFile', filePaths)
    })
}
