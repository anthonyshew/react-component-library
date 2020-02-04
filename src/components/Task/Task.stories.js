import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import Task from './Task'

//The component, the title I want it to have in Storybook, and the stuff to exclude because it's actually mock data and not a story.
//IMPORTANT NOTE: This needs to be a DEFAULT EXPORT so that storybook knows to use this as the top-level component.
export default {
    component: Task,
    title: 'Task',
    decorators: [withKnobs, withA11y],
    //Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/
}

//Some mock data, it looks like this is going to be an actual task. We want to do this in one spot so we know that the action is the same no matter which permutation of the component is being used.
export const taskData = {
    id: '1',
    title: 'Test Task',
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0)
}

//Mock actions for the component. We want to do this in one spot so we know that the action is the same no matter which permutation of the component is being used.
export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask')
}

//The below components will show up as different permutation of the same component in storybook
export const Default = () => <Task task={object('task', { ...taskData })} {...actionsData} />;

export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />

export const Archived = () => <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />