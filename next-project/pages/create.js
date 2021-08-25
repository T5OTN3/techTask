import React, {useState, useContext} from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import AuthContext from '../store/auth-context';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';


const create = () => {
    const authCtx = useContext(AuthContext);
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(true);

    const onEditorChange = (html) => {
        setValue(html);
    }

    const onSubmit = () => {
        console.log(value);
    }

    const modules = {
        toolbar: [
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image', 'video'],
          ['clean'],
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      };
      /*
       * Quill editor formats
       * See https://quilljs.com/docs/formats/
       */
      const formats = [
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
      ];

    return (
        <div style={{ marginTop: '40px' }}>
            {!authCtx.isLoggedIn && (
                <Collapse in={open} timeout='auto'>
                  <Alert severity="error" onClose={() => {setOpen(false);}}>Please login first to access page</Alert>
                </Collapse>
              )
            }
            {authCtx.isLoggedIn && (
            <div>
              <div>
                  <ReactQuill 
                      style={{ height: 400 }}
                      theme="snow" 
                      modules={modules} formats={formats}
                      value={value} 
                      onChange={onEditorChange}
                  /> 
              </div>
              <button style={{ marginTop: '50px' }} onClick={onSubmit} >Post</button> 
            </div>
            )}
              
        </div>
    );
}

export default create;