//used so environment variables can also be accessed by config (putting configuration central)
module.exports = {
  env: "NODE_ENV",
  password: "DB_PASSWORD",
  dialect: "DB_DIALECT",
  username: "DB_USER",
  database: "DB_DATABASE",
};
