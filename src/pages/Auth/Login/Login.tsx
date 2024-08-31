import { Container, Form } from "../../../components";
import { ChecklistIcon, NotesIcon, NotificationIcon } from "../../../Icons";

export default function Login() {
  return (
    <>
      <div className="absolute h-[50vh] bg-[#F5F5F5] w-full z-10"></div>

      <Container className="flex h-screen">
        <h1 className="text-5xl font-bold text-brown-700 mb-8 lg:absolute lg:left-16 lg:top-16 z-20 lg:w-[22%]">
          Seja <span className="text-amber-600">bem-vindo(a)</span> de volta!
        </h1>
        <Form.Root
          className="lg:w-1/2 h-4/6 drop-shadow-md bg-white lg:absolute lg:top-10 lg:right-10 z-20 rounded-lg w-11/12 h-full lg:p-16 p-4 space-y-4 m-auto"
          method="POST"
        >
          <h2 className="text-4xl font-bold text-brown w-fit mx-auto">Login</h2>
          <Form.Label htmlFor="email" className="font-extrabold block">
            E-mail
          </Form.Label>
          <Form.Input
            type="email"
            placeholder="Digite aqui seu e-mail..."
            id="email"
            className="placeholder:font-extrabold indent-4"
          />
          <Form.Label htmlFor="password" className="font-extrabold block">
            Senha
          </Form.Label>
          <Form.Input
            type="password"
            placeholder="Digite aqui sua senha..."
            className="placeholder:font-extrabold indent-4"
          />
          <Form.Button type="submit" className="bg-brown">Entrar</Form.Button>
        </Form.Root>
      </Container>
      <NotificationIcon className="absolute bottom-12 left-6" />
      <NotesIcon className="absolute bottom-6 right-6" />
      <ChecklistIcon className="absolute bottom-1/4 left-1/3" />
    </>
  );
}