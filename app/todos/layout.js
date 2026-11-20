
import Link from "next/link"
export default function Layout({ children }) {
  return (
<>
<nav>
    <Link href="/todos/show">All Todos</Link>
    <Link href="/todos/createTodo">Create Todo</Link>
</nav>
{children}
</>
  )
}
