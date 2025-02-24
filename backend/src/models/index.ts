import { Users } from "./User"
import { Clients } from "./Client"
import { Vehicles } from "./Vehicle"
import { Works } from "./Works"
import { Services } from "./Services"
import { Pieces } from "./Pieces"

Clients.hasMany(Vehicles, { as: 'vehicles'})

Vehicles.belongsTo(Clients)

Works.hasMany(Clients, { as: 'clients', foreignKey: 'client_id'})
Works.hasMany(Vehicles, { as: 'vehicles', foreignKey: 'vehicle_id'})

Services.hasMany(Works, { as: 'works'})

Pieces.hasMany(Works, { as: 'works'})

export {
  Users,
  Clients,
  Vehicles,
  Works,
  Services,
  Pieces
}