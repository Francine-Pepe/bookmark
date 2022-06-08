import {
  Container,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Flex,
} from "@chakra-ui/react";
import "./MainContent.css";
import MainContentBottom from "./MainContentBottom";

export default function MainContentMiddle() {
  const styleTabs = {
    _focus: {
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      color: "hsl(229, 31%, 21%)",
    },
    _active: {
      backgroundColor: "trasparent",
    },
    _select: {
      borderBottom: "hsl(0, 94%, 66%)",
    },
    _selected: {
      color: "hsl(229, 31%, 21%)",
      fontWeight: "500",
      borderColor: "hsl(0, 94%, 66%)",
    },
  };

  const tabList = {
    "@media screen and (max-width: 500px)": {
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "1em",
    },
  };

  // const tabListRow = {
  //   "@media screen and (max-width: 500px)": {
  //     flexDirection: "column",
  //     alignItems: "center",
  //     paddingTop: "1em",
  //   },
  // };

  const tabMobile = {
    "@media screen and (max-width: 500px)": {
      display: "none",
    },
  };

  const tabDesktop = {
    "@media screen and (min-width: 501px)": {
      display: "none",
    },
  };

  return (
    <>
      <Container
        className="middle_container"
        centerContent="true"
        id="features"
      >
        <Heading>Features</Heading>
        <Text>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Text>

        <Tabs sx={tabMobile} mt={3}>
          <TabList className="tab_list" sx={tabList}>
            <Tab sx={styleTabs}>Simple Bookmarking</Tab>
            <Tab sx={styleTabs}>Speedy Searching</Tab>
            <Tab sx={styleTabs}>Easy Sharing</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <MainContentBottom />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* Display this content when reach max-width 500px - Mobile */}

        <Tabs className="tabs_mobile" sx={tabDesktop}>
          <TabList></TabList>
          <TabList className="tab_list" sx={tabList} w="85vw">
            <Tab sx={styleTabs}>Simple Bookmarking</Tab>
          </TabList>
          <TabList className="tab_list" sx={tabList}>
            <Tab sx={styleTabs}>Speedy Searching</Tab>
          </TabList>
          <TabList className="tab_list" sx={tabList}>
            <Tab sx={styleTabs}>Easy Sharing</Tab>
          </TabList>
        </Tabs>
      </Container>
    </>
  );
}
