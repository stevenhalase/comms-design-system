// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {
  CommsButtonComponent,
  CommsButtonSizeEnum,
} from '../projects/comms-design-system/src/lib/components/comms-button/comms-button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Comms Button',
  component: CommsButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CommsButtonComponent> = (args: CommsButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: CommsButtonSizeEnum.LARGE,
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: CommsButtonSizeEnum.SMALL,
  label: 'Button',
};
