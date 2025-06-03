
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function CadastroUsuario({ onAdicionar }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email) {
      onAdicionar({ nome, email });
      setNome('');
      setEmail('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        type="email"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Cadastrar
      </Button>
    </Box>
  );
}
