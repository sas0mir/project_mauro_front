import React, { FC } from "react";

interface Option {
  value: string | number; // Значение для каждого варианта
  label: string; // Отображаемый текст
}

interface SelectInputProps {
  options: Option[]; // Массив вариантов
  value: string | number; // Выбранное значение
  onChange: (value: string | number) => void; // Коллбэк для передачи выбранного значения
}

const SelectInput: FC<SelectInputProps> = ({ options, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value); // Передача выбранного значения в родительский компонент
  };

  return (
    <select value={value} onChange={handleChange} className="border p-2 rounded">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;