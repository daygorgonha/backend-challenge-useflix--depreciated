export default {
  database: "useflix",
  username: "useflix",
  password: "useflix",
  options: {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    define: {
      timestamps: true,
      underscore: true,
    },
  },
};
