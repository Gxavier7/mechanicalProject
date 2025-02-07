import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface ClientAttributes {
  id: number
  name: string
  phone: string
  birth: Date
  email: string
  address: string
  register: string
}

export interface ClientCreationAttributes extends Optional<ClientAttributes, 'id'> {}

export interface ClientInstance extends Model<ClientAttributes, ClientCreationAttributes>, ClientAttributes {}

export const Clients = sequelize.define<ClientInstance, ClientAttributes> ( `clients`, {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  birth: {
    allowNull: false,
    type: DataTypes.DATE
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING
  },
  register: {
    allowNull: false,
    type: DataTypes.STRING
  }
})