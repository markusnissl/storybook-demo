import {DsBadge} from "./badge.component";
import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {DsCounter} from "../counter/counter.component";


const meta: Meta<DsBadge> = {
  title: 'Atoms/Badge',
  component: DsBadge,
  excludeStories: /.*Data$/,
  argTypes: {
    label: {
      type: 'string',
      table: { defaultValue: { summary: 'LABEL' } },
      control: 'text',
      description: 'The text of the badge',
    },
    variant: {
      options: ['primary', 'secondary'],
      table: { defaultValue: { summary: 'primary' }, category: 'Styling' },
      control: { type: 'select' },
      description: 'The variant of the badge',
    },
  },
  args: {
    label: "LABEL",
    variant: 'primary'
  },
}

export default meta;

type Story = StoryObj<DsBadge>;
type StoryWithCounter = StoryObj<DsBadge & {counterType:string}>;

export const Default: Story = {
  name: "Label only",
  args: {
    ...meta.args
  },
};

export const WithCounter: StoryWithCounter = {
  args: {
    ...Default.args,
    counterType: "primary",
  },
  argTypes: {
    ...Default.argTypes,
    counterType: {
      options: ['primary', 'secondary'],
      table: { defaultValue: { summary: 'primary' }, category: 'Others' },
      control: { type: 'select' },
      description: 'The counter type',
    },
  },
  decorators: [moduleMetadata({imports: [DsBadge, DsCounter]})],
  render: (badge) => ({
    template: `
        <ds-badge variant="${badge.variant}" label="${badge.label}">
            <ds-counter slot="start" variant="${badge.counterType}">10</ds-counter>
        </ds-badge>
        `
  })
};
