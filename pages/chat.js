import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';
import appConfig from '../config.json';
import Header from '../src/components/Header';
import MessageList from '../src/components/MessageList';
import { ButtonSendSticker } from '../src/components/ButtonSendSticker';

    /*
    // Usuário
    - Usuário digita no campo textarea
    - Aperta enter para enviar
    - Tem que adicionar o texto na listagem
    
    // Dev
    - [X] Campo criado
    - [X] (Aperta enter para enviar) - Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)
    - [X] Lista de mensagens 
    */

    /************************************************/

    //Keys 
    
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzUwNTQwMCwiZXhwIjoxOTU5MDgxNDAwfQ.JnPNcSoo-n89fNcfc-KU4-iI0XTlV_rVP06LzYr4AqQ';
const SUPABASE_URL = 'https://vymybdplniufdfjuutyq.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


export default function ChatPage() {
  const Router = useRouter();
  const userLog = Router.query.username;
  const [message, setmessage] = useState('');
  const [list, setList] = useState([

    // {
    //   id: 1,
    //   de: 'jveiiga',
    //   texto: ':sticker: https://c.tenor.com/MIReK4Ph2A4AAAAM/lego-star-wars-holiday-special-most-impressive.gif',
    // }
  ]);

useEffect(() => {
  supabaseClient
  .from('mensagens')
  .select('*') // (Read) Seleciona no banco de dados as mensagens gravadas 
  .order('id', { ascending: false})
  .then(({data}) => {
      setList(data);
  })
}, [])

  function handleNewMessage(newMessage) {
    const message = {
      // id: list.length + 1,
      de: userLog,
      texto: newMessage,
    };
    supabaseClient
      .from('mensagens')
      .insert([ // (Create) Cria no banco de dados as mensagens digitadas 
          message
      ])
      .then(({ data }) => {
        setList([data[0], ...list]);
        })
        setmessage('');
  }

  // fetch(`${SUPABSE_URL}/rest/v1/mensagens?select=*`, {
  //    Headers: {
  //            'Content-Type': 'application/json',
  //            'apikey': SUPABASE_ANON_KEY,
  //            'Authorization': 'Bearer' + SUPABASE_ANON_KEY,
  //    }
  //  })
  //   .then((res) => {
  //        return res.json();
  //    })
  //    .then((res) => {
  //           console.log(res);
  //   });

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://poltronanerd.com.br/wp-content/uploads/2016/06/poltrona-darth-vader.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList list={list}/>

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={message}
              onChange={(ev) => {
                setmessage(ev.target.value);
              }}
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  ev.preventDefault();
                  handleNewMessage(message);
                }
              }}
              placeholder="Insira sua message aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals['000'],
              }}
            />
            <ButtonSendSticker 
                onStickerClick={(sticker) => {
                    console.log('[Usando componente] Salva esse sticker no banco', sticker)
                    handleNewMessage(`:sticker:${sticker}`);
                }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


    