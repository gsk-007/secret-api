import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import GettingStartedDoc from "./GettingStartedDoc";
import RouteDoc from "./RouteDoc";
const data = [
  {
    label: "Getting Started",
    content: <GettingStartedDoc />,
  },
  {
    label: "Routes",
    content: <RouteDoc />,
  },
];
const Documentation = () => {
  return (
    <Box marginX={10} height="80vh" color="black">
      <Tabs marginTop={10} defaultIndex={0} orientation={"vertical"}>
        <TabList height="200px" border="1px" borderColor="gray.200">
          {data.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels marginLeft={4}>
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
