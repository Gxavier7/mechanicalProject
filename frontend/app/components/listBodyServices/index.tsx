import { useRouter } from "next/navigation";
import style from './list.module.scss'

interface data {
  id: number,
  client: string,
  vehicle: string,
  servicetype: string,
  endday: string,
  finished: boolean
}

interface props {
  dataArray: data[]
}

function formatDate (date: string) {
  // Formato da data 2025-02-20T18:52:34.750Z
  const [year, month, day] = date.split('T')[0].split('-')

  return `${day}/${month}/${year}`
}

export default function ListBodyServices (props: props) {
  const router = useRouter();

  return (
    <tbody>
      {
        props.dataArray.map(object =>{
          return <tr key={object.id} className={style.row} onClick={() => router.push(`/work/${object.id}`)}>
            <td scope="row">
              {object.id}
            </td>
            <td>
              {object.client}
            </td>
            <td>
              {object.vehicle}
            </td>
            <td>
              {object.servicetype}
            </td>
            <td>
              {formatDate(object.endday)}
            </td>
            <td>
              { 
                object.finished 
                ? <img src='/greenCircle.png'/>
                : <img src='/redCircle.png'/>
              }
            </td>
          </tr>
        })
      }
    </tbody>
  )
}