///////////////   client side (use useState)  CSR
"use client"
///////////  useState,, useEffect ,, onclick,, onChange.\,,,, document ,window,, localstorage




/////// server side by defauLT
////////////// async await   ,,, cookies  DB
import { useState } from "react"



export default function showTodo() {
    const [name, setName] = useState("SHROUK");
  return (
    <div>
      <h1>Show Todo</h1>
      <p>Name: {name}</p>
    </div>
  )
}
