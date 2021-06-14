import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import AuthModal from "./components/auth/AuthModal";
import PrivateRoute from "./components/PrivateRoute";
import BillingAddress from "./pages/account/BillingAddress";
import Disputes from "./pages/account/Disputes";
import MyAccount from "./pages/account/MyAccount";
import MyContacts from "./pages/account/MyContacts";
import MyCoupons from "./pages/account/MyCoupons";
import MyOrders from "./pages/account/MyOrders";
import MyWishlist from "./pages/account/MyWishlist";
import ShippingAddress from "./pages/account/ShippingAddress";
import Campaign from "./pages/Campaign";
import Checkout from "./pages/Checkout";
import DigitalSheba from "./pages/DigitalSheba";
import Home from "./pages/Home";
import Invoice from "./pages/invoice";
import LittleBangladesh from "./pages/LittleBangladesh";
import MerchantForm from "./pages/MerchantForm";
import NotFound from "./pages/NotFound";
import PaymentFailed from "./pages/payment/PaymentFailed";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import ProductCompare from "./pages/product/ProductCompare";
import ProductDetails from "./pages/ProductDetails";
import SearchProduct from "./pages/SearchProduct";
import StoreDetails from "./pages/store/StoreDetails";
import VendorStoreDetails from "./pages/store/VendorStoreDetails";
import BecomeAVendor from "./pages/vendor/BecomeAVendor";
import VendorStore from "./pages/vendor/VendorStore";
import Wishlist from "./pages/Wishlist";
import store from "./redux/store";

function App() {
  const homePath = "/";
  return (
    <Provider store={store}>
      <Router>
        <AuthModal />
        <Switch>
          <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/">
            <Home />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/product/:id">
            <ProductDetails />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/search">
            <SearchProduct />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/product/:id">
            <ProductDetails />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/search">
            <SearchProduct />
          </Route>

          <PrivateRoute
            redirectTo={homePath}
            onUpdate={() => window.scrollTo(0, 0)}
            path="/checkout"
          >
            <Checkout />
          </PrivateRoute>

          <PrivateRoute
            redirectTo={homePath}
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/my-account"
          >
            <MyAccount />
          </PrivateRoute>
          <PrivateRoute
            redirectTo={homePath}
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/my-orders"
          >
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute
            redirectTo={homePath}
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/coupons"
          >
            <MyCoupons />
          </PrivateRoute>
          <PrivateRoute
            redirectTo={homePath}
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/wishlist"
          >
            <MyWishlist />
          </PrivateRoute>
          <PrivateRoute
            redirectTo={homePath}
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/disputes"
          >
            <Disputes />
          </PrivateRoute>
          <PrivateRoute
            redirectTo={homePath}
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/shipping-address"
          >
            <ShippingAddress />
          </PrivateRoute>
          <PrivateRoute
            redirectTo={homePath}
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/contacts"
          >
            <MyContacts />
          </PrivateRoute>
          <PrivateRoute
            redirectTo={homePath}
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/billing-address"
          >
            <BillingAddress />
          </PrivateRoute>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/merchant-apply">
            <MerchantForm />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/invoice/:id">
            <Invoice />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/campaign">
            <Campaign />
          </Route>

          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/vendor/become-a-vendor"
          >
            <BecomeAVendor />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/wishlist">
            <Wishlist />
          </Route>

          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/store/store-details"
          >
            <StoreDetails />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/vendor/store">
            <VendorStore />
          </Route>

          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/store/product/:id"
          >
            <VendorStoreDetails />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/compare">
            <ProductCompare />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/digital-sheba">
            <DigitalSheba />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/order-tracking">
            <DigitalSheba />
          </Route>

          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/little-bangladesh"
          >
            <LittleBangladesh />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/payment-success">
            <PaymentSuccess />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/payment-failed">
            <PaymentFailed />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
