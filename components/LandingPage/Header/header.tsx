import Image from "next/image"
const Header = ()=>{
  return (
<header className="text-gray-100 body-font bg-gray-300 py-3">
  <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center bg-gray-300 ">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src="/logopanda.svg" alt="Logo" width="100" height="100"/>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-black">Log In</a>
      <a className="mr-5 hover:text-black">Register</a>
      <a className="mr-5 hover:text-black">About Us</a>
    </nav>
    <button className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}



export default Header
