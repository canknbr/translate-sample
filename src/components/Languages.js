import React from 'react';

const Languages = ({ language, onLanguageChange }) => {
  return (
    <div>
      <label>Languages</label>
      <select value={language} onChange={e => onLanguageChange(e.target.value)}>
        <option value="fr">French</option>
        <option value="tr">Turkish</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
};

export default Languages;
