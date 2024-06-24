import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OurMenuMap from "../../shared/components/mapCondition/OurMenuMap";

const OurShopMenu = () => {
  return (
    <div className="my-20">
      <Tabs>
        <TabList  style={{'fontSize': '20px', 'fontWeight': '600'}}>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <OurMenuMap itemCategory="salad" />
        </TabPanel>
        <TabPanel>
          <OurMenuMap itemCategory="pizza" />
        </TabPanel>
        <TabPanel>
          <OurMenuMap itemCategory="soup" />
        </TabPanel>
        <TabPanel>
          <OurMenuMap itemCategory="dessert" />
        </TabPanel>
        <TabPanel>
          <OurMenuMap itemCategory="drinks" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShopMenu;
