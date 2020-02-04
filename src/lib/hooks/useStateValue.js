import { useContext } from 'react'
import { StateContext } from '../../components/lib/StateProvider'

export const useStateValue = () => useContext(StateContext)