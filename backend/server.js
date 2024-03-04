const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const ApplyLeave = require('./models/applyleave');
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect("mongodb+srv://anuragsaini9223:anuragsaini9223@cluster0.quprsu5.mongodb.net/");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Db connected");
});

app.use(cors());
app.use(bodyParser.json({ limit: "200mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "200mb",
    extended: true,
    parameterLimit: 1000000,
  })
);


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).exec();

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    res.json({ success: true, message: 'Login successful', user: { id: user._id, email: user.email }, userType: user.userType });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/logout', (req, res) => {
  
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.status(200).json({ message: 'Logout successful' });
  });
});

app.post('/applyLeave', async (req, res) => {
  try {
    const { user, leaveType, startDate, endDate, reason } = req.body;

    if (!user || !leaveType || !startDate || !endDate || !reason) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const leave = new ApplyLeave({ user, leaveType, startDate, endDate, reason });
    await leave.save();

    res.status(201).json({ success: true, message: 'Leave request submitted successfully', leave });
  } catch (error) {
    console.error('Error applying for leave:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


app.post('/leavelist', async (req, res) => {
  try {
    const leaveList = await ApplyLeave.find().exec();
    res.json(leaveList);
  } catch (error) {
    console.error('Error fetching leave list:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


app.post('/api/users', (req, res) => {
  try {
    const { name, email, phoneNumber, location, gender, maritalStatus } = req.body;
    console.log('Received user data:', { name, email, phoneNumber, location, gender, maritalStatus });
    res.status(200).send('User data received successfully');
  } catch (error) {
    console.error('Error processing user data:', error);
    res.status(500).send('Internal Server Error');
  }
});



app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, message: 'Password reset instructions sent to your email' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

