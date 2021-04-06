// const functions = require("firebase-functions");
// const nodemailer = require("nodemailer");
// const cors = require("cors")( {origin: true} );

// // using nodemailer with gmail





// let transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'magdalena3@ethereal.email',
//         pass: 'sX2eRsc9Bd13aUKdMW'
//     },
// });

// exports.sendMail = functions.https.onRequest((req, res) => {
//     cors(req, res, () => {
//         // getting email dest
//         const email = req.query.email;
//         const name = req.query.name;
//         const location = req.query.location;
//         const radioBtnSelected = req.query.radioBtnSelected;
//         const mailOptions = {
//             from: '"Fred Foo 👻" <foo@example.com>',
//             to: "richardsonlyon911@gmail.com",
//             subject: "Request to have campus or uni added",
//             html:`
//                 <div>
//                     from: `
//                             + name +
//                     `
//                     <br /> <br />

//                     email: `
//                             + email +
//                     `
//                     <br /> <br />
//                     location: `
//                             + location +
//                     `
//                     <br /> <br />
//                     radioBtnSelected: `
//                             + radioBtnSelected +
//                     `
//                     <br /> <br />
//                 </div>
//             `,
//         };
//         // return result 
//         return transporter.sendMail(mailOptions, (err, info) => {
//             if (err) {
//                 return res.send(erro.toString());
//               }
//               return res.send("Message Sent");
//         });
//     });
// });
