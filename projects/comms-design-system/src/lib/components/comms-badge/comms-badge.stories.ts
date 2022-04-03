// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {
  CommsBadgeComponent,
  CommsBadgeTypeEnum,
} from './comms-badge.component';

export default {
  title: 'Comms / Badge',
  component: CommsBadgeComponent,
  argTypes: {},
} as Meta;

const Template: Story<CommsBadgeComponent> = (args: CommsBadgeComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: '1',
};

export const Primary = Template.bind({});
Primary.args = {
  label: '1',
  type: CommsBadgeTypeEnum.PRIMARY,
};

export const Success = Template.bind({});
Success.args = {
  label: '1',
  type: CommsBadgeTypeEnum.SUCCESS,
};

export const Warning = Template.bind({});
Warning.args = {
  label: '1',
  type: CommsBadgeTypeEnum.WARNING,
};

export const Error = Template.bind({});
Error.args = {
  label: '1',
  type: CommsBadgeTypeEnum.ERROR,
};
