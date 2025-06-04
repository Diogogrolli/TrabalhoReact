import React, { useState, useEffect } from 'react';
import {
  Container, TextField, Button, Typography, List, ListItem, Tabs, Tab
} from '@mui/material';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [aba, setAba] = useState(0);

  // Carrega do LocalStorage ao iniciar
  useEffect(() => {
    const dados = localStorage.getItem('usuarios');
    if (dados) {
      setUsuarios(JSON.parse(dados));
    }
  }, []);

  // Salva no LocalStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  const handleCadastro = () => {
    if (!nome || !email) return alert('Preencha todos os campos!');
    const novoUsuario = { nome, email };
    setUsuarios([...usuarios, novoUsuario]);
    setNome('');
    setEmail('');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: 30 }}>
      <Tabs value={aba} onChange={(_, newValue) => setAba(newValue)}>
        <Tab label="Cadastro de Usuário" />
        <Tab label="Usuários Cadastrados" />
      </Tabs>

      {aba === 0 && (
        <>
          <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
            Cadastro de Usuário
          </Typography>
          <TextField
            fullWidth label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} sx={{ mb: 2 }}
          />
          <TextField
            fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleCadastro}>
            Cadastrar
          </Button>
        </>
      )}

      {aba === 1 && (
        <>
          <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
            Lista de Usuários
          </Typography>
          <List>
            {usuarios.map((user, index) => (
              <ListItem key={index}>
                {user.nome} - {user.email}
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Container>
  );
}
