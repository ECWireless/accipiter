import { Flex } from "@chakra-ui/react";

export const Container: React.FC = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      margin="auto"
      width={{
        base: "300px",
        sm: "400px",
        md: "600px",
        lg: "800px",
        xl: "1200px",
      }}
    >
      {children}
    </Flex>
  );
};
