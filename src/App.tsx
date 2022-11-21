import Layout from './components/Layout'
import Content from './components/Content'

export const board = [
  ['md', 'md', 'lg', 'md', 'md'],
  ['md', 'sm', 'md'],
  ['lg', 'md', 'sm', 'md', 'md'],
  ['md', 'md', 'sm', 'md'],
  ['lg', 'md', 'sm', 'md', 'md'],
  ['md', 'md', 'sm', 'md'],
]

function App() {
  return (
    <Layout>
      <Content content={board} />
    </Layout>
  )
}

export default App
