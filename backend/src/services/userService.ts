import { Users } from "../models"


export const userService = {
  findUserByEmail: async ( email: string ) => {
    const userInfo = await Users.findOne({
      where: { email }
    })

    return userInfo
  }
}