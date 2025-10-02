import React from 'react'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-sky-500/20 text-neutral-content flex justify-center items-center p-4">
    <div>
      <p> Motiar Store ©{new Date().getFullYear()} - All right reserved |</p>
      <p>Design & Develop - Mehedi Hasan Shohan</p>
    </div>
</footer>
  )
}

export default Footer