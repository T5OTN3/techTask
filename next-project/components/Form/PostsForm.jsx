import axios from 'axios';
import { server } from './../../config'
import { Trans, useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Form} from './elements/Form';
import { Input } from './elements/Input';
import { InputMultiline } from './elements/InputMultiline';
import { SubmitButton } from './elements/SubmitButton';

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

const PostsForm = ({ post, lan, imageIndex, images, image360, cloudImages, errorAlert }) => {
    const router = useRouter();

    //Translation
    const { t, i18n } = useTranslation();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "all",
        resolver: yupResolver(schema),
        defaultValues: post
    });
  
    const onFormSubmit = async (data) => {
    if(images.length === 0 && cloudImages.length === 0){
        errorAlert(true)
        return
      }
      const obj = {...data, lan, imageIndex, image360, cloudImages, images }
      const formData = new FormData();
      formData.append('data', JSON.stringify(obj));
      for(let i = 0; i < images.length; i++){
        formData.append('images', images[i]);
      };
    
      //const response = await axios.post('/api/admin/blog/uploads', formData);
      console.log(obj);
      //setOpenSuccessAlert(true);
    }

    const onFormError = (errors, e) => {
      console.log(errors, e); 
    }

    return (
        <Form onSubmit={handleSubmit(onFormSubmit, onFormError)}>
            <Input name="title" type="text" label={(<Trans i18nKey="blog.create.title">Title EN</Trans>)} {...register("title", { required: "Required"})} required error={!! errors.title} helpertext={errors?.title?.message}></Input>
            <Input name="metaDescription" type="text" label={t("blog.create.metaDescription")} {...register("metaDescription", { required: "Required"})} required error={!! errors.metaDescription} helpertext={errors?.metaDescription?.message}></Input>
            <Input name="metaKeywords" type="text" label={t("blog.create.metaKeywords")} {...register("metaKeywords", { required: "Required"})} required error={!! errors.metaKeywords} helpertext={errors?.metaKeywords?.message}></Input>
            <Input name="shortText" type="text" label={t("blog.create.shortText")} {...register("shortText", { required: "Required"})} required error={!! errors.shortText} helpertext={errors?.shortText?.message}></Input>
            <InputMultiline name="blogText" type="text" label={t("blog.create.blogText")} {...register("blogText", { required: "Required"})} required error={!! errors.blogText} helpertext={errors?.blogText?.message}></InputMultiline>
            <SubmitButton>Send</SubmitButton>
        </Form>
    )
}

export default PostsForm;