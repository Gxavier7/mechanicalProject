import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface VehicleAttributes {
  id: number,
  vehicle: string
  plate: string
  brand: string
  year: string
  color: string
  kilometers: number
  fuel: 'Gasolina' | 'Etanol' | 'Diesel' | 'Flex'
  clientId: string
}

export interface VehiclesCreationAttributes extends Optional<VehicleAttributes, 'id'> {}

export interface VehicleInstance extends Model<VehicleAttributes, VehiclesCreationAttributes>, VehicleAttributes {}

export const Vehicles = sequelize.define<VehicleInstance, VehicleAttributes> ( 'Vehicles', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  vehicle: {
    allowNull: false,
    type: DataTypes.STRING
  },
  plate: {
    allowNull: false,
    type: DataTypes.STRING
  },
  brand: {
    allowNull: false,
    type: DataTypes.STRING
  },
  year: {
    allowNull: false,
    type: DataTypes.STRING
  },
  color: {
    allowNull: false,
    type: DataTypes.STRING
  },
  kilometers: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  fuel: {
    allowNull: false,
    type: DataTypes.STRING
  },
  clientId: {
    allowNull: false,
    references: { model: 'clients', key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    type: DataTypes.INTEGER
  }
})