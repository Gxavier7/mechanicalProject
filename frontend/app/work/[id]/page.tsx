"use client"

import worksService from "@/src/services/worksService"
import NavigationBar from "../../components/navigation"
import globalStyle from "../../../public/styles/globals.module.scss"
import style from "./work.module.scss"
import { useState } from "react"
import FormSearchInput from "@/app/components/formSearchInput"
import FormInput from "@/app/components/formInput"

interface props{
  placeholder: string,
  params: Promise<{ id: string }>,
}

export default function WorkDetailsPage (props: props) {
  const [ search, setSearch ] = useState("");
  const [ placa, setPlaca ] = useState("");
  const [ client, setClient ] = useState("");
  const [ register, setRegister ] = useState("");
  const [ vehicle, setVehicle ] = useState("");
  const [ brand, setBrand ] = useState("");
  const [ year, setYear ] = useState("");
  const [ color, setColor ] = useState("");
  const [ kilometers, setKilometers ] = useState("");
  let data 
  const id = props.params.then(response => {
    data = worksService.getServiceById(response.id)
    
    return response.id
  });                       

  const handleChange = ( value: string) => {
    const newValue = typeof value === "string" ? value.trim() : "";
    setSearch(value)
  }


  const handleSearchChange = ( value: string) => {
    const newValue = typeof value === "string" ? value.trim() : "";
    setSearch(value)
  }

  
  return (
    <>
      <div className={globalStyle.container}>
        <NavigationBar currentPage="work"/>

        <div className={style.body}>
          
          <div className={style.header}>
            <FormSearchInput placeholder='Insira o código de um serviço' valueState={search} />

            <div className={style.title}>Service</div>

            <img src="/addCircle.svg" alt="" />
          </div>
          
          <div className={`${style.situation} ${style.red}`}>Situação</div>

          <div className={style.main}>

            <FormInput id="Placa" label="Placa" value={placa} disabled={false} type={"text"} onChange={handleChange}/>
            <FormInput id="Cliente" label="Cliente" value={placa} disabled={false} type={"text"}/>
            <FormInput id="Register" label="CPF / CNPJ" value={placa} disabled={false} type={"text"}/>

            <FormInput id="Vehicle" label="Veículo" value={placa} disabled={false} type={"text"}/>
            <FormInput id="Brand" label="Marca" value={placa} disabled={false} type={"text"}/>
            <FormInput id="Year" label="Ano" value={placa} disabled={false} type={"number"}/>

            <FormInput id="Color" label="Cor" value={placa} disabled={false} type={"text"}/>
            <FormInput id="Kilometers" label="Km" value={placa} disabled={false} type={"number"}/>
            <FormInput id="EndDate" label="Data de Entrega" value={placa} disabled={false} type={"date"}/>

            <FormInput id="PaymentForm" label="Forma de Pagamento" value={placa} disabled={false} type={"text"}/>
            <FormInput id="Type" label="Tipo de Serviço" value={placa} disabled={false} type={"text"}/>
            <FormInput id="Discount" label="Desconto (R$)" value={placa} disabled={false} type={"number"}/>
          </div>
        </div>
        
      </div>
    </>
  )
}