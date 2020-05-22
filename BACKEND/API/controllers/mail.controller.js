var nodemailer = require('nodemailer'); 

export const sendEmail =  async(req, res) => {

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        secure: false,
        auth: {
            user: 'scaldosPoli@gmail.com',
            pass: 'Ingesoft'
        }
    });
    
    var mailOptions = {
        from: 'Scaldos',
        to: req.body.Email,
        subject: 'Contraseña',
        text: 'nell prro'
    };

    await transporter.sendMail(mailOptions, function(error, info){
    });

    res.send('send');
};

