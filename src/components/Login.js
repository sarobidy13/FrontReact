// 

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../assets/styles/Signin.component.scss";


import { useState } from "react";


const defaultTheme = createTheme();

const Login = () => {
  const token = sessionStorage.getItem("token");
                                                                  
  if (token) {
       window.location.href = "/";
  }   

   
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('000');
  const [redirect, setRedirect] = useState(false);
  React.useEffect(() => {
      if (redirect) {
          console.log("makato");
          setRedirect(false);
          window.location.href = '/home';
      }
  }, [redirect]);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append('email', email);
      data.append('mdp', password);

      const utilisateurs = {
          "email":email,
          "mdp":password
      }
      console.log(JSON.stringify(utilisateurs));
      console.log("mail  "+email+"  pass: "+password);


      try {
          const response = await fetch('https://e-vehicule-production-c2e4.up.railway.app/utilisateurs/login', {
              headers: {
                  'Content-Type': 'application/json',
              },
              method: 'POST',
              body: JSON.stringify(utilisateurs)
          });
          const responseData = await response.json();
          console.log(JSON.stringify(responseData));
          if (response.ok) {
              sessionStorage.setItem('token', responseData.data);
              var token = sessionStorage.getItem('token');
              console.log("Ry lanitra oh" );
              console.log("tokenina  "+token);
              console.log(token);
              setRedirect(true);
          } else {
              console.log(responseData.message);
              alert("hello christooooooooj "+responseData.message);
          }
      } catch (error) {
          console.error('Erreur pendant la requête:', error);
          alert('Une erreur s\'est produite.');
      }
  };

 return (
    <ThemeProvider theme={defaultTheme}>
      <div className="login_main-container">
        <div className="login_left-container">
          <img src="/img/login.jpg" alt="" />
        </div>
        <div className="login_right-container">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Se connecter
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                 margin="normal"
                 required
                 fullWidth
                 id="email"
                 label="Nom d'utilisateur"
                 name="email"
                 autoComplete="email"
                 onChange={(e) => setEmail(e.target.value)} value={email}
                 autoFocus
                />
                <TextField
                 margin="normal"
                 required
                 fullWidth
                 name="password"
                 label="Mot de passe"
                 type="password"
                 id="password"
                 onChange={(e) => setPassword(e.target.value)} value={password}
                 autoComplete="current-password"
                />
                <Button
                 type="submit"
                 fullWidth
                 variant="contained"
                 sx={{ mt: 3, mb: 2 }}
                >
                 Se connecter
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
    </ThemeProvider>
 );
}

export default Login;
