
import Link from "next/link"
const metadata ={title: "todos App"}

export default function Layout({ children }) {
  return (
<>
<html>
  <head>
    <title>{metadata.title}</title>
  </head>
  <body>
<nav>
    <Link href="/todos/show">All Todos</Link>
    <Link href="/todos/createTodo">Create Todo</Link>
</nav>
    {children}
  </body>
</html>

</>
  )
}
