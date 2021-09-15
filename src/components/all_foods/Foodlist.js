import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '200vh',
    'fontFamily': 'inter, sans-serif',
    '@media (max-width: 850px)': {
      marginRight: '15px',
    },
  },
  menu_section: {
    position: 'sticky',

    top: 50,
    alignSelf: 'flex-start',
    flex: 2.5,
    // left: 0,
    '& h1:nth-child(1)': {
      color: 'red',
    },
    border: '1px solid red',
    width: '300px',
    //maxHeight: '80vh',
  },
  food_list: {
    border: '1px solid red',
    flex: 5,

    //  marginLeft: '300px',
    //  marginRight: '300px',
  },
  cart: {
    border: '1px solid red',
    position: 'sticky',

    alignSelf: 'flex-start',
    top: 50,
    // right: 0,
    maxHeight: '80vh',
    flex: 2.5,
  },
}));

export default function Foodlist() {
  const { root, menu_section, food_list, cart } = useStyles();
  return (
    <div className={root}>
      <div className={menu_section}>
        <h1>Menu</h1>
        <ul>
          <li>Fried Rice</li>
          <li>Side Orders</li>
          <li>Chinese Plates</li>
        </ul>
        <h1>Overview</h1>
      </div>
      <div className={food_list}>
        <input></input>
        Webflow home University Courses Lessons Contact 101 crash course Try
        Webflow — it's free Back to all lessons Lesson library All lessons
        Creating a sticky sidebar Creating a sticky sidebar Create a sticky
        sidebar using position sticky. In this lesson: Using position sticky
        Troubleshooting position sticky Setting position sticky Position sticky
        alternates the position of an element between relative and fixed based
        on the viewer’s scroll position. A sticky element is relative to the
        document flow until a defined scroll position is reached, then it
        switches to behaving like a fixed element within its direct parent.
        Once, the sticky element hits the bottom of its parent, it doesn’t
        scroll past it. Position sticky Style panel → Position → Position →
        Sticky With the sidebar selected, apply position sticky in the Style
        panel. You'll notice that if you scroll, the sidebar doesn't stick! It
        remains in its natural place in the document flow. That's because we
        didn't define a distance yet. You must specify at least one position
        value for the top, bottom, left, or right side for sticky positioning to
        work. This depends on where your element is positioned within the parent
        and how you're scrolling, vertically or horizontally. Define a distance
        from the top. Set the top value to 0px if you want the sidebar to stick
        to the top of the page, or set another value, say 30px, to make it stick
        to the top of the page with a distance of 30px from the top. Now, when
        you scroll, the sidebar should stick to the page as long as you're
        scrolling within the container, the direct parent, of the sidebar.
        Troubleshooting position sticky Sometimes, position sticky won't work
        even though you've set the position to sticky and defined a distance
        value for one of the sides of the element. That can happen for many
        reasons: Position sticky will most probably not work if overflow is set
        to hidden, scroll, or auto on any of the parents of the element.
        Position sticky may not work correctly if any parent element has a set
        height. Many browsers still do not support sticky positioning. Check out
        which browsers support position: sticky. Position sticky may also not
        work if the position distance value is set on a side that isn't affected
        by the scrolling. For example, if you set the distance on the left or
        right, and you're scrolling through the page vertically, the element
        won't stick. Another example would be if you've set a distance to the
        bottom, for instance, instead of the top and your element is aligned to
        the top of the parent — it's either the first element in the parent or
        aligned to the top with flex or grid alignment settings. Sticky to the
        bottom To keep the sidebar sticking to the bottom of the page, define a
        bottom value and change the alignment of the sidebar if it's a flex
        child or a grid child. ‍ ‍ Share Try Webflow — it's free Was this lesson
        helpful? Let us know! Yes, thanks! Sort of, thanks! Not really Got a
        lesson suggestion? Let us know Need more help? Want to report a bug?
        Contact support Have feedback on the feature? Submit feature feedback
        Community forum Share and get help from our active community. Contact
        support We're available Monday–Friday, 6 a.m.–6 p.m. PT. home © 2021
        Webflow, Inc. All rights reserved. Product Designer Interactions CMS
        Ecommerce Editor Hosting SEO Accessibility Pricing Enterprise Templates
        Feature Index Company About Careers We're hiring! Press Accessibility
        Statement Merch Store Terms of Service Privacy Policy Cookie Policy
        Cookie Preferences Sitemap Become an Affiliate Learn & Get help Courses
        Webflow 101 Blog Ebooks Forum Community Hire an Expert Customers Webflow
        vs. WordPress No Code Movement Status Support Wishlist Inspiration
        Social YouTube Twitter Facebook Instagram TikTok
      </div>
      <div className={cart}>
        <h1>Your cart</h1>
      </div>
    </div>
  );
}
