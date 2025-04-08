import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { ThemeProvider } from './context';
import { CityPage, WeatherDashboard } from './pages';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Layout>
          <Routes>
            <Route path='/' element={<WeatherDashboard />} />
            <Route path='/city/:cityName' element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
