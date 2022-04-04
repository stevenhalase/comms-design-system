import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { components } from '..';
import { CommsLoginComponent } from './comms-login.component';

export default {
  title: 'Comms / Login',
  component: CommsLoginComponent,
  decorators: [
    moduleMetadata({
      declarations: [...components],
      imports: [CommonModule, ReactiveFormsModule],
    }),
  ],
  argTypes: {},
} as Meta;

const Template: Story<CommsLoginComponent> = (args: CommsLoginComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
