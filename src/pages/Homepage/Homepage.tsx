import {Button, ButtonGroup, Card, Container } from "../../components";
import features from '../../data/features.json'
import { ClientIcon, EasyIcon, QuickIcon } from "../../Icons";
export default function Homepage() {

  type IconKey = "Client" | "Easy" | "Quick";
 const iconMapping: Record<IconKey, React.ElementType> = {
   Client: ClientIcon,
   Easy: EasyIcon,
   Quick: QuickIcon,
 };
  
  return (
    <Container>
      <ButtonGroup>
        <Button>Cadastre-se já!</Button>
        <Button>Login</Button>
      </ButtonGroup>

      <div className="flex flex-col items-center justify-center">
        {features.payload.map((feature) => {
          const IconComponent = iconMapping[feature.icon as IconKey];
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
