import { AppRouter } from './Router'
import { NotificationProvider } from './context/notifiaction.context'

function App() {

  return (
    <NotificationProvider>
      <AppRouter />
    </NotificationProvider>
  )
}

export default App
