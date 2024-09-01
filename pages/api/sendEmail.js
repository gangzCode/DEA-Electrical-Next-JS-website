export default async function POST(req, res)  {
    try {
        const body = await req.body

        // console.log(body)

        let nodemailer = require('nodemailer')
        const transporter = nodemailer.createTransport({
            port: 465,
            host: process.env.NEXT_PUBLIC_SMTP_HOST,
            auth: {
            user: process.env.NEXT_PUBLIC_SENDER_EMAIL,
            pass: process.env.NEXT_PUBLIC_PASSWORD,
            },
            secure: true,
        })

        const mailData = {
            from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
            to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
            subject: ((body.type === "CONTACT") ? `Contact Form Submit From ${body.name}` : `Appointment Request From ${body.name}`),
            text: body.message + " | Sent from: " + body.email,
            html: `
                <div>Name : ${body.name} </div>
                <div>Email : ${body.email} </div>
                <div>Phone : ${body.phone} </div>
                <div>Subject : ${body.subject} </div>
                <div>Message</div>
                <div>${body.message}</div>
            `
        }

        console.error("SENDING")
        transporter.sendMail(mailData, function (error, info) {
            if (error) {
                console.error("ERROR")
                console.error(error)
                res.status(500)
                return res.json({success:false,message:error.toString()})
            } else {
                res.status(200)
                return res.json({success:true,message:info.toString()})
            }
        });

        //return res.json({success:true,message:"success"})
    } catch (error) {
        res.status(500)
        return res.json({success:false,message:error.toString()})
    }
    
}
