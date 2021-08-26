import axios from 'axios';
import { server } from './../../config'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Form} from './elements/Form';
import { Input } from './elements/Input';
import { InputPhone } from './elements/InputPhone';
import { InputMultiline } from './elements/InputMultiline';
import { SubmitButton } from './elements/SubmitButton';
import { CheckboxWithLabel } from './elements/CheckboxWithLabel';
import { Grid } from '@material-ui/core';

yup.addMethod(yup.string, 'checkMessage', function (errorMessage) {
    return this.test(`message`, errorMessage, function (value) {
        const { createError } = this;
        
        return value.match(/[#^&*<>]/) ? createError({ message: errorMessage }) : true;
      });
  });
  

const schema = yup.object().shape({
    firstName: yup.string().min(2).max(16).required("First Name is a required field"),
    lastName: yup.string().min(2).max(25).required("Last Name is a required field"),
    email: yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Email Incorect").required("Email is a required field"),
    phone: yup.string().matches(/^5[0-9]{8}$/g, "Incorect Mobile").required("Mobile is a required field"),
    subject: yup.string().required("Subject is a required field"),
    message: yup.string().min(10).max(1500).checkMessage("Allowed only plain text").required("Message is a required field"),
    acceptTerms: yup.boolean().oneOf([true],'* Required'),
    privacy: yup.boolean().oneOf([true],'* Required')
});

const ContactForm = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all",
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        const { data: findPhone } = await axios.post(`${server}/api/verification/findPhone`, { phone: data.phone });
        const {data: newContact} = await axios.post(`${server}/api/admin/contact`, data);
        !findPhone.data?.smsConfirmed ? 
        router.push(`/contact/${data.phone}?id=${newContact?.data?.id}`) 
        :
        router.push(`/`);
    }

    const onError = (errors, e) => console.log(errors, e);

    return (
        
        <div>
            <Grid item container>
            <Grid item xs={false} sm={2} md={3}/>
                <Grid item xs={12} sm={8} md={6}>
                <h2>Contact</h2>
                    <Form onSubmit={handleSubmit(onSubmit, onError)}>
                        <Input name="firstName" type="text" label="First Name" {...register("firstName", { required: "Required"})} required error={!! errors.firstName} helpertext={errors?.firstName?.message}></Input>
                        <Input name="lastName" type="text" label="Last Name" {...register("lastName", { required: "Required"})} required error={!! errors.lastName} helpertext={errors?.lastName?.message}></Input>
                        <Input name="email" type="text" label="Email" {...register("email", { required: "Required"})} required error={!! errors.email} helpertext={errors?.email?.message}></Input>
                        <InputPhone name="phone" type="text" label="Phone" {...register("phone", { required: "Required"})} required error={!! errors.phone} helpertext={errors?.phone?.message}></InputPhone>
                        <Input name="subject" type="text" label="Subject" {...register("subject", { required: "Required"})} required error={!! errors.subject} helpertext={errors?.subject?.message}></Input>
                        <InputMultiline name="message" type="text" label="Message" {...register("message", { required: "Required"})} required error={!! errors.message} helpertext={errors?.message?.message}></InputMultiline>
                        <CheckboxWithLabel name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" color="primary" label="Terms and Conditions" helpertext={errors?.acceptTerms?.message} ></CheckboxWithLabel>
                        <CheckboxWithLabel name="privacy" type="checkbox" {...register('privacy')} id="privacy" color="primary" label="Privacy Policy" helpertext={errors?.privacy?.message} ></CheckboxWithLabel>
                        <SubmitButton>Send</SubmitButton>
                    </Form>
                </Grid>
            <Grid item xs={false} sm={2} md={3}/>
            </Grid>
        </div>
        
    )
}

export default ContactForm;