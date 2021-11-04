import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { api } from '../../services/api'
import  {NovasNoticias}  from '../NovasNoticias'
import { MainStyled } from './style'


type Message = {
  id: string;
  message:string;
  title: string;
  urlImg: string;
}

const messagesQueue: Message[] = []

const socket = io('http://localhost:4000/')
socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage);
  
})


export const Main:React.FC = ()=>{
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(()=>{
    setInterval(()=>{
  
      if(messagesQueue.length > 0){
        setMessages(prevState =>[
          messagesQueue[0],
          prevState[0],
          prevState[1]
        ].filter(Boolean))
        messagesQueue.shift()
      }
      
    },3000)
  },[])

  useEffect(()=>{
    api.get<Message[]>('/getMessages').then(response =>{
      console.log(response.data)
      setMessages(response.data)
    })

  },[])

  return (
    <MainStyled>
      <h2>veja aqui nossas 3 ultimas noticias </h2>
      <div className="container">
      {messages.map(message =>(
        <div key={message.id}>
          <NovasNoticias
            h1={message.title}
            text={message.message}
            img={message.urlImg}
          />
        </div>
        ))}
        
   
      
      </div>

    </MainStyled>
  )

}