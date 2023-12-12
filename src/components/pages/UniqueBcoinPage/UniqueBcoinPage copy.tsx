import { useEffect, useState } from 'react';
import './style.css'
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';

interface bcoinCardInfo {
    id: string;
    name: string;
    photo: string;
    description: string;
    photo01view: string;
    price: string;
    bcoin: {
        id: String;
    };
}

const UniqueBcoinPage = () => {
    const [data, setData] = useState<bcoinCardInfo>();

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<bcoinCardInfo> = await axios.get(`http://localhost:8080/api/v1/award?id=${id}`);
                setData(response.data);

            } catch (error) {
                console.error('Erro ao chamar o endpoint:', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        // Supondo que você tenha um estado para armazenar os dados
        const userData = {
            user: 'fa0f810f-6201-4733-ae14-c59d06e924cd',
            bcoin: 'coloqueAquiSeuUUIDBcoin',
        };

        // Realizando a chamada POST usando o método fetch
        fetch('http://localhost:8080/pix/charge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Adicione outros headers necessários, como tokens de autenticação, se aplicável
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
            // Faça algo com a resposta do servidor, se necessário
            console.log(data);
        })
        .catch(error => {
            // Trate erros durante a chamada, se necessário
            console.error('Erro durante a chamada POST:', error);
        });
    }, []);


    return (
        <>
            <div className="container">
                <div className='b-container'>
                    <div className="b-main">
                        <div className="imgBx">
                            <img src={data?.photo} alt="Nike Jordan Proto-Lyte Image" />
                        </div>
                        <div className="details">
                            <div className="content">
                                <h2>{data?.name}</h2>
                                <p>
                                    Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is
                                    made for all-day, bouncy comfort.
                                    Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides
                                    breathable support.
                                    Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning.
                                    Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.
                                </p>
                                <p className="product-colors">Available Colors:</p>
                                <h3>R$ {data?.price}</h3>
                                <Button>Compre agora</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UniqueBcoinPage