import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCardComponent from "../CategoryCardComponent/CategoryCardComponent";

const Category = () => {
  return (
    <div>
      <Tabs forceRenderTabPanel defaultIndex={0}>
        <TabList className={"flex gap-20"}>
          <Tab>The Simpsons</Tab>
          <Tab>Futurama</Tab>
          <Tab>Futuramarrr</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className={"flex gap-20"}>
              <Tab>Homer Simpson</Tab>
              <Tab>Marge Simpson</Tab>
              <Tab>Bart Simpson</Tab>
              <Tab>Lisa Simpson</Tab>
              <Tab>Maggie Simpson</Tab>
            </TabList>
            <TabPanel>
              <div className="flex gap-10 py-4">
              <CategoryCardComponent></CategoryCardComponent>
              <CategoryCardComponent></CategoryCardComponent>
              </div>
              
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Philip J. Fry</Tab>
              <Tab>Turanga Leela</Tab>
              <Tab>Bender Bending Rodriguez</Tab>
              <Tab>Amy Wong</Tab>
              <Tab>Professor Hubert J. Farnsworth</Tab>
              <Tab>Doctor John Zoidberg</Tab>
            </TabList>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className={"flex gap-20"}>
              <Tab>Homer Simpson</Tab>
              <Tab>Marge Simpson</Tab>
              <Tab>Bart Simpson</Tab>
              <Tab>Lisa Simpson</Tab>
              <Tab>Maggie Simpson</Tab>
            </TabList>
            <TabPanel>
              <div className="flex gap-10 py-4">
              <CategoryCardComponent></CategoryCardComponent>
              <CategoryCardComponent></CategoryCardComponent>
              </div>
              
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
            <TabPanel>
              <CategoryCardComponent></CategoryCardComponent>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
