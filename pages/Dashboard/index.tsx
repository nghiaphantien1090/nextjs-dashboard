import styles from '../Dashboard/index.module.scss'
import Header  from '../components/Header/index'
import NavbarVer   from '../components/NavbarVer/index'
import React  from 'react'
import 'react-circular-progressbar/dist/styles.css'
import { useAppSelector } from '@/redux/hook'
import clsx from 'clsx'
import TotalSaleMonthly from '../components/Card/TotalSaleMonthly'
import TotalOrder from '../components/Card/TotalOrder'
import WeeklySale from '../components/Card/WeeklySale'
import MarketShare from '../components/Card/MarketShare'
import Weather from '../components/Card/Weather'
import BestSelling from '../components/Card/BestSelling'
import TopProduct from '../components/Card/TopProduct'
import BandwidthSave from '../components/Card/BandwidthSave'
import UsingStorage from '../components/Card/UsingStorage'
import ActiveUser from '../components/Card/ActiveUser'
import UpgradeStore from '../components/Card/UpgradeStore'
import RunningProject from '../components/Card/RunningProject'
import ShareFile from '../components/Card/ShareFile'
import Footer from '../components/Footer/Footer'


export default function Index() {
    const navbar = useAppSelector(state => state.navbar)
    const contentExpand = navbar.isShowNavbar && navbar.largerXlSize ? styles.contentCollapse : styles.contentExpand
    return (
        <>
            <div className='container' >
                <Header />
                <NavbarVer />
                <div className={clsx(navbar.isShowNavbar ? styles.contentCollapse : contentExpand)} style={{ transition: 'all .3s ease-in', zIndex: -1 }}  >
                    <div className='w-100' >
                        <div className='row g-1 mb-1 ' >
                            <div className='col-xxl-3 col-md-6'>
                                <WeeklySale />
                            </div>
                            <div className='col-xxl-3 col-md-6'>
                                <TotalOrder />
                            </div>
                            <div className='col-xxl-3 col-md-6 '>
                                <MarketShare />
                            </div>
                            <div className='col-xxl-3 col-md-6'>
                                <Weather />
                            </div>
                        </div>
                        <div className='row g-1 mb-1'>
                            <div className='col-lg-6 col-12'>
                                <RunningProject />
                            </div>
                            <div className='col-lg-6 col-12'>
                                <div className='card border-0 shadow h-100'>
                                    <TotalSaleMonthly />
                                </div>
                            </div>
                        </div>
                        <div className='row g-1 mb-1'>
                            <div className='col-lg-6 col-xl-7 col-xxl-8'>
                                <div className='card border-0 shadow h-100'>
                                    <UsingStorage />
                                </div>

                            </div>
                            <div className='col-lg-6 col-xl-5 col-xxl-4 '>
                                <UpgradeStore />
                            </div>
                        </div>
                        <div className='row g-1 mb-1 '>

                            <div className='col-lg-6 col-xl-7 col-xxl-8'>
                                <BestSelling />
                            </div>
                            <div className='col-lg-6 col-xl-5 col-xxl-4'>
                                <ShareFile />
                            </div>
                        </div>
                        <div className='row g-1 mb-3'>
                            <div className='col-xxl-3 col-lg-6 order-xxl-1 order-1 col'>
                                <ActiveUser />
                            </div>
                            <div className='col-xxl-6 order-xxl-2 order-3 col '>
                                <TopProduct />
                            </div>
                            <div className='col-xxl-3 col-lg-6 order-xxl-3 order-2 col'>
                                <BandwidthSave />
                            </div>

                        </div>
                        <div className='row g-1  '>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
