import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, Box } from '@mui/material';
import CadastroUsuario from './components/CadastroUsuario';
import ListaUsuarios from './components/ListaUsuarios';

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState(0);
  const [usuarios, setUsuarios] = useState(() => {
    const dadosSalvos = localStorage.getItem('usuarios');
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  const handleChangeAba = (event, novaAba) => {
    setAbaAtiva(novaAba);
  };

  const adicionarUsuario = (usuario) => {
    setUsuarios((prev) => [...prev, usuario]);
    setAbaAtiva(1);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Tabs value={abaAtiva} onChange={handleChangeAba}>
        <Tab label="Cadastro" />
        <Tab label="Usuários Cadastrados" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {abaAtiva === 0 && <CadastroUsuario onAddUser={adicionarUsuario} />}
        {abaAtiva === 1 && <ListaUsuarios usuarios={usuarios} />}
      </Box>
    </Container>
  );
}
