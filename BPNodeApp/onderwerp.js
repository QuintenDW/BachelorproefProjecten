const { Model, DataTypes } = require("sequelize");

class Onderwerp extends Model {}

async function OnderwerpInit(sequelize) {
  Onderwerp.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      naam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, modelName: "Onderwerp" }
  );
  await Onderwerp.sync();
}

module.exports = {
  Onderwerp,
  OnderwerpInit,
};
