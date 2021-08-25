import React, {useState, useContext} from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import { server } from './../config'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import AuthContext from '../store/auth-context';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import { SubmitButton } from '../components/Form/elements/SubmitButton';


const create = () => {
    const router = useRouter()
    const authCtx = useContext(AuthContext);
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(true);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertStatus, setAlertStatus] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const onEditorChange = (html) => {
        setValue(html);
    }

    const onSubmit = async () => {
        const { data: newBlog } = await axios.post(`${server}/api/admin/blog`, { content: value, author: 'Admin' });
        setOpenAlert(true);
        setAlertStatus(newBlog.data.severity);
        setAlertMessage(newBlog.data.message);
        newBlog.data.severity === 'success' &&
        setTimeout(() => {
            router.push('/');
        }, 2000);
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
            {openAlert && (
                <Collapse in={openAlert} timeout='auto'>
                    <Alert severity={alertStatus} onClose={() => {setOpenAlert(false);}}>{alertMessage}</Alert>
                </Collapse>
            )}
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
              <SubmitButton onClick={onSubmit}>Send</SubmitButton>
            </div>
            )}
              
        </div>
    );
}

export default create;