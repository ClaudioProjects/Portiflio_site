import React, { useCallback, useState } from 'react'
import styles from '@/styles/Contact.module.scss'
import { FaCheck } from 'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css'
import { showMessage } from '@/utils/toast'
import { Body, Validate } from '@/utils/validate'
import { schemaFormEmail } from '@/utils/schemas'

interface EmailBody extends Body {
  name: string
  email: string
  subject: string
  honeypot: string
  message: string
  replyTo: string
  accessKey: string | undefined
}

export default function FormEmail() {
  const [loading, setLoading] = useState<boolean>(false)
  const [sendedEmail, setSendedEmail] = useState<boolean>(false)
  const [emailBody, setEmailBody] = useState<EmailBody>({
    name: '',
    email: '',
    subject: 'StaticForms - Contact Form',
    honeypot: '',
    message: '',
    replyTo: '@',
    accessKey: process.env.NEXT_PUBLIC_STATIC_FORMS_ACCESS_KEY,
  })

  const handleChangeEmailBody = useCallback(
    (key: string, event: any) => {
      setEmailBody((prev) => ({ ...prev, [key]: event.target.value }))
    },
    [emailBody],
  )

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const errors = new Validate(emailBody, schemaFormEmail).getErrors()
    if (errors) {
      showMessage({
        message: errors[0],
        type: 'error',
        position: 'top-left',
      })
      setTimeout(() => setLoading(false), 2000)
    }

    const response: any = await fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      body: JSON.stringify(emailBody),
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.status !== 200) {
      showMessage({
        message: 'Ocorreu um erro inesperado.',
        type: 'error',
        position: 'top-left',
      })
      setTimeout(() => setLoading(false), 2000)
      return
    }
    setSendedEmail(true)
  }

  return (
    <form
      data-animation-name="animate__fadeInLeft"
      onSubmit={handleSubmit}
      className={`${styles.formBox} scrolledObserver animate__animated`}
    >
      {loading && <div className={styles.film}></div>}

      {sendedEmail && (
        <div className={styles.success}>
          <FaCheck />
          <span>Email enviado com sucesso!</span>
        </div>
      )}

      <h5>Entre em Contato</h5>
      <p>
        Você só precisa preencher os campos abaixo e estará pronto. Um e-mail
        será enviado para mim.
      </p>

      <div className={styles.boxInput}>
        <p>Nome</p>
        <input onChange={(e) => handleChangeEmailBody('name', e)} type="text" />
      </div>
      <div className={styles.boxInput}>
        <p>Email</p>
        <input
          onChange={(e) => handleChangeEmailBody('email', e)}
          type="text"
        />
      </div>
      <div className={styles.boxInput}>
        <p>Mensagem</p>
        <textarea onChange={(e) => handleChangeEmailBody('message', e)} />
      </div>

      <button className={styles.submitButton} type="submit">
        <span>Enviar</span>
      </button>
    </form>
  )
}
