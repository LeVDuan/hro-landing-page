export const founders = [
  {
    name: 'Nguyễn Thị Minh Hà',
    position: 'Người sáng lập HRO',
    image: '/images/front-pages/landing-page/co-found-Ha.jpg',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    name: 'Trần Thị Minh Châu',
    position: 'Người sáng lập HRO',
    image: '/images/front-pages/landing-page/co-found-Chau.jpg',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]
export const catchers = [
  {
    image: '/images/front-pages/landing-page/C_duanLe.png',
    name: 'Lê Văn Duẩn',
    position: 'Gen 1',
    num: 'Số áo: #3',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/C_vuGiap.png',
    name: 'Vũ Trọng Giáp',
    position: 'Gen 4',
    num: 'Số áo: #88',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/vuNguyen.png',
    name: 'Vũ Anh Nguyên',
    position: 'Gen 4',
    num: 'Số áo: #35',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]

type FaqsDataTypes = {
  id: string
  question: string
  active?: boolean
  answer: string
}

export const FaqsData: FaqsDataTypes[] = [
  {
    id: 'panel1',
    question: 'HRO có phải câu lạc bộ sinh viên không?',
    answer:
      'Đúng, chúng tôi là câu lạc bộ bóng chày trực thuộc Ban Văn nghệ thể thao Đoàn Đại học Bách Khoa Hà Nội. Phần lớn thành viên của HRO là sinh viên Bách Khoa và được điều hành và tổ chức bởi các bạn sinh viên.'
  },
  {
    id: 'panel2',
    question: 'Làm thế nào để tôi có thể tham gia HRO?',
    active: true,
    answer:
      'Chúng tôi thường tổ chức tuyển thành viên vào khoảng tháng 10. Đối tượng không phân biệt tuổi tác, giới tính, nghề nghiệp, đã từng chơi bóng chày hay chưa,... Tuy nhiên, nếu bạn là sinh viên Đại học Bách Khoa Hà Nội sẽ là điểm chung rất lớn với chúng mình. Chúng mình thường sẽ tuyển thành viên sau 3 vòng: vòng đơn, vòng phỏng vấn và vòng tryout, với 3 vị trí ứng tuyển: Manager, Media và Player. Nếu bạn yêu thích, muốn tìm hiểu, thỏa mãn đam mê với bóng chày, hãy đến với HRO!'
  },
  {
    id: 'panel3',
    question: 'Tôi có cần chuẩn bị trang thiết bị như găng, chày khi tham gia HRO không?',
    answer:
      'HRO đã chuẩn bị những đồ tập chung cho cả CLB như găng, chày, bóng, ... Nếu bạn đã có sẵn những trang thiết bị sẽ là rất tiện lợi cho bạn đó. Nếu bạn tham gia buổi tryout thì nhớ mang nhé!'
  },
  {
    id: 'panel4',
    question: 'Tôi có thể tham gia buổi tập của HRO không?',
    answer:
      'Có, nếu bạn muốn tham gia cùng chúng tôi hãy liên hệ trước với chúng mình qua trang fanpage Facebook hoặc liên hệ trực tiếp các bạn leaders nhé.'
  }
]
export const infielders = [
  {
    image: '/images/front-pages/landing-page/dinhDuc.png',
    name: 'Trần Đình Đức',
    gen: 'Gen 1',
    position: 'Vị trí: B1/Pitcher',
    num: 'Số áo: #99',
    des: 'Ném/Đánh: Trái/Trái',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/xuanViet.png',
    name: 'Phạm Xuân Việt',
    gen: 'Gen 2',
    position: 'Vị trí: B1',
    num: 'Số áo: #12',
    des: 'Ném/Đánh: Trái/Trái',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/minhHieu.png',
    name: 'Nguyễn Trịnh Minh Hiếu',
    gen: 'Gen 4',
    position: 'Vị trí: B1/B2',
    num: 'Số áo: #6',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/maiHuong.png',
    name: 'Vũ Mai Hương',
    gen: 'Gen 2',
    position: 'Vị trí: B1/Catcher',
    num: 'Số áo: #00',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/thaoMana.png',
    name: 'Nguyễn Thị Phương Thảo',
    gen: 'Gen 2',
    position: 'Vị trí: B1/SS',
    num: 'Số áo: #89',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/doanHoang.png',
    name: 'Đoàn Phùng Việt Hoàng',
    gen: 'Gen 2',
    position: 'Vị trí: B2/SS',
    num: 'Số áo: #52',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/namKhanh.png',
    name: 'Nguyễn Nam Khánh',
    gen: 'Gen 4',
    position: 'Vị trí: B2/Pitcher',
    num: 'Số áo: #??',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/quocQuy.png',
    name: 'Trần Quốc Quý',
    gen: 'Gen 2',
    position: 'Vị trí: B3/OF',
    num: 'Số áo: #4',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/duongQuan.png',
    name: 'Dương Anh Quân',
    gen: 'Gen 2',
    position: 'Vị trí: B3/OF',
    num: 'Số áo: #5',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/haiAnhB3.png',
    name: 'Đặng Hải Anh',
    gen: 'Gen 2',
    position: 'Vị trí: B3/OF',
    num: 'Số áo: #11',
    des: 'Ném/Đánh: Phải/Trái',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/theKien.png',
    name: 'Nguyễn Thế Kiên',
    gen: 'Gen 1',
    position: 'Vị trí: B3/Catcher',
    num: 'Số áo: #27',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/quyMinh.png',
    name: 'Phan Qúy Minh',
    gen: 'Gen 4',
    position: 'Vị trí: B3/Pitcher',
    num: 'Số áo: #23',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/tienDung.png',
    name: 'Lê Tiến Dũng',
    gen: 'Gen 2',
    position: 'Vị trí: SS/OF',
    num: 'Số áo: #22',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/trinhHieu.png',
    name: 'Trịnh Minh Hiếu',
    gen: 'Gen 2',
    position: 'Vị trí: SS/B2',
    num: 'Số áo: #36',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/thanhVinh.png',
    name: 'Nguyễn Thành Vinh',
    gen: 'Gen 2',
    position: 'Vị trí: SS/B2',
    num: 'Số áo: #96',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]
export const mediaTeam = [
  {
    image: '/images/front-pages/landing-page/xuanDuc.png',
    name: 'Nguyễn Xuân Đức',
    position: 'HRO gen 3',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/chiMed.png',
    name: 'Nguyễn Linh Chi',
    position: 'Trưởng team Media-HRO gen 3',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/thu.png',
    name: 'Đào Thị Minh Thu',
    position: 'HRO gen 4',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]
export const outfielders = [
  {
    image: '/images/front-pages/landing-page/theBach.png',
    name: 'Nguyễn Văn Thế Bách',
    gen: 'Gen 2',
    position: 'Vị trí: OF/B3',
    num: 'Số áo: #8',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/nhatMinh.png',
    name: 'Trần Nhật Minh',
    gen: 'Gen 3',
    position: 'Vị trí: OF/B2',
    num: 'Số áo: #2',
    des: 'Ném/Đánh: Trái/Trái',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/phucAnh.png',
    name: 'Nguyễn Phúc Anh',
    gen: 'Gen 3',
    position: 'Vị trí: OF/SS',
    num: 'Số áo: #25',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/caoKhoa.png',
    name: 'Cao Hữu Hà Khoa',
    gen: 'Gen 3',
    position: 'Vị trí: OF/B2',
    num: 'Số áo: #63',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/leHieu.png',
    name: 'Lê Minh Hiếu',
    gen: 'Gen 3',
    position: 'Vị trí: OF/SS',
    num: 'Số áo: #32',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/hoangViet.png',
    name: 'Lê Hoàng Việt',
    gen: 'Gen 4',
    position: 'Vị trí: OF/B3',
    num: 'Số áo: #45',
    des: 'Ném/Đánh: Trái/Trái',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]
export const pitchers = [
  {
    image: '/images/front-pages/landing-page/thaiBaoP.png',
    name: 'Nguyễn Thái Bảo',
    position: 'Gen 1',
    num: 'Số áo: #30',
    des: 'Ném/Đánh: Trái/Trái',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/linhP.png',
    name: 'Trần Mỹ Linh',
    position: 'Gen 2',
    num: 'Số áo: #91',
    des: 'Ném/Đánh: Phải/Trái',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/datP.png',
    name: 'Trần Tiến Đạt',
    position: 'Gen 2',
    num: 'Số áo: #18',
    des: 'Ném/Đánh: Trái/Trái',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/thaiP.png',
    name: 'Trương Quang Thái',
    position: 'Gen 3',
    num: 'Số áo: #86',
    des: 'Ném/Đánh: Trái/Trái',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/khanhLinh.png',
    name: 'Lê Khánh Linh',
    position: 'Gen 4',
    num: 'Số áo: #71',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]
export const SubLeadersInfo = [
  {
    name: 'Trần Tiến Đạt',
    position: 'Phó chủ nhiệm',
    gen: 'Gen 2 - K66 HUST',
    num: 'Số áo: #18',
    image: '/images/front-pages/landing-page/dat.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    name: 'Đặng Hải Anh',
    position: 'Đội phó/Phó chủ nhiệm',
    gen: 'Gen 2 - K67 HUST',
    num: 'Số áo: #11',
    image: '/images/front-pages/landing-page/haiANh.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    name: 'Nguyễn Linh Chi',
    position: 'Trưởng Ban truyền thông',
    gen: 'Gen 3 - VNU',
    num: 'Số áo: #66',
    image: '/images/front-pages/landing-page/chi.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    name: 'Lê Hoàng Minh',
    position: 'Trưởng manager',
    gen: 'Gen 2 - K65 HUST',
    num: 'Số áo: #9',
    image: '/images/front-pages/landing-page/minhLe.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]
export const LeadersInfo = [
  {
    name: 'Lê Tiến Dũng',
    position: 'Đội trưởng',
    gen: 'Gen 2 - K66 HUST',
    num: 'Số áo: #22',
    image: '/images/front-pages/landing-page/captain.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    name: 'Nguyễn Thị Phương Thảo',
    position: 'Chủ nhiệm',
    gen: 'Gen 2 - K66 HUST',
    num: 'Số áo: #89',
    image: '/images/front-pages/landing-page/chairman.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]
