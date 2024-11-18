import React from 'react';
import { useForm } from 'react-hook-form';

interface Field {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: { pattern: string; message: string };
}

interface FormSchema {
  formTitle: string;
  formDescription: string;
  fields: Field[];
}

interface Props {
  schema: string;
}

export const FormGenerator: React.FC<Props> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let parsedSchema: FormSchema;

  try {
    parsedSchema = JSON.parse(schema);
  } catch {
    return <p>Invalid JSON. Please fix the errors in the editor.</p>;
  }

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h2 className="text-lg font-bold">{parsedSchema.formTitle}</h2>
      <p className="mb-4">{parsedSchema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {parsedSchema.fields.map((field) => (
          <div key={field.id}>
            <label className="block font-medium mb-1">{field.label}</label>
            {field.type === 'text' && (
              <input
                {...register(field.id, { required: field.required })}
                type="text"
                placeholder={field.placeholder}
                className="w-full border rounded p-2"
              />
            )}
            {field.type === 'select' && (
              <select {...register(field.id, { required: field.required })} className="w-full border rounded p-2">
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {errors[field.id] && <p className="text-red-500">This field is required</p>}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};
