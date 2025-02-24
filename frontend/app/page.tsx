'use client'

import styles from "./page.module.css";
import buttonStyle from "./buttons.module.scss"
import { FormEvent, useState } from "react";
import authService from "@/src/services/authService";
import { useRouter } from 'next/navigation'
import { Button, Form } from "reactstrap";
import ToastComponent from "./components/toast";

export default function Home() {
  const router = useRouter();
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastColor, setToastColor] = useState("error")

  const handleLogin = async ( event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const params =  { email, password }

    const { data, status } = await authService.login(params);    

    if ( status === 200 ) {
      setToastIsOpen(true)
      setToastMessage("Login feito com sucesso")
      setToastColor("green")
      setTimeout(()=>{
        setToastIsOpen(false)
        router.push("/home")
      }, 1000 * 1)
 } else {
      setToastIsOpen(true)
      setToastMessage(data.message)
      setToastColor("error")
      setTimeout(()=>{
        setToastIsOpen(false)
      }, 1000 * 3)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.title}>Buty Auto Mecânica</div>
      <main className={styles.main}>
        <section>
          <img 
            className={styles.image}
            src="/carroLogin.png" 
            alt="Car Draw" 
          />
        </section>
        <Form className={styles.loginForm} onSubmit={handleLogin}>
          <input type="text" className={styles.input} placeholder="E-mail" name="email" id="email"/>
          <input type="password" className={styles.input} placeholder="Senha" name="password" id="password"/>
          <Button type="submit" className={buttonStyle.greenButton}>Entrar</Button>
        </Form>
      </main>
      <ToastComponent
        isOpen={toastIsOpen} 
        message={toastMessage}
        color={toastColor}
      />
    </div>
  );
}
