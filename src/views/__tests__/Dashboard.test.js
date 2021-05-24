import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { wrapper } from '../../utils/testHelper'
import Dashboard from '../Dashboard'

it('renders <Dashboard /> component without error', () => {
  const component = renderer.create(
    wrapper(<Dashboard />)
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})