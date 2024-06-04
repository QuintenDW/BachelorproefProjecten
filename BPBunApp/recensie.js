const { Model, DataTypes } = require("sequelize");
const { Gebruiker } = require("./gebruiker.js");
const { Onderwerp } = require("./onderwerp.js");
class Recensie extends Model {}

module.exports = async (sequelize) => {
  Recensie.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      bericht: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, modelName: "Recensie" }
  );
  Recensie.belongsTo(Gebruiker, { onDelete: "CASCADE" });
  Recensie.belongsTo(Onderwerp, { onDelete: "CASCADE" });
  await Recensie.sync();
};
