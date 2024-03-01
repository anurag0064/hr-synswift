const nodemailer = require('nodemailer');

async function mail() {
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ashish@synswift.com',
      pass: 'ashish.synswift@2023'
    }
  });

  const leaveData = {
    startDate: '',
    endDate: '',
    reason: '',
    category: '',

  };

  const mailOptions = {
    from: 'ashish@synswift.com',
    to: 'anuragsaini9223@gmail.com,asynswift@gmail.com',
    subject: 'Leave Request',
    text: `Leave request details:\nStart Date: ${leaveData.startDate}\nEnd Date: ${leaveData.endDate}`,
    html: `<div style="padding:10px; border-style: ridge">
     <h3>Leave Request</h3>
     <ul>
<li> Start Date:  ${leaveData.startDate}</li>
<li> End Date:  ${leaveData.endDate}</li>
<li> Reason:  ${leaveData.reason}</li>
<li> Category:  ${leaveData.category}</li>
     </ul>
`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    // console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

mail();
