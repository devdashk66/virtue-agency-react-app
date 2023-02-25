import React from "react";
import SectionTitle from "../Common_Components/SectionTitle/SectionTitle";
import Award from "./Award/Award";
import BingoAgency from "./BingoAgency/BingoAgency";
import CreateTogether from "./CreateTogether/CreateTogether";
import Hero from "./Hero/Hero";
import LatestPosts from "./LatestPosts/LatestPosts";
import OurOffer from "./OurOffer/OurOffer";
import Testimonial from "./Testimonial/Testimonial";

import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div>
      <Fade>
        <Hero />
      </Fade>

      <SectionTitle
        title="What Do We Offer"
        pera="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vero dicta mollitia, explicabo corrupti porro laboriosam quod aspernatu."
      />

      <OurOffer />

      <SectionTitle
        title="We Are Virtue Agency"
        pera="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam reprehenderit accusamus labore iusto, aut, eum itaque illo totam tempora eius."
      />
      <BingoAgency />
      <CreateTogether />
      <SectionTitle
        title="Award-Winning Agency"
        pera="Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim."
      />
      <Award />
      <Testimonial />
      <SectionTitle
        title="Latest Posts"
        pera="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere accusamus, reprehenderit libero inventore nam."
      />
      <LatestPosts />
    </div>
  );
}

export default Home;
