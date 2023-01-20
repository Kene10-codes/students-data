import { useState, useEffect } from "react"

export function SelectInput({type, text, placeholder, onChange, className, ages, data}) {
  let arrayOfData =  ages;
  // let options = arrayOfData.map(data => {
  //   <option 
  //     key={data.id}
  //     value={data.id}>
  //      data={data}
  //    </option>
  // })
  return (
    <label text={text}>
        <select name="search" className={className} onChange={onChange} >
            <option>{placeholder}</option>
            {/* {options} */}
        </select>
    </label>
  )
}

