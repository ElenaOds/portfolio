import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';


const Layout = () => {
    return (       
    <div display="grid" gridtemplaterows="300px 1fr">
        <Header />
        <main>
         <Suspense fallback={<Loader />}> 
            <Outlet />
         </Suspense> 
        </main>
        <Footer />
    </div>
    );
};

export default Layout;