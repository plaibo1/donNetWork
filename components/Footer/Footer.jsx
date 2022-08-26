import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

    const footerData = {
        "Company": [
            {itemName: 'header1', link: '#'},
            {itemName: 'header2', link: '#'},
            {itemName: 'header3', link: '#'},
            {itemName: 'header4', link: '#'},
        ],
        "Products": [
            {itemName: 'about1', link: '#'},
            {itemName: 'about2', link: '#'},
            {itemName: 'about3', link: '#'},
            {itemName: 'about4', link: '#'},
        ],
        "3 column": [
            {itemName: 'about1', link: '#'},
            {itemName: 'about2', link: '#'},
            {itemName: 'about3', link: '#'},
            {itemName: 'about4', link: '#'},
        ],
    }

    return (
        <footer>
            <div className="pt-0 mt-20 md:pt-16 bg-slate-50 rounded-t-3xl">
                <div className='container max-w-7xl mx-auto'>

                    <div className="grid grid-cols-8 gap-6 md:gap-0">
                        
                        <div className="border-r col-span-8 md:col-span-2 py-6 sm:py-0 lg:col-span-3 px-4 border-b md:border-right">
                            <div className="flex items-center mb-4">
                                <Image
                                    src="/rocket.png"
                                    alt="logo"
                                    width={40}
                                    height={50}
                                />
                                <span className='text-2xl font-bold ml-3'>Донтехсвязь</span>
                            </div>

                            <div className='mb-5'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut vitae fugiat itaque.
                            </div>

                            {/* footer address */}
                            <div className='w-[300px]'>
                                <div className='mb-3'>
                                    <div className='text-base'>
                                        <span className='font-bold mr-1 block'>Телефон:</span>
                                        <a href="tel:+7(863)202-00-00" className='hover:text-baseColor'>+7 (863) 202-00-00</a>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-base'>
                                        <span className='font-bold mr-1 block'>Адрес:</span>
                                        Межевая ул., 160, Ростов-на-Дону, Ростовская обл., 344001
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-8 md:col-span-6 lg:col-span-5">

                            <div className="md:pl-16 pb-16 grid grid-cols-2 gap-6 sm:grid-cols-3 px-4">

                                {/* footer links */}
                                {
                                    Object.keys(footerData).map(heading => {


                                        return (
                                            <div key={heading}>
                                                <h6 className="text-lg font-medium text-gray-800 capitalize">{heading}</h6>
                                                <ul className="list-inside mt-4 space-y-4">
                                                    {
                                                        footerData[heading].map(item => {
                                                            return (
                                                                <li key={item.itemName}>
                                                                    <a href={item.link} className="hover:text-baseColor transition capitalize">
                                                                        {item.itemName}
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            <div className="pb-8 py-4 px-3 md:pl-16 border-t flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
                                <span className='mb-5 sm:mb-0'>
                                    © 1991–{new Date().getFullYear()} ООО «Донтехсвязь» {" "}
                                    <span className='text-xs text-slate-500 block'>*Все права защищиены</span>
                                </span>
                                <Link href='/privacy'>
                                    <a>Политика конфиденциальности </a>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footer