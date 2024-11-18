import React, { useState } from 'react';
import { SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FormGenerator } from './FormGenerator';

const initialSchema = `
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    }
  ]
}`;

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState(initialSchema);
  const [isValid, setIsValid] = useState(true);

  const handleJSONChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonSchema(value);
    try {
      JSON.parse(value);
      setIsValid(true);
    } catch {
      setIsValid(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* JSON Editor */}
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-lg font-bold mb-2">JSON Editor</h2>
        <textarea
          className={`w-full h-96 p-2 border ${isValid ? 'border-gray-300' : 'border-red-500'} rounded`}
          value={jsonSchema}
          onChange={handleJSONChange}
        />
        {!isValid && <p className="text-red-500 mt-2">Invalid JSON format</p>}
      </div>

      {/* Form Generator */}
      <div className="w-full lg:w-1/2 p-4">
        <FormGenerator schema={jsonSchema} />
      </div>
    </div>
  );
};

export default App;
