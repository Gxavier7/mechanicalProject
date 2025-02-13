import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface PiecesAttributes {
  id: number,
  workId: number,
  piece: string,
  value: number,
}

export interface PiecesOptionalAttributes extends Optional <PiecesAttributes, 'id'> {}

export interface PiecesInstance extends Model <PiecesAttributes, PiecesOptionalAttributes>, PiecesAttributes {}

export const Pieces = sequelize.define <PiecesInstance, PiecesAttributes> ('pieces', {
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
  piece: {
    allowNull: false,
    type: DataTypes.STRING
  },
  value: {
    allowNull: false,
    type: DataTypes.FLOAT
  }
})