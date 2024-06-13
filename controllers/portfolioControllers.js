const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth:{
            api_key:process.env.API_SENDGRID,
        },
    })
);

const sendEmailController = (req,res) => {
    try{
        const {name,email,msg} = req.body

        if(!name || !email || !msg){
            return res.status(500).send({
                success:false,
                message:'please provide ALL fields',
            })
        }

        transporter.sendMail({
            to:"pavankumargopavarapu999@gmail.com",
            from:"pavankumargopavarapu999@gmail.com",
            subject:'regarding mern portfolio app',
            html:`
               <h5>Detail information</h5>
               <ul>
                <li><p>Name : ${name}</p></li>
                <li><p>Email : ${email}</p></li>
                <li><p>Message : ${msg}</p></li>
               </ul>
            `
        })
        return res.status(200).send({
            success:true,
            message:'your message send successfully',
        });

    } catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'send Email API Error',
            error
        })
    }
};
module.exports = {sendEmailController};