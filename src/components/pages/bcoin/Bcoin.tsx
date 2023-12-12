import { Box, Container, Grid, Link, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BcoinCard from "../../BcoinCard/BcoinCard";
import './style.css'

interface BcoinCardProps {
    id: string;
    name: string;
    description: string;
    photo: string;
    price: string;
    bcoin: {
        id: string;
    };
}

const Bcoin = () => {
    const [data, setData] = useState<BcoinCardProps[]>([]);

    const fetchBcoinFromAPI = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/award/aG9ja2V0a2Ftb3Jvc2hrYWZseWth/all`);
            const responseData = await response.json();
            console.log(responseData)
            setData(responseData);
        } catch (error) {
            console.error('Erro ao buscar a porcentagem da API', error);
        }
    };

    useEffect(() => {
        // Chama a função de busca ao montar o componente
        fetchBcoinFromAPI();
    }, []);

    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#FAFAFB',
                    marginTop: '5%',
                    position: 'relative', // Adicionado para posicionar a barra dentro do container
                }}
                /* component={Paper} */
                maxWidth="xl"
            >
                {/* Barra azul no topo */}
                <div
                    style={{
                        backgroundColor: '#0060B1',
                        height: '50px',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                >
                    <Typography
                        color={'white'}
                        fontSize={35}
                    >
                        teste</Typography>
                </div>

                <Grid
                    container
                    justifyContent="center"
                    spacing={2}
                    sx={{
                        flexGrow: 1,
                        padding: 6,
                        marginTop: '80px', // Ajuste o valor para garantir espaço abaixo da barra azul
                    }}
                >
                    {data.map((bcoin) => (
                        <Grid item key={bcoin.id}>
                            <Link
                                href={`/bcoin/${bcoin.id}`}
                                sx={{
                                    textDecoration: 'none'
                                }}
                            >
                                <BcoinCard bcoinId={bcoin.bcoin.id} id={bcoin.id} name={bcoin.name} description={bcoin.description} photo={bcoin.photo} price={bcoin.price} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </>
    );
};

export default Bcoin;
