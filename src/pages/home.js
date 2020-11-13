import React from 'react';
import { HeaderContainer } from '../containers/header';
import {OptForm} from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';

export default function Home(){
    return (
        <>
        <HeaderContainer>
            <OptForm>
                    <OptForm.Input placeholder = "Email Address"/>
                    <OptForm.Button>Try It Now</OptForm.Button>
                    <OptForm.Break/>
                    <OptForm.Text>Ready To Watch?Enter your email to create or restart your membership
                    </OptForm.Text>
            </OptForm>
        </HeaderContainer>
        <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
        </>
    );
}