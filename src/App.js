import React, { useState } from 'react';
import Field from './components/Field';
import Languages from './components/Languages';
import Translate from './components/Translate';
const App = () => {
  const [text, setText] = useState('welcome');
  const [languages, setLanguages] = useState('fr');
  return (
    <div>
      <Field label="Enter English" value={text} onChange={setText} />
      <Languages language={languages} onLanguageChange={setLanguages} />
      <Translate text={text} language={languages} />
    </div>
  );
};

export default App;
