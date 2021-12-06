import React from 'react'
import Hero from '../hero/Hero'
import Form from '../form/Form'
import Main from '../main/Main'
import Section from '../section/Section'
import Footer from './Footer'

const Landing = () => {
    return (
        <div className="flex flex-col h-full w-full font-roboto-regular">
            <Hero>  
                <Form/>
            </Hero>
            <Main/>
            <Section/>
            <Footer/>
        </div>
    )
}

export default Landing;