import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import './style.css'

interface ButtonProps {
    id: string;
}

const ButtonDefault: React.FC<ButtonProps> = ({ id }) => {
    const [progress, setProgress] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const fetchPercentageFromAPI = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/purchase/progressById?bcoinId=${id}`);
            const data = await response.json();

            console.log(data)

            if (typeof data === 'number') {
                setProgress(data);
            } else {
                console.error('Valor inválido retornado pela API');
            }
        } catch (error) {
            console.error('Erro ao buscar a porcentagem da API', error);
        }
    };

    useEffect(() => {
        fetchPercentageFromAPI();
    }, [id]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Button
            variant="contained"
            startIcon={isHovered ? <ShoppingCartIcon style={{ color: '#fff' }} /> : <HourglassTopIcon style={{ color: '#fff' }} />}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                position: 'relative',
                width: '200px'
            }}
        >
            {progress !== null && (
                <>
                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            borderRadius: '4px',
                            height: '100%',
                            backgroundColor: '#0060B1',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: progress === 100 ? '#4caf50' : '#ff9800',
                            },
                        }}
                    />
                    <Typography
                        variant="body2"
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {isHovered ? <ShoppingCartIcon sx={{ marginRight: '5px' }} /> : <HourglassTopIcon sx={{ marginRight: '5px' }} />}
                        {isHovered ? 'Comprar' : `${progress}%`}
                    </Typography>
                </>
            )}
        </Button>
    );
};

export default ButtonDefault;
