import nodemailer from 'nodemailer';


export async function sendEmail(userEmail){

    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth:{
            user : process.env.AUTH_EMAIL,
            pass : process.env.AUTH_PASSWORD
        }
    });

    const mailOptions = {
        from : process.env.AUTH_EMAIL,
        to : userEmail,
        subject : "Arriendos Sopetran",
        html : `
        <h1>Politicas SopeArriendos</h1>
        <h2>Lee Muy bien Nuestras Politicas de Arrendamientos</h2>
        
        `,
        attachments: [{
            filename: 'contrato_arrendamiento.pdf',
            path: 'C:/Users/OMAR/Documents/new/full-stack-estate/api/public/contrato_arrendamiento.pdf',
            contentType: 'application/pdf'
        }]
    }
    try{
        await transporter.sendMail(mailOptions);
        console.log('Verificacion de Email enviada');
     }catch(error){
        console.log("Email no fue enviado",error);
     }
}



