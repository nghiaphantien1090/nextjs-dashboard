import styles from '../Dashboard/index.module.scss'
import Badge  from '../components/Badge/index'
import Header  from '../components/Header/index'
import NavbarVer   from '../components/NavbarVer/index'
import ReactECharts from 'echarts-for-react'
import Image from 'next/image'
import React from 'react'
import { Button } from 'react-bootstrap'
import EChartsReact from 'echarts-for-react'
import 'react-circular-progressbar/dist/styles.css'
import { useAppSelector } from '@/redux/hook'
import clsx from 'clsx'
import * as echarts from 'echarts';

export default function Index() {
    const navbar = useAppSelector(state=>state.navbar)
const contentExpand = navbar.isShowNavbar&&navbar.largerXlSize?styles.contentCollapse:styles.contentExpand
    return (
        <>
            <div className='container' >
                <Header />
                <NavbarVer />
                <div className={clsx(navbar.isShowNavbar ? styles.contentCollapse : contentExpand)} style={{ transition: 'all .3s ease-in', zIndex: -1 }}  >
                    <div className='w-100' >
                        <div className={'row g-1 mb-1 '} >
                            <div className='col-xxl-3 col-md-6'>
                                <div className='card h-100 shadow border-0 w-100 bg-white'>
                                    <div className='card-header border-0 pb-0 bg-white'>
                                        <div className='d-flex gap-1 mt-0 align-items-center'>
                                            <div className='my-0'>
                                                <h6 className='mb-0'>Weekly Sales</h6>
                                            </div>
                                            <span className='d-flex align-items-center my-auto justify-content-center'>
                                                <svg width={15} className="svg-inline--fa fa-question-circle fa-w-16" data-fa-transform="shrink-1" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" ><g transform="translate(256 256)"><g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" transform="translate(-256 -256)"></path></g></g></svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='card-body d-flex flex-column justify-content-end border-0 w-100'>
                                        <div className='d-flex '>
                                            <div style={{ marginRight: 0 }}>
                                                <p className='font-34 lh-1 mb-1 ' >$47k</p>
                                                <Badge content='+3.5%' cssProps={{
                                                    borderRadius: '50px', backgroundColor: '#ccf6e4', fontSize: '12px'
                                                    , color: '#00864e', fontWeight: '600',
                                                }} />
                                            </div>
                                            <div className='w-100 my-auto d-flex justify-content-end' style={{ position: 'relative' }}>
                                                <ReactECharts option={optsChartWeekySales} style={{ width: '160px', height: '60px' }} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='col-xxl-3 col-md-6'>
                                <div className='card border-0 w-100 h-100 shadow '>
                                    <div className='card-header bg-white border-0'>
                                        <div className='d-flex gap-0 mt-0 align-items-center'>
                                            <div className='my-auto'>
                                                <h6 className='mb-0'>Total Order</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body border-0 w-100'>
                                        <div className='d-flex  h-100'>
                                            <div className='d-flex flex-column justify-content-end' >
                                                <p className='font-34  mb-1 ' >58.4k</p>
                                                <Badge content='13.6%' cssProps={{
                                                    borderRadius: '50px', backgroundColor: '#ccf6e4', fontSize: '12px'
                                                    , color: '#00864e', fontWeight: '600',
                                                }} />
                                            </div>
                                            <div className='w-100 my-auto d-flex justify-content-end' style={{ position: 'relative' }}>
                                                <ReactECharts option={optsChartTotalOrder} style={{ width: '148px', height: '90px' }} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='col-xxl-3 col-md-6 '>
                                <div className='card w-100 h-100 border-0 shadow'>
                                    <div className='d-flex card-body border-0 h-100' style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                        <div className='h-100 w-100' >
                                            <div className='d-flex' style={{ height: '100%' }}>
                                                <div className="" style={{ fontSize: "11px" }}>
                                                    <div className='pb-1'>
                                                        <h6>Market Share</h6>
                                                    </div>
                                                <div className='d-flex flex-column gap-1'>
                                                    <div className="d-flex justify-content-between gap-4">
                                                        <div className="d-flex align-items-center"><span className="dot bg-primary"></span><span className="fw-semi-bold">Samsung</span></div>
                                                        <div className="d-xxl-none">33%</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between gap-4">
                                                        <div className="d-flex align-items-center"><span className="dot bg-info"></span><span className="fw-semi-bold">Huawei</span></div>
                                                        <div className="d-xxl-none">29%</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between gap-4">
                                                        <div className="d-flex align-items-center"><span className="dot bg-gray-400"></span><span className="fw-semi-bold">Apple</span></div>
                                                        <div className="d-xxl-none">20%</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' my-auto' style={{ position: 'relative' }}>
                                            <ReactECharts option={optsMarketShare} style={{ width: '110px', height: '110px', top: '50' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xxl-3 col-md-6'>
                                <div className='card w-100 h-100 shadow border-0'>
                                    <div className='card-header bg-white border-0'>
                                        <div className='d-flex gap-0 mt-0 align-items-center justify-content-between'>
                                            <div className='my-auto'>
                                                <h6 className='mb-0'>Weather</h6>
                                            </div>
                                            <div>
                                                <svg width="31px" height="20px" viewBox="-32 -32 96.00 96.00" xmlns="http://www.w3.org/2000/svg" fill="#ebe5e5" transform="rotate(90)" stroke="#ebe5e5" strokeWidth="0.704"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#373737"></path></g></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body border-0 w-100'>
                                        <div className='d-flex justify-content-between '>
                                            <div className='d-flex '>
                                                <div style={{ marginRight: 0 }}>
                                                    <Image width={60} height={60} alt='weather' src={'/images/weather.png'} />
                                                </div>
                                                <div className='d-block ms-1' >
                                                    <h6 style={{ fontSize: '14px' }}>New York city</h6>
                                                    <p style={{ fontSize: '12px', color: 'red' }}>Sunny</p>
                                                    <p style={{ fontSize: '12px', color: 'gray' }}>Precipitation: 50%</p>
                                                </div>
                                            </div>
                                            <div className='d-block ms-1' >
                                                <h6 className='text-primary lh-1' style={{ fontSize: '33px' }}>31°</h6>
                                                <p style={{ fontSize: '12px', color: 'grey' }}>32° / 25°</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row g-1 mb-1'>
                            <div className='col-lg-6 col-12'>
                                <div className='card border-0 shadow h-100'>
                                    <div className=' card-header border-0 d-flex gap-0 mt-0 align-items-center justify-content-between'>
                                        <div>
                                            <h6>Running Projects</h6>
                                        </div>
                                        <div>
                                            <select className="form-select form-select-sm bg-light fs-16">
                                                <option>Working Time</option>
                                                <option>Estimated Time</option>
                                                <option>Billable Time</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='card-body border-0'>
                                        <ProjectRunning />
                                        <ProjectRunning />
                                        <ProjectRunning />
                                        <ProjectRunning />
                                        <ProjectRunning />
                                    </div>
                                    <div className='card-footer border-0 d-flex justify-content-center align-items-center text-primary'>
                                        Show All Projects
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-12'>
                                <div className='card border-0 shadow h-100'>
                                    <div className='card-header bg-white border-0 border-0'>
                                        <div className='d-flex gap-0 mt-0 align-items-center justify-content-between'>
                                            <div>
                                                <h6>Total Sales</h6>
                                            </div>
                                            <div className="d-flex">
                                                <select className="form-select form-select-sm me-2 bg-light fs-16">
                                                    <option value="0">January</option>
                                                    <option value="1">February</option>
                                                    <option value="2">March</option>
                                                    <option value="3">April</option>
                                                    <option value="4">May</option>
                                                    <option value="5">Jun</option>
                                                    <option value="6">July</option>
                                                    <option value="7">August</option>
                                                    <option value="8">September</option>
                                                    <option value="9">October</option>
                                                    <option value="10">November</option>
                                                    <option value="11">December</option>
                                                </select>
                                                <div>
                                                    <svg width="31px" height="31px" viewBox="-32 -32 96.00 96.00" xmlns="http://www.w3.org/2000/svg" fill="#ebe5e5" transform="rotate(90)" stroke="#ebe5e5" stroke-width="0.704"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#373737"></path></g></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body border-0 border-0'>
                                        <div className='d-flex justify-content-between h-100'>
                                            <ReactECharts option={optsTotalSales} style={{ width: '100%', height: '285px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row g-1 mb-1'>
                            <div className='col-lg-6 col-xl-7 col-xxl-8'>
                                <div className='card border-0 shadow h-100'>
                                    <div className='card-body border-0'>
                                        <h6 className='fs-6 mb-1'>
                                            Using Storage <span className='fw-bold'> 1775.06 MB</span> of 2 GB
                                        </h6>
                                        <div className='d-inline-flex w-100 ' >
                                            <div className='progress w-100' style={{ height: '10px' }}>
                                                <div className='progress-bar border-end border-2 ' style={{ width: '25%' }}></div>
                                                <div className='progress-bar bg-success border-end border-2' style={{ width: '25%' }}></div>
                                                <div className='progress-bar bg-info border-end border-2' style={{ width: '25%' }}></div>
                                                <div className='progress-bar' style={{ width: '25%' }}></div>
                                            </div>
                                        </div>
                                        <div className="row fw-semi-bold g-0 py-1">
                                            <div className='col-auto d-inline-flex'>
                                                <div className='d-inline-flex pe-2'>
                                                    <div className='dot bg-primary my-auto' />
                                                    <p className='my-auto'>Regular (895MB) </p>
                                                </div>
                                            </div>
                                            <div className='col-auto d-inline-flex'>
                                                <div className='d-inline-flex pe-2'>
                                                    <div className='dot bg-success my-auto' />
                                                    <p className='my-auto'>Regular (895MB) </p>
                                                </div>
                                            </div>
                                            <div className='col-auto d-inline-flex'>
                                                <div className='d-inline-flex pe-2'>
                                                    <div className='dot bg-info my-auto' />
                                                    <p className='my-auto'>Regular (895MB) </p>
                                                </div>
                                            </div>
                                            <div className='col-auto d-inline-flex'>
                                                <div className='d-inline-flex pe-2'>
                                                    <div className='dot bg-primary my-auto' />
                                                    <p className='my-auto'>Regular (895MB) </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-6 col-xl-5 col-xxl-4 '>
                                <div className='card border-0 shadow h-100'>
                                    <div className='card-body border-0'>
                                        <h5 className='text-warning'>
                                            Running out of your space?
                                        </h5>
                                        <p className='pb-0 ' style={{ fontSize: '14px' }}>
                                            Your storage will be running out soon. Get more space and powerful productivity features.
                                        </p>
                                        <a className='text-warning text-decoration-none fw-bold'>
                                            Upgrade Store
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='row g-1 mb-1 '>

                            <div className='col-lg-6 col-xl-7 col-xxl-8'>
                                <div className='card border-0 h-100 shadow'>
                                    <div className='card-body border-0 p-0'>
                                        <table className='table mb-0'>
                                            <thead className='fs-14 bg-light'>
                                                <tr>
                                                    <th className='fw-600'> Best Selling Products</th>
                                                    <th className='fw-600 text-end'> Revenue ($3333)	</th>
                                                    <th className='fw-600 text-end'> Revenue (%)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='d-flex gap-1 justify-content-start align-items-center  border-gray-100  '>
                                                        <Image src={'/images/RavenPro.png'} width={60} height={40} alt='picture' />
                                                        <div className=''>
                                                            <h6 className='mb-0'>Raven Pro</h6>
                                                            <p className='mb-0'>Landing</p>
                                                        </div>
                                                    </td>
                                                    <td className='text-end align-middle  border-gray-100'>
                                                        $1311
                                                    </td>
                                                    <td className='align-middle  border-gray-100'>
                                                        <div className=' d-flex gap-1 align-middle'>
                                                            <div className='progress w-100 my-auto' style={{ height: '5px' }}>
                                                                <div className='progress-bar' style={{ width: '39%' }}></div>
                                                            </div>
                                                            <p className='mb-0'>39%</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='d-flex gap-1 justify-content-start align-items-center  border-gray-100  '>
                                                        <Image src={'/images/RavenPro.png'} width={60} height={40} alt='picture' />
                                                        <div className=''>
                                                            <h6 className='mb-0'>Raven Pro</h6>
                                                            <p className='mb-0'>Landing</p>
                                                        </div>
                                                    </td>
                                                    <td className='text-end align-middle  border-gray-100'>
                                                        $1311
                                                    </td>
                                                    <td className='align-middle  border-gray-100'>
                                                        <div className=' d-flex gap-1 align-middle'>
                                                            <div className='progress w-100 my-auto' style={{ height: '5px' }}>
                                                                <div className='progress-bar' style={{ width: '39%' }}></div>
                                                            </div>
                                                            <p className='mb-0'>39%</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='d-flex gap-1 justify-content-start align-items-center  border-gray-100  '>
                                                        <Image src={'/images/RavenPro.png'} width={60} height={40} alt='picture' />
                                                        <div className=''>
                                                            <h6 className='mb-0'>Raven Pro</h6>
                                                            <p className='mb-0'>Landing</p>
                                                        </div>
                                                    </td>
                                                    <td className='text-end align-middle  border-gray-100'>
                                                        $1311
                                                    </td>
                                                    <td className='align-middle  border-gray-100'>
                                                        <div className=' d-flex gap-1 align-middle'>
                                                            <div className='progress w-100 my-auto' style={{ height: '5px' }}>
                                                                <div className='progress-bar' style={{ width: '39%' }}></div>
                                                            </div>
                                                            <p className='mb-0'>39%</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='d-flex gap-1 justify-content-start align-items-center  border-gray-100  '>
                                                        <Image src={'/images/RavenPro.png'} width={60} height={40} alt='picture' />
                                                        <div className=''>
                                                            <h6 className='mb-0'>Raven Pro</h6>
                                                            <p className='mb-0'>Landing</p>
                                                        </div>
                                                    </td>
                                                    <td className='text-end align-middle  border-gray-100'>
                                                        $1311
                                                    </td>
                                                    <td className='align-middle  border-gray-100'>
                                                        <div className=' d-flex gap-1 align-middle'>
                                                            <div className='progress w-100 my-auto' style={{ height: '5px' }}>
                                                                <div className='progress-bar' style={{ width: '39%' }}></div>
                                                            </div>
                                                            <p className='mb-0'>39%</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='d-flex gap-1 justify-content-start align-items-center  border-gray-100  '>
                                                        <Image src={'/images/RavenPro.png'} width={60} height={40} alt='picture' />
                                                        <div className=''>
                                                            <h6 className='mb-0'>Raven Pro</h6>
                                                            <p className='mb-0'>Landing</p>
                                                        </div>
                                                    </td>
                                                    <td className='text-end align-middle  border-gray-100'>
                                                        $1311
                                                    </td>
                                                    <td className='align-middle  border-gray-100'>
                                                        <div className=' d-flex gap-1 align-middle'>
                                                            <div className='progress w-100 my-auto' style={{ height: '5px' }}>
                                                                <div className='progress-bar' style={{ width: '39%' }}></div>
                                                            </div>
                                                            <p className='mb-0'>39%</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='d-flex gap-1 justify-content-start align-items-center  border-gray-100  '>
                                                        <Image src={'/images/RavenPro.png'} width={60} height={40} alt='picture' />
                                                        <div className=''>
                                                            <h6 className='mb-0'>Raven Pro</h6>
                                                            <p className='mb-0'>Landing</p>
                                                        </div>
                                                    </td>
                                                    <td className='text-end align-middle  border-gray-100'>
                                                        $1311
                                                    </td>
                                                    <td className='align-middle  border-gray-100'>
                                                        <div className=' d-flex gap-1 align-middle'>
                                                            <div className='progress w-100 my-auto' style={{ height: '5px' }}>
                                                                <div className='progress-bar' style={{ width: '39%' }}></div>
                                                            </div>
                                                            <p className='mb-0'>39%</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='card-footer border-0'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='my-auto'>
                                                <select className="form-select form-select-sm me-2 bg-light fs-16 ">
                                                    <option value="0">January</option>
                                                    <option value="1">February</option>
                                                    <option value="2">March</option>
                                                    <option value="3">April</option>
                                                    <option value="4">May</option>
                                                    <option value="5">Jun</option>
                                                    <option value="6">July</option>
                                                    <option value="7">August</option>
                                                    <option value="8">September</option>
                                                    <option value="9">October</option>
                                                    <option value="10">November</option>
                                                    <option value="11">December</option>
                                                </select>
                                            </div>
                                            <Button className='btn btn-default'>View All</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-xl-5 col-xxl-4'>
                                <div className='card border-0 h-100 shadow'>
                                    <div className='card-header border-0 d-inline-flex justify-content-between fs-14 fw-600'>
                                        <h6 className='mb-0 fs-14 '>Shared Files</h6>
                                        <div className='text-primary'>
                                            <a>View All</a>
                                        </div>
                                    </div>
                                    <div className='card-body border-0 mb-0 text-gray-600'>
                                        <div className='d-inline-flex gap-2 my-auto justify-content-between align-items-center '>
                                            <div className='rounded-2'>
                                                <Image src={'/images/iphone.png'} className='rounded-2' width={40} height={40} alt='iphone' />
                                            </div>
                                            <div>
                                                <div>
                                                    <a className='fw-600 text-gray-700 fs-16 text-decoration-none'>apple-smart-watch.png</a>
                                                </div>
                                                <span className='fw-600 fs-15'>Antony</span> <span className='fs-14'>Just now</span>
                                            </div>
                                        </div>
                                        <hr className='opacity-15' />
                                        <div className='d-inline-flex gap-2 my-auto justify-content-between align-items-center'>
                                            <div className='rounded-2'>
                                                <Image src={'/images/iphone.png'} className='rounded-2' width={40} height={40} alt='iphone' />
                                            </div>
                                            <div>
                                                <div>
                                                    <a className='fw-600 text-gray-700 fs-16 text-decoration-none'>apple-smart-watch.png</a>
                                                </div>
                                                <span className='fw-600 fs-15'>Antony</span> <span className='fs-14'>Just now</span>
                                            </div>
                                        </div>
                                        <hr className='opacity-15' />
                                        <div className='d-inline-flex gap-2 my-auto justify-content-between align-items-center'>
                                            <div className='rounded-2'>
                                                <Image src={'/images/iphone.png'} className='rounded-2' width={40} height={40} alt='iphone' />
                                            </div>
                                            <div>
                                                <div>
                                                    <a className='fw-600 text-gray-700 fs-16 text-decoration-none'>apple-smart-watch.png</a>
                                                </div>
                                                <span className='fw-600 fs-15'>Antony</span> <span className='fs-14'>Just now</span>
                                            </div>
                                        </div>
                                        <hr className='opacity-15' />
                                        <div className='d-inline-flex gap-2 my-auto justify-content-between align-items-center'>
                                            <div className='rounded-2'>
                                                <Image src={'/images/iphone.png'} className='rounded-2' width={40} height={40} alt='iphone' />
                                            </div>
                                            <div>
                                                <div>
                                                    <a className='fw-600 text-gray-700 fs-16 text-decoration-none'>apple-smart-watch.png</a>
                                                </div>
                                                <span className='fw-600 fs-15'>Antony</span> <span className='fs-14'>Just now</span>
                                            </div>
                                        </div>
                                        <hr className='opacity-15' />
                                        <div className='d-inline-flex gap-2 my-auto justify-content-between align-items-center'>
                                            <div className='rounded-2'>
                                                <Image src={'/images/iphone.png'} className='rounded-2' width={40} height={40} alt='iphone' />
                                            </div>
                                            <div>
                                                <div>
                                                    <a className='fw-600 text-gray-700 fs-16 text-decoration-none'>apple-smart-watch.png</a>
                                                </div>
                                                <span className='fw-600 fs-15'>Antony</span> <span className='fs-14'>Just now</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='row g-1 mb-3'>
                            <div className='col-xxl-3 col-lg-6 order-xxl-1 order-1 col'>
                                <div className='card border-0 h-100 shadow'>
                                    <div className='card-header border-0 py-1 d-inline-flex justify-content-between'>
                                        <div className='my-auto'>
                                            <h6 className='mb-0 '>Active Users</h6>
                                        </div>
                                        <div>
                                            <svg width="31px" height="31px" viewBox="-32 -32 96.00 96.00" xmlns="http://www.w3.org/2000/svg" fill="#ebe5e5" transform="rotate(90)" stroke="#ebe5e5" stroke-width="0.704"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#373737"></path></g></svg>
                                        </div>
                                    </div>
                                    <div className='card-body border-0 d-flex flex-column justify-content-between  '>
                                        <div className='d-flex gap-1 my-0 justify-content-start align-items-center'>
                                            <div className='relative'>
                                                <Image className='rounded-pill' width={40} height={40} src={'/images/avata.png'} alt='avata' />
                                                <div className='absolute bg-success rounded-pill border border-white' style={{ width: '15px', height: '15px', left: '70%', top: '70%' }}></div>
                                            </div>

                                            <div className=''>
                                                <a className='fw-600 text-decoration-none text-gray-900'>Ema Wastsion</a>
                                                <p className='mb-0 fs-12 opacity-70'>Admin</p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-1 my-0 justify-content-start align-items-center'>
                                            <div className='relative'>
                                                <Image className='rounded-pill' width={40} height={40} src={'/images/avata.png'} alt='avata' />
                                                <div className='absolute bg-success rounded-pill border border-white' style={{ width: '15px', height: '15px', left: '70%', top: '70%' }}></div>
                                            </div>

                                            <div className=''>
                                                <a className='fw-600 text-decoration-none text-gray-900'>Ema Wastsion</a>
                                                <p className='mb-0 fs-12 opacity-70'>Admin</p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-1 my-0 justify-content-start align-items-center'>
                                            <div className='relative'>
                                                <Image className='rounded-pill' width={40} height={40} src={'/images/avata.png'} alt='avata' />
                                                <div className='absolute bg-success rounded-pill border border-white' style={{ width: '15px', height: '15px', left: '70%', top: '70%' }}></div>
                                            </div>

                                            <div className=''>
                                                <a className='fw-600 text-decoration-none text-gray-900'>Ema Wastsion</a>
                                                <p className='mb-0 fs-12 opacity-70'>Admin</p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-1 my-0 justify-content-start align-items-center'>
                                            <div className='relative'>
                                                <Image className='rounded-pill' width={40} height={40} src={'/images/avata.png'} alt='avata' />
                                                <div className='absolute bg-success rounded-pill border border-white' style={{ width: '15px', height: '15px', left: '70%', top: '70%' }}></div>
                                            </div>

                                            <div className=''>
                                                <a className='fw-600 text-decoration-none text-gray-900'>Ema Wastsion</a>
                                                <p className='mb-0 fs-12 opacity-70'>Admin</p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-1 my-0 justify-content-start align-items-center'>
                                            <div className='relative'>
                                                <Image className='rounded-pill' width={40} height={40} src={'/images/avata.png'} alt='avata' />
                                                <div className='absolute bg-success rounded-pill border border-white' style={{ width: '15px', height: '15px', left: '70%', top: '70%' }}></div>
                                            </div>

                                            <div className=''>
                                                <a className='fw-600 text-decoration-none text-gray-900'>Ema Wastsion</a>
                                                <p className='mb-0 fs-12 opacity-70'>Admin</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='card-footer border-0 py-auto  text-center'>
                                        <a className='text-primary text-decoration-none'>
                                            All Active Users
                                        </a>
                                    </div>

                                </div>

                            </div>
                            <div className='col-xxl-6 order-xxl-2 order-3 col '>
                                <div className='card border-0 h-100 shadow'>
                                    <div className='card-header border-0 py-1 d-inline-flex justify-content-between'>
                                        <div className='my-auto'>
                                            <h6 className='mb-0 '>Top Products</h6>
                                        </div>
                                        <div className='d-flex gap-1'>
                                            <div className='my-auto'>
                                                <a className='text-primary text-decoration-none fw-400'>View Detail</a>
                                            </div>
                                            <svg width="31px" height="31px" viewBox="-32 -32 96.00 96.00" xmlns="http://www.w3.org/2000/svg" fill="#ebe5e5" transform="rotate(90)" stroke="#ebe5e5" stroke-width="0.704"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#373737"></path></g></svg>
                                        </div>
                                    </div>
                                    <div className='card-body border-0 py-0 top-product-chart'>
                                        <EChartsReact option={optTopProducts} className='' style={{ width: '100%', height: '95%' }} />
                                    </div>

                                </div>
                            </div>
                            <div className='col-xxl-3 col-lg-6 order-xxl-3 order-2 col'>
                                <div className="card border-0 w-100 h-100 shadow">
                                    <div className='card-header border-0 py-1 d-inline-flex justify-content-between'>
                                        <div className='my-auto'>
                                            <h6 className='mb-0 '>Bandwidth Saved</h6>
                                        </div>
                                        <div className='d-flex gap-1'>
                                            <svg width="31px" height="31px" viewBox="-32 -32 96.00 96.00" xmlns="http://www.w3.org/2000/svg" fill="#ebe5e5" transform="rotate(90)" stroke="#ebe5e5" stroke-width="0.704"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#373737"></path></g></svg>
                                        </div>
                                    </div>
                                    <div className='card-body border-0 border-0 py-0'>
                                        <div className='d-flex flex-column h-100 justify-content-between'>
                                            <div className=' mx-auto h-100 w-100 '>
                                                {/* <CircularProgressbar value={93} text={`${93}%`} styles={buildStyles({backgroundColor:'#2c7be5'})} /> */}
                                                <EChartsReact option={optsBandwidthSave} onEvents={undefined} style={{ width: '85%', height: '85%', margin: 'auto' }} />

                                            </div>
                                            <div className='text-center'>
                                                <div className='d-inline-flex pb-1'>
                                                    <svg className="svg-inline--fa fa-check fa-w-16 text-success me-0" width={20} data-fa-transform="shrink-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" ><g transform="translate(256 256)"><g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" transform="translate(-256 -256)"></path></g></g></svg>
                                                    <div className='my-auto'>
                                                        <h6 className='mb-0 text-center text-black'>35.75 GB saved</h6>
                                                    </div>
                                                </div>
                                                <p className='fs-13'>38.44 GB total bandwidth</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-footer border-0'>
                                        <div className='d-inline-flex justify-content-between w-100'>
                                            <div className=''>
                                                <select className="form-select form-select-sm me-1 bg-light fs-16">
                                                    <option value="0">Last 6 month</option>
                                                    <option value="1">Last 1 Year</option>
                                                    <option value="2">Last 2 Years</option>
                                                </select>
                                            </div>
                                            <div className='my-auto'><a className='text-decoration-none'>Help</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='row g-1  '>
                            <div className='col'>
                                <p className='text-gray-700'>
                                    Thank you for creating with Falcon | 2023 © Themewagon
                                </p>
                            </div>
                            <div className='col-auto'>
                                <p>Version 3.16</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

    const optsChartWeekySales= {
        barWidth:5,
        tooltip: {
            position: function (point: any, params: any, dom: any) {
                // point is the mouse position.
                // params is the data of the hovered item.
                // dom is the tooltip DOM element.
                return [point[0]-dom.offsetWidth/2, point[1]-dom.offsetHeight*1.2];
            },
            trigger: 'item'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            show: false
        },
        yAxis: {
            type: 'value',
            show: false
        },
        grid:{
            left:'30px',
            right:'10px'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                itemStyle:{
                    barBorderRadius:100,
                    color:'rgb(39, 188, 253)'
                },
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                },

            }
        ]
    };
const optsChartTotalOrder =
{
    "tooltip": { "trigger": "item", "formatter": "{b0} : {c0}" },
    "yAxis": {
        type: 'value', show: false
    },
    "xAxis": { "data": ["Week 4", "Week 5", "Week 6", "Week 7"], "show": false },
    "series": [{
        "type": "line",
         "data": [20, 40, 100, 120],
        "smooth": true,
        "lineStyle": { "width": 3,
         color: 'rgb(39, 188, 253)' },
        showSymbol: true,
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 158, 68, 0.5)'
            }, {
                offset: 1,
                color: 'rgba(255, 70, 131, 0.5)'
            }])
        },
        label:{
      show:false
    }
    }],
    "grid": { "bottom": "2%", "top": "5%", "right": "0", "left": "0px" }
}

const optsMarketShare = {
    tooltip:{
        trigger:'item',
        enterable:true,
        formatter: function(params:any) {
            return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params.color + '"></span>' + params.name + ' - ' + params.value;
          }
       
    },
    legend: {
        show:false,
        orient: 'vertical',
        x: 'left',
        data: ['Samsung', 'Huawei', 'Apple']
      },
      series: [
        {
          type: 'pie',
          radius: ['90%', '100%'],
          avoidLabelOverlap: true,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
         
          data: [
            { value: 335, name: 'Samsung' },
            { value: 310, name: 'Huawei' },
            { value: 234, name: 'Apple' }
           
          ],
            hoverAnimation:false
        }
      ],
    width: '100%',
    height: '100%'

};
const ProjectRunning = ()=>{
    return (
        <div className="row g-0 align-items-center py-0 position-relative border-bottom border-0 border-gray-100">
            <div className="col-7 py-0 position-static">
                <div className="d-flex align-items-center">
                    <div className="me-1">
                        <div className='d-flex-grow px-auto justify-content-center align-items-center mx-auto' style={{ width: '30px', height: '30px', borderRadius: '99px', backgroundColor: '#e6effc' }}>
                            <p className='w-100 h-100 align-items-center justify-content-center d-flex text-primary fs-6 fw-bold'>A</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h6 className="mb-0 d-flex align-items-between gap-1">
                            <a className="" style={{ textDecoration: 'none' }} href="#!">Falcon</a>
                            <Badge content={'38%'} cssProps={{
                                borderRadius: '50px', backgroundColor: '#ccf6e4', fontSize: '12px'
                                , color: '#00864e', fontWeight: '600',
                            }} />
                        </h6>
                    </div>
                </div>
            </div>
            <div className="col-5 py-1">
                <div className="row g-0 h-50">
                    <div className="col pe-3 fw-bold " style={{ fontSize: '12px' }} >
                        <div >12:50:00</div>
                    </div>
                    <div className="col ps-1 my-auto d-flex-col  justify-content-center w-50">
                        <div className="progress my-auto " style={{ height: '5px' }} role="progressbar" >
                            <div className="progress-bar rounded-pill h-100" style={{ width: '79%', height: '100%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const optsTotalSales= {
    tooltip:{
        trigger:'item'
    },
  xAxis: {
    axisTick:{
        show:false
    },
    axisLine:{
        show:false,
        lineStyle:{
            type:'dashed',
            opacity:0.5
        }
    },
    axislabel:{
        show:false
    },
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      color: 'rgb(39, 188, 253)' ,
      itemStyle:{
        symbolSize:50
      },
      type: 'line'
    }
  ],
grid:{
    top:'10px',
    bottom:'20px', 
    lineStyle:{
        type:'dashed'
    }


}
};
const optTopProducts = {
    legend: {
        left: '0',
        top: '3%'
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '2015', '2016'],
            ['Boots4', 43.3, 85.8],
            ['Reign Pro', 83.1, 73.4],
            ['Slick', 86.4, 65.2],
            ['Falcon', 72.4, 53.9],
            ['Sparrow', 72.4, 53.9],
            ['Hideway', 72.4, 53.9],
            ['Freys', 72.4, 53.9],
        ],
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            interval: 0
        }
    },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
        type: 'bar',
        itemStyle: {
            emphasis: {
                barBorderRadius: [50, 50]
            }
        }
    }, { type: 'bar' }],
    barWidth: '15px',
    barCategoryGap: '30%',
    grid: {
        left: '5%',
        right: '2%',
        bottom: '9%',
        top: '15%'
    },
};
const optsBandwidthSave= {
    tooltip:{
        show:false,
    },
    legend: {
        show:false,
        orient: 'vertical',
        x: 'left',
        data: ['bandwith']
      },
      series: [
        {
          type: 'pie',
          radius: ['60%', '70%'],
          avoidLabelOverlap: true,
          label: {
            show:true ,
            position: 'center',
            formatter:'{d}%',
            fontSize:30
          },
          labelLine: {
            show: false
          },
         
          data: [
            { value: 93, name: 'bandwidth' },
            { value: 7, name: 'bandwidth1' },

          ],
    hoverAnimation:false,
        }
      ]
}
