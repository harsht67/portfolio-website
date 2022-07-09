// styles
import './Contact.scss'

import { images } from '../../constants' 
import { Button } from '../../components'
import { Nav, InView } from '../../wrappers'
import Modal from './Modal'

import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import { client } from '../../client'

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        msg: '',
    })

    const [modal, setModal] = useState({
        display: false, 
        text: "",
    })

    const submitHandler = () => {

        const contact = {
            _type: "contact",
            name: name,
            email: email,
            msg: msg,
        }

        client
            .create(contact)
            .then(() => {
                setModal({
                    display: true,
                    text: "Message sent!",
                })
            })
            .err(() => {
                setModal({
                    display: true,
                    text: "Sorry there was an error!",
                })
            })

    }

    const hideModal = () => {
        setModal({
            display: false,
            text: "",
        })

        setFormData({
            name: '',
            email: '',
            msg: '',
        })
    }

    // validation schema for form data
    const schema = Yup.object().shape({
        name: Yup.string().required('field is required'), 
        email: Yup.string().required('field is required').email('invalid email'),
        msg: Yup.string().required('field is required').min(3, 'must be at least 3 characters')
    })

    const { handleSubmit, handleChange, handleBlur, touched, values, errors } = useFormik({
        initialValues: formData, 
        validationSchema: schema,
        onSubmit: submitHandler
    })

    // handles updates to form data 
    const changeHandler = (e) => {
        handleChange(e)

        const { name, value } = e.target 

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const { name, email, msg } = formData

    return (
        <div className="contact">

            <Nav>contact</Nav>

            <InView>

                <h1 className="contact__title title">
                    Contact 
                </h1>

                <div className="contact__content">

                    <form 
                        className="form lg-text"
                        onSubmit={handleSubmit}
                    >

                        <label>
                            
                            Name 
                            
                            <input
                                name="name"
                                value={name}
                                onChange={changeHandler}
                                onBlur={handleBlur}
                                placeholder='harsh'
                            />

                            {touched.name && errors.name 
                                ? <div className="form__err">{errors.name}</div>
                                : null
                            }

                        </label>

                        <label>
                            
                            Email
                            
                            <input
                                name="email"
                                value={email}
                                onChange={changeHandler}
                                onBlur={handleBlur}
                                placeholder='harsh@gmail.com'
                            />

                            {touched.email && errors.email 
                                ? <div className="form__err">{errors.email}</div>
                                : null
                            }

                        </label>

                        <label>
                            
                            Message
                            
                            <textarea
                                name="msg"
                                value={msg}
                                onChange={changeHandler}
                                onBlur={handleBlur}
                                placeholder='hello lorem ispum...'
                            />

                            {touched.msg && errors.msg
                                ? <div className="form__err">{errors.msg}</div>
                                : null
                            }

                        </label>

                        <Button className="form__btn">
                            Send
                        </Button>

                    </form>

                    <hr/>

                    <aside className="contact__links lg-text">

                        <div>
                            
                            <img src={images.phone} alt="phone image" /> 

                            <a href="tel: +91 9582594496">
                                (+91) 95825 94496
                            </a>

                        </div>

                        <div>
                            
                            <img src={images.mail} alt="mail image" /> 
                        
                            <a href="mailto:contact.harsht67@gmail.com">
                                contact.harsht67@gmail.com
                            </a>

                        </div>

                        <div>
                            
                            <img src={images.github} alt="github image" /> 

                            <a
                                href="https://github.com/harsht67"
                                target="_blank"
                            >
                                github.com/harsht67
                            </a>

                        </div>
                        
                        <div>
                            
                            <img src={images.linkedin} alt="linkedin image" /> 
                        
                            <a
                                href="https://linkedin.com/in/harsht67"
                                target="_blank"
                            >
                                linkedin.com/in/harsht67
                            </a>

                        </div>

                    </aside>

                </div>

            </InView>

            {modal.display &&
                <Modal 
                    data={modal.text} 
                    hideModal={hideModal}
                />
            }

        </div>
    )
}

export default Contact