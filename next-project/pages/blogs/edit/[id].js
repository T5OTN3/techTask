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
import FormData from 'form-data'
import { SubmitButton } from './../../../components/Form/elements/SubmitButton';
//Form and input validation
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Form} from './../../../components/Form/elements/Form';
import { Input } from './../../../components/Form/elements/Input';
import { InputMultiline } from './../../../components/Form/elements/InputMultiline';
import { useForm } from 'react-hook-form';
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
  
  yup.addMethod(yup.string, 'checkMessage', function (errorMessage) {
    return this.test(`blogText`, errorMessage, function (value) {
        const { createError } = this;
        
        return value.match(/[#^&*<>]/) ? createError({ message: errorMessage }) : true;
      });
  });
  
  const schema = yup.object().shape({
    title: yup.string().required("title is a required field"),
    metaDescription: yup.string().required("title is a required field"),
    metaKeywords: yup.string().required("title is a required field"),
    shortText: yup.string().required("title is a required field"),
    blogText: yup.string().min(10).max(1500).checkMessage("Allowed only plain text").required("Message is a required field"),
  });


const blogEditById = ({ blog }) => {
    //RadioButton to make Primary image
  const [selectedValue, setSelectedValue] = useState(0);

  const radioHandleChange = (event) => {
    setSelectedValue(+event.target.value);
  };
  //Translation
  const { t, i18n } =useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  //Image controll
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [image360, setimage360] = useState(false);
  //Tab controll
  const classes = useStyles();
  const [value, setValue] = useState('en');

  const tabHandleChange = (event, newValue) => {
    changeLanguage(newValue);
    setValue(newValue);
  };

  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
      mode: "all",
      resolver: yupResolver(schema),
      defaultValues: {
        title: blog.posts[0].title,
        metaDescription: blog.posts[0].metaDescription,
        metaKeywords: blog.posts[0].metaKeywords,
        shortText: blog.posts[0].shortText,
        blogText: blog.posts[0].blogText
      }
  });

  const onFormSubmit = async (data) => {
    if(images.length === 0){
      setOpenErrorAlert(true)
      return
    }
    const obj = {...data, lan: value, imageIndex: selectedValue, image360 }
    const formData = new FormData();
    formData.append('data', JSON.stringify(obj));
    for(let i = 0; i < images.length; i++){
      formData.append('images', images[i]);
    };
  
    const response = await axios.post('/api/admin/blog/uploads', formData);
    console.log(response.data);
    setOpenSuccessAlert(true);
    reset();
    setImages([]);
  }

  const onFormError = (errors, e) => {
    console.log(selectedValue);
    console.log(errors, e); 
  }

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
      let arrUrl = [];
        
      if (!images) {
          setPreview(undefined)
          return
      }

      images && [...images].map((file) => {
        const blob = new Blob([file], {type: 'image/png'});
        arrUrl.push(URL.createObjectURL(blob));
      })

      blog.images && blog.images.map(el => arrUrl.push(`http://31.146.26.29:3000/Blogs/${el?.folderName}/${el?.imageName}`))

      setPreview(arrUrl);

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(arrUrl)
  }, [images]);

  const _onChange = async (e) => {
    if((images.length + e.target.files.length) > 10){
      setOpenErrorAlert(true)
      return
    }
    setPreview([]);
    console.log(images);
    setImages([...images,...e.target.files]);
  }

  const _removeImage = (index) => {
    console.log(index)
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
              control={<Checkbox checked={image360} onChange={() => setimage360(!image360)} name="panorama" />}
              label="Check if primary image is panorama"
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
                      <div className="absolute left-0 -bottom-6">
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
              <Form onSubmit={handleSubmit(onFormSubmit, onFormError)}>
                <Input name="title" type="text" label={(<Trans i18nKey="blog.create.title">Title EN</Trans>)} {...register("title", { required: "Required"})} required error={!! errors.title} helpertext={errors?.title?.message}></Input>
                <Input name="metaDescription" type="text" label={t("blog.create.metaDescription")} {...register("metaDescription", { required: "Required"})} required error={!! errors.metaDescription} helpertext={errors?.metaDescription?.message}></Input>
                <Input name="metaKeywords" type="text" label={t("blog.create.metaKeywords")} {...register("metaKeywords", { required: "Required"})} required error={!! errors.metaKeywords} helpertext={errors?.metaKeywords?.message}></Input>
                <Input name="shortText" type="text" label={t("blog.create.shortText")} {...register("shortText", { required: "Required"})} required error={!! errors.shortText} helpertext={errors?.shortText?.message}></Input>
                <InputMultiline name="blogText" type="text" label={t("blog.create.blogText")} {...register("blogText", { required: "Required"})} required error={!! errors.blogText} helpertext={errors?.blogText?.message}></InputMultiline>
                <SubmitButton>Send</SubmitButton>
              </Form>
              </TabPanel>
              <TabPanel value="de">
              <Form onSubmit={handleSubmit(onFormSubmit, onFormError)}>
                <Input name="title" type="text" label={t("blog.create.title")}{...register("title", { required: "Required"})} required error={!! errors.title} helpertext={errors?.title?.message}></Input>
                <Input name="metaDescription" type="text" label={t("blog.create.metaDescription")} {...register("metaDescription", { required: "Required"})} required error={!! errors.metaDescription} helpertext={errors?.metaDescription?.message}></Input>
                <Input name="metaKeywords" type="text" label={t("blog.create.metaKeywords")} {...register("metaKeywords", { required: "Required"})} required error={!! errors.metaKeywords} helpertext={errors?.metaKeywords?.message}></Input>
                <Input name="shortText" type="text" label={t("blog.create.shortText")} {...register("shortText", { required: "Required"})} required error={!! errors.shortText} helpertext={errors?.shortText?.message}></Input>
                <InputMultiline name="blogText" type="text" label={t("blog.create.blogText")} {...register("blogText", { required: "Required"})} required error={!! errors.blogText} helpertext={errors?.blogText?.message}></InputMultiline>
                <SubmitButton>Send</SubmitButton>
              </Form>
              </TabPanel>
              <TabPanel value="fr">
              <Form onSubmit={handleSubmit(onFormSubmit, onFormError)}>
                <Input name="title" type="text" label={t("blog.create.title")} {...register("title", { required: "Required"})} required error={!! errors.title} helpertext={errors?.title?.message}></Input>
                <Input name="metaDescription" type="text" label={t("blog.create.metaDescription")} {...register("metaDescription", { required: "Required"})} required error={!! errors.metaDescription} helpertext={errors?.metaDescription?.message}></Input>
                <Input name="metaKeywords" type="text" label={t("blog.create.metaKeywords")} {...register("metaKeywords", { required: "Required"})} required error={!! errors.metaKeywords} helpertext={errors?.metaKeywords?.message}></Input>
                <Input name="shortText" type="text" label={t("blog.create.shortText")} {...register("shortText", { required: "Required"})} required error={!! errors.shortText} helpertext={errors?.shortText?.message}></Input>
                <InputMultiline name="blogText" type="text" label={t("blog.create.blogText")} {...register("blogText", { required: "Required"})} required error={!! errors.blogText} helpertext={errors?.blogText?.message}></InputMultiline>
                <SubmitButton>Send</SubmitButton>
              </Form>
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