import { useEffect, useState } from 'react'
import { CloudUploadIcon } from '@heroicons/react/solid'
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';




export default function Home() {
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([])

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
      let arrUrl = [];

      if (!images) {
          setPreview(undefined)
          return
      }

      images && [...images].map((file) => {
        arrUrl.push(URL.createObjectURL(file));
      })
      setPreview(arrUrl);

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(arrUrl)
  }, [images])

  const _onChange = (e) => {
    if(e.target.files.length > 10){
      setOpenErrorAlert(true)
      return
    }
    setImages(e.target.files);
  }

  const _removeImage = (index) => {
    setImages([...images].filter((file, i) => i != index));
  }

  return (
    <div>

      <Collapse in={openErrorAlert} timeout='auto'>
        <Alert severity="error" onClose={() => {setOpenErrorAlert(false);}}>You can select maximum 10 image</Alert>
      </Collapse>
      <form>
      <div className="bg-grey-lighter">
        <label className="w-40 flex flex-col items-center px-2 py-3 text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer">
          <CloudUploadIcon className="w-8 h-8"/>
          <span className="mt-2 text-base leading-normal">Images</span>
          <input
          className="hidden"
          type="file"
          name="blogImages"
          multiple={true}
          accept="image/*"
          onChange={(e) => _onChange(e) }
        />
        </label>
      </div>
      </form>
      <div className="flex flex-wrap py-3 border-dotted border-4 border-light-blue-500">
        {preview && preview.map((file, key) => {
          return (   
              <div key={key} className="px-2 py-3 relative">
                  <button
                    className="absolute bg-transparent text-2xl text-red-500 font-semibold leading-none right-1 top-0 outline-none focus:outline-none"
                    onClick={() => _removeImage(key)}
                  >
                    <span>×</span>
                  </button>
                  <img className="object-contain h-20 w-full" src={file}  alt={file.name}/>
              </div>   
          )
        })}
      </div>
    </div>
  )
}

