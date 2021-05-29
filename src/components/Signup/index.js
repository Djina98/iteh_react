import React from 'react'
import { FormContent, FormWrap, Container, Form, Icon, FormH1, FormLabel, FormInput, FormButton} from './SignupElements';
import emailjs from 'emailjs-com';

const SignUp = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_m0eqguf', 'template_groowfp', e.target, 'user_fFd2TQr866VXZGpKx02K6')
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
                        <FormH1>Sign up and get discount</FormH1>
                        <FormLabel htmlFor='for'>Full name</FormLabel>
                        <FormInput type='text' required name="name"></FormInput>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required name="email"></FormInput>
                        <FormButton type='submit'>Continue</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default SignUp
