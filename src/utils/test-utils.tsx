import { render, RenderOptions } from '@testing-library/react'
import { store } from '../store'
import { Provider } from 'react-redux'

const AllTheProviders: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
