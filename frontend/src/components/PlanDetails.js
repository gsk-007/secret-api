import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  useClipboard,
  Button,
} from "@chakra-ui/react";
import React from "react";

const plans = [
  { name: "Budget Buster", type: "Free" },
  { name: "Silver Spoon", type: "Paid" },
  { name: "Gold Rush", type: "Paid" },
];

const PlanDetails = ({ user }) => {
  const { onCopy, hasCopied } = useClipboard(user.apiKey);
  return (
    <Box>
      <TableContainer marginX="auto" maxWidth="80vw">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textColor="brand.primaryTwo">Contents</Th>
              <Th textColor="brand.primaryTwo">Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Plan</Td>
              <Td>{plans[user.plan - 1].name}</Td>
            </Tr>
            <Tr>
              <Td>Plan Type</Td>
              <Td>{plans[user.plan - 1].type}</Td>
            </Tr>
            <Tr>
              <Td>Remaining Request(for today)</Td>
              <Td>{user.remainingApiCallsToday}</Td>
            </Tr>
            <Tr>
              <Td>Api Key</Td>
              <Td>
                {user.apiKey}{" "}
                <Button
                  marginX={3}
                  colorScheme="teal"
                  size="xs"
                  variant="outline"
                  onClick={onCopy}
                >
                  {hasCopied ? "Copied!" : "Copy"}
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PlanDetails;
