import React from 'react';
import { action } from '@storybook/addon-actions'
import { Provider } from 'react-redux'

import { PureInboxScreen } from './InboxScreen';
import { defaultTasksData } from '../TaskList/TaskList.stories'

export default {
    component: PureInboxScreen,
    title: 'InboxScreen',
    decorators: [story => <Provider store={store}>{story()}</Provider>]
};

const store = {
    getState: () => {
        return {
            tasks: defaultTasksData,
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;