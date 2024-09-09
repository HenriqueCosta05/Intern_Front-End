import { Form } from "../../../components";
import { SidebarProvider } from "../../../context";
import { useAuth, useFetch } from "../../../hooks";
import { SidebarComponent } from "../../TaskManager/TaskManager";
import { useParams } from "react-router-dom";

export default function UserForm() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <SidebarComponent />
        <UserFormContent />
      </div>
    </SidebarProvider>
  );
}

function UserFormContent() {
  const { user } = useAuth();
  const { user_id } = useParams<{ user_id: string }>();

  const { put, error } = useFetch();


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
      const formData = new FormData(form);
    const updatedUser = {
        ...user,
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone_number: formData.get("phone_number") as string,
        password: formData.get("password") as string,
    };

    if (user_id) {
        put(`users/${user_id}`, updatedUser)
        .then(() => alert("Usuário atualizado com sucesso!"))
        .catch((err) => console.error("Error updating user:", err));
    }
  }

  return (
    <div className="flex flex-col items-center justify-start flex-1 h-full overflow-y-scroll">
      <h1 className="text-3xl lg:text-5xl text-brown font-bold my-16">
        Meu Perfil
      </h1>
      <Form.Root
        className="w-11/12 bg-[#F5F5F5] drop-shadow-md p-2 lg:p-8 space-y-4"
        onSubmit={handleSubmit}
      >
        <Form.Label className="font-extrabold block">
          ID do usuário: *
        </Form.Label>
        <Form.Input
          type="text"
          name="user_id"
          disabled
          defaultValue={user?.user_id || ""}
          className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
          required
        />
        <Form.Label className="font-extrabold block">Nome: *</Form.Label>
        <Form.Input
          type="text"
          className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
          defaultValue={user?.name || ""}
          name="name"
          required
        />
        <Form.Label className="font-extrabold block">Telefone: *</Form.Label>
        <Form.Input
          className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
          defaultValue={user?.phone_number || ""}
          name="phone_number"
          required
        />
        <Form.Label className="font-extrabold block">E-mail: *</Form.Label>
        <Form.Input
          className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
          defaultValue={user?.email || ""}
          name="email"
          required
        />
        <Form.Label className="font-extrabold block">Senha: *</Form.Label>
        <Form.Input
          className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
          type="password"
          defaultValue={user?.password || ""}
          name="password"
          required
        />

        <Form.Label className="font-extrabold block">Confirmar senha: *</Form.Label>
        <Form.Input
          className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
          type="password"
          defaultValue={user?.password || ""}
          name="confirm_password"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <Form.Button
          type="submit"
          className="w-11/12 bg-lowOrange hover:bg-midOrange"
        >
          Atualizar Dados
        </Form.Button>
      </Form.Root>
    </div>
  );
}
