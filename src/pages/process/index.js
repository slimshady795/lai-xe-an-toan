import React from 'react'
import { Timeline } from 'antd'

import { getImg } from '../../constants';

import './style.scss';
import clsx from 'clsx';

const items = [
  {
    title: 'Học viên tham gia học lý thuyết',
    subTitle: '',
    desc: [
      'Ngày khai giảng: Học viên nhận bảng tên và thẻ từ tại trung tâm',
      'Học viên tham gia học đủ 70% số giờ học lý thuyết tại trung tâm',
      'Sau khi lớp lý thuyết kết thúc, học viên phải tiến hành xác nhận lại với bộ phận CSKH để xem dữ liệu học lý thuyết của mình đầy đủ chưa.',
      <span>(Trường hợp chưa đủ số giờ học lý thuyết, học viên phải tham gia các lớp học khóa sau để học bù)</span>,
    ]
  }, {
    title: 'Học viên thi kiểm tra kết thúc môn lý thuyết',
    subTitle: 'Điều kiện dự thi: Học viên đạt điều kiện đủ dữ liệu thời gian học lý thuyết',
    desc: [
      'Học viên thi đậu kỳ kiểm tra kết thúc môn lý thuyết sẽ chuyển sang giai đoạn học thực hành',
      'Học viên rớt kì thi lý thuyết sẽ chuyển sang giai đoạn học thực hành, tuy nhiên học viên phải đăng kí thi lại kì kiểm tra lý thuyết ở kì thi tiếp theo.',
      <>
        <span>
          Học viên vắng thi thì sẽ chưa được xuống học thực hành mà phải tham gia kì thi kết thúc môn lý thuyết tiếp theo.
        </span>
      </>,
    ]
  }, {
    title: 'Học viên học thực hành',
    subTitle: '',
    desc: [
      'Học viên và giáo viên phải đeo thẻ bảng tên trong suốt quá trình học.',
      <>
        Giáo viên giảng dạy <span>đúng số xe đã đăng kí</span> và phải <span>dạy học viên trong khóa</span> đó (1 xe ô tô hạng B1, B2 không quá 5 học viên, xe hạng C không quá 8 học viên).
      </>,
      <span>Học viên khi chạy đủ DAT tiến hành lên trung tâm để kiểm tra lại đã đúng và đủ dữ liệu DAT hay chưa, nếu chưa đủ thì phải liên hệ với giáo viẹn để bổ sung cho đủ dữ liệu.</span>,
      <>
        Giáo viên giảng dạy cho học viên quá thời gian ở tiến độ đào tạo do trung tâm cập nhật thì phải lên trung tâm liên hệ để <b>điều chỉnh kế hoạch giảng dạy</b>.
      </>,
      <>
        Giáo viên giảng dạy cho học viên trên đường <b>phải chuẩn bị giáo án đầy đủ</b> (giáo án thực hành + sổ theo dõi thực hành), <span>giáo viên giảng dạy và xe học viên phải đúng theo kế hoạch BC1</span>.
      </>,
      <>
        Sau khi lớp lý thuyết kết thúc,
        học viên phải tiến hành xác nhận lại với bộ phận CSKH
        để xem dữ liệu học lý thuyết của mình đầy đủ chưa.
        <span>Trường hợp chưa đủ số giờ học lý thuyết, học viên phải tham gia các lớp học khóa sau để học bù</span>
      </>,
    ]
  }, {
    title: 'Học viên học CABIN',
    subTitle: '',
    desc: [
      'Học viên sau khi đủ dữ liệu DAT mới đăng ký học giờ học CABIN tại trung tâm.',
      <>
        Mỗi học biên sẽ học xuyên suốt 3h trong 1 ngày (<span>Bài tập tổng hợp ở trên máy CABIN phải học sau cùng</span>).
      </>,
    ]
  }, {
    title: 'Học viên thi KẾT THÚC MÔN THỰC HÀNH',
    subTitle: 'Điều kiện dự thi kết thúc môn thực hành',
    desc: [
      { title: '1. Học viên:' },
      <>
        Học viên phải <span>Đạt</span> ở kì kiểm tra kết thúc môn lý thuyết.
      </>,
      <>
        <span>Đạt</span> điều kiện đủ dữ liệu DAT.
      </>,
      <>
        <span>Đạt</span> điều kiện đủ dữ liệu học CABIN.
      </>,
      { title: '2. Giáo viên:' },
      'Giáo viên dạy thực hành cho học viên phải nộp lại giáo án và sổ theo dõi thực hành đã giảng dạy thực hành cho trung tâm lưu trữ lại',
    ]
  }, {
    title: 'XÉT CẤP CHỨNG CHỈ',
    subTitle: '',
    desc: [
      'Học viên đạt kì kiểm tra kết thúc môn lý thuyết',
      'Học viên đạt kì kiểm tra kết thúc môn thực hành'
    ]
  }, {
    title: 'Học viên tham gia kì thi SÁT HẠCH',
    subTitle: '',
    desc: [
      'Học viên tiến hành bổ sung sức khỏe nếu hết hạn giấy khám sức khỏe (nếu thiếu thông tin gì về phần hồ sơ thì bộ phận CSKH sẽ thông báo để học viên bổ sung).',
      'Học viên báo lại thông tin cá nhân nếu bị sai thông tin.',
      'Đăng kí lịch tập xe thiết bị tại sân sát hạch.',
      'Khi đi thi nhớ chuẩn bị căn cước công dân, bút viết..vv',
    ]
  }, {
    title: 'KẾT THÚC KÌ THI SÁT HẠCH',
    subTitle: '',
    desc: [
      <>
        <b className='title-list'>Học viên đạt:</b> nhận bằng lái xe và hồ sơ gốc tại Trung tâm dạy nghề lái xe Sài Gòn
      </>,
      <>
        <b className='title-list'>Học viên rớt:</b> về Trung tâm dạy nghề lái xe Sài Gòn đóng lệ phí và lịch thi sát hạch ở kì thi tiếp theo.
      </>
    ]
  },
]

const Process = () => {
  return (
    <div className='process-page'>
      <Timeline
        mode='left'
        items={items.map((item, idx) => ({
          color: '#a72e28',
          label: (
            <img src={getImg(`process/${idx + 1}.jpg`)} alt="" />
          ),
          children: (
            <div className='time-line'>
              <p className='time-line-step'>Bước {idx + 1}</p>
              <div className='time-line-content'>
                <p className='title'>{item?.title}</p>
                <p className='sub-title'>{item?.subTitle}</p>
                <div className='desc'>
                  {item?.desc?.map((d, dIdx) => (
                    <p key={dIdx} className={clsx(d?.title ? 'title-list' : 'desc-item')}>{d?.title || d}</p>
                  ))}
                </div>
              </div>
            </div>
          ),
        }))}
      />
    </div>
  )
}

export default Process
