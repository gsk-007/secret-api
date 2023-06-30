import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
const data = [
  {
    label: "Getting Started",
    content: "Perhaps the greatest dish ever invented.",
  },
  {
    label: "Routes",
    content:
      "Perhaps the surest dish ever invented but fills the stomach more than rice.",
  },
  {
    label: "Pagination",
    content:
      "Perhaps the surest dish ever invented but fills the stomach more than rice.",
  },
];
const Documentation = () => {
  return (
    <Box height="80vh" color="black">
      <Tabs marginTop={10} defaultIndex={0} orientation={"vertical"}>
        <TabList border="1px" borderColor="gray.200">
          {data.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel p={4} key={index}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Documentation;
