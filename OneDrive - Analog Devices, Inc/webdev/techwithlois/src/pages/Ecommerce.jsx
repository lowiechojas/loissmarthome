import React from 'react'
import ecommercedata from '../data/ecommerce.json'
import TopicDetailLayout from '../components/TopicDetailLayout';

const Ecommerce = () => {
  return <TopicDetailLayout data={ecommercedata} routePrefix="/ecommerce" />;
}

export default Ecommerce