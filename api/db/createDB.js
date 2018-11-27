let sqlite3 = require("sqlite3");

const createDB = () => {
  if (process.env.NODE_ENV === "development") sqlite3 = sqlite3.verbose();
  const db = new sqlite3.Database(`${__dirname}/glory-school.db`);
  db.run(
    `CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT,
                                              firstName VARCHAR(50),
                                              lastName VARCHAR(50),
                                              birthDate DATE,
                                              birthPlace VARCHAR(100),
                                              inCareOf VARCHAR(50),
                                              identityCard VARCHAR(50),
                                              identityCardDelivery DATE,
                                              deliveryPlace VARCHAR(100),
                                              phone1 VARCHAR(50),
                                              phone2 VARCHAR(50),
                                              address VARCHAR(100),
                                              stage VARCHAR(50),
                                              division VARCHAR(50),
                                              materials TEXT
                                              )`
  );
  return db;
};

module.exports = createDB();
