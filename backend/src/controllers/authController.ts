import { Request, Response } from "express";
import { userService } from "../services/userService";
import { jwtService } from "../services/jwtService";

export const authController = {
  // POST /auth/login
  login: async ( req: Request, res: Response ) => {
    const { email, password } = req.body

    try {
      const user = await userService.findUserByEmail(email)

      if (!user) return res.status(404).json({message: `E-mail not found`})

      user.checkPassword(password, (err, isSame) => {
        if (err) return res.status(400).json({message: err.message})
        if (!isSame) return res.status(400).json({message: `Wrong password`})
        
        const payload = {
          id: user.id,
          firstName: user.firstName,
          email: user.email
        }
        const token = jwtService.signToken(payload, `7d`)

        return res.json({autheticated: true, ...payload, token})

      })
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}