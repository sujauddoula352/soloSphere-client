import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

const TabCategory = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
    };
    getData();
  });
  const webDevelopmentJobs = jobs.filter(
    (job) => job.category === "Web Development"
  );
  const GraphicsDesignJobs = jobs.filter(
    (job) => job.category === "Graphics Design"
  );
  const DigitalMarketingJobs = jobs.filter(
    (job) => job.category === "Digital Marketing"
  );
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
          <div className="grid grid-cols-1 mt-8 gap-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {webDevelopmentJobs?.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 mt-8 gap-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {GraphicsDesignJobs?.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 mt-8 gap-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DigitalMarketingJobs?.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategory;
// TabCategory.propTypes = {
//   jobs: PropTypes.arrayOf.isRequired,
// };
