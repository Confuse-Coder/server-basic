import pool from '../configs/connectDB';

let getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute('SELECT * FROM users');
  return res.render('index.ejs', { dataUser: rows, test: 'abc string test' });
};

let getDetailPage = async (req, res) => {
  let userId = req.params.id; //Gui ID len Server theo REQUEST
  let [user, fields] = await pool.execute(`select * from users where id = ?`, [userId]); //Nhan ID tu Server de thuc hien RESPONSE => send ra screen
  return res.send(JSON.stringify(user));
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body; //Gui fn,ln, email, addr trong BODY len Server theo REQUEST

  await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)', [
    firstName,
    lastName,
    email,
    address,
  ]);

  return res.redirect('/');
};

module.exports = {
  getHomepage,
  getDetailPage,
  createNewUser,
};
