import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Box } from '@mui/material';
import {Navibar,Feed,ChannelDetail,SearchDetail,VideoDetail} from './components'


export const App = () =>(
  <BrowserRouter>
  <Box sx={{backgroundColor: '#000'}}>
    <Navibar />
    <Routes>
      <Route path='/' exact element={<Feed/>} />
      <Route path='/video/:id' element={<VideoDetail />}/>
      <Route path='/channel/:id' element={<ChannelDetail/>}/>
      <Route path='/search/:searchTerm' element={<SearchDetail/>}/>
    </Routes>
  </Box>
  </BrowserRouter>
    
  );
export default App;