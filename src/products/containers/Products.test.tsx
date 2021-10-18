import { render, screen, waitFor } from '../../utils/test-utils'
import { setupServer } from 'msw/node'
import { handlers } from '../../mocks/handlers'
import { Products } from './Products'

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Products', () => {
  it('Check product list item count', async () => {
    render(<Products />)

    await waitFor(() =>
      expect(screen.getAllByTestId('card-product').length).toBe(1000)
    )
  })
})
