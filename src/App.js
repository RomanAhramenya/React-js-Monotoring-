
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import RightBar from './Components/RightBar/RightBar';
import baner1 from './Components/image/baner1.png'
import MainContent from './Components/Content/MainContent/MainContent';
import NewsContent from './Components/Content/NewsContent/NewsContent';
import ApiCript from './Components/ApiCript/ApiCript';
import ApiAll from './Components/Content/ApiAll/ApiAll';
import Fast from './Components/Content/Fast/Fast';
import Scam from './Components/Content/Scam/Scam'
import Bottom from './Components/Content/Bottom/Bottom';
import Middle from './Components/Content/Midl/Midl';
function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header state={props.state.headerNavBar}/>
        <ApiCript api={props.state.api} fun={props.state.requestApi}/>
        <div className='Baner'>
          <a href='http://googl.com' rel="noreferrer" target='_blank'><img src={baner1} alt=''/></a>
        </div>
        <RightBar state={props.state.Projects} />
        <div className='Content'> 
          <Route path='/project' render={()=><Content Content={props.state.Projects}/>}/>
          <Route path='/main' render={()=> <MainContent  state={props.state.Projects}/>}/>
          <Route path='/fast' render={()=> <Fast state={props.state.Projects}/>}/>
          <Route path='/scam' render={()=> <Scam state={props.state.Projects} />}/>
          <Route path='/midl' render={()=> <Middle state={props.state.Projects} />}/>
          <Route path='/bottom' render={()=> <Bottom state={props.state.Projects} />}/>
          <Route path='/news' render={()=><NewsContent state={props.state.News.newsContentAll}/>}/>
          <Route path='/cripta' render={()=><ApiAll api={props.state.apiAll} fun={props.state.requestApi} />}/>
        </div>
        <News state={props.state.News.NewsLeftBar}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
