module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "sequelize-demo",
    host: process.env.DB_HOST,
    dialect: "postgres",
    seederStorage: "sequelize",
    define: { freezeTableName: true },
  },
};
