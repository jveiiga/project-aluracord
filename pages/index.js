import { useState } from 'react';
import { useRouter } from 'next/router'
import appConfig from '../config.json'
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import Title from '../components/Title'

export default function InitialPage() {
    const [username, setUsername] = useState('jveiiga');
    const Router = useRouter();
    // const [disable, setDisable] = useState(false);   

    return (
      <>
        {/* <GlobalStyle /> */}
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage:
              "url(https://poltronanerd.com.br/wp-content/uploads/2016/06/poltrona-darth-vader.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
        >
          <Box
            styleSheet={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              width: "100%",
              maxWidth: "600px",
              height: "238px",
              borderRadius: "5px",
              padding: "32px",
              margin: "16px",
              boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
              backgroundColor: appConfig.theme.colors.neutrals["800"],
            }}
          >
            {/* Formulário */}
            <Box // text, message, input e button
              as="form"
              onSubmit={(e) => {
                e.preventDefault();
                Router.push("/chat");
              }}
              styleSheet={{
                // border: "1px solid red",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "100%", sm: "50%" },
                textAlign: "center",
                marginBottom: "32px",
              }}
            >
              <Title tag="h2">
                {/* title */}
                Venha para o lado negro, aqui tem biscoito!
              </Title>
              <Text // subtitle
                variant="body3"
                styleSheet={{
                  marginBottom: "32px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
              >
                {appConfig.name}
              </Text>
              <TextField // name input
                type="text"
                value={username}
                onChange={(ev, handleDisable) => {
                  setUsername(ev.target.value);
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals["000"], //texto-input-color
                    mainColor: appConfig.theme.colors.neutrals[900], //border
                    mainColorHighlight: appConfig.theme.colors.primary[200], //border hover
                    backgroundColor: appConfig.theme.colors.neutrals[200], //background input
                  },
                }}
              />
              <Button
                type="submit"
                label="Entrar"
                // disabled={true}
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"], //cor text
                  mainColor: appConfig.theme.colors.primary["900"], //buttom
                  mainColorLight: appConfig.theme.colors.primary["000"], // ?????
                  mainColorStrong: appConfig.theme.colors.primary["200"], //buttom hover
                }}
              />
            </Box>
            {/* Formulário */}

            {/* Photo Area */}
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "200px",
                padding: "16px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                // border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: "10px",
                flex: 1,
                minHeight: "200px",
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: "50%",
                  marginBottom: "16px",
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals["000"],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: "3px 10px",
                  borderRadius: "1000px",
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }

  
