//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Homepage from './pages/homepage/index.tsx'
import Library from './pages/libpage/index.tsx'
import Videos from './pages/vidpage/index.tsx'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import Settingspage from './pages/settings/index.tsx'
import Loginpage from './pages/login/index.tsx'
import Cabinet from './pages/cabinet/index.tsx'
import Groups from './pages/groups/index.tsx'
import Friends from './pages/friends/index.tsx'
import Messages from './pages/messages/index.tsx'

const baseUrl = import.meta.env.VITE_RELATIVE_BASE_URL;

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/project_mauro_front/"
          element={<Navigate to="/project_mauro_front/main" replace />}
        />
        <Route path='/project_mauro_front/' element={<App/>}>
          <Route index path={`${baseUrl}/`} element={<Homepage />} />
          <Route path={`${baseUrl}/groups`} element={<Groups />} />
          <Route path={`${baseUrl}/friends`} element={<Friends />} />
          <Route path={`${baseUrl}/messages`} element={<Messages />} />
          <Route path={`${baseUrl}/lib`} element={<Library />} />
          <Route path={`${baseUrl}/vid`} element={<Videos />} />
          <Route path={`${baseUrl}/settings`} element={<Settingspage />} />
          <Route path={`${baseUrl}/login`} element={<Loginpage />} />
          <Route path={`${baseUrl}/cabinet`} element={<Cabinet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
)
