import {useEffect} from 'react'

//Component
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';


import {styled, Box} from '@mui/material'

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector} from 'react-redux';

const Component = styled(Box)`
    padding: 8px;
    background: #F2F2F2;
`

const Home = () => {

  const { products } = useSelector(state => state.getProducts);

  console.log(products);

  const dispatch = useDispatch(); 

  useEffect(() => {
      dispatch(getProducts())
  },[dispatch])

  return (
    <>
    <NavBar />
    <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Discount for You" timer={false}/>
        <Slide products={products} title="Syggested Items" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season's top picks"/>
        <Slide products={products} title="Top Deals on AccessoriesVIEW"/>
    </Component>
    </>
  )
}

export default Home