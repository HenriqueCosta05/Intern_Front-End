import { useEffect, useState } from "react";
import { Form } from "../../../components";
import { SidebarProvider } from "../../../context";
import { useAuth, useFetch } from "../../../hooks";
import { SidebarComponent } from "../TaskManager";
import { Task, User } from "../../../@types";
import { useNavigate, useParams } from "react-router-dom";

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
  const navigate = useNavigate()
  const { user } = useAuth();
  const { task_id } = useParams<{ task_id: string }>();

  const [task, setTask] = useState<Task>({
    task_id: "",
    title: "",
    description: "",
    status: "",
    user: {} as User,
    user_id: "",
  });

  const { get, post, put, error, data } = useFetch();

  useEffect(() => {
    if (task_id) {
      const fetchTask = async () => {
        const fetchedTask = await get(`task/${task_id}`);
        setTask(fetchedTask as Task);
      };
      fetchTask();
    }
        console.log(task);

  }, [task_id]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const updatedTask = {
      ...task, 
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      status: formData.get("status") as string,
      user: user,
    };

    if (task_id) {
      put(`task/${task_id}`, updatedTask)
        .then(() => alert("Tarefa atualizada com sucesso!"))
        .catch((err) => console.error("Error updating task:", err));
    } else {
      post("task", updatedTask)
        .then(() => alert("Tarefa criada com sucesso!"))
        .then(() => navigate("/app/task-manager"))
        .catch((err) => console.error("Error creating task:", err));
    }
  }

  return (
    <div className="flex flex-col items-center justify-start flex-1 h-full overflow-y-scroll">
      <h1 className="text-3xl lg:text-5xl text-brown font-bold my-16">
        {task_id ? "Editar Tarefa" : "Nova Tarefa"}
      </h1>
      <Form.Root
        className="w-11/12 bg-[#F5F5F5] drop-shadow-md p-2 lg:p-8 space-y-4"
        onSubmit={handleSubmit}
      >
        <Form.Label className="font-extrabold block">Título: *</Form.Label>
        <Form.Input
          type="text"
          name="title"
          placeholder="Digite o título da tarefa..."
          defaultValue={task?.title || ""}
          className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
          required
        />
        <Form.Label className="font-extrabold block">Descrição: *</Form.Label>
        <Form.Textarea
          className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange h-32"
          placeholder="Descreva a tarefa..."
          defaultValue={task?.description || ""}
          name="description"
          required
        />
        <Form.Label className="font-extrabold block">Status: *</Form.Label>
        <Form.Select
          className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange bg-white"
          name="status"
          required
          value={task?.status || ""}
          onChange={(event) => setTask({ ...task, status: event.target.value })}
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
          {task_id ? "Atualizar Tarefa" : "Criar Tarefa"}
        </Form.Button>
      </Form.Root>
    </div>
  );
}
