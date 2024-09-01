import { Sidebar } from "../../components";
import { SidebarProvider, useSidebar } from "../../context";
import { HomeIcon, LogoutIcon, NewIcon, SettingsIcon } from "../../Icons";

function SidebarComponent() {
  const { toggleSidebar, isOpen } = useSidebar();
  return (
    <Sidebar.Root className="transition-all">
      <Sidebar.Toggle onClick={toggleSidebar} />
      <div className="flex space-y-16 flex-col h-3/4">
        <Sidebar.Item
          className={`flex flex-nowrap space-x-2 font-bold my-6 ${
            isOpen ? "justify-center items-center space-x-3" : "justify-end"
          }`}
          href="/app/tasks"
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
      <div className="space-y-4">
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
          href="/app/logouk"
        >
          <LogoutIcon className="w-7 h-7" />
          <p className={isOpen ? "" : "hidden"}>Sair do App</p>
        </Sidebar.Item>
      </div>
    </Sidebar.Root>
  );
}

export default function TaskManager() {
  return (
    <SidebarProvider>
      <SidebarComponent />
    </SidebarProvider>
  );
}