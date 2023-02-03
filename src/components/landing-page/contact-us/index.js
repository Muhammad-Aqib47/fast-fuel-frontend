import { useState } from 'react';
import './style.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        query:""
    })
const allInputValues = {
    name: formData.name,
    email: formData.email,
    query: formData.query
}
console.log(allInputValues)

const createQuery = async (e)=>{
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3001/api/users',{
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(allInputValues)
        });
        const data = await response.json()
        console.log('Query is received', data)
        alert("Your message has been received successfully.")
    } catch (error) {
        console.log(error)
    }
}


function inputHandler(e){
    const{name, value} =e.target;
    setFormData({...formData,[name]: value});
}
    return (
        <div className="container-fluid" id='section-5'>
            <h1 className='contact-heading'>Contact Us</h1>
            <div className="content">
                <div className="left-side">
                    <div className="address details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic">Address</div>
                        <div className="text-one">DHA, Phase 8</div>
                        <div className="text-two">Extension Park View</div>
                    </div>
                    <div className="phone details">
                        <i className="fas fa-phone-alt"></i>
                        <div className="topic">Phone</div>
                        <div className="text-one">+92 303 0000000</div>
                        <div className="text-two">+92 300 1234578</div>
                    </div>
                    <div className="email details">
                        <i className="fas fa-envelope"></i>
                        <div className="topic">Email</div>
                        <div className="text-one">fuel-fast@gmail.com</div>
                        <div className="text-two">info.fast-fuel@gmail.com</div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="topic-text">Send us a message</div>
                    <p>If you have any work from us or any types of quries related to our fast fuel delivery, you can send us message from here. It's our pleasure to help you.</p>
                    <form onSubmit={createQuery}>
                        <div className="input-box">
                            <input type="text" placeholder="Enter your name" onChange={inputHandler} name='name' required value={formData.name}/>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Enter your email" onChange={inputHandler} name='email' required value={formData.email}/>
                        </div>
                        <div className="input-box message-box">
                             <textarea rows="9" cols="70"onChange={inputHandler} name='query' required value={formData.query}/>  
                        </div>
                            <button type='submit' className='submit-button'><span className='submit-button-span'>SUBMIT</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;