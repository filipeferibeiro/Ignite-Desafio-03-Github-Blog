import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  )
}
