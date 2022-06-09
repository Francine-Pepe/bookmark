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
import TabPanelsSearching from "./TabPanelsSearching";
import EasySharing from "./EasySharing";
import BookmarkImage from "./BookmarkImage";
import SpeedySearchingImage from "./SpeedySearchingImage";
import EasySharingImage from "./EasySharingImage";
import Bookmark from "./Bookmark";

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

  const tabMobile = {
    "@media screen and (max-width: 761px)": {
      display: "none",
    },
  };

  const tabDesktop = {
    "@media screen and (min-width: 762px)": {
      display: "none",
    },
  };

  const tabPanelStyle = {
    display: "flex",
    width: "100vw",
    overflow: "hidden",
    "@media screen and (max-width: 949px)": {
      display: "flex",
      flexWrap: "wrap",
    },
  };

  const tabList = {
    width: "70vw",

    "@media screen and (max-width: 761px)": {
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "1em",
      justifyContent: "center",
      overflow: "hidden",
    },
    "@media screen and (min-width: 762px)": {
      display: "none",
    },
  };

  

  const tabListData = [
    {
      title: "Simple Bookmarking",
    },
    {
      title: "Speedy Searching",
    },
    {
      title: "Easy Sharing",
    },
  ];

  return (
    <>
      <Container
        className="middle_container"
        centerContent="true"
        id="features"
        // sx={{
        //   overflow: "hidden",
        // }}
      >
        <Heading>Features</Heading>
        <Text>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Text>
        <Tabs mt={3} align="center" isFitted="true" sx={tabMobile}>
            <TabList w="70vw"  >
              <Tab sx={styleTabs}>Simple Bookmarking</Tab>
              <Tab sx={styleTabs}>Speedy Searching</Tab>
              <Tab sx={styleTabs}>Easy Sharing</Tab>
            </TabList>

          <TabPanels>
            <TabPanel sx={tabPanelStyle} p={0}>
              <BookmarkImage />
              <Bookmark />
            </TabPanel>
            <TabPanel sx={tabPanelStyle} p={0}>
              <SpeedySearchingImage />
              <TabPanelsSearching />
            </TabPanel>
            <TabPanel sx={tabPanelStyle} p={0}>
              <EasySharingImage />
              <EasySharing />
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* Display this content when reach max-width 761px - Mobile */}

        <Tabs mt={3} align="center" isFitted="true" sx={tabDesktop}>
          <TabList sx={tabList}></TabList>
          {tabListData.map((tabListData, index) => (
            <TabList w="70vw" key={index}>
              <Tab sx={styleTabs}>{tabListData.title}</Tab>
            </TabList>
          ))}
          <TabPanels>
            <TabPanel sx={tabPanelStyle} p={0}>
              <Flex direction="column">
                <BookmarkImage />
                <Bookmark />
              </Flex>
            </TabPanel>
            <TabPanel sx={tabPanelStyle} p={0}>
              <Flex direction="column">
                <SpeedySearchingImage />
                <TabPanelsSearching />
              </Flex>
            </TabPanel>
            <TabPanel sx={tabPanelStyle} p={0}>
              <Flex direction="column">
                <EasySharingImage />
                <EasySharing />
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
}
