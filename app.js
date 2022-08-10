const { sequelize, Sequelize } = require("./models/index");
let models = sequelize.models;

(async () => {
  let result = await models["User"].findAll({
    include: [{ model: models["Assignment"] }],
  });
  console.log(`RESULTS: ${result}`);
})();
