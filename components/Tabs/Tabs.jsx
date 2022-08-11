import { motion, AnimatePresence } from "framer-motion"
import PhoneForm from '../PhoneForm/PhoneForm'
import { Tab } from '@headlessui/react'
import { useState } from "react"
import { FaTimes } from 'react-icons/fa'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Tabs({categories}) {

  const [selectedItem, setSelectedItem] = useState(null)

  const [isError, setIsError] = useState(false)

  
  return (
    <>

      <div className="w-full px-0 md:px-2 py-5 sm:px-0">
        <Tab.Group>

          <Tab.List className="flex space-x-1 rounded-xl bg-gray-200 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                onClick={() => setSelectedItem(null)}
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'transition duration-300 ease-in',
                    'ring-white ring-opacity-10 ring-offset-2 ring-offset-baseColor focus:outline-none focus:ring-2',
                    'active:scale-90 active:bg-white',
                    selected
                      ? 'bg-white shadow text-baseColor'
                      : 'text-gray-800 hover:bg-gray-400 hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 
                  // focus:outline-none focus:ring-2'
                )}
              >

                {posts.map((post, index) => (
                  <motion.div key={index} layoutId={post.categoryId}>

                    <div className="flex flex-col items-center md:flex-row">

                      <div className="flex mb-7 md:mb-0">
                        <div className='font-medium shadow-lg px-3 py-3 mr-5 flex flex-col items-center rounded-md'>
                          <img className='w-20' src="/donnetworkNet.gif" alt="img" />
                          <span className='block text-sm text-gray-700'>Скорость:</span>
                          <span className='font-bold text-gray-800'>{post.speed}</span>
                        </div>

                        <div className='font-medium shadow-lg px-3 py-3 md:mr-5 flex flex-col items-center rounded-md'>
                          <img className='w-20' src="/donntetworkTv.gif" alt="img" />
                          <span className='block text-sm text-gray-700'>Каналов:</span>
                          <span className='font-bold text-gray-800'>{post.channelsCount}</span>
                        </div>
                      </div>

                      <div className='flex flex-col items-end sm:ml-auto sm:mr-3'>
                        <span className='font-bold text-5xl'>{post.price}</span>
                        <span>руб/мес</span>
                      </div>

                    </div>

                    <h3 className="text-md leading-5 mt-8">
                      {post.title}
                    </h3>

                    <button
                      onClick={() => setSelectedItem(post)}
                      className="w-full mt-10 flex items-center justify-center px-8 py-3 border border-transparent 
                        text-base font-medium rounded-md text-white bg-baseColor hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Выбрать тариф
                    </button>

                  </motion.div>
                ))}

              </Tab.Panel>
            ))}
          </Tab.Panels>

        </Tab.Group>
      </div>
      
      {/* popUp tariff */}
      <AnimatePresence>
        {
          selectedItem?.categoryId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseDown={() => setSelectedItem(null)}
              className="w-full h-screen flex justify-center items-center 
              fixed top-0 left-0 z-max myBg backdrop-blur-sm">

              <motion.div 
                layoutId={selectedItem.categoryId}
                onMouseDown={e => e.stopPropagation()}
                className='p-5 sm:p-8 bg-white rounded-xl text-4xl w-72 sm:w-128 
                  relative overflow-auto h-100 sm:h-auto'>

                <div 
                  className="absolute right-1 top-1 bg-baseColor 
                  text-white rounded-lg text-xl w-8 h-8 flex justify-center items-center
                  active:scale-95 cursor-pointer hover:bg-baseColor-20"
                  onClick={() => setSelectedItem(null)}
                  >
                  <FaTimes/>
                </div>

                <motion.h3 className='text-base sm:text-2xl font-semibold mb-3 sm:mb-5'>
                  Вы выбрали тариф: {' '}
                  <span className='text-baseColor font-bold'>
                    {Object.keys(categories)[selectedItem.categoryId - 1]}
                  </span>
                </motion.h3>

                {
                  !isError ? <>

                  {/* mini cards */}
                  <div className="flex flex-row-reverse justify-between items-center">

                    {/* price */}
                    <div className="text-3xl sm:text-5xl flex flex-col items-end font-bold">
                      {selectedItem.price} <span className="text-sm font-normal">руб/мес</span>
                    </div>

                    {/* icons and properties */}
                    <div className="inline-flex flex-col sm:flex-row sm-flex mb-3 sm:mb-5">
                        <div className='font-medium shadow-lg flex items-center rounded-md mr-5 pl-1 py-3 pr-3 w-40'>
                          <img className='w-10 mr-2' src="/donnetworkNet.gif" alt="img" />
                          <div>
                            <span className='block text-sm text-gray-700'>Скорость:</span>
                            <span className='block font-bold text-sm text-gray-800'>{selectedItem.speed}</span>
                          </div>
                        </div>

                        <div className='font-medium shadow-lg flex items-center rounded-md py-3 pl-1 pr-3 w-40 sm:w-32'>
                          <img className='w-10 mr-2' src="/donntetworkTv.gif" alt="img" />
                          <div>
                            <span className='block text-sm text-gray-700'>Каналов:</span>
                            <span className='block font-bold text-sm text-gray-800'>
                              {selectedItem.channelsCount}
                            </span>
                          </div>
                        </div>
                    </div>

                  </div>

                  <PhoneForm setIsError={setIsError} setShowNumberForm={null} setIsOpen={null} />

                  </>
                  :
                  // ====== if error ====== //
                  <motion.div className="w-full bg-red-500 text-white px-5 pt-3 pb-8 mb-5 rounded-lg relative">
                    <div className='mb-5 text-base sm:text-xl'>
                      Произошла ошибка. Сейчас ведутся работы на сервере, но вы можете оставть заявку
                      по бесплатному номеру: <br />
                      <a href="tel:+7(863)202-00-00" className='px-2 py-1 bg-baseColor-20 rounded-md mt-2 inline-block'>+7 (863) 202-00-00</ a>
                    </div>
                    <button
                      onClick={() => setIsError(false)}
                      className='px-5 py-1 bg-red-400 text-base hover:bg-red-700 absolute right-2 bottom-2 rounded-md'>
                      ок
                    </button>
                  </motion.div>
                }
                

              </motion.div>

            </motion.div>
          )
        }
      </AnimatePresence>

    </>
  )
}

export default Tabs;