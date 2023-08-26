import { Meta, Story } from "@storybook/react";
import React from "react";

import { Card, CardProps } from "./Card";

export default {
  title: "Objects/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}/>;

export const Light = Template.bind({});
Light.args = {
  title: "My card title",
  data:[
    ['Description', 'this product is the best'],
    ['Value', 9.999],
  ],
  link: ["Ver poducto", 'http://127.0.0.1:6006/?path=/docs/intro--page']
};

export const Small = Template.bind({});
Small.args = {
  title: "My card title",
  data:[
    ['Description', 'this product is the best'],
    ['Value', 9.999],
  ],
  size: "small",
  mode: "dark",
  img: "../Avatar.png",
  alt: "Logo",
  link: ["Ver poducto", 'http://127.0.0.1:6006/?path=/docs/intro--page']
};

export const Medium = Template.bind({});
Medium.args = {
  title: "My card title",
  data:[
    ['Description', 'this product is the best'],
    ['Value', 9.999],
  ],
  size: "medium",
  mode: "dark",
  img: "../Avatar.png",
  alt: "Logo",
  link: ["Ver poducto", 'http://127.0.0.1:6006/?path=/docs/intro--page']
};

export const Large = Template.bind({});
Large.args = {
  title: "My card title",
  data:[
    ['Description', 'this product is the best'],
    ['Value', 9.999],
  ],
  size: "large",
  mode: "dark",
  img: "../Avatar.png",
  alt: "Logo",
  link: ["Ver poducto", 'http://127.0.0.1:6006/?path=/docs/intro--page']
};