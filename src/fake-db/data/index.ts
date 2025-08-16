export const founders = [
  {
    name: 'Nguyễn Thị Minh Hà',
    position: 'Founders of HRO',
    image: '/avatars/co-found-Ha.webp',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    name: 'Trần Thị Minh Châu',
    position: 'Founders of HRO',
    image: '/avatars/co-found-Chau.webp',
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
    question: 'panel1-q',
    active: true,
    answer: 'panel1-a'
  },
  {
    id: 'panel2',
    question: 'panel2-q',
    active: true,
    answer: 'panel2-a'
  },
  {
    id: 'panel3',
    question: 'panel3-q',
    answer: 'panel3-a'
  },
  {
    id: 'panel4',
    question: 'panel4-q',
    answer: 'panel4-a'
  }
]
