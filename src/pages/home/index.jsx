import React from 'react'
import Nav from '@/components/layout/Nav'
import Hero from '@/components/faetures/Hero'
import Pagination from '@/components/faetures/Pagination'
import Sale from '@/components/faetures/Sale'
import Catalog from '@/components/faetures/Catalog'
export const Home = () => {
  return (
    <div className="px-5 py-5 text-sm md:px-10">
        <Nav />
      <Hero />
      <Sale />
      <Catalog />
      <Pagination />
    </div>
  )
}
