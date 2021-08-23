import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Form} from './elements/Form';
import { Input } from './elements/Input';
import { InputPhone } from './elements/InputPhone';
import { InputMultiline } from './elements/InputMultiline';
import { SubmitButton } from './elements/SubmitButton';
import { CheckboxWithLabel } from './elements/CheckboxWithLabel';
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from '@material-ui/core';

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
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all",
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        console.log('submit');
    }
    const onError = (errors, e) => console.log(errors, e);

    return (
        <div>
            <h2>Contact</h2>
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <Input name="firstName" type="text" label="First Name" {...register("firstName", { required: "Required"})} required error={!! errors.firstName} helperText={errors?.firstName?.message}></Input>
                <Input name="lastName" type="text" label="Last Name" {...register("lastName", { required: "Required"})} required error={!! errors.lastName} helperText={errors?.lastName?.message}></Input>
                <Input name="email" type="text" label="Email" {...register("email", { required: "Required"})} required error={!! errors.email} helperText={errors?.email?.message}></Input>
                <InputPhone name="phone" type="text" label="Phone" {...register("phone", { required: "Required"})} required error={!! errors.phone} helperText={errors?.phone?.message}></InputPhone>
                <Input name="subject" type="text" label="Subject" {...register("subject", { required: "Required"})} required error={!! errors.subject} helperText={errors?.subject?.message}></Input>
                <InputMultiline name="message" type="text" label="Message" {...register("message", { required: "Required"})} required error={!! errors.message} helperText={errors?.message?.message}></InputMultiline>
                <CheckboxWithLabel name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" color="primary" label="Terms and Conditions" helperText={errors?.acceptTerms?.message} ></CheckboxWithLabel>
                <CheckboxWithLabel name="privacy" type="checkbox" {...register('privacy')} id="privacy" color="primary" label="Privacy Policy" helperText={errors?.privacy?.message} ></CheckboxWithLabel>
                <SubmitButton>Send</SubmitButton>
            </Form>
        </div>
    )
}

export default ContactForm;