'use client'

import styles from "./home.module.scss"
import NavigationBar from "../components/navigation";
import List from "../components/list";
import ListBodyServiceInProgress from "../components/listBodyServiceInProgress";
import worksService from "@/src/services/worksService";
import { useEffect, useState } from "react";

export default function HomePage () {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await worksService.getActiveWorks();
        setData(response.data[0]); 
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }

    fetchData();
  }, []);

  return <>
    <div className={styles.container}>
      <NavigationBar currentPage="home"/>

      <div className={styles.activeServices}>
        <List 
          title="Serviços em andamento"
          headers={['Código', 'CPF/CNPJ', 'Placa', 'Cliente', 'Data Entrega', 'Total', "Finalizado"]}
        >
          <ListBodyServiceInProgress
            dataArray={data}
          />
        </List>
      </div>
    </div>
  </>
}