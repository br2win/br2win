import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';
import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            {/* Conteúdo da página */}
            <div style={{ paddingBottom: '60px' /* Altura do footer */ }}>
                {/* ... Seu conteúdo aqui ... */}
            </div>

            <MDBFooter
                className='text-center text-lg-start text-muted'
                style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    backgroundColor: '#004d8e'
                }}
            >
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span style={{color: '#f8f8f8'}}>Conecte-se conosco nas redes sociais:</span>
                    </div>
                    <div>
                        {/* <a href='#' className='me-4 text-reset'>
                            <FacebookIcon />
                        </a> */}
                        <a href='#' className='me-4' style={{color: '#f8f8f8'}}>
                            <TwitterIcon />
                        </a>
                        <a href='#' className='me-4' style={{color: '#f8f8f8'}}>
                            <InstagramIcon />
                        </a>
                        {/* <a href='#' className='me-4 text-reset'>
                            <LinkedInIcon />
                        </a> */}
                    </div>
                </section>

                <section>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4' style={{color: '#f8f8f8'}}>
                                    <MDBIcon icon="gem" className="me-3" />
                                    br2win
                                </h6>
                                <p style={{color: '#f8f8f8'}}>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4' style={{color: '#f8f8f8'}}>Prêmios</h6>
                                <p>
                                    <a href='#!' style={{color: '#f8f8f8'}}>
                                        Próximos prêmios
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' style={{color: '#f8f8f8'}}>
                                        Sugerir um prêmio
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' style={{color: '#f8f8f8'}}>
                                        Prêmios ativos
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4' style={{color: '#f8f8f8'}}>Links úteis</h6>
                                <p>
                                    <a href='#' style={{color: '#f8f8f8'}}>
                                        Suporte
                                    </a>
                                </p>
                                <p>
                                    <a href='#' style={{color: '#f8f8f8'}}>
                                        Fale conosco
                                    </a>
                                </p>
                                {/* Adicione mais links úteis conforme necessário */}
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4' style={{color: '#f8f8f8'}}>Contato</h6>
                                <p style={{color: '#f8f8f8'}}>
                                    <IconButton className="me-2" style={{color: '#f8f8f8'}}>
                                        <HomeIcon />
                                    </IconButton>
                                    São Paulo, SP 10012, BR
                                </p>
                                <p style={{color: '#f8f8f8'}}>
                                    <IconButton className="me-3" style={{color: '#f8f8f8'}}>
                                        <EmailIcon />
                                    </IconButton>
                                    br2win@outlook.com
                                </p>
                                <p style={{color: '#f8f8f8'}}>
                                    <IconButton className="me-3" style={{color: '#f8f8f8'}}>
                                        <PhoneIcon />
                                    </IconButton>
                                    + 55 11 5465-6231
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: '#f8f8f8' }}>
                    © 2023 Copyright:
                    <a className='fw-bold' href='https://www.br2win.com.br/' style={{color: '#ffce00'}}>
                        br2win.com.br/
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer