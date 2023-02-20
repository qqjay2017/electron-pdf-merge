
import PDFMerger from 'pdf-merger-js'
export const merger = new PDFMerger();

export const handleMerge = ()=>{
   console.log()
   
   merger.saveAsBuffer().then(res=>{
        console.log(res)
   })
}