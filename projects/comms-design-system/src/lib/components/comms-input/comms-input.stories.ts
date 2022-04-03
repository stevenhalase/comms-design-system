// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommsInputComponent } from './comms-input.component';

export default {
  title: 'Comms / Input',
  component: CommsInputComponent,
  argTypes: {},
} as Meta;

const Template: Story<CommsInputComponent> = (args: CommsInputComponent) => ({
  props: args,
});

export const Text = Template.bind({});
Text.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: 'First Name',
  placeholder: 'Enter your name',
};

export const Label = Template.bind({});
Label.args = {
  label: 'Username',
};

export const Value = Template.bind({});
Value.args = {
  label: 'Username',
  value: 'korengali',
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'First Name',
  placeholder: 'Enter your name',
  icon: 'person',
};
