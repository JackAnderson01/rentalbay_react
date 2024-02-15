import StoreContainer from "../components/AllProducts/StoreContainer";
import UserContainer from "../components/AllProducts/UserContainer";
import MyProductsContainer from "../components/MyProducts/MyProductsContainer";
import ChangePassForm from "../components/auth/ChangePass/ChangePassForm";
import LoginForm from "../components/auth/Login/LoginForm";
import PasswordUpdateNotifier from "../components/auth/PasswordUpdated/PasswordUpdateNotifier";
import RegisterForm from "../components/auth/Register/RegisterForm";
import VerifyEmailForm from "../components/auth/VerifyEmail/VerifyEmailForm";
import VerifyEmailOtp from "../components/auth/VerifyEmailOtp/VerifyEmailOtpForm";
import VerifyOtpForm from "../components/auth/VerifyOtp/VerifyOtpForm";
import Chat from "../pages/Chat";
import ContactSupport from "../pages/ContactSupport";
import EditProduct from "../pages/EditProduct";
import Home from "../pages/Home";
import PostProduct from "../pages/PostProduct";
import Privacy from "../pages/Privacy";
import ProductDescription from "../pages/ProductDescription";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Terms from "../pages/Terms";

export const loginRoutes = [
    {
        'name': 'Login',
        'url' : '/login',
        'page': <LoginForm />
    },
    {
        'name': 'Register',
        'url' : '/register',
        'page': <RegisterForm />
    },
    {
        'name': 'Change Password',
        'url' : '/change-password',
        'page': <ChangePassForm />
    },
    {
        'name': 'Password Updated',
        'url' : '/password-updated',
        'page': <PasswordUpdateNotifier />
    },
    {
        'name': 'Verify Email',
        'url' : '/verify-email',
        'page': <VerifyEmailForm />
    },
    {
        'name': 'Verify Otp',
        'url' : '/verify-otp',
        'page': <VerifyOtpForm />
    },
    {
        'name': 'Verify Email Otp',
        'url' : '/verify-email-otp',
        'page': <VerifyEmailOtp />
    },
]


export const viewAllRoutes = [
    {
        'name': 'New Arrival Products',
        'url' : '/user-products',
        'page': <UserContainer />
    },
    {
        'name': 'Store Products',
        'url' : '/store-products',
        'page': <StoreContainer />
    },
]


export const normalRoutes = [
    {
        'name': 'Home',
        'url' : '/home',
        'page': <Home />
    },
    {
        'name': 'Post Products',
        'url' : '/post-product',
        'page': <PostProduct />
    },
    {
        'name': 'Update Products',
        'url' : '/update-product/:id',
        'page': <EditProduct />
    },
    {
        'name': 'Cart',
        'url' : '/cart',
        'page': <EditProduct />
    },
    {
        'name': 'Chats',
        'url' : '/chats',
        'page': <Chat />
    },
    {
        'name': 'Product Description',
        'url' : '/products/:id',
        'page': <ProductDescription />
    },
    
]


export const profileRoutes = [
    {
        'name': 'My Profile',
        'url' : '/profile',
        'page': <Profile />
    },
    {
        'name': 'My Products',
        'url' : '/my-products',
        'page': <MyProductsContainer />
    },
    {
        'name': 'Contact Support',
        'url' : '/contact-support',
        'page': <ContactSupport />
    },
    {
        'name': 'Settings',
        'url' : '/settings',
        'page': <Settings />
    },
    {
        'name': 'Terms & Conditions',
        'url' : '/terms-and-conditions',
        'page': <Terms />
    },
    {
        'name': 'Privacy Policy',
        'url' : '/privacy-policy',
        'page': <Privacy />
    },
    
    
    
    
]