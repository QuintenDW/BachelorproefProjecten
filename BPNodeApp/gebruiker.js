const { Model, DataTypes } = require("sequelize");

class Gebruiker extends Model {}

async function GebruikerInit(sequelize) {
  Gebruiker.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      voorNaam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      achterNaam: {
        type: DataTypes.STRING,
      },
    },
    { sequelize, modelName: "Gebruiker" }
  );
  await Gebruiker.sync();
}

module.exports = {
  Gebruiker,
  GebruikerInit,
};
