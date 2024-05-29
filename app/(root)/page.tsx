import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName :"Niggesh",lastName:"Nigger",email:"niggerfucker@africa.com"}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type='greeting' user={loggedIn?.firstName || "Guest"} title='Welcome'subtext='Access and manage accounts and transactions efficiently' />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}  />
        </header>
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{},{}]} />
    </section>
  )
}

export default Home