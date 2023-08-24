import { Meta, Story } from "@storybook/react";
import React from "react";

import { Avatar, AvatarProps } from "./Avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} src="https://storybook.js.org/images/placeholders/350x150.png" />;

export const Medium = Template.bind({});