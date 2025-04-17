const express = require('express');
require('dotenv').config();
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Correct CORS setup using Docker service name if you're using containers
const corsOptions = {
  origin: 'http://aakasha-frontend:3000', // or use process.env.FRONTEND_ORIGIN
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// ✅ Use a connection pool for better handling
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// 🔄 Wrap queries in helper function (optional)
const query = (sql, params) => new Promise((resolve, reject) => {
  pool.query(sql, params, (err, results) => {
    if (err) return reject(err);
    resolve(results);
  });
});

// ✅ Routes

app.get('/users', async (req, res) => {
  try {
    const results = await query('SELECT * FROM users');
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.get('/usertypes', async (req, res) => {
  try {
    const results = await query('SELECT * FROM user_type_master');
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user types' });
  }
});

app.get('/subscription', async (req, res) => {
  try {
    const results = await query('SELECT * FROM subscription');
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch subscriptions' });
  }
});

app.get('/photoshelf', async (req, res) => {
  try {
    const results = await query('SELECT * FROM photoshelf');
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch photoshelf' });
  }
});

app.get('/configuration', async (req, res) => {
  try {
    const results = await query('SELECT * FROM configuration');
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch configuration' });
  }
});

// ✅ POST routes (use safe error handling)

app.post('/configuration', async (req, res) => {
  const { confid, pdefsubscript, cdefsubscript, pdefstorage, cdefstorage, pcosting } = req.body;
  try {
    await query(
      `INSERT INTO configuration 
      (Configuration_id, P_default_subscript, C_default_subscript, P_default_storage, C_default_storage, P_Costing) 
      VALUES (?, ?, ?, ?, ?, ?)`,
      [confid, pdefsubscript, cdefsubscript, pdefstorage, cdefstorage, pcosting]
    );
    res.json({ message: 'Configuration added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to insert configuration' });
  }
});

app.post('/subscription', async (req, res) => {
  const {
    subid, subdate, subduration, psid,
    screated, scby, smodified, smby,
    utypid, graceperiod, pmode, amt, status,
  } = req.body;

  try {
    await query(
      `INSERT INTO subscription 
      (Subscription_id, Subscription_Date, Subscription_Duration, PS_Id, Created, Created_by, Modified, Modified_by, User_Type_Id, Grace_period, Payment_Mode, Amount, Status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [subid, subdate, subduration, psid, screated, scby, smodified, smby, utypid, graceperiod, pmode, amt, status]
    );
    res.json({ message: 'Subscription added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to insert subscription' });
  }
});

app.post('/photoshelf', async (req, res) => {
  const { psid, psname, pssize, uid, pcreated, pcby, pmodified, pmby, isdelete } = req.body;
  try {
    await query(
      `INSERT INTO photoshelf 
      (PS_id, PS_Name, PS_Size, User_id, Created, Created_by, Modified, Modified_by, Is_Delete) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [psid, psname, pssize, uid, pcreated, pcby, pmodified, pmby, isdelete]
    );
    res.json({ message: 'Photoshelf entry added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to insert photoshelf entry' });
  }
});

app.post('/usertypes', async (req, res) => {
  const { Usrtypid, Usrtypnm } = req.body;
  try {
    await query(
      'INSERT INTO user_type_master (User_Type_Id, User_Type_Name) VALUES (?, ?)',
      [Usrtypid, Usrtypnm]
    );
    res.json({ message: 'User type added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to insert user type' });
  }
});

app.post('/users', async (req, res) => {
  const { uid, fname, mname, lname, mob, uemail, ucreated, ucby, umodified, umby, ustatus, pin, pass } = req.body;
  try {
    await query(
      `INSERT INTO users 
      (User_id, F_Name, M_Name, L_Name, Mobile, Email, Created, Created_by, Modified, Modified_by, Status, Pincode, Password) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [uid, fname, mname, lname, mob, uemail, ucreated, ucby, umodified, umby, ustatus, pin, pass]
    );
    res.json({ message: 'User added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to insert user' });
  }
});

app.post('/userlogin', async (req, res) => {
  const { email, passcode } = req.body;
  try {
    const results = await query('SELECT * FROM users WHERE Email = ? AND Password = ?', [email, passcode]);
    if (results.length > 0) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const results = await query('SELECT * FROM users WHERE User_id = ?', [id]);
    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

