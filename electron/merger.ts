import PDFMerger from 'pdf-merger-js'
import { dialog } from 'electron'
import path from 'path'
import dayjs from 'dayjs'

function pdfMergerState() {
  let merger: PDFMerger | null = null
  const initMerger = (forceInit = false) => {
    if (forceInit || !merger) {
      merger=null;
      merger = new PDFMerger()
    }
  }
  const getMerger = () => merger
  const add = (
    inputFile: string | Buffer | ArrayBuffer,
    pages?: string | string[] | undefined | null
  ) => {
    initMerger()
    return merger?.add(inputFile, pages)
  }

  const save = (fileName: string) => {
    initMerger()
    return merger?.save(fileName)
  }

  return {
    initMerger,
    getMerger,
    add,
    save,
    merger,
  }
}
export const { merger, initMerger, getMerger, add, save } = pdfMergerState()

export const handleMerge = () => {
  dialog
    .showOpenDialog({
      properties: ['openDirectory'],
    })
    .then(({ filePaths }) => {
      if (filePaths && filePaths[0]) {
        const _path = filePaths[0]
        const newPath = path.join(_path, `merge.${dayjs().format('HHmmss')}.pdf`)
        save(newPath)
      }
    })
}
