import React, { useEffect, useState } from 'react'
import axios from 'axios'; // Import Axios
import Slider from "react-slick";

import './style.scss';
import { Button, Rate } from 'antd';
import { CheckOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { PATHS } from '../../routes';
import { Link } from 'react-router-dom';
import { getImg } from '../../constants';

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
              price: 17985000,
              condition: 'Đủ 18 tuổi trở lên',
              time: '3,5 tháng (1 tuần học 1 buổi)',
              brief: 'Miễn phí',
              schedule: 'Hỗ trợ linh động',
              fee: 'Chia thành 3 lần đóng',
              support: 'Học đậu 100%'
            }, {
              img: "https://mauweb.monamedia.net/daylaixeoto/wp-content/uploads/2019/10/course-03-300x225.jpg",
              rate: 4.5,
              path: PATHS.B2,
              title: 'Bằng lái xe B2',
              price: 17985000,
              condition: 'Đủ 18 tuổi trở lên',
              time: '3,5 tháng (1 tuần học 1 buổi)',
              brief: 'Miễn phí',
              schedule: 'Hỗ trợ linh động',
              fee: 'Chia thành 3 lần đóng',
              support: 'Học đậu 100%'
            }, {
              img: "https://mauweb.monamedia.net/daylaixeoto/wp-content/uploads/2019/10/course-02-300x225.jpg",
              rate: 4.5,
              path: PATHS.C,
              title: 'Bằng lái xe C',
              price: 17985000,
              condition: 'Đủ 21 tuổi trở lên',
              time: '6 tháng (1 tuần học 1 buổi)',
              brief: 'Miễn phí',
              schedule: 'Hỗ trợ linh động',
              fee: 'Chia thành 3 lần đóng',
              support: 'Học đậu 100%'
            }
          ].map((item, iIdx) => (
            <div key={iIdx} className='course-list-item'>
              <img src={item?.img} alt="" />
              <div className='course-list-item-content'>
                <div className='rate'>
                  <p>Lái xe</p>
                  <Rate disabled defaultValue={item?.rate} />
                </div>
                <p className='title'>{item?.title}</p>
                <p className='price'>{item?.price?.toLocaleString()?.replaceAll(',', '.')} VNĐ</p>
                <div className='desc'>
                  {[
                    {
                      title: 'Yêu cầu',
                      label: item?.condition,
                    }, {
                      title: 'Thời gian học',
                      label: item?.time,
                    }, {
                      title: 'Hồ sơ',
                      label: item?.brief,
                    }, {
                      title: 'Lịch học',
                      label: item?.schedule,
                    }, {
                      title: 'Học phí',
                      label: item?.fee,
                    }, {
                      title: 'Hỗ trợ',
                      label: item?.support,
                    },
                  ].map(item => (
                    <div className='desc-item'>
                      <CheckOutlined />
                      <p>
                        <b>{item?.title}:</b>
                        {item?.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section
        title='Vì sao chọn chúng tôi?'
        subTitle='Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.'
      >
        <div className='why-list'>
          {[
            {
              img: 'first',
              title: 'HỒ SƠ ĐĂNG KÝ ĐƠN GIẢN',
              desc: 'Chỉ cần mang CMND/CCCD/Hộ chiếu nhân viên tư vấn sẽ hỗ trợ làm hồ sơ từ A – Z, miễn phí 100%, nhanh chóng chỉ mất 5 phút đồng hồ để ghi danh học lái xe ô tô.'
            }, {
              img: 'checklist',
              title: 'TRANG THIẾT BỊ HIỆN ĐẠI',
              desc: 'Cơ sở vật chất, hạ tầng học tập được đầu tư mạnh mẽ, bài bản và khoa học. Hệ thống phòng học, sân tập lái được xây dựng theo mô hình đào tạo Singapore, đạt chuẩn ISO 9001:2015.'
            }, {
              img: 'graduation',
              title: 'DỊCH VỤ TỐT NHẤT',
              desc: 'Với phương châm đào tạo đặt lợi ích của học viên lên hàng đầu, Trung tâm luôn mang đến những dịch vụ hỗ trợ tốt nhất. Chúng tôi cam kết chất lượng 100% như đã quảng cáo, ĐỀN HỌC PHÍ GẤP 3 LẦN nếu phát hiện trung tâm vi phạm hợp đồng.'
            }, {
              img: 'driver',
              title: 'LỊCH HỌC LINH ĐỘNG',
              desc: 'Học viên được tự do sắp xếp lựa chọn lịch học bằng lái xe ô tô theo thời gian rảnh của mình. Có các lớp học Sáng – Chiều – Tối diễn ra liên tục, kể cả cuối tuần Thứ 7 và Chủ Nhật.'
            }, {
              img: 'coins',
              title: 'HỌC LÁI XE GẦN NHÀ',
              desc: 'Cơ sở đào tạo, sân tập lái có mặt khắp 63 tỉnh thành trên cả nước, cam kết “nhà ở đâu học ở đó”. Tiết kiệm thời gian và chi phí đi lại cho học viên trong quá trình học lái xe ô tô.'
            }, {
              img: 'ranking',
              title: 'HỖ TRỢ HỌC ĐẬU 100%',
              desc: `Lộ trình đào tạo trung tâm rõ ràng, chuyên nghiệp và bài bản. Tỉ lệ học viên đậu hàng năm tại ${window.location.origin} luôn đạt từ 95% trở lên, trở thành địa chỉ học lái xe ô tô được nhiều học viên tin tưởng và lựa chọn nhất trên cả nước.`
            }, {
              img: 'change',
              title: 'KỶ NIỆM 10 NĂM THÀNH LẬP TRUNG TÂM',
              desc: `Hệ thống ${window.location.origin} chuyên cung cấp các khóa học lái xe ô tô cấp tốc, đảm bảo chất lượng đào tạo và tiết kiệm thời gian, chi phí cho học viên.`
            }, {
              img: 'dispatch',
              title: 'TRỌN GÓI - TRẢ GÓP 0%',
              desc: 'Chi phí khóa học trọn gói 100% ngay từ ban đầu, có thể chia học phí đóng thành nhiều đợt khác nhau, hỗ trợ trả góp với lãi suất 0%. Chỉ cần đóng trước từ 1 – 2 triệu là được sắp xếp lớp học ngay.'
            }
          ].map((w, wIdx) => (
            <div key={wIdx} className='why-list-item'>
              <div className='image'>
                <hr />
                <img src={getImg(`why/${w?.img}.png`)} alt="" />
                <hr />
              </div>
              <p className='title'>{w?.title}</p>
              <p className='desc'>{w?.desc}</p>
            </div>
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
