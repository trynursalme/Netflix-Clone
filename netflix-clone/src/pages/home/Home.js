import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import RowList from '../../components/Rows/RowList/RowList';
import Row from '../../components/Rows/Row/Row';

const Home = () => {
  return (
    <div>
            <Header/>
            <Banner/>
            <Row/>
            <RowList/>
            <Footer/>
    </div>
  )
}

export default Home