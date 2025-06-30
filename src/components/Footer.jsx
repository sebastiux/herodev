import React from 'react'

const Footer = () => {
  const footerLinks = [
    "Privacy Policy",
    "Terms of Service", 
    "Cookie Policy",
    "Accessibility",
    "Legal"
  ]

  return (
    <footer className="py-5 sm:px-10 px-5 bg-black">
      <div className="screen-max-width">

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copyright © 2025 HGroup. Carlos Ortega</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer