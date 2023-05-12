import { Fade } from "react-reveal";

import Banner from "components/Banner";
import ContactCard from "components/ContactCard";
import { Container } from "components/Containers";
import Spacer from "components/Spacer";

interface IContact {
  contactHeading: string;
  contactSubheading: string;
}

export const Contact: React.FC<IContact> = ({
  contactHeading,
  contactSubheading,
}) => {
  return (
    <div>
      <Banner heading={contactHeading} subheading={contactSubheading} />
      <Container>
        <Fade bottom ssrFadeout>
          <ContactCard />
        </Fade>
        <Spacer size={"lg"} />
      </Container>
    </div>
  );
};
