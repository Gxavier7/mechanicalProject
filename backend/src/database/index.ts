import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'mechanicalProject_development',
  username: 'mechanical',
  password: 'mechanical',
  define: {
    underscored: true
  }
})