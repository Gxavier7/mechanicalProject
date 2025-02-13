import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface ServiceAttributes {
  id: number,
  workId: number
  description: string,
  value: number
}

export interface ServiceOptionalAttributes extends Optional <ServiceAttributes, 'id'> {}

export interface ServiceInstance extends Model <ServiceAttributes, ServiceOptionalAttributes>, ServiceAttributes {}

export const Services = sequelize.define <ServiceInstance, ServiceAttributes> ('services', {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  workId: {
    allowNull: false,
    references: { model: 'works', key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  value: {
    allowNull: false,
    type: DataTypes.FLOAT
  }
})