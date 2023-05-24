import { Fragment, useState } from "react";
import Title from "../Title";
import Password from "../Password";
import styles from './styles.module.css'
import Button from "../Button";

export default function Card() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]

    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div className='containercard'>
      <Title title='Gerador de senhas' />
      <Button onClick={generate} buttonText='Gerar' />
      <Button onClick={copyToClipboard} buttonText={copyText} />
      <Password pass={password} />
    </div>
  )
}