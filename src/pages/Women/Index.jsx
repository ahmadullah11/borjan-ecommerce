import { Routes,Route } from 'react-router'


import SlippersProductDetail from "./Slippers/SlippersProductDetail";
import SlippersQuickAddModel from "./Slippers/SlippersQuickAddModel";
import SlippersShoppingCart from "./Slippers/SlippersShoppingCart";
import WomenSlippers from "./Slippers/slipperwomen";
import Sandalswomen from "./sandals/Sandalswomen";
import SandalsProductDetail from "./sandals/sandalsProductDetail";
import SandalsQuickAddModel from "./sandals/SandalsQuickAddModel";
import SandalsShoppingCart from "./sandals/SandalsShoppingCart";
import HeelsProductDetail from "./heels/HeelsProductDetail";
import HeelsQuickAddModel from "./heels/HeelsQuickAddModel";
import HeelsShoppingCart from "./heels/HeelsShoppingCart";
import Heelswomen from "./heels/Heelswomen";
import ChappalsWomen from "./chappals/ChappalsWomen";
import ChappalsProductDetail from "./chappals/ChappalsProductDetail";
import ChappalsQuickAddModel from "./chappals/ChappalsQuickAddModel";
import ChappalsShoppingCart from "./chappals/ChappalsShoppingCart";
import CourtShoesWomen from "./courtShoes/CourtShoesWomen";
import CourtShoesProductDetail from "./courtShoes/CourtShoesProductDetail";
import CourtShoesQuickAddModel from "./courtShoes/CourtShoesQuickAddModel";
import CourtShoesShoppingCart from "./courtShoes/CourtShoesShoppingCart";
import SkywalkWomen from "./skywalk/SkywalkWomen";
import SkywalkProductDetail from "./skywalk/SkywalkProductDetail";
import SkywalkQuickAddModel from "./skywalk/SkywalkQuickAddModel";
import SkywalkShoppingCart from "./skywalk/SkywalkShoppingCart";
import SneakersWomen from "./sneakers/SneakersWomen";
import SneakersProductDetail from "./sneakers/SneakersProductDetail";
import SneakersQuickAddModel from "./sneakers/SneakersQuickAddModel";
import SneakersShoppingCart from "./sneakers/SneakersShoppingCart.jsx";
import PumpsWomen from "./pumps/PumpsWomen.jsx";
import PumpsProductDetail from "./pumps/PumpsProductDetail.jsx";
import PumpsQuickAddModel from "./pumps/PumpsQuickAddModel.jsx";
import PumpsShoppingCart from "./pumps/PumpsShoppingCart.jsx";
import MoccasinsWomen from "./moccasins/MoccasinsWomen.jsx";
import MoccasinsProductDetail from "./moccasins/MoccasinsProductDetail.jsx";
import MoccasinsQuickAddModel from "./moccasins/MoccasinsQuickAddModel.jsx";
import MoccasinsShoppingCart from "./moccasins/MoccasinsShoppingCart";


const Index = () => {
  return (
    <>
    <Routes>
    <Route path="/slipperwomen" element={<WomenSlippers />} />
            <Route path="/SlippersProductDetail" element={<SlippersProductDetail />} />
            <Route path="/SlippersQuickAddModel" element={<SlippersQuickAddModel />} />
            <Route path="/SlippersShoppingCart" element={<SlippersShoppingCart />} />


            <Route path="/sandalswomen" element={<Sandalswomen />} />
            <Route path="/SandalsProductDetail" element={<SandalsProductDetail />} />
            <Route path="/SandalsQuickAddModel" element={<SandalsQuickAddModel />} />
            <Route path="/SlippersShoppingCart" element={<SandalsShoppingCart />} />

            <Route path="/heelswomen" element={<Heelswomen />} />
            <Route path="/HeelsProductDetail" element={<HeelsProductDetail />} />
            <Route path="/HeelsQuickAddModel" element={<HeelsQuickAddModel />} />
            <Route path="/HeelsShoppingCart" element={<HeelsShoppingCart />} />

            <Route path="/chappalswomen" element={<ChappalsWomen />} />
            <Route path="/ChappalsProductDetail" element={<ChappalsProductDetail />} />
            <Route path="/ChappalsQuickAddModel" element={<ChappalsQuickAddModel />} />
            <Route path="/HeelsShoppingCart" element={<ChappalsShoppingCart />} />

            <Route path="/court-shoeswomen" element={<CourtShoesWomen />} />
            <Route path="/CourtShoesProductDetail" element={<CourtShoesProductDetail />} />
            <Route path="/CourtShoesQuickAddModel" element={<CourtShoesQuickAddModel />} />
            <Route path="/CourtShoesShoppingCart" element={<CourtShoesShoppingCart />} />

            <Route path="/Skywalkwomen" element={<SkywalkWomen />} />
            <Route path="/SkywalkProductDetail" element={<SkywalkProductDetail />} />
            <Route path="/SkywalkQuickAddModel" element={<SkywalkQuickAddModel />} />
            <Route path="/SkywalkShoppingCart" element={<SkywalkShoppingCart />} />

            <Route path="/sneakerswomen" element={<SneakersWomen />} />
            <Route path="/SneakersProductDetail" element={<SneakersProductDetail />} />
            <Route path="/SneakersQuickAddModel" element={<SneakersQuickAddModel />} />
            <Route path="/SneakersShoppingCart" element={<SneakersShoppingCart />} />

            {/* <Route path="/PumpsIndex" element={<PumpsIndex />} /> */}

            <Route path="/pumpswomen" element={<PumpsWomen />} />
            <Route path="/PumpsProductDetail" element={<PumpsProductDetail />} />
            <Route path="/PumpsQuickAddModel" element={<PumpsQuickAddModel />} />
            <Route path="/PumpsShoppingCart" element={<PumpsShoppingCart />} />

            <Route path="/moccasinswomen" element={<MoccasinsWomen />} />
            <Route path="/MoccasinsProductDetail" element={<MoccasinsProductDetail />} />
            <Route path="/MoccasinsQuickAddModel" element={<MoccasinsQuickAddModel />} />
            <Route path="/MoccasinsShoppingCart" element={<MoccasinsShoppingCart />} />
            </Routes>
             
    </>
  )
}

export default Index