import { Form } from "../../../components";
import { SidebarProvider } from "../../../context";
import { SidebarComponent } from "../TaskManager";

export default function TaskForm() {
  return (
      <SidebarProvider>
          <div className="flex h-screen">
              <SidebarComponent />
                <TaskFormContent />
          </div>
      </SidebarProvider>
  )
}

function TaskFormContent() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 h-full overflow-y-scroll">
          <h1 className="text-3xl lg:text-5xl text-brown font-bold my-16">Nova Tarefa</h1>
          <Form.Root className="w-11/12 bg-[#F5F5F5] drop-shadow-md p-2 lg:p-8 space-y-4">
              <Form.Label className="font-extrabold block">Título: *</Form.Label>
                <Form.Input
                  type="text"
                  placeholder="Digite o título da tarefa..."
                  className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
                  required
              />
              <Form.Label className="font-extrabold block">Descrição: *</Form.Label>
              <Form.Textarea
                  className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange h-32"
                  placeholder="Descreva a tarefa..."
                  required
              />
              <Form.Label className="font-extrabold block">Status: *</Form.Label>
                <Form.Select
                    className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange bg-white"
                    required
        >
                  <option value="" disabled selected hidden>Selecione o status...</option>
                    <option value="em-aberto">Em aberto</option>
                    <option value="em-andamento">Em andamento</option>
                  <option value="concluida">Concluída</option>
              </Form.Select>
              <Form.Button type="submit" className="w-11/12 bg-lowOrange hover:bg-midOrange">Criar Tarefa</Form.Button>
            </Form.Root>
    </div>
  );
}