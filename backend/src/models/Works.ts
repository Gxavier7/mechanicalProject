import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface WorksAttributes {
  id: number,
  clientId: number,
  vehicleId: number,
  serviceType: 'Orçamento' | 'Serviço',
  startDay: Date,
  endDay: Date,
  paymentForm: 'Dinheiro' | 'Cartão' | 'Pix'
}

export interface WorksCreationAttributes extends Optional <WorksAttributes, 'id'> {}

export interface WorksInstance extends Model <WorksAttributes, WorksCreationAttributes>, WorksAttributes {}

export const Works = sequelize.define( 'works', {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  clientId: {
    allowNull: false,
    references: { model: 'clients', key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    type: DataTypes.INTEGER
  },
  vehicleId: {
    allowNull: false,
    references: { model: 'vehicles', key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    type: DataTypes.INTEGER
  },
  serviceType: {
    allowNull: false,
    type: DataTypes.STRING
  },
  startDay: {
    allowNull: false,
    type: DataTypes.DATE
  },
  endDay: {
    allowNull: false,
    type: DataTypes.DATE
  },
  finished: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  paymentForm: {
    allowNull: false,
    type: DataTypes.STRING
  },
})