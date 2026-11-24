import {notFound, redirect} from "next/navigation"
import { Suspense } from "react";





async function GetTodos({params}) {

const {id} = await params;
if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    notFound();
  }


const response = await fetch(`http://localhost:1717/todos/${id}`);
console.log(response);

if (!response.ok) {
    notFound();
  }

const todo = await response.json();

  return (
    <div>
      <h1>{todo[0].title}</h1>
    
    </div>
  )
}
export default function todoById({params}){
     return (
    <Suspense fallback={  <h1>loading...</h1>}>
      <GetTodos params={params}></GetTodos>
    </Suspense>
  );}