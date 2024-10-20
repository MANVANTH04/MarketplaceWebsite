import React from 'react';
import Navitem from './Navitem';

const Footer = () => {



    
  return (
    <div className="footer-container">
    <div className="footer-section">
        <h4>About Section</h4>
        <Navitem name="About Us"/>
        <Navitem name="How It Works"/>
        <Navitem name="Contact Us"/>
    </div>

    <div className="footer-section">
        <h4>User Info</h4>
        <Navitem name="My Account"/>
        <Navitem name="My Orders"/>
        <Navitem name="Wishlist"/>
        <Navitem name="Saved Items"/>
        <Navitem name="Profile Settings"/>
    </div>

    <div className="footer-section">
        <h4>Help & Support</h4>
        <Navitem name="FAQs"/>
        <Navitem name="Support / Help Center"/>
        <Navitem name="Return & Refund Policy"/>
        <Navitem name="Shipping Information"/>
        <Navitem name="Terms & Conditions"/>
        <Navitem name="Privacy Policy"/>
    </div>

    <div className="footer-section">
        <h4>Categories</h4>
        <Navitem name="Electronics"/>
        <Navitem name="Books & Stationery"/>
        <Navitem name="Clothing"/>
        <Navitem name="Bikes & Cars"/>
        <Navitem name="Home & Furniture"/>
        <Navitem name="Miscellaneous"/>
    </div>

    <div className="footer-section">
        <h4>Community</h4>
        <Navitem name="Blog"/>
        <Navitem name="Campus News"/>
        <Navitem name="User Reviews"/>
        <Navitem name="Popular Deals"/>
        <Navitem name="Campus Events"/>
    </div>

    <div className="footer-section">
        <h4>Legal</h4>
        <Navitem name="Terms of Service"/>
        <Navitem name="Privacy Policy"/>
        <Navitem name="Cookie Policy"/>
        <Navitem name="Code of Conduct"/>
    </div>

    <div className="footer-section">
        <h4>Social Media</h4>
        <Navitem name="Facebook"/>
        <Navitem name="Twitter"/>
        <Navitem name="Instagram"/>
        <Navitem name="LinkedIn"/>
    </div>

    <div className="footer-section">
        <h4>Other</h4>
        <Navitem name="Careers"/>
        <Navitem name="Newsletter Signup"/>
        <Navitem name="Download App"/>
    </div>
    </div>





  );
};

export default Footer;




const footerinfo = {
    "About Section": [
    "About Us",
    "How It Works",
    "Contact Us"
  ],
  "User Information": [
    "My Account",
    "My Orders",
    "Wishlist",
    "Saved Items",
    "Profile Settings"
  ],
  "Help & Support": [
    "FAQs",
    "Support / Help Center",
    "Return & Refund Policy",
    "Shipping Information",
    "Terms & Conditions",
    "Privacy Policy"
  ],
  "Categories": [
    "Electronics",
    "Books & Stationery",
    "Clothing",
    "Bikes & Cars",
    "Home & Furniture",
    "Miscellaneous"
  ],
  "Community / Resources": [
    "Blog",
    "Campus News",
    "User Reviews",
    "Popular Deals",
    "Campus Events"
  ],
  "Legal": [
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Code of Conduct"
  ],
  "Social Media Links": [
    "Facebook",
    "Twitter",
    "Instagram",
    "LinkedIn"
  ],
  "Other": [
    "Careers",
    "Newsletter Signup",
    "Download App"
  ]
}
