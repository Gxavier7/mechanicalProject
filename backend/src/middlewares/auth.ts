import { NextFunction, Request, Response } from "express";
import { UserInstance } from "../models/User";


export interface AuthenticatedRequest extends Request {
  user?: UserInstance | null
}

export function ensureAuth(req:AuthenticatedRequest, res: Response, next: NextFunction) {
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader) {
    return res.status(401).json({ message: `Unauthorized, no token found`})
  }

  const token = authorizationHeader.replace(/Bearer /, '')
}
