import './scss/npay_global.scss';
import '@defign/ui/dist/defign.css';
import { Routes, Route} from "react-router-dom";
import Wrap from './components/Warp';
import IntroPage from './pages/IntroPage';
import SmsPage from './pages/SmsPage';
import PersonalPage from './pages/PersonalPage';
import ListPage from './pages/ListPage';
import CertPage from './pages/CertPage';
import LoadingPage from './pages/LoadingPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Wrap>
      <Routes>
        <Route path="/" element={<IntroPage />}/>
        <Route path="/sms" element={<SmsPage />}/>
        <Route path="/personal" element={<PersonalPage />}/>
        <Route path="/list" element={<ListPage />}/>
        <Route path="/cert" element={<CertPage />}/>
        <Route path="/loading" element={<LoadingPage />}/>
        <Route path="/product" element={<ProductPage />}/>
        <Route path="/product/id" element={<ProductDetailPage />}/>
      </Routes>
    </Wrap>
  );
}

export default App;
