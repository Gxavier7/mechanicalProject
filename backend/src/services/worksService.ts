import { Works } from "../models"

export const worksService = {
  getAllWorks: async () => {
    const works = await Works.findAll()

    return works
  },

  getActiveServices: async () => {
    const activeWorks = await Works.sequelize?.query(`
      SELECT 
        works.id,
        clients.register,
        vehicles.plate,
        clients.name as client,
        works.end_day as endDay,
        works.finished,
        COALESCE(services_total.total, 0) + COALESCE(pieces_total.total, 0) AS total
      FROM works
        LEFT JOIN clients
          ON works.client_id = clients.id
        LEFT JOIN vehicles
          ON works.vehicle_id = vehicles.id
        LEFT JOIN (
          SELECT work_id, SUM(value) AS total
          FROM services
          GROUP BY work_id
        ) AS services_total ON works.id = services_total.work_id
        LEFT JOIN (
          SELECT work_id, SUM(value * quantity) AS total
          FROM pieces
          GROUP BY work_id
        ) AS pieces_total ON works.id = pieces_total.work_id
      WHERE works.finished = false
      ORDER BY works.start_day
    `)

    return activeWorks
  }
}