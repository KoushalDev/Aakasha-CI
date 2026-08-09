require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3005;

// Middleware
app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


// ======================================================
// MySQL Database Configuration
// ======================================================

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 3306
});


// ======================================================
// MySQL Connection
// ======================================================

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }

  console.log('Connected to MySQL database');
});


// ======================================================
// Health Check
// ======================================================

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP'
  });
});


// ======================================================
// Users
// ======================================================

// Retrieve all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error retrieving users:', err.message);

      return res.status(500).json({
        success: false,
        message: 'Database error'
      });
    }

    res.status(200).json(results);
  });
});


// Retrieve a user by ID
app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  db.query(
    'SELECT * FROM users WHERE User_id = ?',
    [id],
    (err, results) => {
      if (err) {
        console.error('Error retrieving user:', err.message);

        return res.status(500).json({
          success: false,
          message: 'Database error'
        });
      }

      if (results.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      res.status(200).json(results[0]);
    }
  );
});


// Create a new user
app.post('/users', (req, res) => {
  const {
    uid,
    fname,
    mname,
    lname,
    mob,
    uemail,
    ucreated,
    ucby,
    umodified,
    umby,
    ustatus,
    pin,
    pass
  } = req.body;

  const query = `
    INSERT INTO users
    (
      User_id,
      F_Name,
      M_Name,
      L_Name,
      Mobile,
      Email,
      Created,
      Created_by,
      Modified,
      Modified_by,
      Status,
      Pincode,
      Password
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    uid,
    fname,
    mname,
    lname,
    mob,
    uemail,
    ucreated,
    ucby,
    umodified,
    umby,
    ustatus,
    pin,
    pass
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error creating user:', err.message);

      return res.status(500).json({
        success: false,
        message: 'Database error'
      });
    }

    res.status(201).json({
      message: 'User added successfully',
      id: result.insertId
    });
  });
});


// ======================================================
// User Types
// ======================================================

// Retrieve all user types
app.get('/usertypes', (req, res) => {
  db.query(
    'SELECT * FROM user_type_master',
    (err, results) => {
      if (err) {
        console.error('Error retrieving user types:', err.message);

        return res.status(500).json({
          success: false,
          message: 'Database error'
        });
      }

      res.status(200).json(results);
    }
  );
});


// Create user type
app.post('/usertypes', (req, res) => {
  const {
    Usrtypid,
    Usrtypnm
  } = req.body;

  db.query(
    `
    INSERT INTO user_type_master
    (User_Type_Id, User_Type_Name)
    VALUES (?, ?)
    `,
    [Usrtypid, Usrtypnm],
    (err, result) => {
      if (err) {
        console.error('Error creating user type:', err.message);

        return res.status(500).json({
          success: false,
          message: 'Database error'
        });
      }

      res.status(201).json({
        message: 'User type added successfully',
        id: Usrtypid
      });
    }
  );
});


// ======================================================
// Subscription
// ======================================================

app.get('/subscription', (req, res) => {
  db.query(
    'SELECT * FROM subscription',
    (err, results) => {
      if (err) {
        console.error('Error retrieving subscriptions:', err.message);

        return res.status(500).json({
          success: false,
          message: 'Database error'
        });
      }

      res.status(200).json(results);
    }
  );
});


app.post('/subscription', (req, res) => {
  const {
    subid,
    subdate,
    subduration,
    psid,
    screated,
    scby,
    smodified,
    smby,
    utypid,
    graceperiod,
    pmode,
    amt,
    status
  } = req.body;

  const query = `
    INSERT INTO subscription
    (
      Subscription_id,
      Subscription_Date,
      Subscription_Duration,
      PS_Id,
      Created,
      Created_by,
      Modified,
      Modified_by,
      User_Type_Id,
      Grace_period,
      Payment_Mode,
      Amount,
      Status
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    subid,
    subdate,
    subduration,
    psid,
    screated,
    scby,
    smodified,
    smby,
    utypid,
    graceperiod,
    pmode,
    amt,
    status
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error creating subscription:', err.message);

      return res.status(500).json({
        success: false,
        message: 'Database error'
      });
    }

    res.status(201).json({
      message: 'Subscription added successfully',
      id: subid
    });
  });
});


// ======================================================
// Photoshelf
// ======================================================

app.get('/photoshelf', (req, res) => {
  db.query(
    'SELECT * FROM photoshelf',
    (err, results) => {
      if (err) {
        console.error('Error retrieving photoshelf:', err.message);

        return res.status(500).json({
          success: false,
          message: 'Database error'
        });
      }

      res.status(200).json(results);
    }
  );
});


app.post('/photoshelf', (req, res) => {
  const {
    psid,
    psname,
    pssize,
    uid,
    pcreated,
    pcby,
    pmodified,
    pmby,
    isdelete
  } = req.body;

  const query = `
    INSERT INTO photoshelf
    (
      PS_id,
      PS_Name,
      PS_Size,
      User_id,
      Created,
      Created_by,
      Modified,
      Modified_by,
      Is_Delete
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    psid,
    psname,
    pssize,
    uid,
    pcreated,
    pcby,
    pmodified,
    pmby,
    isdelete
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error creating photoshelf:', err.message);

      return res.status(500).json({
        success: false,
        message: 'Database error'
      });
    }

    res.status(201).json({
      message: 'Photoshelf added successfully',
      id: psid
    });
  });
});


// ======================================================
// Configuration
// ======================================================

app.get('/configuration', (req, res) => {
  db.query(
    'SELECT * FROM configuration',
    (err, results) => {
      if (err) {
        console.error('Error retrieving configuration:', err.message);

        return res.status(500).json({
          success: false,
          message: 'Database error'
        });
      }

      res.status(200).json(results);
    }
  );
});


app.post('/configuration', (req, res) => {
  const {
    confid,
    pdefsubscript,
    cdefsubscript,
    pdefstorage,
    cdefstorage,
    pcosting
  } = req.body;

  const query = `
    INSERT INTO configuration
    (
      Configuration_id,
      P_default_subscript,
      C_default_subscript,
      P_default_storage,
      C_default_storage,
      P_Costing
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [
    confid,
    pdefsubscript,
    cdefsubscript,
    pdefstorage,
    cdefstorage,
    pcosting
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error creating configuration:', err.message);

      return res.status(500).json({
        success: false,
        message: 'Database error'
      });
    }

    res.status(201).json({
      message: 'Configuration added successfully',
      id: confid
    });
  });
});


// ======================================================
// Login
// ======================================================

app.post('/userlogin', (req, res) => {
  const {
    email,
    passcode
  } = req.body;

  db.query(
    'SELECT * FROM users WHERE Email = ? AND Password = ?',
    [email, passcode],
    (err, results) => {
      if (err) {
        console.error('Error executing login query:', err.message);

        return res.status(500).json({
          success: false,
          message: 'Database error'
        });
      }

      if (results.length > 0) {
        return res.status(200).json({
          success: true
        });
      }

      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }
  );
});


// ======================================================
// Start Server
// ======================================================

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});


