
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import './App.css'
import LinkBox from './Pages/LinkBox'
import Layout from './Layout/Layout'
import YouBox from './Pages/YouBox'
import FaceBox from './Pages/FaceBox'
import InstaBox from './Pages/InstaBox'
import Downloader from './Pages/Downloader'
function App() {
  const router= createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Layout/>}>
      <Route index element={<LinkBox/>}></Route>
      <Route path='/youtubedownload' element={<YouBox/>} ></Route>
      <Route path='/linkedIndownload' element={<LinkBox/>}></Route>
      <Route path='/facebookdownload' element={<FaceBox/>}></Route>
      <Route path='/instagramdownload' element={<InstaBox/>}></Route>
      <Route path='/alldownload' element={<Downloader/>}></Route>
      </Route>
      </>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
