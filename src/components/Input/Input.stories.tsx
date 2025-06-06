import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const containerStyle = {
  width: "322px",
  margin: "0 auto",
};

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    inputSize: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    leftIconName: {
      control: { type: "select" },
      options: ["search", "remove"],
    },
    rightIconName: {
      control: { type: "select" },
      options: ["add", "search", "remove"],
    },
    helperText: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div style={containerStyle}>
        <Story />
      </div>
    ),
  ],
  args: {
    leftIconName: "search",
    rightIconName: "remove",
    helperText: "متن کمکی",
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Small: Story = {
  args: {
    label: "تایتل",
    inputSize: "small",
    placeholder: "متن",
    helperText: "متن کمکی",
  },
};

export const Medium: Story = {
  args: {
    label: "تایتل",
    inputSize: "medium",
    placeholder: "متن",
    helperText: "متن کمکی",
  },
};

export const Large: Story = {
  args: {
    label: "تایتل",
    inputSize: "large",
    placeholder: "متن",
    helperText: "متن کمکی",
  },
};

export const ErrorState: Story = {
  args: {
    label: "تایتل",
    error: "متن کمکی",
    placeholder: "متن",
  },
};

export const Disabled: Story = {
  args: {
    label: "تایتل",
    disabled: true,
    placeholder: "متن",
    helperText: "متن کمکی",
  },
};
