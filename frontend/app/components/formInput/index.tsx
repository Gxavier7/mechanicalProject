import style from "./input.module.scss"

interface Props {
  id: string,
  label: string,
  value: string,
  disabled: boolean,
  type: string,
  onChange?: (value: string) => void
}

export default function FormInput ({ id, label, value, disabled, type, onChange }: Props) {
  
  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }
  
  return <>
    <div className={style.inputBox}>
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        value={value}
        className={style.input}
        onChange={(event) => handleState(event)}
      />
    </div>
  </>
}