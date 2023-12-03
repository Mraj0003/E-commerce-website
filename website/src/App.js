import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/checkout";
import LoginPg from "./LoginPg/LoginPg";
import Payment from "./Payment/Payment";
import Product_View from "./Views/Product_View";
import AdminPage from "./AdminPage/AdminPage";
import Register from "./AdminPage/Register/Register";
import ProductPage from "./AdminPage/ProductPage/ProductPage";
import AdminLoginPg from "./AdminPage/AdminloginPg/AdminLoginPg";
import ProductView from "./AdminPage/Views/ProductView";
import HeadPhone from "./AdminPage/Views/HeadPhone";
import PowerBank from "./AdminPage/Views/PowerBank";
import USBcable from "./AdminPage/Views/USBcable";
import MobilePhone from "./AdminPage/Views/MobilePhone";
import AdminUsers from "./AdminPage/Views/AdminUsers";
import ProductUpdate from "./AdminPage/ProductUpdate/ProductUpdate";
import MobilePhoneUPdate from "./AdminPage/ProductUpdate/MobilePhoneUPdate";
import HeadPhoneUpdate from "./AdminPage/ProductUpdate/HeadPhoneUpdate";
import SmartSwitchUpdate from "./AdminPage/ProductUpdate/SmartWatchUpdate";
import PowerBankUpdate from "./AdminPage/ProductUpdate/PowerBankUpdate";
import USBcableUpdate from "./AdminPage/ProductUpdate/USBcableUpdate";
import MobileCoverView from "./AdminPage/Views/MobileCoverView";
import MobileCoverUpdate from "./AdminPage/ProductUpdate/MobileCoverUpdate";
import SmartWatch from "./AdminPage/Views/SmartWatch";
import OfferLatestProduct from "./AdminPage/OfferLatestProduct/OfferLatestProduct";
import UserUpdate from "./AdminPage/AdminUserUpdate/UserUpdate";
import LoadingSpiner from "./LoadingSpiner/LoadingSpiner";
import { useEffect, useState } from "react";
import ClientPgRegister from "./LoginPg/ClientPgRegister/ClientPgRegister";
import ClientLoginPg from "./AdminPage/Views/ClientLoginPg";
import ClientLoginPgUpdate from "./AdminPage/AdminUserUpdate/ClientLoginPg/ClientLoginPgUpdate";
import ProductInfo from "./ProductInfor/ProductInfo";
import AllProduct from "./AdminPage/Views/AllProduct";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [email, setEmail] = useState("Guest");
  const [Username, setUsername] = useState("Guest");

  const simulateApiCall = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    simulateApiCall();
  }, []);

  return (
    <div>
      {isLoading && <LoadingSpiner />}

      <Router>
        <div className="container-fluid App">
          <Switch>
            <Route
              path="/ClientPgLogin"
              element={<LoginPg email={email} setEmail={setEmail} />}
            />
            <Route path="/ClientPgRegister">
              {" "}
              <ClientPgRegister />{" "}
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>

            <Route path="/Payment">
              <Header />
              <Payment />
            </Route>
            <Route path="/Product_View">
              <Header />
              <Product_View />
            </Route>
            <Route path="/AllProductView">
              <Header />
              <AllProduct />
            </Route>
            <Route path="/ProductInfo/:id">
              <Header />
              <ProductInfo />
            </Route>
            <Route path="/AdminPage">
              <AdminPage />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/AdminLoginPg">
              <AdminLoginPg />
            </Route>
            <Route path="/ClientLoginPgView">
              <ClientLoginPg />
            </Route>
            <Route path="/ProductPage">
              <ProductPage />
            </Route>
            <Route path="/ProductView">
              <ProductView />
            </Route>
            <Route path="/HeadPhoneView">
              <HeadPhone />
            </Route>
            <Route path="/PowerBankView">
              <PowerBank />
            </Route>
            <Route path="/SmartWatchView">
              <SmartWatch />
            </Route>
            <Route path="/USBcableView">
              <USBcable />
            </Route>
            <Route path="/MobilePhoneView">
              <MobilePhone />
            </Route>
            <Route path="/AdminUsers">
              <AdminUsers />
            </Route>
            <Route path="/OfferLatestProduct">
              <OfferLatestProduct />
            </Route>
            <Route path="/MobileCoverView">
              <MobileCoverView />
            </Route>
            <Route path="/MobilePhoneUPdate/:id">
              <MobilePhoneUPdate />
            </Route>
            <Route path="/MobileCoverUpdate/:id">
              <MobileCoverUpdate />
            </Route>
            <Route path="/HeadPhoneUpdate/:id">
              <HeadPhoneUpdate />
            </Route>
            <Route path="/ProductUpdate/:id">
              <ProductUpdate />
            </Route>
            <Route path="/PowerBankUpdate/:id">
              <PowerBankUpdate />
            </Route>
            <Route path="/USBcableUpdate/:id">
              <USBcableUpdate />
            </Route>
            <Route path="/SmartWatchUpdate/:id">
              <SmartSwitchUpdate />
            </Route>
            <Route path="/AdminUsersUpdate/:id">
              <UserUpdate />
            </Route>
            <Route path="/ClientLoginPgUpdate/:id">
              <ClientLoginPgUpdate />
            </Route>
            <Route path="/">
              <Header email={email} setEmail={setEmail} />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
