import { server } from './../../../config'
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { VerifyInput } from './../../../components/Form/elements/VerifyInput';
import { Button, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

const verifyPhone = ({ state, userInfo }) => {
    const router = useRouter();
    const { phone } = router.query;
    const [code, setCode] = useState('');
    const [done, setDone] = useState();
    const [apiError, setApiError] = useState('');
    const [openErrorAlert, setOpenErrorAlert] = useState(false);
    const [openSuccesAlert, setOpenSuccesAlert] = useState(false);


    const onChange = (event) => {
        const { value } = event.target;
        setDone(false);
        if(value.replace(/[-_]/g,'').length === 6) setDone(true);
        setCode(value);
    }

    const sendCode = async () => {
        const smsCode = code.replace(/[-_]/g,'');
        const res = await axios.post(`${server}/api/verification/checkCode`, {phone: userInfo?.data?.phone, smsCode, id: userInfo?.data?.id});
        if(res.data.info === 'valid'){
            setOpenSuccesAlert(true);
            setTimeout(() => {
                router.push('/');
            }, 1000)
        }else{
            setOpenErrorAlert(true)
            setTimeout(() => {
                setOpenErrorAlert(false)
            }, 4000)
        }
    }

    const resendCode = async () => {
        const res =  await axios(`${server}/api/verification/sms/${phone}`);
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
            {state && (
                <Collapse in={true} timeout='auto'>
                    <Alert severity="info">{userInfo?.message}</Alert>
                </Collapse>
            )}
            {openErrorAlert && (
                <Collapse in={openErrorAlert} timeout='auto'>
                    <Alert severity="error" onClose={() => {setOpenErrorAlert(false);}}>Invalid Code. Try again</Alert>
                </Collapse>
            )}
            {openSuccesAlert && (
                <Collapse in={openSuccesAlert} timeout='auto'>
                    <Alert severity="success" onClose={() => {setOpenSuccesAlert(false);}}>You have verified your phone</Alert>
                </Collapse>
            )}
        </div>
    )
}

export const getServerSideProps =  async (context) => {
   const res = await axios.post(`${server}/api/verification/sendSMS`, {phone: context.query.phone, id: context.query.id});
    
    return {
        props: {
            state: true,
            userInfo: res.data
        }
    }
}

export default verifyPhone;