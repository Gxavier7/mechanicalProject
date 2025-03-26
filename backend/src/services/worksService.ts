import { finished } from "stream"
import { Works } from "../models"

export const worksService = {
  getAllWorks: async () => {
    const works = await Works.sequelize?.query(`
      SELECT 
        works.id,
        clients.name AS client,
        vehicles.vehicle as vehicle,
        works.service_type AS serviceType,
        works.start_day AS startDay,
        works.end_day AS endDay,
        works.payment_form AS paymentForm,
        works.finished
      FROM works
      LEFT JOIN clients
        ON works.client_id = clients.id
      LEFT JOIN vehicles
        ON works.vehicle_id = vehicles.id
      ORDER BY works.finished ASC, works.end_day DESC
    `)

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
        COALESCE(services_total.total, 0) + COALESCE(pieces_total.total, 0) - COALESCE(works.discount, 0) AS total
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
  },

  getWorkById: async (id: number) => {
    const work = await Works.sequelize?.query(`
      SELECT 
		    works.finished,
        works.id,
        vehicles.plate,
        clients.name,
        clients.register,
        vehicles.vehicle,
        vehicles.brand,
        vehicles.year,
        vehicles.color,
        vehicles.kilometers,
        works.end_day,
        works.payment_form,
        works.service_type,
        works.discount,
        COALESCE(services_total.total, 0) AS services_total,
        COALESCE(pieces_total.total, 0) AS pieces_total,
        (COALESCE(services_total.total, 0) + COALESCE(pieces_total.total, 0)) AS total
      FROM works
      LEFT JOIN clients ON works.client_id = clients.id
      LEFT JOIN vehicles ON works.vehicle_id = vehicles.id
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
      WHERE works.id = :workId
    `, {
      replacements: {workId: id},
      type: 'SELECT'
    })

    return work ? work[0] : null
  }
}