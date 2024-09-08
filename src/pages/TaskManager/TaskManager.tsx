import { Button, Sidebar } from "../../components";
import Table from "../../components/Table";
import { AuthProvider, SidebarProvider, useSidebar } from "../../context";
import { useAuth, useFetch } from "../../hooks";
import { HomeIcon, LogoutIcon, NewIcon, SettingsIcon } from "../../Icons";
import { Task } from "../../@types/Task";

export function SidebarComponent() {
  const { toggleSidebar, isOpen } = useSidebar();
  return (
    <Sidebar.Root className="transition-all flex flex-col items-center justify-between py-4">
      <Sidebar.Toggle onClick={toggleSidebar} />
      <div className="flex flex-col space-y-16 justify-center">
        <Sidebar.Item
          className={`flex flex-nowrap space-x-2 font-bold my-6 ${
            isOpen ? "justify-center items-center space-x-3" : "justify-end"
          }`}
          href="/app/task-manager"
        >
          <HomeIcon className="w-7 h-7" />
          <p className={isOpen ? "" : "hidden"}>Página Inicial</p>
        </Sidebar.Item>
        <Sidebar.Item
          className={`flex flex-nowrap space-x-2 font-bold ${
            isOpen ? "justify-center items-center space-x-3" : "justify-end"
          }`}
          href="/app/new-task"
        >
          <NewIcon className="w-7 h-7" />
          <p className={isOpen ? "" : "hidden"}>Nova Tarefa</p>
        </Sidebar.Item>
      </div>
      <div className="flex flex-col space-y-4 justify-center">
        <Sidebar.Item
          className={`flex flex-nowrap space-x-2 font-bold ${
            isOpen ? "justify-center items-center space-x-3" : "justify-end"
          }`}
          href="/app/my-account"
        >
          <SettingsIcon className="w-7 h-7" />
          <p className={isOpen ? "" : "hidden"}>Configurações</p>
        </Sidebar.Item>
        <Sidebar.Item
          className={`flex flex-nowrap space-x-2 font-bold ${
            isOpen ? "justify-center items-center space-x-3" : "justify-end"
          }`}
          href="/app/logout"
        >
          <LogoutIcon className="w-7 h-7" />
          <p className={isOpen ? "" : "hidden"}>Sair do App</p>
        </Sidebar.Item>
      </div>
    </Sidebar.Root>
  );
}

function TaskManagerContent() {
  const { user } = useAuth();
  const { data, get} = useFetch();

  const fetchTasks = async () => {
    if (user) {
      try {
        await get("task");
      } catch (error) {
        console.error("Erro ao buscar as tarefas:", error);
      }
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p>Usuário não autenticado. Por favor, faça login.</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p>Carregando tarefas...</p>
      </div>
    );
  }


  return (
    <div className="flex flex-col items-center justify-start ml-16 flex-1 h-full">
      <h1 className="text-3xl lg:text-5xl text-brown font-bold my-16">
        Gerenciamento de Tarefas
      </h1>
      <div className="overflow-x-auto w-full">
        <Table.Root className="border-collapse border border-gray-300 w-[150%]">
          <Table.Row className="bg-[rgba(150,75,0,0.5)]">
            <Table.Header className="border border-gray-300 p-2">
              Título
            </Table.Header>
            <Table.Header className="border border-gray-300 p-2">
              Descrição
            </Table.Header>
            <Table.Header className="border border-gray-300 p-2">
              Status
            </Table.Header>
            <Table.Header className="border border-gray-300 p-2">
              Ações
            </Table.Header>
          </Table.Row>
          {(data as Task[]).map((task: Task) => (
            <Table.Row key={task.id} className="bg-gray-100">
              <Table.Data className="border border-gray-300 p-2">
                {task.title}
              </Table.Data>
              <Table.Data className="border border-gray-300 p-2">
                {task.description}
              </Table.Data>
              <Table.Data className="border border-gray-300 p-2">
                {task.status}
              </Table.Data>
              <Table.Data className="border border-gray-300 p-2">
                <Button
                  className="bg-blue-500 text-white"
                  onClick={() => console.log("Editar tarefa", task.id)}
                >
                  Editar
                </Button>
                <Button
                  className="bg-red-500 text-white"
                  onClick={() => console.log("Excluir tarefa", task.id)}
                >
                  Excluir
                </Button>
              </Table.Data>
            </Table.Row>
          ))}
        </Table.Root>
      </div>
    </div>
  );
}

export default function TaskManager() {
  return (
      <SidebarProvider>
        <div className="flex h-full">
          <SidebarComponent />
          <TaskManagerContent />
        </div>
      </SidebarProvider>
  );
}