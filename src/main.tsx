//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Homepage from './pages/homepage/index.tsx'
import Library from './pages/libpage/index.tsx'
import Videos from './pages/vidpage/index.tsx'
import { Route, Routes, BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Homepage />} />
          <Route path='lib' element={<Library />} />
          <Route path='vid' element={<Videos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
)
