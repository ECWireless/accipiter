// import styled from "styled-components";
import { Fade } from "react-reveal";
// import BlockContent from "@sanity/block-content-to-react";
// import { colors, GU } from "components/theme";

import Banner from "components/Banner";
import { Container } from "components/Containers";
import {
  // H3, P2Block,
  P2,
} from "components/Typography";
import Spacer from "components/Spacer";

interface IJobSpecification {
  heading: string;
  subheading: string;
  position1Title: string;
  position1Description: string;
  position2Title: string;
  position2Description: string;
  position3Title: string;
  position3Description: string;
}

export const JobSpecification: React.FC<IJobSpecification> = ({
  heading,
  subheading,
  // position1Title,
  // position1Description,
  // position2Title,
  // position2Description,
  // position3Title,
  // position3Description,
}) => {
  return (
    <div>
      <Banner heading={heading} subheading={subheading} />
      <Container>
        <Fade bottom ssrFadeout>
          <P2>
            Accipiter Systems develops computer networking products that bring
            PCIe “out of the box”. Our products accelerate Edge applications and
            systems by eliminating legacy network protocols for networking. Low
            latency, high throughput, reduced cost of ownership, and enhanced
            security are the benefits of PCIe networking technology.
          </P2>
        </Fade>
        <Spacer size={"md"} />
        <Fade bottom delay={100} ssrFadeout>
          <P2>
            We’re always on the lookout for talented team members. Check back
            for updates, or submit your information using the contact form
            below.
          </P2>
        </Fade>
        {/* <Fade bottom ssrFadeout>
          <H3 bold={true}>{position1Title}</H3>
        </Fade>
        <Spacer size={"md"} />
        <Fade bottom delay={100} ssrFadeout>
          <P2Block>
            <BlockContent blocks={position1Description} />
          </P2Block>
        </Fade>
        <Spacer size={"md"} />
        <StyledLine />
        <Spacer size={"md"} />
        <Fade bottom ssrFadeout>
          <H3 bold={true}>{position2Title}</H3>
        </Fade>
        <Spacer size={"md"} />
        <Fade bottom delay={100} ssrFadeout>
          <P2Block>
            <BlockContent blocks={position2Description} />
          </P2Block>
        </Fade> */}
        {/* <Spacer size={"md"} />
        <StyledLine />
        <Spacer size={"md"} />
        <Fade bottom ssrFadeout>
          <H3 bold={true}>{position3Title}</H3>
        </Fade>
        <Spacer size={"md"} />
        <Fade bottom delay={100} ssrFadeout>
          <P2Block>
            <BlockContent blocks={position3Description} />
          </P2Block>
        </Fade> */}
      </Container>
    </div>
  );
};

// const StyledLine = styled.div`
//   background: ${colors.blue};
//   height: 2px;
//   width: 100%;
// `;
