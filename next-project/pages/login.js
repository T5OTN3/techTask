import React, { useContext, useState } from 'react';
import axios from 'axios';
import { server } from './../config'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form } from './../components//Form/elements/Form';
import { Input } from './../components//Form/elements/Input';
import { SubmitButton } from './../components//Form/elements/SubmitButton';
import AuthContext from '../store/auth-context';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

const schema = yup.object().shape({
    email: yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Email Incorect").required("Email is a required field"),
    password: yup.string().min(8).required("First Name is a required field")
});


const login = () => {
    const router = useRouter()
    const authCtx = useContext(AuthContext);
    const [authError, setAuthError] = useState('');
    const [openErrorAlert, setOpenErrorAlert] = useState(true);
    const [openSuccesAlert, setOpenSuccesAlert] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all",
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            const {data: res} = await axios.post(`${server}/api/admin/login/`, data);
            if(res.status === 'success') { 
                authCtx.login(res.data.token);
                setOpenSuccesAlert(true);
                setTimeout(() => {
                    router.push('/create');
                }, 1000)
            }else{
                authCtx.logout();
                setAuthError(res.data.message)
            }

            console.log(res);
        } catch (error) {
            setOpenErrorAlert(true)
            setTimeout(() => {
                setOpenErrorAlert(false)
            }, 2000)
            setAuthError('Login failed')
        }
    }

    const onError = (errors, e) => console.log(errors, e);

    return(
        <div>
           <h1>Login</h1> 
           <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <Input name="email" type="text" label="Email" {...register("email", { required: "Required"})} required error={!! errors.email} helpertext={errors?.email?.message}></Input>
                <Input name="password" type="text" label="Password" {...register("password", { required: "Required"})} required error={!! errors.password} helpertext={errors?.password?.message}></Input>
                <SubmitButton>Send</SubmitButton>
            </Form>
            {authError && (
                <Collapse in={openErrorAlert} timeout='auto'>
                    <Alert severity="error" onClose={() => {setOpenErrorAlert(false);}}>{authError}</Alert>
                </Collapse>
            )}
            {openSuccesAlert && (
                <Collapse in={openSuccesAlert} timeout='auto'>
                    <Alert severity="success" onClose={() => {setOpenSuccesAlert(false);}}>Login successful</Alert>
                </Collapse>
            )
            }
        </div>
        
    )
}

export default login;