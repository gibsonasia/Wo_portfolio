import React from "react";
import "../style/contact.css"
import emailjs from 'emailjs-com'


const Contact = () => {

    //email function 
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('{{ROUTER_ID}}', //email service router here
        '{{TEMPLATE_ID}}', //place template ID here
        e.target,"{{USER_ID_PATH}}"); //email ID path here
    }
    return(

        <div className="contact">
            <h1 className="heading">Lets Connect</h1>
            <div>
            <form id="ls" method="post" action="" onSubmit={sendEmail}>
                <label for='Name'>Name</label>
                <input type="text" id="name" name="name" class="stored"  />
            
                <label for="mail">Email</label>
                <input type="email" id="small" name="user_email" class="stored" />
            
                <label for="message">Message</label>
                <textarea id="message" name="message" rows='5' class="stored"></textarea>
                
                <button type="submit">Send</button>
                <input id="clear" type="reset"/>
            </form>
            </div>
        </div>
    );
};

export default Contact ;