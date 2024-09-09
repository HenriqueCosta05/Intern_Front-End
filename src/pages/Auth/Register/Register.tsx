import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "../../../components";
import { AuthProvider } from "../../../context";
import { useAuth } from "../../../hooks";
import { ChecklistIcon, NotesIcon, NotificationIcon } from "../../../Icons";

export default function Register() {
  const navigate = useNavigate();
  const { register, user, error} = useAuth();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: { [key: string]: string } = {};
    
    formData.forEach((value, key) => {
      data[key] = value as string;
    });
    
    if(data.password !== data["confirm-password"]) {
      alert("As senhas não conferem");
      return;
    }

    if(data) {
      register(data.name, data.email, data.phone_number, data.password, () => {
        alert("Cadastro realizado com sucesso! Faça Login para continuar!");
        navigate('/auth/login');
      })
    }
    
  }
  return (
    <>
      <div className="absolute h-[50vh] bg-[#F5F5F5] w-full z-10"></div>
      <Container className="flex h-screen py-8 lg:p-0">
        <h1 className="text-4xl md:text-5xl font-bold text-brown-700 mb-8 lg:absolute lg:left-16 lg:top-16 z-20 lg:w-[22%]">
          Seja <span className="text-amber-600">bem-vindo(a)</span>!
        </h1>
        <Form.Root
          className="lg:w-1/2 drop-shadow-md bg-white lg:absolute lg:top-10 lg:right-10 z-20 rounded-lg w-11/12 lg:p-16 p-4 space-y-4 m-auto"
          method="POST"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-bold text-brown w-fit mx-auto">
            Cadastre-se
          </h2>
          <Link to="/auth/login" className="text-center block text-brown">
            Já tem conta? <span className="text-blue-400">Faça login</span>
          </Link>
          <Form.Label htmlFor="nome" className="font-extrabold block">
            Nome: *
          </Form.Label>
          <Form.Input
            type="text"
            name="name"
            placeholder="Digite aqui seu nome..."
            id="nome"
            className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
            required
          />
          <Form.Label htmlFor="telefone" className="font-extrabold block">
            Telefone: *
          </Form.Label>
          <Form.Input
            id="telefone"
            name="phone_number"
            className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
            placeholder="Digite aqui seu telefone..."
            pattern="^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$"
            required
          />
          <Form.Label htmlFor="email" className="font-extrabold block">
            E-mail: *
          </Form.Label>
          <Form.Input
            type="email"
            name="email"
            placeholder="Digite aqui seu e-mail..."
            id="email"
            className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Digite um e-mail válido"
            required
          />
          <Form.Label htmlFor="password" className="font-extrabold block">
            Senha: *
          </Form.Label>
          <Form.Input
            type="password"
            name="password"
            placeholder="Digite aqui sua senha..."
            className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
            id="password"
            pattern=".{6,}"
            title="A senha deve ter no mínimo 6 caracteres"
            required
          />
          <Form.Label htmlFor="confirm-password" className="font-extrabold block">
            Confirme sua senha: *
          </Form.Label>
          <Form.Input
            type="password"
            placeholder="Confirme sua senha..."
            className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
            id="confirm-password"
            pattern=".{6,}"
            name="confirm-password"
            title="A senha deve ter no mínimo 6 caracteres"
            required
          />
          <Form.Button type="submit" className="bg-brown">
            Cadastrar
          </Form.Button>
          {error && (
            <p key={error} className="text-red-500 text-center">
              {error}
            </p>
          )}
        </Form.Root>
      </Container>
      <NotificationIcon className="absolute bottom-12 left-6" />
      <NotesIcon className="absolute bottom-6 right-6" />
      <ChecklistIcon className="absolute bottom-1/4 left-1/3" />
    </>);
}
