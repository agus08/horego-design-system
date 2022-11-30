import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Badge, { BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => <Badge {...args} >Design System</Badge>;

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  variant: 'success'
};