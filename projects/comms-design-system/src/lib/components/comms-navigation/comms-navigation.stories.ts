import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { components } from '..';
import { CommsNavigationComponent } from './comms-navigation.component';

export default {
  title: 'Comms / Navigation',
  component: CommsNavigationComponent,
  decorators: [
    moduleMetadata({
      declarations: [...components],
      imports: [CommonModule],
    }),
  ],
  argTypes: {},
} as Meta;

const Template: Story<CommsNavigationComponent> = (
  args: CommsNavigationComponent
) => ({
  props: args,
});

const menuItems = [
  {
    label: 'Home',
    icon: 'home',
    link: './',
    active: true,
  },
  {
    label: 'Messages',
    icon: 'forum',
    link: './',
    active: false,
  },
  {
    label: 'Call',
    icon: 'phone',
    link: './',
    active: false,
  },
  {
    label: 'Devices',
    icon: 'devices',
    link: './',
    active: false,
  },
];

export const Default = Template.bind({});
Default.args = {
  menuItems,
};
