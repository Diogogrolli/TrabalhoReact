
import React from 'react';
import { List, ListItem, ListItemText, Box, Typography } from '@mui/material';

export default function ListagemUsuarios({ usuarios }) {
  if (!usuarios.length) {
    return <Typography variant="body1" sx={{ mt: 2 }}>Nenhum usuário cadastrado.</Typography>;
  }

  return (
    <Box sx={{ mt: 2 }}>
      <List>
        {usuarios.map((user, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={user.nome} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
