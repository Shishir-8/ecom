import React from 'react'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'
import MainHeader from './MainHeader'

export default function Header() {
  return (
   <header>
    <TopHeader />
    <MainHeader />
    <BottomHeader />
   </header>
  )
}
