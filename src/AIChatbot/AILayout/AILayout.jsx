import { Outlet } from 'react-router-dom';
import ChatbotWidget from '../ChatbotWidget';// import Navbar from '../components/Navbar';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
// import Footer from '../components/Footer';
// import ChatbotWidget from '../AIChatbot/ChatbotWidget'; // এখানে বসান

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            {/* Router Provider এর ভেতরে থাকায় useNavigate কাজ করবে */}
            <ChatbotWidget />
        </div>
    );
};

export default MainLayout;