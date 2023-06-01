import uniqid from 'uniqid'
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import React from "react";
import Image from 'next/image';
import { Category } from '@/type/type';
function CategoryNode({ level, category, children }: { level: number, category: Partial<Category>, children: ReactNode }) {
    const [show, setShow] = useState(true)
    const handleClick = () => {
        setShow(!show)
    }
    return (
        <>
            {
                category.subCat ? (
                    <>
                        <div className='w-100' style={{ height: '30px', transition: 'height .3s ease-in-out' }} >
                            <form className="d-inline-flex py-0 gap-2 w-100 overflow-hidden" style={{ height: '100%' }} onClick={handleClick} role='button'>
                                <>
                                    {
                                        category.avata ? (
                                            <Image width={15} height={15} className='my-auto h-100 ' src={'/images/' + category.avata} alt='abc' />
                                        ) :
                                            <div className='' style={{ width: '15px', height: '15px' }}></div>
                                    }
                                </>
                                <h6 className={`text-gray-700 overflow-hidden  fs-14 my-auto fw-500 ${level == 0 ? 'ps-0' : level == 1 ? 'ps-1' : 'ps-2'}  `} >
                                    {category.type}
                                </h6>
                            </form>
                        </div>
                        <div className={`d-flex flex-column text-gray-700 overflow-hidden ${show ? ' d-none' : ''}`} style={{ height: 'auto', transition: 'all .3s ease-out' }}>
                            {children}
                        </div>
                    </>
                ) :
                    (
                        <div className="d-inline-flex py-0 gap-2 w-100  " style={{ height: '30px' }} >
                            <>
                                {
                                    category.avata ? (
                                        <Image width={15} height={15} className='my-auto' src={'/images/' + category.avata} alt='abc' />
                                    ) :
                                        <div className='' style={{ width: '15px', height: '15px' }}></div>
                                }
                            </>
                            <div className='my-auto w-100 overflow-hidden'>
                                <a className={`my-auto h-100 text-decoration-none text-gray-700 fs-13 fw-500 overflow-y-hidden ${level == 0 ? 'ps-0' : level == 1 ? 'ps-1' : 'ps-2'}  `} href={category.url}>
                                    {category.type}
                                </a>
                            </div>
                        </div>
                    )
            }
        </>)
}
export default function CategoryList({ level, prop }: { level: number, prop: Category[] | undefined }) {
    return (
        <>
            {
                prop?.map((cat, index) => {
                    let parentLevel = level;
                    return (
                        < CategoryNode key={uniqid()} level={parentLevel} category={cat}>
                            < >
                                <CategoryList prop={cat.subCat} level={cat.subCat ? ++parentLevel : parentLevel} />
                            </>
                        </CategoryNode>

                    )
                })
            }
        </>
    )
}