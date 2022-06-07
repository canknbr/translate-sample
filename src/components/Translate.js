import React, { useEffect, useState } from 'react';

const Translate = ({ text, language }) => {
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200424T165909Z.f8f9b8f8f9b8f8f8&text=${text}&lang=${language}`;
  const getFetch = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  };
  useEffect(() => {
    getFetch();
  }, [text, language]);

  return (
    <div>{isLoading ? <div>Loading...</div> : <div>{translation}</div>}</div>
  );
};

export default Translate;
