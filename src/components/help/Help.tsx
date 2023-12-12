import { Accordion, Container, Paper, Typography } from "@mui/material"

export function Help() {
    return(
        <Container
        sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#FAFAFB',
            marginTop: '5%',
            position: 'relative', // Adicionado para posicionar a barra dentro do container
        }}
        maxWidth="xl"
        component={Paper}
    >
        <Typography>
            {/* <Accordion /> */}
        </Typography>
    </Container>
    )
}