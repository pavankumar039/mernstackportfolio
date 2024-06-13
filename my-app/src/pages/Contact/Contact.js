import React,{ useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Contact.css'
import LightSpeed from 'react-reveal/LightSpeed';
import {BsFacebook, BsGithub, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
    const [name,setname] = useState("")
    const [email,setEmail] = useState("")
    const [msg,setMsg] = useState("")

    const handleSubmit =async (e) => {
        e.preventDefault();
        try{
            if(!name || !email || !msg){
                toast.error('Please Provide All Fields');
            }
            const res = await axios.post('/api/v1/portfolio/sendEmail',{name,email,msg})
            if(res.data.success){
                toast.success(res.data.message);
                setname(" ");
                setEmail( " ");
                setMsg("");
            }else{
                toast.error(res.data.message);
            }

        } catch(error) {
            console.log(error)
        }

    };
  return (
    <>
        <div className=' contact' id='contact'>
            <div className='card card0 border=0'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                        <div className='card1'>
                            <LightSpeed>
                            <div className='row border-line'>
                                <img src='https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY='
                                 alt='contact' className='image'></img>
                            </div>
                            </LightSpeed>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <div className='card2 -flex card border-0 px-4 py-5'>
                            <div className='row'>
                            <h6>CONTACT WITH
                                 <BsLinkedin color='blue' size={30} className='ms-2'/>
                                 <BsGithub color='black' size={30} className='ms-2'/>
                                 <BsFacebook color='blue' size={30} className='ms-2'/>
                                 <BsWhatsapp color='green' size={30} className='ms-2'/>
                            </h6>
                            </div>
                       
                        <div className='row px-3 md-4'>
                            <div className='line'/>
                                <small className='or text-center'>OR</small>
                                <div className='line'/>
                        </div>
                        <div className='row px-3'>
                            <input type='text' 
                            name = 'name' 
                            placeholder='write your name'
                            className='mb-3' 
                            value = {name} 
                            onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div className='row px-3'>
                            <input type='email' 
                            name = 'email' 
                            placeholder='Enter your email address'
                            className='mb-3' 
                            value = {email} 
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='row px-3'>
                            <textarea type='text' 
                            name = 'msg' 
                            placeholder='write your message'
                            className='mb-3' 
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}/>
                        </div>
                        <div className='row px-3'>
                            <button className='button' type= "submit" onClick={handleSubmit}>SEND MESSAGE</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact