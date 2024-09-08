import { Container, Form } from "../../../components";
import { useAuth } from "../../../hooks";
import { ChecklistIcon, NotesIcon, NotificationIcon } from "../../../Icons";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { login, user, errors } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;

    if (email && password) {
      login(email, password, () => {
        alert("Login realizado com sucesso!");
        navigate("/app/task-manager");
      });
    } 
  };

  return (
    <>
      <div className="absolute h-[50vh] bg-[#F5F5F5] w-full z-10"></div>

      <Container className="flex h-screen">
        <h1 className="text-5xl font-bold text-brown-700 mb-8 lg:absolute lg:left-16 lg:top-16 z-20 lg:w-[22%]">
          Seja <span className="text-amber-600">bem-vindo(a)</span> de volta!
        </h1>
        <Form.Root
          className="lg:w-1/2 h-4/6 drop-shadow-md bg-white lg:absolute lg:top-10 lg:right-10 z-20 rounded-lg w-11/12 lg:p-16 p-4 space-y-4 m-auto"
          method="POST"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-bold text-brown w-fit mx-auto">Login</h2>
          <Link to="/auth/register" className="text-brown block text-center">
            Não tem uma conta? <span className="text-blue-500">Cadastre-se</span>
          </Link>
          <Form.Label htmlFor="email" className="font-extrabold block">
            E-mail
          </Form.Label>
          <Form.Input
            type="email"
            placeholder="Digite aqui seu e-mail..."
            id="email"
            name="email"
            className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Digite um e-mail válido"
            required
          />
          <Form.Label htmlFor="password" className="font-extrabold block">
            Senha
          </Form.Label>
          <Form.Input
            type="password"
            placeholder="Digite aqui sua senha..."
            className="placeholder:font-extrabold indent-4 outline-2 outline-lowOrange"
            id="password"
            name="password"
            pattern=".{6,}"
            title="A senha deve ter no mínimo 6 caracteres"
            required
          />
          <Form.Button type="submit" className="bg-brown">
            Entrar
          </Form.Button>
          {errors && (
            <p className="text-red-500 text-center block">
              {Array.from(errors).map((error) => (
                <span key={error}>{error}</span>
              ))}
            </p>
          )}
        </Form.Root>
      </Container>
      <NotificationIcon className="absolute bottom-12 left-6" />
      <NotesIcon className="absolute bottom-6 right-6" />
      <ChecklistIcon className="absolute bottom-1/4 left-1/3" />
    </>
  );
}