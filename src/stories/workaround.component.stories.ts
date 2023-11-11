import {Workaround} from "./workaround.component";
import {Meta, StoryObj} from "@storybook/angular";


const meta: Meta<Workaround> = {
  title: 'Workaround/Workaround',
  component: Workaround,
  excludeStories: /.*Data$/,
}

export default meta;

type Story = StoryObj<Workaround>;

export const Empty: Story = {
  name: "Workaround",
};
