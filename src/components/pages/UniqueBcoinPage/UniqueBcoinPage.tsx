import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import './style.css'

interface BcoinCardInfo {
    id: string;
    name: string;
    photo: string;
    description: string;
    photo01view: string;
    price: string;
    bcoin: {
        id: string;
    };
}

interface QRCodeInfo {
    qrcode: string;
    imagemQrcode: string;
    linkVisualizacao: string;
}

const UniqueBcoinPage = () => {
    const [data, setData] = useState<BcoinCardInfo>();
    const [qrcodeInfo, setQRCodeInfo] = useState<QRCodeInfo | null>(null);
    const [openDialog, setOpenDialog] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<BcoinCardInfo> = await axios.get(
                    `http://localhost:8080/api/v1/award?id=${id}`
                );
                setData(response.data);
            } catch (error) {
                console.error('Erro ao chamar o endpoint:', error);
            }
        };

        fetchData();
    }, [id]);

    const handlePurchase = async () => {
        try {
            // Supondo que você tenha um estado para armazenar os dados
            const userData = {
                user: 'fa0f810f-6201-4733-ae14-c59d06e924cd',
                bcoin: '70d527e9-c75d-42e0-aa2d-dceaa27542ad',
            };

            // Realizando a chamada POST usando Axios
            const response = await axios.post('http://localhost:8080/pix/charge', userData);

            setQRCodeInfo(response.data);
            setOpenDialog(true);

            // Faça algo com a resposta do servidor, se necessário
            console.log(response.data);
        } catch (error) {
            // Trate erros durante a chamada, se necessário
            console.error('Erro durante a chamada POST:', error);
        }
    };

    const handleCloseDialog = () => {
        // Feche o modal ao clicar fora ou no botão de fechar
        setOpenDialog(false);
        // Limpe os dados do QR Code quando o modal for fechado
        setQRCodeInfo(null);
    };

    return (
        <>
            <div className="container">
                <div className="b-container">
                    <div className="b-main">
                        <div className="imgBx">
                            <img src={data?.photo} alt="Nike Jordan Proto-Lyte Image" />
                        </div>
                        <div className="details">
                            <div className="content">
                                <h2>{data?.name}</h2>
                                <p>
                                    Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is
                                    made for all-day, bouncy comfort. Lightweight Breathability: Lightweight woven fabric with real or
                                    synthetic leather provides breathable support. Cushioned Comfort: A full-length foam midsole
                                    delivers lightweight, plush cushioning. Secure Traction: Exaggerated herringbone-pattern outsole offers
                                    traction on a variety of surfaces.
                                </p>
                                <p className="product-colors">Available Colors:</p>
                                <h3>R$ {data?.price}</h3>
                                <Button onClick={handlePurchase}>Compre agora</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal para exibir o QR code e informações */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Detalhes da Compra</DialogTitle>
                <DialogContent>
                    {qrcodeInfo && (
                        <>
                            <img src={qrcodeInfo.imagemQrcode} alt="QR Code" />
                            <DialogContentText>
                                PIX copia-e-cola:
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    value={qrcodeInfo.qrcode}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        navigator.clipboard.writeText(qrcodeInfo.qrcode);
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                        onClick: (e: React.MouseEvent<HTMLInputElement>) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            navigator.clipboard.writeText(qrcodeInfo.qrcode);
                                        },
                                        style: { cursor: 'pointer', backgroundColor: '#f0f0f0' },
                                    }}
                                />
                                Visualize o QR code no{' '}
                                <a href={qrcodeInfo.linkVisualizacao} target="_blank" rel="noopener noreferrer">
                                    link aqui
                                </a>
                                .
                            </DialogContentText>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Fechar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default UniqueBcoinPage;
