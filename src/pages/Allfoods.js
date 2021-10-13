import React from 'react';
import Resturantdetail from '../components/all_foods/Resturantdetail';
import Foodlist from '../components/all_foods/Foodlist';
import Navbar from '../components/reusables/Navbar';

export default function Allfoods() {
  return (
    <div>
      <Resturantdetail />
      <Foodlist />
    </div>
  );
}
