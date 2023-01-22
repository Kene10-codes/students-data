export function SearchButton({ text, className, type }) {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
}

