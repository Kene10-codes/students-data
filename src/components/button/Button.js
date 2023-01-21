
export function SearchButton({text, className}) {
  return (
    <button className={className}>{text}</button>
  )
}


export function DownloadButton({text, className}) {
  return (
    <button value="download" className={className}>{text}</button>
  )
}

