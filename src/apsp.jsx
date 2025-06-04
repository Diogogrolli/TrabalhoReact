import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, Box, Typography } from '@mui/material';
import CadastroUsuario from './components/CadastroUsuario';
import ListagemUsuarios from './components/ListagemUsuarios';

function App() {
  const [usuarios, setUsuarios] = useState(() => {
    // Carregar do localStorage no início
    const saved = localStorage.getItem('usuarios');
    return saved ? JSON.parse(saved) : [];
  });

  const [aba, setAba] = useState(0);

  useEffect(() => {
    // Salvar no localStorage sempre que usuarios mudar
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  const handleAdicionar = (usuario) => {
    setUsuarios((prev) => [...prev, usuario]);
    setAba(1); // Troca para aba de listagem após cadastrar
  };

  const handleChange = (event, newValue) => {
    setAba(newValue);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Cadastro de Usuários
      </Typography>

      <Tabs value={aba} onChange={handleChange} centered>
        <Tab label="Cadastro" />
        <Tab label="Usuários Cadastrados" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {aba === 0 && <CadastroUsuario onAdicionar={handleAdicionar} />}
        {aba === 1 && <ListagemUsuarios usuarios={usuarios} />}
      </Box>
    </Container>
  );
}

export default App;
