
import './App.css';
import ListMenu from './components/ListMenu';



function App() {

  const food = [{
    "type": "อาหารคาว",
    "name": "ผัดซีอิ้ว",
    "img": "https://s359.kapook.com/pagebuilder/1958331d-f82e-47eb-9bf3-8b7124e5c330.jpg",
    "detail": "amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum"
  
   }, {
    "type": "อาหารหวาน",
    "name": "ไอศครีม",
    "img": "https://st-th-1.byteark.com/assets.punpro.com/cover-contents/i8594/1586252907104-Nestle_Brownie.png",
    "detail": "ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla"
  }
]

  return (
    <div className="App">
      <div className="App-header">
       <h1>โหวตอาหาร</h1>
      </div>

      <div className='menu-container'>
        <ListMenu data={food}/>
      </div>
    </div>
  );
}

export default App;