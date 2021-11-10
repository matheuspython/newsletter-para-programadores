import React, { FormEvent, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

const SendNotices: React.FC = () => {
  const [message, setMessage] = useState('')
  const [title, setTitle] = useState('')
  const [urlImg, setUrlImg] = useState('')

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault()
    if(!message.trim()){
      return
    }
    await api.post('/sendMessages', { message, title, urlImg })
    setMessage('')
    setTitle('')
    setUrlImg('')
  } 


  return (
    <Container>
      <form  onSubmit={handleSendMessage}  action="">
        <textarea 
          onChange={event => setMessage(event.target.value)}
          value={message}
          name="message" 
          id="message" 
          placeholder="digite a noticia neste campo"
         ></textarea>

        <textarea 
         onChange={event => setTitle(event.target.value)}
         value={title}
         name="title" 
         id="title" 
         placeholder="digite o title da noticia neste campo"
        ></textarea>

        <textarea 
         onChange={event => setUrlImg(event.target.value)}
         value={urlImg}
         name="urlImg" 
         id="urlImg" 
         placeholder="digite a urlImg da noticia neste campo"
        ></textarea>

        <button type="submit"> Enviar noticia </button>
      </form>
    </Container>
  )
}

export default SendNotices;