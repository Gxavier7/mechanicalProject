import express from "express"
import { sequelize } from "./database"

const app = express()

app.use(express.static('public'))

app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log(`DB connection successfull`);
  })
  
  console.log(`Server started successfull at: http://localhost:${PORT}`)
}) 