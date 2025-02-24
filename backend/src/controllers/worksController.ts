import { Request, Response } from "express";
import { worksService } from "../services/worksService";

export const worksController = {
  // GET /works
  getAllWorks: async ( req: Request, res: Response ) => {
    try {
      const works = await worksService.getAllWorks()

      return res.json(works)

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({message: err.message})
      }
    }
  },

  // GET /works/active
  getActiveServices: async ( req: Request, res: Response ) => {
    try {
      const activeWorks = await worksService.getActiveServices()

      if (!activeWorks) {
        return res.send()
      }

      return res.json(activeWorks)
      
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({message: err.message})
      }
    }
  }
}