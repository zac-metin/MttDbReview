import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const TabsDemo = () => (
<Tabs variant='enclosed'>
  <TabList>
    <Tab>Gogac ($1.3m+)</Tab>
    <Tab>SmallKindB ($1.6m+)</Tab>
    <Tab>Frenchsniperrr ($2.9m+)</Tab>
    <Tab>Dannyz0r ($1.4m+)</Tab>
    <Tab>Other Happy Clients</Tab>

  </TabList>
  <TabPanels>
    <TabPanel>
      Graph Goes Here
    </TabPanel>
    <TabPanel>
      Graph Goes Here
    </TabPanel>
    <TabPanel>
      Graph Goes Here
    </TabPanel>
    <TabPanel>
      Graph Goes Here
    </TabPanel>

  </TabPanels>
</Tabs>
);

export default TabsDemo;