import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import Banner from 'components/Banner';
import { Container } from 'components/Containers';
import { H3, P2 } from 'components/Typography';
import Spacer from 'components/Spacer';

interface IJobSpecification {
  jobSpecificationHeading: string;
  jobSpecificationSubheading: string;
}

export const JobSpecification: React.FC<IJobSpecification> = ({
  jobSpecificationHeading,
  jobSpecificationSubheading,
}) => {
  return (
    <div>
      <Banner heading={jobSpecificationHeading} subheading={jobSpecificationSubheading} />
      <Container>
        <Fade bottom ssrFadeout>
          <H3 bold={true}>Job Opening: Software Engineer</H3>
        </Fade>
        <Spacer size={'md'} />
        <Fade bottom delay={100} ssrFadeout>
          <P2>The data center solutions market is exploding, as smartphones, streaming video, Web 2.0, social media,
            “big data” computing, cloud computing, search, cloud storage, and many other applications are driving
            data traffic to dramatic new heights. This is an outstanding opportunity for the right professional to join
            a dynamic, high-energy team to spark a revolution in data center networking and take part in one of the
            hottest markets in tech today.
          </P2>
        </Fade>
        <Spacer size={'sm'} />
        <Fade bottom delay={200} ssrFadeout>
        <P2>Accipiter Systems is searching for a Software Engineer to develop the software for computer networking
          products. Accipiter Systems has an exceptional track record in delivering high-performance networking
          solutions to key agencies in the federal government for over a decade.
        </P2>
        </Fade>
        <Spacer size={'sm'} />
        <Fade bottom delay={300} ssrFadeout>
          <P2>The company now seeks a software engineer to help deliver its highly innovative networking solutions to
            corporate data centers, high-performance computing environments, and related corporate IT projects.
            This is a position that will develop the software for the company’s flagship product.
          </P2>
        </Fade>
        <Spacer size={'md'} />
        <Fade bottom ssrFadeout>
          <P2 bold={true}>Primary Duties:</P2>
        </Fade>
        <Fade bottom delay={100} ssrFadeout>
          <StyledList>
            <li><P2>Design and develop software for use in company’s products.</P2></li>
            <li><P2>Work as part of a team to analyze issues and solve problems.</P2></li>
            <li><P2>Prepare demonstrations of company’s products for end users and other stakeholders.</P2></li>
          </StyledList>
        </Fade>
        <Spacer size={'md'} />
        <Fade bottom ssrFadeout>
          <P2 bold={true}>Desired Experience:</P2>
        </Fade>
        <Fade bottom delay={100} ssrFadeout>
          <StyledList>
            <li><P2>Software programming experience using C/C++ in embedded systems.</P2></li>
            <li><P2>Proven ability to work on a technical team.</P2></li>
            <li><P2>Good communication skills, both oral and written.</P2></li>
            <li><P2>Familiarity and experience with multi-gigabit Ethernet, IP, Fibre Channel, Infiniband, PCI Express.</P2></li>
          </StyledList>
        </Fade>
        <Spacer size={'md'} />
        <Fade bottom ssrFadeout>
          <P2 bold={true}>Qualifications:</P2>
        </Fade>
        <Fade bottom delay={100} ssrFadeout>
          <StyledList>
            <li><P2>3-7 years of experience in software development using C/C++, embedded systems development required.</P2></li>
            <li><P2>Experience using version control software tools such as CVS or Subversion.</P2></li>
            <li><P2>Experience with small company or start-up environment preferred.</P2></li>
            <li><P2>Bachelor’s degree in computer science or computer engineering. Master’s degree preferred.</P2></li>
          </StyledList>
        </Fade>
      </Container>
    </div>
  )
}

const StyledList = styled.ul`
  li {
    list-style: circle;
    margin: ${GU * 5}px;
  }
`;
