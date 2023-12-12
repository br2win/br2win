import './style.css';

const Marquee = () => {
    return (
        <div className='primeira-div'>
            <p className='segunda-div animate-rotate-text'>
                Em breve diversos <span className='bold-highlight'>prêmios</span>.
            </p>
            <p className='segunda-div animate-rotate-text'>
                Sorteios realizados através da <span className='bold-highlight'>Loteria Federal</span>
            </p>
            <p className='segunda-div animate-rotate-text'>
                Estamos sempre dispostos a te ajudar. Dúvidas? {' '}
                <span className='bold-highlight'>Entre em contato</span>.
            </p>
        </div>
    );
};

export default Marquee;
