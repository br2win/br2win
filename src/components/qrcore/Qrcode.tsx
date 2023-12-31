import React, { useState, useEffect } from 'react';

const Qrcode: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    // Exemplo de base64 de uma imagem
    const base64Image = 'data:image/png;base64,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'; // Substitua com o seu base64

    // Atualizar o estado com o base64 recebido da API
    setImageSrc(base64Image);
  }, []);

  return (
    <div>
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Imagem convertida"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      )}
    </div>
  );
};

export default Qrcode;
