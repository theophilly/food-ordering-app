import React from 'react';
import Resturantdetail from '../components/all_foods/Resturantdetail';
import Foodlist from '../components/all_foods/Foodlist';
import Dgg from '../components/all_foods/Dgg';

export default function Allfoods() {
  return (
    <div>
      <Resturantdetail />
      <Foodlist />
      <Dgg />
    </div>
  );
}
