import React from "react";
import ContactForm from '../../components/Form';
import Head from "next/head";

const contact = () => {
    return(
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactForm/>
        </div>
        
    )
}

export default contact;