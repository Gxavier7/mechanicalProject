import { Services } from "../models"

export const servicesService = {
  // GET /service/:id
  getServiceByWorkId: async ( id: number ) => {
    const services = Services.sequelize?.query(`
      SELECT * 
      FROM services 
      WHERE services.work_id = :id
    `, {
      replacements: {id},
      type: 'SELECT'
    })

    return services 
  }
}