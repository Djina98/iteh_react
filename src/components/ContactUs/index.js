import React from 'react'
import { FormContent, FormWrap, Container, Form, Icon, FormH1, FormLabel, FormInput, FormButton} from './ContactUsElements';
import emailjs from 'emailjs-com';

const ContactUs = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_m0eqguf', 'template_71cpqa8', e.target, 'user_fFd2TQr866VXZGpKx02K6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
    }

    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>globus</Icon>
                <FormContent>
                    <Form onSubmit={sendEmail}>
                        <FormH1>Book a meeting with us</FormH1>
                        <FormLabel htmlFor='for'>Subject</FormLabel>
                        <FormInput type='text' required name="subject"></FormInput>
                        <FormLabel htmlFor='for'>Message</FormLabel>
                        <FormInput type='text' required name="message"></FormInput>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required name="email"></FormInput>
                        <FormButton type='submit'>Send</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default ContactUs
