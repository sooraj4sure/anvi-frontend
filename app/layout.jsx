import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import ShopContextProvider from '../context/ShopContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'Anvi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShopContextProvider>
          <div className='px-1 sm:px-[1vw] md:px-[2vw] lg:px-[2vw] '>
            <ToastContainer />
            <Navbar />
            <SearchBar />
            {children}
            <Footer />
          </div>
        </ShopContextProvider>
      </body>
    </html>
  );
}
