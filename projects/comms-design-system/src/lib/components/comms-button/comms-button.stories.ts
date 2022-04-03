// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {
  CommsButtonComponent,
  CommsButtonSizeEnum,
} from './comms-button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Comms / Button',
  component: CommsButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CommsButtonComponent> = (args: CommsButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Share',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Cancel',
};

export const Small = Template.bind({});
Small.args = {
  size: CommsButtonSizeEnum.SMALL,
  label: 'Cancel',
};

export const Large = Template.bind({});
Large.args = {
  size: CommsButtonSizeEnum.LARGE,
  label: 'Cancel',
};

export const Block = Template.bind({});
Block.args = {
  primary: true,
  size: CommsButtonSizeEnum.BLOCK,
  label: 'Login',
};

export const Icon = Template.bind({});
Icon.args = {
  size: CommsButtonSizeEnum.SMALL,
  icon: 'more_horiz',
};

export const LabelIcon = Template.bind({});
LabelIcon.args = {
  label: 'Home',
  icon: 'home',
};

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Text.args = {
  label: 'Recover password',
  text: true,
};
