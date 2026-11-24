
import { notFound } from "next/navigation";

export const ensureStatic = "navigation";

const timed=50
async function GetTodos() {
 "use cache";

 cacheLife({  revalidate: timed });


  const response = await fetch("http://localhost:1717/todos", {
    next: {revalidate: timed},
  });

  if (!response.ok) {
    notFound();
  }

  const todos = await response.json();

  return (

    <div>
        hello from git hub
      {todos.map((todo) => (
        <h1 key={todo._id}>{todo.title}</h1>
      ))}
    </div>
  );
}

export default function TodoListPage() {
  return <GetTodos />;
}