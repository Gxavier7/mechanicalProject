'use client'

import styles from "./home.module.scss"
import NavigationBar from "../components/navigation";
import List from "../components/list";
import ListBodyServiceInProgress from "../components/listBodyServiceInProgress";
import worksService from "@/src/services/worksService";
import { useEffect, useState } from "react";
import ToastComponent from "../components/toast";

export default function HomePage () {
  const [data, setData] = useState([]);
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastColor, setToastColor] = useState("error")

  useEffect(() => {

    worksService.getActiveWorks().then(response => {
      setData(response.data[0]); 
    })
    .catch (error => {
      setToastIsOpen(true)
      setToastMessage("Ocorreu um erro ao carregar os dados")
      setToastColor("error")
      setTimeout(()=>{
        setToastIsOpen(false)
      }, 1000 * 3)
    })
    
  }, []);

  return <>
    <div className={styles.container}>
      <NavigationBar currentPage="home"/>

      <div className={styles.activeServices}>
        <List 
          title="Serviços em andamento"
          headers={['Código', 'CPF/CNPJ', 'Placa', 'Cliente', 'Data Entrega', 'Total']}
        >
          <ListBodyServiceInProgress
            dataArray={data}
          />
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