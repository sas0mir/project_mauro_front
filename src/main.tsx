//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Homepage from './pages/homepage/index.tsx'
import Library from './pages/libpage/index.tsx'
import Videos from './pages/vidpage/index.tsx'
import { Route, Routes, BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import Settingspage from './pages/settings/index.tsx'

const baseUrl = import.meta.env.VITE_RELATIVE_BASE_URL;

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/project_mauro_front/' element={<App/>}>
          <Route index element={<Homepage />} />
          <Route path={`${baseUrl}/lib`} element={<Library />} />
          <Route path={`${baseUrl}/vid`} element={<Videos />} />
          <Route path={`${baseUrl}/settings`} element={<Settingspage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
)
