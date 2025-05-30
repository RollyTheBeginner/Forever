import { assets } from "../assets/frontend_assets/assets"

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li className='hover:text-black cursor-pointer'>Home</li>
                    <li className='hover:text-black cursor-pointer'>About Us</li>
                    <li className='hover:text-black cursor-pointer'>Delivery</li>
                    <li className='hover:text-black cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>09123456789</li>
                    <li>rollyjunior6@gmail.com</li>
                </ul>
            </div>
        </div>

            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>Copyright {year}@ forever.com - All Right Reserved.</p>
            </div>

    </div>
  )
}

export default Footer
