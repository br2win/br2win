import './style.css';

const Navbar = () => {
    return (
        <>
            <nav id="menu">
                <div className="menu-item">
                    <div className="menu-text">
                        <a href="#">Bcoin</a>
                    </div>
                    <div className="sub-menu">
                        <div className="icon-box">
                            <div className="icon"><i className="fal fa-wind-turbine"></i></div>
                            <div className="text">
                                <div className="title">Comprar <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Adquira seu bcoin</div>
                            </div>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><i className="fal fa-lightbulb-on"></i></div>
                            <div className="text">
                                <div className="title">Seus Bcoins <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Consulte os Bcoins adquiridos</div>
                            </div>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><i className="fal fa-bomb"></i></div>
                            <div className="text">
                                <div className="title">Edições <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Veja a edição ativa e futuras</div>
                            </div>
                        </div>
                        <div className="sub-menu-holder"></div>
                    </div>
                </div>
                <div className="menu-item highlight">
                    <div className="menu-text">
                        <a href="#">Sorteio</a>
                    </div>
                    <div className="sub-menu double">
                        <div className="icon-box gb a">
                            <div className="icon"><i className="far fa-question-circle"></i></div>
                            <div className="text">
                                <div className="title">Consultar <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Último sorteio de Bcoin</div>
                            </div>
                        </div>
                        <div className="icon-box gb b">
                            <div className="icon"><i className="far fa-users-class"></i></div>
                            <div className="text">
                                <div className="title">Próximos <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Futuros sorteios de Bcoins</div>
                            </div>
                        </div>
                        <div className="icon-box gb c">
                            <div className="icon"><i className="far fa-school"></i></div>
                            <div className="text">
                                <div className="title">Indique <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">O que a próxima Bcoin deve valer?</div>
                            </div>
                        </div>
                        <div className="icon-box gb d">
                            <div className="icon"><i className="far fa-chess-rook"></i></div>
                            <div className="text">
                                <div className="title">Edições <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Lista de edições já sorteadas</div>
                            </div>
                        </div>
                        {/* <div className="icon-box gb e">
                            <div className="icon"><i className="far fa-video-plus"></i></div>
                            <div className="text">
                                <div className="title">Become <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">A Creator</div>
                            </div>
                        </div>
                        <div className="icon-box gb f">
                            <div className="icon"><i className="far fa-cat"></i></div>
                            <div className="text">
                                <div className="title">Understand <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Our Journey</div>
                            </div>
                        </div> */}
                        <div className="bottom-container">
                            Como funciona o sorteio? <a href="#">Entenda</a>
                        </div>
                        <div className="sub-menu-holder"></div>
                    </div>
                </div>
                <div className="menu-item highlight">
                    <div className="menu-text">
                        <a href="#">Suporte</a>
                    </div>
                    <div className="sub-menu triple">
                        <div className="top-container gb c icon-box">
                            <div className="icon big"><i className="far fa-book"></i></div>
                            <div className="text">
                                <div className="title">Onde começar?</div>
                                <div className="sub-text">Saiba como começar</div>
                            </div>
                        </div>
                        <div className="box">
                            <h3>Sua jornada</h3>
                            <a href="#">Comprando seu Bcoin</a>
                            <a href="#">Prazos</a>
                            <a href="#">Sorteio</a>
                            <a href="#">Aguarde</a>
                        </div>
                        <div className="box">
                            <h3>Política do(a)</h3>
                            <a href="#">Privacidade</a>
                            <a href="#">Usuário</a>
                            <a href="#">Bcoin</a>
                            <a href="#">Sorteio</a>
                        </div>
                        <div className="icon-box flat">
                            <div className="icon"><i className="fal fa-plug"></i></div>
                            <div className="text">
                                <div className="title title-faq">Dúvidas frequentes <i className="far fa-arrow-right"></i></div>
                            </div>
                        </div>
                        {/* <div className="icon-box flat">
                            <div className="icon"><i className="fal fa-comments"></i></div>
                            <div className="text">
                                <div className="title">Support Line <i className="far fa-arrow-right"></i></div>
                            </div>
                        </div> */}
                        <div className="icon-box flat">
                            <div className="icon"><i className="fal fa-phone-volume"></i></div>
                            <div className="text">
                                <div className="title title-help">Ajuda <i className="far fa-arrow-right"></i></div>
                            </div>
                        </div>
                        {/* <div className="icon-box flat">
                            <div className="icon"><i className="fal fa-book-spells"></i></div>
                            <div className="text">
                                <div className="title">Documentation <i className="far fa-arrow-right"></i></div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-text">
                        <a href="#">Contato</a>
                    </div>
                    <div className="sub-menu">
                        <div className="icon-box">
                            <div className="icon"><i className="far fa-satellite"></i></div>
                            <div className="text">
                                <div className="title">E-mail <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Mande um e-mail para nós.</div>
                            </div>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><i className="fab fa-twitter-square"></i></div>
                            <div className="text">
                                <div className="title">Instagram <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Nos procure também no instagram</div>
                            </div>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><i className="fab fa-twitch"></i></div>
                            <div className="text">
                                <div className="title">Twitter <i className="far fa-arrow-right"></i></div>
                                <div className="sub-text">Estamos também no twitter.</div>
                            </div>
                        </div>
                        <div className="sub-menu-holder"></div>
                    </div>
                </div>
                <div id="sub-menu-container">
                    <div id="sub-menu-holder">
                        <div id="sub-menu-bottom">

                        </div>
                    </div>
                </div>
            </nav>


            {/* <div id="info-box">
                <ul>
                    <li><a target="_top" href="https://twitter.com/thisisfjolt">Follow on Twitter</a></li>
                    <li><a target="_top" href="https://fjolt.com/article/css-only-stripe-menu-with-clip">Read Article</a></li>
                    <li><a target="_top" href="https://github.com/smpnjn/stripe-like-menu">GitHub Repo</a></li>
                </ul>
            </div> */}
        </>
    )
}

export default Navbar