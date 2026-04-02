import Head from "next/head";
import NextLink from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
  SlideFade,
} from "@chakra-ui/react";

import { Button as HomeButton } from "components/Buttons";
import Snackbar from "components/Snackbar";
import Spacer from "components/Spacer";
import Spinner from "components/Spinner";
import { colors } from "components/theme";
import { Container } from "chakraComponents/Flex";
import { Container as OldContainer } from "components/Containers";
import { investorIntro } from "data/techBriefContent";

const bodyTextProps = {
  fontSize: {
    base: "13px",
    sm: "16px",
  },
  lineHeight: {
    base: "24px",
    sm: "32px",
  },
};

const heroTextProps = {
  fontSize: {
    base: "30px",
    sm: "36px",
    lg: "48px",
  },
  lineHeight: {
    base: "36px",
    sm: "42px",
    lg: "58px",
  },
};

const inputStyles = {
  background: "transparent",
  border: "none",
  borderBottom: "2px solid",
  borderColor: "white",
  borderRadius: 0,
  color: "white",
  fontFamily: "'Nunito Sans', sans-serif",
  fontSize: {
    base: "15px",
    sm: "16px",
  },
  h: {
    base: "36px",
    sm: "40px",
  },
  px: 0,
  _hover: {
    borderColor: "electric.400",
  },
  _focusVisible: {
    borderColor: "electric.400",
    boxShadow: "none",
  },
  _placeholder: {
    color: "whiteAlpha.500",
    fontSize: {
      base: "13px",
      sm: "14px",
    },
  },
};

const textareaStyles = {
  background: "transparent",
  border: "2px solid",
  borderColor: "white",
  borderRadius: "8px",
  color: "white",
  fontFamily: "'Nunito Sans', sans-serif",
  fontSize: {
    base: "15px",
    sm: "16px",
  },
  h: {
    base: "160px",
    sm: "180px",
  },
  px: 3,
  py: 3,
  _hover: {
    borderColor: "electric.400",
  },
  _focusVisible: {
    borderColor: "electric.400",
    boxShadow: "none",
  },
  _placeholder: {
    color: "whiteAlpha.500",
    fontSize: {
      base: "13px",
      sm: "14px",
    },
  },
};

const labelStyles = {
  color: "white",
  fontSize: {
    base: "14px",
    sm: "16px",
  },
  fontWeight: 700,
  lineHeight: {
    base: "20px",
    sm: "24px",
  },
  mb: {
    base: 2,
    sm: 3,
  },
};

type InvestorFormInputs = {
  email: string;
  investmentRange: string;
  message: string;
  name: string;
  organization: string;
};

type InvestorFormStatus = {
  info: {
    error: boolean;
    msg: string | null;
  };
  submitted: boolean;
  submitting: boolean;
};

const initialFormInputs: InvestorFormInputs = {
  email: "",
  investmentRange: "",
  message: "",
  name: "",
  organization: "",
};

const initialFormStatus: InvestorFormStatus = {
  info: {
    error: false,
    msg: null,
  },
  submitted: false,
  submitting: false,
};

const Investors = () => {
  const [status, setStatus] = useState<InvestorFormStatus>(initialFormStatus);
  const [inputs, setInputs] = useState<InvestorFormInputs>(initialFormInputs);
  const [snackbar, setSnackbar] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaKey, setRecaptchaKey] = useState(0);

  const handleResponse = (responseStatus: number, msg: string) => {
    if (responseStatus === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg,
        },
      });
      setInputs(initialFormInputs);
      setRecaptchaToken(null);
      setRecaptchaKey((currentKey) => currentKey + 1);
      setSnackbar(true);
      return;
    }

    setStatus({
      submitted: false,
      submitting: false,
      info: {
        error: true,
        msg,
      },
    });
    setSnackbar(true);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;

    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
    setStatus((prev) => ({
      ...prev,
      submitted: false,
      submitting: false,
      info: {
        error: false,
        msg: null,
      },
    }));
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!recaptchaToken) {
      return;
    }

    setStatus((prev) => ({
      ...prev,
      submitting: true,
    }));

    try {
      const res = await fetch("/api/tech-brief", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...inputs,
          recaptchaToken,
        }),
      });

      const text = await res.text();
      handleResponse(res.status, text);
    } catch (error) {
      handleResponse(500, "Message not sent.");
    }
  };

  const onCloseSnackbar = () => {
    setSnackbar(false);
  };

  return (
    <>
      <Head>
        <title>Investors | Accipiter Systems</title>
        <meta
          name="description"
          content="Investor information and inquiry form for Accipiter Systems."
        />
      </Head>
      <article>
        <Spacer size={"lg"} />
        <OldContainer>
          <Breadcrumb separator=">" spacing={4}>
            <BreadcrumbItem
              color="electric.400"
              fontWeight={600}
              _hover={{
                textDecoration: "underline",
              }}
            >
              <BreadcrumbLink as={NextLink} href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              color="electric.400"
              fontWeight={600}
              _hover={{
                textDecoration: "underline",
              }}
            >
              <BreadcrumbLink as={NextLink} href="/investors">
                Investors
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </OldContainer>

        <Container>
          <VStack
            spacing={0}
            mt={{
              base: 8,
              md: 20,
            }}
          >
            <SlideFade in>
              <Text textAlign="center" variant="h1" {...heroTextProps}>
                Interested in Investing in
              </Text>
            </SlideFade>
            <SlideFade in delay={0.1}>
              <Text
                color="electric.400"
                textAlign="center"
                variant="h1"
                {...heroTextProps}
              >
                Accipiter Systems?
              </Text>
            </SlideFade>
          </VStack>

          <SimpleGrid
            alignItems="start"
            columns={{
              base: 1,
              xl: 2,
            }}
            columnGap={{
              base: 0,
              xl: 12,
            }}
            rowGap={8}
            mt={{
              base: 8,
              md: 14,
            }}
          >
            <GridItem>
              <VStack align="flex-start" spacing={6} w="100%">
                <Text
                  color="grey.800"
                  fontSize={{
                    base: "18px",
                    sm: "24px",
                    lg: "32px",
                  }}
                  fontWeight={500}
                  lineHeight={{
                    base: "30px",
                    sm: "36px",
                    lg: "44px",
                  }}
                  maxW="680px"
                >
                  {investorIntro.lead}
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <SlideFade in delay={0.16}>
                <Box
                  background="grey.100"
                  borderRadius="24px"
                  borderTop="4px solid"
                  borderColor="electric.400"
                  boxShadow="0 18px 44px rgba(42, 62, 81, 0.08)"
                  p={{
                    base: 6,
                    md: 8,
                  }}
                  w="100%"
                >
                  <Text
                  color="grey.800"
                  fontSize={{
                    base: "17px",
                    sm: "20px",
                    lg: "24px",
                  }}
                  fontWeight={500}
                  lineHeight={{
                    base: "28px",
                    sm: "32px",
                    lg: "38px",
                  }}
                  >
                    {investorIntro.companyStatus}
                  </Text>
                </Box>
              </SlideFade>
            </GridItem>
          </SimpleGrid>

          <Text
            color="grey.800"
            mt={8}
            mx="auto"
            textAlign="center"
            maxW={{
              base: "280px",
              sm: "820px",
            }}
            {...bodyTextProps}
          >
            {investorIntro.invitation}
          </Text>

          <Box
            background={colors.grey}
            border={`1px solid ${colors.blue}`}
            borderRadius="24px"
            boxShadow="0 24px 60px rgba(0, 0, 0, 0.16)"
            mt={{
              base: 12,
              md: 16,
            }}
            p={{
              base: 6,
              md: 10,
            }}
          >
            <Text
              color="white"
              fontSize={{
                base: "20px",
                md: "24px",
              }}
              fontWeight={700}
              lineHeight={{
                base: "28px",
                md: "32px",
              }}
            >
              Tell us about your interest.
            </Text>

            <Box as="form" mt={{ base: 5, md: 6 }} onSubmit={handleOnSubmit}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
                <FormControl>
                  <FormLabel sx={labelStyles}>Name</FormLabel>
                  <Input
                    id="name"
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    sx={inputStyles}
                    value={inputs.name}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={labelStyles}>Email</FormLabel>
                  <Input
                    id="email"
                    onChange={handleInputChange}
                    placeholder="name@organization.com"
                    required
                    sx={inputStyles}
                    type="email"
                    value={inputs.email}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={labelStyles}>
                    Organization / Investor Type
                  </FormLabel>
                  <Input
                    id="organization"
                    onChange={handleInputChange}
                    placeholder="Organization or investor type"
                    sx={inputStyles}
                    value={inputs.organization}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={labelStyles}>
                    Investment Interest Range
                  </FormLabel>
                  <Input
                    id="investmentRange"
                    onChange={handleInputChange}
                    placeholder="$"
                    sx={inputStyles}
                    value={inputs.investmentRange}
                  />
                </FormControl>
              </SimpleGrid>

              <FormControl mt={{ base: 6, md: 8 }}>
                <FormLabel sx={labelStyles}>
                  Tell us about your interest
                </FormLabel>
                <Textarea
                  id="message"
                  onChange={handleInputChange}
                  placeholder="Tell us about your interest"
                  resize="vertical"
                  sx={textareaStyles}
                  value={inputs.message}
                />
              </FormControl>

              <Flex
                align={{ base: "flex-start", md: "center" }}
                direction={{ base: "column", md: "row" }}
                gap={{ base: 5, md: 6 }}
                justify="space-between"
                mt={{ base: 6, md: 8 }}
              >
                <Box>
                  <ReCAPTCHA
                    key={recaptchaKey}
                    size="compact"
                    sitekey={process.env.RECAPTCHA_API_KEY || ""}
                    onChange={(token) => setRecaptchaToken(token)}
                  />
                </Box>
                <HomeButton
                  disabled={status.submitting || !recaptchaToken}
                  type="submit"
                  style={{
                    minWidth: "0",
                    width: "100%",
                    maxWidth: "220px",
                  }}
                >
                  {!status.submitting ? (
                    !status.submitted ? (
                      "Submit Interest"
                    ) : (
                      "Submitted"
                    )
                  ) : (
                    <Spinner color={colors.grey} />
                  )}
                </HomeButton>
              </Flex>
            </Box>
          </Box>

          <Box borderTop="1px solid" borderColor="grey.100" mt={10} pt={{ base: 7, md: 8 }} pb={{ base: 16, md: 20 }}>
            <VStack spacing={5}>
              <Text
                color="grey.800"
                fontSize={{
                  base: "15px",
                  md: "18px",
                }}
                fontWeight={700}
                lineHeight={{
                  base: "24px",
                  md: "30px",
                }}
                maxW="920px"
                textAlign="center"
              >
                Investment opportunities are available only to accredited
                investors where applicable.
              </Text>
              <HomeButton
                as="a"
                download="Accipiter-Systems-Investor-Executive-Summary.pdf"
                href="/tech-brief-investor-executive-summary.pdf"
                style={{
                  background: "#F4FBFD",
                  border: `2px solid ${colors.blue}`,
                  boxShadow: "none",
                  color: colors.blue,
                  maxWidth: "100%",
                  minWidth: "0",
                  opacity: 1,
                  padding: "14px 28px",
                }}
              >
                Download Investor Executive Summary
              </HomeButton>
            </VStack>
          </Box>
        </Container>
      </article>
      {snackbar && (
        <Snackbar
          message={status.info.msg}
          success={!status.info.error}
          onCloseSnackbar={onCloseSnackbar}
        />
      )}
    </>
  );
};

export default Investors;
