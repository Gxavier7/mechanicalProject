import express from "express"
import { sequelize } from "./database"
import { router } from "./routes"
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log(`DB connection successfull`);
  })
  
  console.log(`Server started successfull at: http://localhost:${PORT}`)
}) 