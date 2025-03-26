'use client'

import { useEffect, useState } from 'react'
import List from '../components/list'
import ListBodyServices from '../components/listBodyServices'
import NavigationBar from '../components/navigation'
import style from './work.module.scss'
import worksService from '@/src/services/worksService'
import ToastComponent from '../components/toast'
import globalStyle from "../../public/styles/globals.module.scss"
import ListSearchInput from '../components/listSearchInput'

interface dataProps {
  id: number,
  client: string,
  vehicle: string,
  servicetype: string,
  endday: string,
  finished: boolean
}

export default function WorkPage () {
  const [data, setData] = useState([])
  const [dataWithFilter, setDataWithFilter] = useState([])
  const [search, setSearch] = useState("")
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastColor, setToastColor] = useState("error")

  const handleSearchChange: React.Dispatch<React.SetStateAction<string>> = (value) => {
    const newValue = typeof value === "string" ? value.trim() : "";
    setSearch(value)

    if (newValue != "" && data.length > 0) {
      setDataWithFilter(data.filter((row: dataProps) => row.client.toLowerCase().includes(newValue.toLowerCase(), 0) || row.id == Number(newValue)))
    } else {
      setDataWithFilter(data)
    }
  }

  useEffect(() => {
  
    worksService.getAllWorks().then((response) => {
      setData(response.data[0])
      setDataWithFilter(response.data[0])
    })   
    .catch (error => {
      setToastIsOpen(true)
      setToastMessage("Ocorreu um erro ao carregar os dados")
      setToastColor("error")
      setTimeout(()=>{
        setToastIsOpen(false)
      }, 1000 * 3)
    })
    
  }, [])

  return <>
    <div  className={globalStyle.container}>
      <NavigationBar currentPage="work"></NavigationBar>

      <div className={globalStyle.body}>
        <div className={style.header}>
          <ListSearchInput placeholder='Insira o Nome de um Cliente ou o Código de um Serviço' valueState={search} setState={handleSearchChange}/>

          <img src="/addCircle.svg" alt="" />
        </div>

        <List title='Serviços' headers={["Código", "Cliente", "Veículo", "Tipo do Serviço", "Dia de fim", "Finalizado"]}>
          <ListBodyServices dataArray={dataWithFilter}/>
        </List>
      </div>

      <ToastComponent
        isOpen={toastIsOpen} 
        message={toastMessage}
        color={toastColor}
      />
    </div>
  </>
}