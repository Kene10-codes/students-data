export function SelectInput({
  name,
  options,
  placeholder,
  className,
  onChange,
  text,
}) {
  return (
    <div id="select-container">
      <select name={name} id={name} className={className} onChange={onChange}>
        <option>{placeholder}</option>
        {options?.map((option) => (
          <option key={option.id} value={option.age}>
            {option.age}
          </option>
        ))}
      </select>
      <div className="select-wrapper">
        <span>{text}</span>
      </div>
    </div>
  );
}

export function SelectInputLevel({
  name,
  options,
  placeholder,
  className,
  onChange,
  text,
}) {
  return (
    <div id="select-container">
      <select name={name} id={name} className={className} onChange={onChange}>
        <option>{placeholder}</option>
        {options?.map((option) => (
          <option key={option.id} value={option.level}>
            {option.level}
          </option>
        ))}
      </select>
      <div className="select-wrapper">
        <span>{text}</span>
      </div>
    </div>
  );
}

export function SelectInputStates({
  name,
  options,
  placeholder,
  className,
  onChange,
  text,
}) {
  return (
    <div id="select-container">
      {" "}
      <select name={name} id={name} className={className} onChange={onChange}>
        <option>{placeholder}</option>
        {options?.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="select-wrapper">
        <span>{text}</span>
      </div>
    </div>
  );
}

export function SelectInputGenders({
  name,
  options,
  placeholder,
  className,
  onChange,
  text,
}) {
  return (
    <div id="select-container">
      {" "}
      <select name={name} id={name} className={className} onChange={onChange}>
        <option>{placeholder}</option>
        {options?.map((option) => (
          <option key={option.id} value={option.gender}>
            {option.gender}
          </option>
        ))}
      </select>
      <div className="select-wrapper">
        <span>{text}</span>
      </div>
    </div>
  );
}
