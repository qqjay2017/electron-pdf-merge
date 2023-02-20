import PDFMerger from 'pdf-merger-js'
import { dialog } from 'electron'
import path from 'path'
export const merger = new PDFMerger()
export const handleMerge = () => {

  dialog
    .showOpenDialog({
      properties: ['openDirectory'],
    })
    .then(({ filePaths }) => {
      if (filePaths && filePaths[0]) {
        const _path = filePaths[0]
        const newPath = path.join(_path, 'merge.pdf')
        merger.save(newPath)
      }
    })
}
