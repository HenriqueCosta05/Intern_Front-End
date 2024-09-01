import { Container, Form } from "../../../components";
import { ChecklistIcon, NotesIcon, NotificationIcon } from "../../../Icons";

export default function Register() {
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
        >
          <h2 className="text-4xl font-bold text-brown w-fit mx-auto">
            Cadastre-se
          </h2>
          <Form.Label htmlFor="nome" className="font-extrabold block">
            Nome: *
          </Form.Label>
          <Form.Input
            type="text"
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
            title="A senha deve ter no mínimo 6 caracteres"
            required
          />
          <Form.Button type="submit" className="bg-brown">
            Cadastrar
          </Form.Button>
        </Form.Root>
      </Container>
      <NotificationIcon className="absolute bottom-12 left-6" />
      <NotesIcon className="absolute bottom-6 right-6" />
      <ChecklistIcon className="absolute bottom-1/4 left-1/3" />
    </>
  );
}
