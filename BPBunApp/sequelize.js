const { Sequelize } = require("sequelize");
const configuration = require("config");
const RecensieMigratie = require("./recensie");
const seed = require("./seeder");
const { GebruikerInit } = require("./gebruiker");
const { OnderwerpInit } = require("./onderwerp");
//config
const username = configuration.get("username");
const database = configuration.get("database");
const dialect = configuration.get("dialect");
const password = configuration.get("password");

// Instantie aanmaken
let sequelize;
async function initializeSequelize() {
  sequelize = new Sequelize(database, username, password, {
    host: dialect,
    dialect: dialect,
    pool: {
      max: 100,
    }
  });
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  await GebruikerInit(sequelize);
  await OnderwerpInit(sequelize);
  await RecensieMigratie(sequelize);
  await seed(sequelize);
  return sequelize;
}

function getSequelize() {
  if (!sequelize) {
    throw new Error("initialize sequelize");
  }
  return sequelize;
}
module.exports = {
  initializeSequelize,
  getSequelize,
};
