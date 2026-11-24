import About from "@/app/about/page"
import Link from "next/link"
export default function createTodo() {
  return (
    <div>
        <Link href="/todos">Back to Todos</Link>
        <About></About>
      <h1>Create Todo</h1>
      <h5>hi from todos/createTodo</h5>
    </div>
  )
}
