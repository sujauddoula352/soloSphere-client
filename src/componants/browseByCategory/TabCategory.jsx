import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const TabCategory = () => {
  return (
    <Tabs>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="capitalize text-2xl lg:text-3xl text-center font-semibold text-gray-800">
          Browse job by category
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 capitalize">
          Three category available for the time being, They web development,
          Graphics Design and Digital Marketing browse them by clicking on the
          tabs below
        </p>
        <div className="flex justify-center text-xl font-semibold capitalize items-center">
          <TabList>
            <Tab>web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <JobCard />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategory;
