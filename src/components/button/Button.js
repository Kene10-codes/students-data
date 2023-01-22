export function SearchButton({ text, className, type }) {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
}

export function DownloadButton({ text, className }) {
  return (
    <button type="download" className={className}>
      {text}
    </button>
  );
}
