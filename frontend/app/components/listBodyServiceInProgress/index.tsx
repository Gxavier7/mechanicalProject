import style from '../list/list.module.scss'

interface data {
  id: number,
  register: string,
  plate: string,
  client: string,
  endday: string,
  total: number
}

interface props {
  dataArray: data[]
}

function formatDate (date: string) {
  // Formato da data 2025-02-20T18:52:34.750Z
  const [year, month, day] = date.split('T')[0].split('-')

  return `${day}/${month}/${year}`
}

export default function ListBodyServiceInProgress (props: props) {
  return (
    <tbody>
      {
        props.dataArray.map(object =>{
          return <tr key={object.id}>
            <td scope="row">
              {object.id}
            </td>
            <td>
              {object.register}
            </td>
            <td>
              {object.plate}
            </td>
            <td>
              {object.client}
            </td>
            <td>
              {formatDate(object.endday)}
            </td>
            <td>
              R$ {object.total.toFixed(2)}
            </td>
          </tr>
        })
      }
    </tbody>
  )
}