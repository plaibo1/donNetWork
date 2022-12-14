import { motion, AnimatePresence } from "framer-motion"
import PhoneForm from '../PhoneForm/PhoneForm'
import { Tab } from '@headlessui/react'
import { useState } from "react"
import { FaTimes } from 'react-icons/fa'
import ErrorAlert from "../ErrorAlert/ErrorAlert"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Tabs({categories, setIsSuccess, setUserNumber}) {

  const [selectedItem, setSelectedItem] = useState(null)

  const [isError, setIsError] = useState(false)

  
  return (
    <>

      <div className="w-full px-0 md:px-2 py-5 sm:px-0">
        <Tab.Group>

          <Tab.List className="flex space-x-1 rounded-xl bg-gray-200 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
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
                          <span className='block text-sm text-gray-700'>????????????????:</span>
                          <span className='font-bold text-gray-800'>{post.speed}</span>
                        </div>

                        <div className='font-medium shadow-lg px-3 py-3 md:mr-5 flex flex-col items-center rounded-md'>
                          <img className='w-20' src="/donntetworkTv.gif" alt="img" />
                          <span className='block text-sm text-gray-700'>??????????????:</span>
                          <span className='font-bold text-gray-800'>{post.channelsCount}</span>
                        </div>
                      </div>

                      <div className='flex flex-col items-end sm:ml-auto sm:mr-3'>
                        <span className='font-bold text-5xl'>{post.price}</span>
                        <span>??????/??????</span>
                      </div>

                    </div>

                    <p className="text-md leading-5 mt-8">
                      {post.title}
                    </p>

                    <button
                      onClick={() => setSelectedItem(post)}
                      className="w-full mt-10 flex items-center justify-center px-8 py-3 border border-transparent 
                        text-base font-medium rounded-md text-white bg-baseColor hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      ?????????????? ??????????
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
                className='p-5 sm:p-8 bg-white rounded-xl text-4xl 
                  w-[90%] sm:w-[90%] md:w-[60%] lg:w-[500px]
                  max-h-[90vh] overflow-auto
                relative'>

                <div
                  className="absolute right-1 top-1 bg-baseColor 
                  text-white rounded-lg text-xl w-8 h-8 flex justify-center items-center
                  active:scale-95 cursor-pointer hover:bg-baseColor-20"
                  onClick={() => setSelectedItem(null)}
                >
                  <FaTimes />
                </div>

                <motion.h3 className='text-base sm:text-2xl font-semibold mb-3 sm:mb-5'>
                  ???? ?????????????? ??????????: {' '}
                  <span className='text-baseColor font-bold'>
                    {selectedItem.tariffName}
                  </span>
                </motion.h3>

                {
                  !isError ? <>

                    {/* mini cards */}
                    <div className="flex flex-row-reverse justify-between items-center">

                      {/* price */}
                      <div className="text-3xl sm:text-5xl flex flex-col items-end font-bold">
                        {selectedItem.price} <span className="text-sm font-normal">??????/??????</span>
                      </div>

                      {/* icons and properties */}
                      <div className="inline-flex flex-col sm:flex-row sm-flex mb-3 sm:mb-5">
                        <div className='font-medium shadow-lg flex items-center rounded-md mr-5 pl-1 py-3 pr-3 w-40'>
                          <img className='w-10 mr-2' src="/donnetworkNet.gif" alt="img" />
                          <div>
                            <span className='block text-sm text-gray-700'>????????????????:</span>
                            <span className='block font-bold text-sm text-gray-800'>{selectedItem.speed}</span>
                          </div>
                        </div>

                        <div className='font-medium shadow-lg flex items-center rounded-md py-3 pl-1 pr-3 w-40 sm:w-32'>
                          <img className='w-10 mr-2' src="/donntetworkTv.gif" alt="img" />
                          <div>
                            <span className='block text-sm text-gray-700'>??????????????:</span>
                            <span className='block font-bold text-sm text-gray-800'>
                              {selectedItem.channelsCount}
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>

                    <PhoneForm 
                      setIsError={setIsError} 
                      setShowNumberForm={null} 
                      setIsOpen={null} 
                      setIsSuccess={setIsSuccess}
                      setSelectedLayout={setSelectedItem}
                      setUserNumber={setUserNumber}

                      userFrom={`???????????? ?? "??????????" ??????????, ????????????: <span style='color: #2b3cff'>${selectedItem.tariffName}</span>`}
                    />

                  </>
                    :
                    // ====== if error ====== //
                    <ErrorAlert setIsError={setIsError}/>
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