import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { components } from '..';
import { CommsSignUpComponent } from './comms-sign-up.component';

export default {
  title: 'Comms / SignUp',
  component: CommsSignUpComponent,
  decorators: [
    moduleMetadata({
      declarations: [...components],
      imports: [CommonModule, ReactiveFormsModule],
    }),
  ],
  argTypes: {},
} as Meta;

const Template: Story<CommsSignUpComponent> = (args: CommsSignUpComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
