import React, { useEffect, useState } from 'react'
import axios from 'axios'; // Import Axios
import Slider from "react-slick";

import './style.scss';
import { Button, Rate } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { PATHS } from '../../routes';
import { Link } from 'react-router-dom';

const arr = (list) => list ? Array.from(list) : []

const resetImgSize = (url = '') => {
  const splitted = url.split('=')
  return url.replace(splitted?.[splitted?.length - 1], 'w0-h0');
}

const Section = ({ title = '', subTitle = '', children = null }) => {
  return (
    <div className='section'>
      <div className='section-title'>
        {title}
      </div>
      <div className='section-subtitle'>
        {subTitle}
      </div>
      <div className='section-content'>
        {children}
      </div>
    </div>
  )
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
    prevArrow: (
      <span>
        <Button type="default" size='large' shape="circle" icon={<LeftOutlined />} />
      </span>
    ),
    nextArrow: (
      <span>
        <Button type="default" size='large' shape="circle" icon={<RightOutlined />} />
      </span>
    ),
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
      <Section
        title='Các Khóa Học Của Chúng Tôi'
        subTitle='Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.'
      >
        <div className='course-list'>
          {[
            {
              img: "https://mauweb.monamedia.net/daylaixeoto/wp-content/uploads/2019/10/course-04-300x225.jpg",
              rate: 4.5,
              path: PATHS.B1,
              title: 'Bằng lái xe B1',
              price: 10000000,
            }, {
              img: "https://mauweb.monamedia.net/daylaixeoto/wp-content/uploads/2019/10/course-03-300x225.jpg",
              rate: 4.5,
              path: PATHS.B2,
              title: 'Bằng lái xe B2',
              price: 10000000,
            }, {
              img: "https://mauweb.monamedia.net/daylaixeoto/wp-content/uploads/2019/10/course-02-300x225.jpg",
              rate: 4.5,
              path: PATHS.C,
              title: 'Bằng lái xe C',
              price: 10000000,
            }, {
              img: "https://mauweb.monamedia.net/daylaixeoto/wp-content/uploads/2019/10/course-01-300x225.jpg",
              rate: 4.5,
              path: PATHS.UPGRADE,
              title: 'Nâng dấu',
              price: 10000000,
            }
          ].map((item, iIdx) => (
            <Link key={iIdx} className='course-list-item' to={item?.path}>
              <img src={item?.img} alt="" />
              <div className='course-list-item-content'>
                <div className='rate'>
                  <p>Lái xe</p>
                  <Rate disabled defaultValue={item?.rate} />
                </div>
                <p className='title'>{item?.title}</p>
                <p className='price'>{item?.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section
        title='Blog'
        subTitle='Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.'
      >
        <div className='blog-list'>
          {blogs.map((b, bIdx) => (
            <div key={bIdx} className='blog-list-item'>
              <img src={b?.img} alt="" />
              <div className='blog-list-item-content'>
                <p className='title'>{b?.title}</p>
                <p className='desc'>{b?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Home
