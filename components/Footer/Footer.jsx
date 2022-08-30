import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

    const footerData = {
        "Для дома": [
            { itemName: 'Телефония', link: '#' },
            { itemName: 'Интернет (ADSL)', link: '#' },
            { itemName: 'Интернет (FTTB)', link: '#' },
            { itemName: 'Интернет (GePON)', link: '#' },
        ],
        "Для бизнеса": [
            { itemName: 'Телефония', link: '#' },
            { itemName: 'Интернет (ADSL)', link: '#' },
            { itemName: 'Интернет (ETTH)', link: '#' },
            { itemName: 'about4', link: '#' },
        ],
        "О компании": [
            { itemName: 'Общие сведения', link: '#' },
            { itemName: 'Лицензии', link: '#' },
            { itemName: 'Контакты', link: '#' },
            { itemName: 'Обратная связь', link: '#' },
        ],
    }

    return (
        <footer className='bg-slate-100 pt-2 sm:pt-0 rounded-t-3xl mt-10 lg:pt-10'>
            <div className='container max-w-7xl mx-auto px-5 py-5'>

                <div className="lg:flex">
                    {/* left side */}
                    <div className='pb-5 mb-5 sm:px-5 sm:py-8 lg:py-0 border-b lg:border-none lg:w-[33%]'>

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

                    {/* footer links */}
                    <div className='grid sm:px-5 lg:px-0 sm:py-5 lg:py-0 grid-cols-2 gap-8 sm:grid-cols-3 lg:w-[66%] lg:ml-auto xl:w-[50%]'>
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
                </div>

                <div className='flex flex-col px-0 text-center sm:text-left sm:px-5 mt-5 pt-5 border-t sm:flex-row sm:justify-between text-sm'>
                    <span className='inline-block mb-3 sm:mb-0'>© 2008–{new Date().getFullYear()} ООО «Донтехсвязь»</span>
                    <Link href={'/privacy'}>
                        <a className='hover:text-baseColor'>Политика конфиденциальности</a>
                    </Link>
                </div>

            </div>
        </footer>
    )
}

export default Footer