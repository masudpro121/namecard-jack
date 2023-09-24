import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Layout({children}) {
  return (
    <div>
      <div className="sticky top-0">
        <Header />
      </div>
      <div>
        {children}
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  )
}

export default Layout