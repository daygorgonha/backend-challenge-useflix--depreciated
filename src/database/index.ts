import { Sequelize } from "sequelize";

import dbconfig from "../../ormconfig";

export const createConnection = new Sequelize("useflix", "useflix", "useflix", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
  },
});
