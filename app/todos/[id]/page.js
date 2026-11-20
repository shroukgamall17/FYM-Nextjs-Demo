import Button from "@/components/Button";
import { notFound } from "next/navigation";

export default async function ShowTodo({params}) {

    const { id } =  await params;
    if (!/^\d+$/.test(id)) {
        return notFound();
    }
    //  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    //      notFound();
    // }
  return (
    <div>
        <Button></Button>
      <h1>Show Todo</h1>
      <p>Todo ID: {id}</p>
    </div>
  )
}
