import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox } from "./Checkbox";

export default {
  title: "Design System/Checkbox",
  component: Checkbox,
  argTypes: {
    name: {
      description: "The name of the checkbox.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: { summary: "undefined" },
        type: {
          summary: "text",
        },
      },
    },
    value: {
      description: "The value of the checkbox.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: { summary: "undefined" },
        type: {
          summary: "text",
        },
      },
    },
    children: {
      description: "The label of the checkbox.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: { summary: "undefined" },
        type: {
          summary: "text",
        },
      },
    },
    defaultSelected: {
      description:
        "Whether the checkbox is selected by default (Uncontrolled).",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
        type: {
          summary: "boolean",
        },
      },
    },
    isSelected: {
      description: "Whether the checkbox is selected (Controlled).",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
        type: {
          summary: "boolean",
        },
      },
    },
    isDisabled: {
      description: "Whether the checkbox is disabled.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
        type: {
          summary: "boolean",
        },
      },
    },
    isIndeterminate: {
      description:
        "Indicates whether the checkbox is in an indeterminate state.Indeterminism is presentational only.The indeterminate visual representation remains regardless of user interaction.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
        type: {
          summary: "boolean",
        },
      },
    },
    onChange: {
      description: "Called when the checkbox is selected or unselected.",
    },
  },
} as ComponentMeta<typeof Checkbox>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Checkbox> = ({ children, ...args }) => {
  return <Checkbox {...args}>{children}</Checkbox>;
};

export const CheckboxStory = Template.bind({});
CheckboxStory.storyName = "Checkbox";
CheckboxStory.args = {
  isIndeterminate: true,
  value: "soccer",
  children: "Soccer",
};
