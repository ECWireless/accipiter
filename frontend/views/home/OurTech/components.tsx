import Head from "next/head";
import { Box, VStack, Flex, Text, Image } from "@chakra-ui/react";

type SummaryCard1Props = {
  number: number;
  text: string;
};

export const SummaryCard1: React.FC<SummaryCard1Props> = ({ number, text }) => {
  return (
    <Flex align="center" background="grey.100" gap={4} p={4}>
      <Flex
        align="center"
        background="electric.100"
        borderRadius="50%"
        h="32px"
        justify="center"
        w="32px"
      >
        <Text color="electric.400" fontSize="20px" fontWeight={600}>
          {number}
        </Text>
      </Flex>
      <Text color="grey.800" fontSize="14px">
        {text}
      </Text>
    </Flex>
  );
};

export const SummaryCard2: React.FC = ({ children }) => {
  return (
    <Box
      background="electric.100"
      borderRadius="8px"
      color="electric.400"
      p={4}
      fontWeight={600}
      w="22%"
    >
      {children}
    </Box>
  );
};

type BenefitsCardProps = {
  number: number;
  text: string;
};

export const BenefitsCard: React.FC<BenefitsCardProps> = ({ number, text }) => {
  return (
    <Flex
      align="center"
      background="electric.800"
      gap={4}
      pb={12}
      position="relative"
      pt={{
        base: 24,
        md: 12,
      }}
      px={{
        base: 10,
        md: 24,
      }}
      w={{
        base: "100%",
        md: "45%",
      }}
    >
      <Flex
        align="center"
        background="electric.100"
        borderRadius="50%"
        h="32px"
        justify="center"
        left={{
          base: "50%",
          md: "12px",
        }}
        position="absolute"
        transform={{
          base: "translateX(-50%)",
          md: "none",
        }}
        top={{
          base: "20px",
          md: "10px",
        }}
        w="32px"
      >
        <Text color="electric.400" fontSize="20px" fontWeight={600}>
          {number}
        </Text>
      </Flex>
      <Text color="white">{text}</Text>
    </Flex>
  );
};

type UseCasesCardProps = {
  title: string;
  body: string;
  icon: string;
};

export const UseCasesCard: React.FC<UseCasesCardProps> = ({
  title,
  body,
  icon,
}) => {
  return (
    <VStack
      background="grey.100"
      borderRadius="25px"
      fontWeight={600}
      h={{
        base: "275px",
        sm: "300px",
      }}
      p={{
        base: 8,
        sm: 10,
      }}
      position="relative"
      w={{
        base: "100%",
        lg: "45%",
      }}
    >
      <Image
        alt={title}
        left="50%"
        h="175px"
        position="absolute"
        src={icon}
        top="50%"
        transform="translate(-50%, -50%)"
      />
      <Text
        color="electric.400"
        fontSize={{
          base: "24px",
          sm: "28px",
        }}
        textAlign="center"
      >
        {title}
      </Text>
      <Text
        mt={{
          base: 2,
          sm: 10,
        }}
        fontSize={{
          base: "14px",
          sm: "16px",
        }}
        textAlign="center"
      >
        {body}
      </Text>
    </VStack>
  );
};
