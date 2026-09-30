import React from 'react'
import Section1 from './component/section1/section1'
import Section2 from './component/section2/section2'

function App() {

  const user = [
    {
      Img: 'https://images.unsplash.com/photo-1648412868424-9bee5023a257?q=80&w=1170&auto=format&fit=crop',
      tag: 'Satisfied',
      color:'green '
    },
    {
      Img: 'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=600&auto=format&fit=crop&q=60',
      tag: 'Underserved',
      color:'green '
    },
    {
      Img: 'https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?w=600&auto=format&fit=crop&q=60',
      tag: 'UnderBanked',
      color:' black'
    },
    {
      Img: 'https://plus.unsplash.com/premium_photo-1664477129473-35c28d5446f2?w=600&auto=format&fit=crop&q=60',
      tag: 'UnderBanked',
      color:'yallow'
    },
    {
      Img:'https://img.magnific.com/free-photo/happy-male-entrepreneur-working-computer-office_637285-6738.jpg?semt=ais_hybrid&w=740&q=80',
      tag:'Avrage'
      ,color:'pink '
    }
  ]

  return (
    <div>
      <Section1 user={user} />
      <Section2 />
    </div>
  )
}

export default App