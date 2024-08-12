import React from 'react'
import { Timeline } from 'antd'

import './style.scss';

const items = [
  {
    title: 'Học viên tham gia học lý thuyết',
    subTitle: '',
    desc: [
      'Ngày khai giảng: Học viên nhận bảng tên và thẻ từ tại trung tâm',
      'Học viên tham gia học đủ 70% số giờ học lý thuyết tại trung tâm',
      'Sau khi lớp lý thuyết kết thúc, học viên phải tiến hành xác nhận lại với bộ phận CSKH để xem dữ liệu học lý thuyết của mình đầy đủ chưa.',
      <span className='danger'>(Trường hợp chưa đủ số giờ học lý thuyết, học viên phải tham gia các lớp học khóa sau để học bù)</span>,
    ]
  }, {
    title: 'Học viên thi kiểm tra kết thúc môn lý thuyết',
    subTitle: 'Điều kiện dự thi: Học viên đạt điều kiện đủ dữ liệu thời gian học lý thuyết',
    desc: [
      'Học viên thi đậu kỳ kiểm tra kết thúc môn lý thuyết sẽ chuyển sang giai đoạn học thực hành',
      'Học viên tham gia học đủ 70% số giờ học lý thuyết tại trung tâm',
      <>
        Sau khi lớp lý thuyết kết thúc,
        học viên phải tiến hành xác nhận lại với bộ phận CSKH
        để xem dữ liệu học lý thuyết của mình đầy đủ chưa.
        <span className='danger'>Trường hợp chưa đủ số giờ học lý thuyết, học viên phải tham gia các lớp học khóa sau để học bù</span>
      </>,
    ]
  }, {
    title: 'Học viên tham gia học lý thuyết',
    subTitle: '',
    desc: [
      'Ngày khai giảng: Học viên nhận bảng tên và thẻ từ tại trung tâm',
      'Học viên tham gia học đủ 70% số giờ học lý thuyết tại trung tâm',
      <>
        Sau khi lớp lý thuyết kết thúc,
        học viên phải tiến hành xác nhận lại với bộ phận CSKH
        để xem dữ liệu học lý thuyết của mình đầy đủ chưa.
        <span className='danger'>Trường hợp chưa đủ số giờ học lý thuyết, học viên phải tham gia các lớp học khóa sau để học bù</span>
      </>,
    ]
  }, {
    title: 'Học viên tham gia học lý thuyết',
    subTitle: '',
    desc: [
      'Ngày khai giảng: Học viên nhận bảng tên và thẻ từ tại trung tâm',
      'Học viên tham gia học đủ 70% số giờ học lý thuyết tại trung tâm',
      <>
        Sau khi lớp lý thuyết kết thúc,
        học viên phải tiến hành xác nhận lại với bộ phận CSKH
        để xem dữ liệu học lý thuyết của mình đầy đủ chưa.
        <span className='danger'>Trường hợp chưa đủ số giờ học lý thuyết, học viên phải tham gia các lớp học khóa sau để học bù</span>
      </>,
    ]
  }, {
    title: 'Học viên tham gia học lý thuyết',
    subTitle: '',
    desc: [
      'Ngày khai giảng: Học viên nhận bảng tên và thẻ từ tại trung tâm',
      'Học viên tham gia học đủ 70% số giờ học lý thuyết tại trung tâm',
      <>
        Sau khi lớp lý thuyết kết thúc,
        học viên phải tiến hành xác nhận lại với bộ phận CSKH
        để xem dữ liệu học lý thuyết của mình đầy đủ chưa.
        <span className='danger'>Trường hợp chưa đủ số giờ học lý thuyết, học viên phải tham gia các lớp học khóa sau để học bù</span>
      </>,
    ]
  }, {
    title: 'Học viên tham gia học lý thuyết',
    subTitle: '',
    desc: [
      'Ngày khai giảng: Học viên nhận bảng tên và thẻ từ tại trung tâm',
      'Học viên tham gia học đủ 70% số giờ học lý thuyết tại trung tâm',
      <>
        Sau khi lớp lý thuyết kết thúc,
        học viên phải tiến hành xác nhận lại với bộ phận CSKH
        để xem dữ liệu học lý thuyết của mình đầy đủ chưa.
        <span className='danger'>Trường hợp chưa đủ số giờ học lý thuyết, học viên phải tham gia các lớp học khóa sau để học bù</span>
      </>,
    ]
  }, {
    title: 'Học viên tham gia học lý thuyết',
    subTitle: '',
    desc: [
      'Ngày khai giảng: Học viên nhận bảng tên và thẻ từ tại trung tâm',
      'Học viên tham gia học đủ 70% số giờ học lý thuyết tại trung tâm',
      <>
        Sau khi lớp lý thuyết kết thúc,
        học viên phải tiến hành xác nhận lại với bộ phận CSKH
        để xem dữ liệu học lý thuyết của mình đầy đủ chưa.
        <span className='danger'>Trường hợp chưa đủ số giờ học lý thuyết, học viên phải tham gia các lớp học khóa sau để học bù</span>
      </>,
    ]
  }, {
    title: 'Học viên tham gia học lý thuyết',
    subTitle: '',
    desc: [
      'Ngày khai giảng: Học viên nhận bảng tên và thẻ từ tại trung tâm',
      'Học viên tham gia học đủ 70% số giờ học lý thuyết tại trung tâm',
      <>
        Sau khi lớp lý thuyết kết thúc,
        học viên phải tiến hành xác nhận lại với bộ phận CSKH
        để xem dữ liệu học lý thuyết của mình đầy đủ chưa.
        <span className='danger'>Trường hợp chưa đủ số giờ học lý thuyết, học viên phải tham gia các lớp học khóa sau để học bù</span>
      </>,
    ]
  },
]

const Process = () => {
  return (
    <div className='process-page'>
      <Timeline
        mode='alternate'
        items={items.map((item, idx) => ({
          color: '#a72e28',
          children: (
            <div className='time-line'>
              <p className='time-line-step'>Bước {idx + 1}</p>
              <div className='time-line-content'>
                <p className='title'>{item?.title}</p>
                {item?.desc?.map((d, dIdx) => (
                  <p key={dIdx} className='desc'>{d}</p>
                ))}
              </div>
            </div>
          ),
        }))}
      />
    </div>
  )
}

export default Process
