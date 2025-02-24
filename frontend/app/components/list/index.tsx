import style from './list.module.scss'

interface props {
  title?: string,
  headers: string[],
  
  //@ts-ignore
  children
}

export default function List(props: props) {
  return <>
    <h2 className={style.title}>{props.title}</h2>
    <div className={style.tableContainer}>
      <table className={style.table}>
        <thead>
          <tr>
            {
              props.headers.map(head => {
                return <th key={head}>
                  {head}
                </th>
              })
            }
          </tr>
        </thead>
        {props.children}
      </table>
    </div>
  </>
}