import { Link } from "react-router-dom";
import {Button, ButtonGroup, Card, Container, Header } from "../../components";
import features from '../../data/features.json'
import intro from '../../data/intro.json'
import { ClientIcon, EasyIcon, QuickIcon, ChecklistIcon, NotesIcon, NotificationIcon } from "../../Icons";
export default function Homepage() {

  type IconKeys = "Client" | "Easy" | "Quick";
 const iconMapping: Record<IconKeys, React.ElementType> = {
   Client: ClientIcon,
   Easy: EasyIcon,
   Quick: QuickIcon,
 };
  
  return (
    <Container className="relative">
      <NotificationIcon className="absolute bottom-10 right-10" />
      <NotesIcon className="absolute top-10 right-10" />
      <ChecklistIcon className="absolute top-10 left-10" />
      <div className="flex justify-start flex-col w-10/12 gap-4">
        <Header.Title>{intro.data.title}</Header.Title>
        <Header.Description>{intro.data.description}</Header.Description>
      </div>

      <ButtonGroup>
        <Button>
          <Link to="/auth/register">Cadastre-se já!</Link>
        </Button>
        <Button>
          <Link to="/auth/login">Login</Link>
        </Button>
      </ButtonGroup>

      <div className="flex items-center justify-center gap-4 w-full flex-wrap">
        {features.payload.map((feature) => {
          const IconComponent = iconMapping[feature.icon as IconKeys];
          return (
            <Card.Root key={feature.id}>
              <Card.Icon icon={IconComponent} />
              <Card.Title>{feature.title}</Card.Title>
              <Card.Description>{feature.description}</Card.Description>
            </Card.Root>
          );
        })}
      </div>
    </Container>
  );
}
