import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BackgroundDimmer from './BackgroundDimmer'

const closeParent = (e) => {
    //Removes component from it's container and destroys container
    cleanup()
}

test('Background dimmer has click to close background', () => {
    const { getByTestId, queryByTestId } = render(<BackgroundDimmer closeParent={closeParent} />)
    fireEvent.click(getByTestId('background-dimmer'))
    expect(queryByTestId('background-dimmer')).toBeNull()
})