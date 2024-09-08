import { useEffect } from "react";
import { Form } from "../../../components";
import { SidebarProvider } from "../../../context";
import { useAuth, useFetch } from "../../../hooks";
import { SidebarComponent } from "../TaskManager";

export default function TaskForm() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <SidebarComponent />
        <TaskFormContent />
      </div>
    </SidebarProvider>
  );
}

function TaskFormContent() {
  const { user } = useAuth();
  const { post, isLoading, errors, data } = useFetch();

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const task = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      status: formData.get("status") as string,
      user: user,
    };
    post("task", task);
    alert("Tarefa criada com sucesso!");
    return data;
  }
  return (
    <div className="flex flex-col items-center justify-start flex-1 h-full overflow-y-scroll">
      <h1 className="text-3xl lg:text-5xl text-brown font-bold my-16">
        Nova Tarefa
      </h1>
      <Form.Root className="w-11/12 bg-[#F5F5F5] drop-shadow-md p-2 lg:p-8 space-y-4"
      onSubmit={handleCreateTask}>
        <Form.Label className="font-extrabold block">Título: *</Form.Label>
        <Form.Input
          type="text"
          name="title"
          placeholder="Digite o título da tarefa..."
          className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
          required
        />
        <Form.Label className="font-extrabold block">Descrição: *</Form.Label>
        <Form.Textarea
          className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange h-32"
          placeholder="Descreva a tarefa..."
          name="description"
          required
        />
        <Form.Label className="font-extrabold block">Status: *</Form.Label>
        <Form.Select
          className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange bg-white"
          name="status"
          required
        >
          <option value="" disabled selected hidden>
            Selecione o status...
          </option>
          <option value="Em aberto">Em aberto</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Concluída">Concluída</option>
        </Form.Select>
        <Form.Button
          type="submit"
          className="w-11/12 bg-lowOrange hover:bg-midOrange"
        >
          Criar Tarefa
        </Form.Button>
      </Form.Root>
    </div>
  );
}
