import React from 'react';
import { Head } from "./Head";
import { Footer } from './Footer';
import { UserOrder } from './UserOrder'



const UserOrderPreview = () => {
  return (
    <ul>
    <Head />
    <UserOrder />      
    <Footer />
    </ul>
  );
}

export default UserOrderPreview;