import { Toast, ToastBody } from "reactstrap";
import style from "./toast.module.scss"

interface props {
  isOpen: boolean;
  message: string;
  color: string
}

const ToastComponent = function ({ isOpen, message, color}: props) {
  return <>
    <Toast className={style.toast} isOpen={isOpen} style={{backgroundColor: `${color == `error` ?`rgba(255, 0, 0, 0.87)`: `rgba(30, 255, 0, 0.76)`}`  }}>
      <ToastBody className="text-center"> {message} </ToastBody>
    </Toast>
  </>
}

export default ToastComponent