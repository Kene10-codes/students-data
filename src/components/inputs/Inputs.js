export function SelectInput({
  name,
  options,
  placeholder,
  onChange,
  className,
  handleChange
}) {
  return (
    <select name={name} id={name} className={className} onChange={handleChange}>
      <option>{placeholder}</option>
      {options?.map((option) => (
        <option key={option.id} value={option.age}>
          {option.age}
        </option>
      ))}
    </select>
  );
}

export function SelectInputLevel({
  name,
  options,
  placeholder,
  handleChange,
  className
}) {
  return (
    <select name={name} id={name} className={className} onChange={handleChange}>
      <option>{placeholder}</option>
      {options?.map((option) => (
        <option key={option.id} value={option.level}>
          {option.level}
        </option>
      ))}
    </select>
  );
}

export function SelectInputStates({
  name,
  options,
  placeholder,
  handleChange,
  className
}) {
  return (
    <select name={name} id={name} className={className} onChange={handleChange}>
      <option>{placeholder}</option>
      {options?.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}


export function SelectInputGenders({
  name,
  options,
  placeholder,
  handleChange,
  className
}) {
  return (
    <select name={name} id={name} className={className} onChange={handleChange}>
      <option>{placeholder}</option>
      {options?.map((option) => (
        <option key={option.id} value={option.gender}>
          {option.gender}
        </option>
      ))}
    </select>
  );
}
