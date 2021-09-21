import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from './../../../config'
import { Trans, useTranslation } from 'react-i18next'
import { CloudUploadIcon } from '@heroicons/react/solid'
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//Form and input validation
import PostsForm from './../../../components/Form/PostsForm';
//Tab control UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const blogEditById = ({ blog }) => {
    //RadioButton to make Primary image
  const [selectedValue, setSelectedValue] = useState(0);
  const [image360, setImage360] = useState(0);
  const [isImage360, setIsImage360] = useState(false);

  const radioHandleChange = (event) => {
    setSelectedValue(+event.target.value);
  };

  const radio360HandleChange = (event) => {
    setImage360(+event.target.value);
  };

  // Translation
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
}

  //Image controll
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [cloudImages, setCloudImages] = useState(blog.images);
  const [posts, setPosts] = useState({...blog.posts.find(el => el.language === 'en')});
  //Tab controll
  const classes = useStyles();
  const [value, setValue] = useState('en');

  const tabHandleChange = (event, newValue) => {
    changeLanguage(newValue);
    setValue(newValue);
    setPosts(blog.posts.find(el => el.language === newValue));
  };

  const router = useRouter()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
      let arrUrl = [];
      let tempIsImage360 = false;
        
      if (!images) {
          setPreview(undefined)
          return
      }

      cloudImages && cloudImages.map((el, index) => {
        arrUrl.push(`http://31.146.26.29:3000/Blogs/${el?.folderName}/${el?.imageName}`);
        el?.type === 'primary' && setSelectedValue(index);
        el?.image360 && setImage360(index);
        if(el?.image360) tempIsImage360 = true;
      });
      
      setIsImage360(tempIsImage360);

      images && [...images].map((file) => {
        const blob = new Blob([file], {type: 'image/png'});
        arrUrl.push(URL.createObjectURL(blob));
      })

      setPreview(arrUrl);

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(arrUrl)
  }, [images]);

  const _onChange = async (e) => {
    if((images.length + e.target.files.length + cloudImages.length) > 10){
      setOpenErrorAlert(true)
      return
    }
    setPreview([]);
    setImages([...images,...e.target.files]);
  }

  const _removeImage = (index) => {
    setCloudImages([...cloudImages].filter((file, i) => i != index))
    setImages([...images].filter((file, i) => i != index));
  }

    return (
        <div>
          <Collapse in={openErrorAlert} timeout='auto'>
            <Alert severity="error" onClose={() => {setOpenErrorAlert(false);}}>You can select minimum 1 and maximum 10 image</Alert>
          </Collapse>
          <Collapse in={openSuccessAlert} timeout='auto'>
            <Alert severity="success" onClose={() => {setOpenSuccessAlert(false);}}>You successfully created blog</Alert>
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
            <FormControlLabel
              control={<Checkbox checked={isImage360} onChange={() => setIsImage360(!isImage360)} name="panorama" />}
              label="check if you have 360 type image"
            />  
          </div>
          </form>
          <div className="flex flex-wrap py-5 mt-5 border-dotted border-4 border-light-blue-500">
            {preview && preview.map((file, key) => {
              return (   
                  <div key={key} className="px-2 py-3 w-2/12 relative">
                      <button
                        className="absolute bg-transparent text-2xl text-red-500 font-semibold leading-none right-1 top-0 outline-none focus:outline-none"
                        onClick={() => _removeImage(key)}
                      >
                        <span>×</span>
                      </button>
                      <img className="object-contain h-20 w-full" src={file}  alt={file.name}/>
                      <div className="">
                      <FormControlLabel control={
                        <Radio
                            checked={selectedValue === key}
                            color='primary'
                            onChange={radioHandleChange}
                            value={key}
                            name="imagePrimary"
                            size="small"
                          />
                        } label="primary" />
                        {isImage360 && (<FormControlLabel control={
                        <Radio
                          checked={image360 === key}
                          color='primary'
                          onChange={radio360HandleChange}
                          value={key}
                          name="image360"
                          size="small"
                        />
                        } label="360" /> )}              
                      </div>
                  </div>   
              )
            })}
          </div>
          <br/>
          <div className={classes.root}>
            <TabContext value={value}>
              <AppBar position="static">
                <TabList onChange={tabHandleChange} aria-label="simple tabs example">
                  <Tab label="EN" value="en" />
                  <Tab label="DE" value="de" />
                  <Tab label="FR" value="fr" />
                </TabList>
              </AppBar>
              <TabPanel value="en">
                <PostsForm post={posts} lan={value} imageIndex={selectedValue} images={images} image360Index={isImage360 ? image360 : -1} cloudImages={cloudImages} errorAlert={setOpenErrorAlert} />
              </TabPanel>
              <TabPanel value="de">
                <PostsForm post={posts} lan={value} imageIndex={selectedValue} images={images} image360Index={isImage360 ? image360 : -1} cloudImages={cloudImages} errorAlert={setOpenErrorAlert} />
              </TabPanel>
              <TabPanel value="fr">
                <PostsForm post={posts} lan={value} imageIndex={selectedValue} images={images} image360Index={isImage360 ? image360 : -1} cloudImages={cloudImages} errorAlert={setOpenErrorAlert} />
              </TabPanel>
            </TabContext>
          </div>
        </div>
      )
}

export const getServerSideProps =  async (context) => {
    const { data } =  await axios(`${server}/api/admin/blog/${context.params.id}`);

    return {
        props: {
            blog: data.data
        }
    }
}

export default blogEditById;