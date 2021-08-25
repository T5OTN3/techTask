import { server } from './../../../config'
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { VerifyInput } from '../../../components/Form/elements/VerifyInput';
import { Button, Typography } from '@material-ui/core';

const verifyPhone = ({ state, userInfo }) => {
    const router = useRouter();
    const { phone } = router.query;
    const [code, setCode] = useState('');
    const [done, setDone] = useState();
    const [apiError, setApiError] = useState('');


    const onChange = (event) => {
        const { value } = event.target;
        setDone(false);
        if(value.replace(/[-_]/g,'').length === 6) setDone(true);
        setCode(value);
    }

    const sendCode = async () => {
        const smsCode = code.replace(/[-_]/g,'');
        console.log(smsCode);
        const res = await axios.post(`${server}/api/checkCode`, {phone: userInfo?.data?.phone, smsCode, id: userInfo?.data?.id});
    }

    const resendCode = async () => {
        const res =  await axios(`${server}/api/verification/sms/${phone}`);
        console.log(res.data);
    }
    
    return(
        <div style={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Head>
                <title>Verification</title>
            </Head>
            <Typography variant="h3" gutterBottom>Verification phone</Typography>
            <Typography variant="subtitle1" gutterBottom>{userInfo?.data?.firstName} please enter the verification code</Typography>
            <Typography variant="subtitle1" gutterBottom>we sent to your phone number</Typography>
            <VerifyInput value={code} onChange={(e) => onChange(e)}></VerifyInput>
            <Button onClick={resendCode} color="secondary">Resend code ?</Button>
            <Button onClick={sendCode} color="primary" disabled={!done}>Done</Button>
        </div>
    )
}

export const getServerSideProps =  async (context) => {
   const res = await axios.post(`${server}/api/verification/sms`, {phone: context.query.phone, id: context.query.id});
    
    return {
        props: {
            state: true,
            userInfo: res.data
        }
    }
}

export default verifyPhone;