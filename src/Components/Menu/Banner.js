import React from 'react';
import styled from "styled-components";
import bannerImg from '../../image/main/banner.png'

const BannerStyled = styled.div`
  height: 210px;
  width: 100%;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
`

const Banner = () => {
    return (
        <BannerStyled/>
    );
};

export default Banner;