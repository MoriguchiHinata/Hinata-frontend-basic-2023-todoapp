import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molcules/Task",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  onTaskChange : (str) => console.log("taskname changed: " + str),
  onTaskComplete : () => console.log("task completed"),
  taskName : "taskname",
  defaultIsEditing : false,
}