import React from 'react';
import { Head } from "../Head";
import { Footer } from '../Footer';
import { UserOrder } from './UserOrder'



const History = () => {
  return (
    <ul>
    <Head />
    <UserOrder />      
    <Footer />
    </ul>
  );
}

export default History;