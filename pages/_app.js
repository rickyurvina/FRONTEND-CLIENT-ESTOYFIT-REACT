import '../public/assets/styles/bootstrap.min.css';
import '../public/assets/styles/fontawesome.min.css';
import '../public/assets/styles/animate.min.css';
import '../public/assets/styles/slick.css';
import '../public/assets/styles/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../public/assets/styles/style.css';
import '../public/assets/styles/responsive.css';
import '../public/assets/styles/HowDoes.css';
import '../public/assets/styles/blog.css';
import '../public/assets/styles/CalculateIMM.css';
import '../public/assets/styles/Centers.css'
import '../public/assets/styles/Banner.css'
import '../public/assets/styles/Calendar.css'
import '../public/assets/styles/gym/banner.css'
import '../public/assets/styles/gym/info.css';
import '../public/assets/styles/gym/pass.css';
import 'react-slideshow-image/dist/styles.css';
import '../public/assets/styles/login.css';
import '../public/assets/styles/register.css'
import '../public/assets/styles/about-us/banner.css';
import '../public/assets/styles/about-us/info.css';
import '../public/assets/styles/about-us/benefits.css';
import '../public/assets/styles/about-us/contact.css';
import '../public/assets/styles/about-us/partners.css';
import '../public/assets/styles/profile/profile.css';
import '../public/assets/styles/about-us/whatsapp.css';
import '../public/assets/styles/about-us/about.css';
import '../public/assets/styles/activities.css';
import '../public/assets/styles/countdown.css';
import 'react-compound-timer';
import '../public/assets/styles/fq.css';
import 'react-slideshow-image/dist/styles.css';
import '../public/assets/styles/search/result.css';
import '../public/assets/styles/material.css';
import '../public/assets/styles/vacancies.css';
// DIEGO COMPONENT SLIDESHOW CSS.



import Layout from '../components/_App/Layout';
import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
import { useStore } from '../store/reducers/reducers';
import { PersistGate } from 'redux-persist/integration/react';

const MyApp = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState)
    return (
        <Layout>
            <PersistGate persistor={store.__PERSISTOR} loading={null}>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </PersistGate>
        </Layout>
    );
}

export default MyApp