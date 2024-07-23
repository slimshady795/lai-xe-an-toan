import React, { useEffect, useState } from 'react'
import axios from 'axios'; // Import Axios
import Slider from "react-slick";

import './style.scss';

const arr = (list) => list ? Array.from(list) : []

const resetImgSize = (url = '') => {
  const splitted = url.split('=')
  return url.replace(splitted?.[splitted?.length - 1], 'w0-h0');
}

const Home = () => {
  const [banners, setBanners] = useState([])
  const [blogs, setBlogs] = useState([])

  const getBlogs = async () => {
    const req = await axios.get(`https://docs.google.com/spreadsheets/d/e/2PACX-1vSUvyo9mIUShQ6-scdxtpdXqkhuR1ptECzx2fq7CuTCCM-UPOHmdUuAjZ7j9lfTb97pPvNY7cy_iw13/pubhtml`);

    const dataHtml = document.createElement('div')
    dataHtml.innerHTML = req.data;

    const menu = dataHtml?.querySelector?.('#sheet-menu');
    const content = dataHtml?.querySelector?.('#sheets-viewport');

    const getElementId = (name = '') => arr(menu?.querySelectorAll?.('li')).find(item => item?.textContent === name)?.id?.replace('sheet-button-', '')
    const getContent = (e = null) => e?.querySelector?.('img')?.src || e?.innerHTML || '';
    const getElements = (id = '') => arr(content?.querySelector?.(`[id="${getElementId(id)}"`)?.querySelectorAll?.('tbody tr'))?.map(item => item?.querySelectorAll?.('td'));

    const bannerData = arr(getElements('banner')).map(item => resetImgSize(getContent(arr(item)?.[0])))
    setBanners(bannerData);

    const blogData = arr(getElements('blog')).map(item => {
      const [_title = '', _desc = '', _img = ''] = arr(item)
      return ({
        title: getContent(_title),
        desc: getContent(_desc),
        img: resetImgSize(getContent(_img)),
      })
    })
    setBlogs(blogData);
  }

  useEffect(() => {
    getBlogs();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='home-page'>
      <Slider className='banner' {...settings}>
        {banners.map((b, bIdx) => (
          <div key={bIdx} className='banner-item'>
            <img src={b} alt="" />
          </div>
        ))}
      </Slider>
      <div className='blog'>
        {blogs.map((b, bIdx) => (
          <div key={bIdx} className='blog-item'>
            <img src={b?.img} alt="" />
            <div className='blog-item-content'>
              <p className='title'>{b?.title}</p>
              <p className='desc'>{b?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
