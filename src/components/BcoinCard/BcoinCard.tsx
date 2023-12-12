import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ButtonDefault from '../button/ButtonDefault';
import './style.css';

interface CardProps {
    id: string;
    name: string;
    description: string;
    photo: string;
    price: string;
    bcoinId: string;
}

const CustomCard: React.FC<CardProps> = ({ bcoinId, id, name, description, photo, price }) => {

    function resumeDescription(texto: string, limite: number) {
        if (texto.length > limite) {
            return texto.substring(0, limite) + '...';
        }
        return texto;
    }

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 250,
            }}
            className="b-coin-card"
        >
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end', // Posiciona à direita
                        width: '100%', // Ocupa toda a largura
                        marginBottom: '10px', // Ajuste conforme necessário
                    }}
                >
                    <IconButton
                    className='currency-bitcoin-icon'
                        sx={{
                            backgroundColor: '#FF6500',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#0060B1'
                            }
                        }}
                    >
                        <MonetizationOnIcon />
                    </IconButton>
                </Box>
                <Box>
                    <img src={photo} width={210} />
                </Box>

                <Typography
                    fontSize={17}
                    fontWeight={600}
                    align='center'
                    sx={{
                        marginTop: '30px',
                    }}
                >
                    {name}
                </Typography>
                <Typography>
                    {resumeDescription(description, 50)}
                </Typography>
                <Typography
                    fontSize={25}
                    fontWeight={600}
                    color={'#FF6500'}
                    sx={{
                        marginTop: '15px',
                    }}
                >
                    R$ {price}
                </Typography>
                <Typography fontSize={11}>Somente PIX</Typography>
            </CardContent>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '15px',
                    marginBottom: '15px',
                }}
            >
                <ButtonDefault id={bcoinId} />
            </Box>
        </Card>
    );
};

export default CustomCard;
