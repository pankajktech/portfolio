import Frontend from "./skills/Frontend";
import Backend from "./skills/Backend";
import Tools from "./skills/Tools";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Skills = () => {
  const data = [
    {
      label: "Frontend",
      value: Frontend,
      desc: <Frontend />,
    },
    {
      label: "Backend",
      value: "Backend",
      desc: <Backend />,
    },
    {
      label: "Tools",
      value: "Tools",
      desc: <Tools />,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl text-center my-10">Tech Stack</h1>
      <Tabs
        value={data[0].value}
        className="w-full flex items-center flex-col my-10"
      >
        <TabsHeader className="w-96 flex items-center">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          className="flex items-center"
          animate={{
            initial: { y: 550 },
            mount: { y: 0 },
            unmount: { y: 550 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Skills;
