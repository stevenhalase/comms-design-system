import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CommsButtonComponent } from '../comms-button/comms-button.component';
import { CommsNavigationComponent } from './comms-navigation.component';

export default {
  title: 'Comms / Navigation',
  component: CommsNavigationComponent,
  subcomponents: CommsButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [CommsNavigationComponent, CommsButtonComponent],
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

export const Default = Template.bind({});
Default.args = {
  menuItems: [
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
  ],
};
