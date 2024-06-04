async function seed(sequelize) {
  // Originele staat
  await sequelize.models.Gebruiker.destroy({ truncate: { cascade: true } });
  await sequelize.models.Onderwerp.destroy({ truncate: { cascade: true } });
  await sequelize.models.Gebruiker.create({
    id: 1,
    voorNaam: "Quinten",
    achterNaam: "De Wolf",
  });
  await sequelize.models.Onderwerp.create({
    id: 1,
    naam: "Cars",
  });
  await sequelize.models.Onderwerp.create({
    id: 2,
    naam: "Planes",
  });
  await sequelize.models.Onderwerp.create({
    id: 3,
    naam: "Racing",
  });
}
module.exports = seed;
