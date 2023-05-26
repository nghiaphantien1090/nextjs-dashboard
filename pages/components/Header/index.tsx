import  styles  from "../Header/index.module.scss"
import Image from "next/image"
import  avata from '../../../public/images/avata.png'
import { useEffect, useState } from "react"


export default function Header(){
    const [isFixNav, setFixNav] = useState(false)
    useEffect(() => {
        const handleScroll = function () {
            const scrollY = window.scrollY
            scrollY > 0 ? setFixNav(true) : setFixNav(false)
        }
        window.addEventListener('scroll', handleScroll)

        return (() => {
            window.removeEventListener('scroll', handleScroll)
        })

    }, [])
    return(
<div className="pt-1 pb-2 px-1 bg-body-color my-auto ms--1 me--1" style={{position:`${isFixNav?'sticky':'static'}`,zIndex:'500',top:'0'}}>
        <div className="d-flex justify-content-end justify-content-xl-between w-100">
            <div className={'align-items-center   d-none d-xl-block '+styles.searchBar }>
               <div className={'align-middle ' +styles.lookupIcon}>
                        <svg width={15} height={15} fill='#7a6894'  className="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
               </div>
               <input className={" form-control search-input bg-light px-2"} placeholder='Search...'> 
               </input>
            </div>
            <div className="d-inline-flex gap-1 align-items-center">
                <a className={'rounded-circle d-flex align-items-center justify-content-center '+styles.darkModeIcon}>
                        <svg className="" width={18} height={18} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
                </a>
                <a className={styles.shoppingCart}>
                        <svg width={35} height={35} data-fa-transform="shrink-7" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><g transform="translate(288 256)"><g transform="translate(0, 0)  scale(0.5625, 0.5625)  rotate(0 0 0)"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" transform="translate(-288 -256)"></path></g></g></svg>
                        <div className={'d-flex justify-content-center '+styles.notificationItemCart}>
                            <div className="">1</div>
                        </div>
                </a>
                <a className={styles.bellMessage}>
                    <svg  width={35} height={35} className="svg-inline--fa fa-bell fa-w-14" data-fa-transform="shrink-6"  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g transform="translate(224 256)"><g transform="translate(0, 0)  scale(0.625, 0.625)  rotate(0 0 0)"><path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" transform="translate(-224 -256)"></path></g></g></svg>
                        <div className={'d-flex justify-content-center '+styles.notification}>
                        </div>
                </a>
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="43" viewBox="0 0 16 16" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#6C6E71"></circle>
                    <circle cx="2" cy="8" r="2" fill="#6C6E71"></circle>
                    <circle cx="2" cy="14" r="2" fill="#6C6E71"></circle>
                    <circle cx="8" cy="8" r="2" fill="#6C6E71"></circle>
                    <circle cx="8" cy="14" r="2" fill="#6C6E71"></circle>
                    <circle cx="14" cy="8" r="2" fill="#6C6E71"></circle>
                    <circle cx="14" cy="14" r="2" fill="#6C6E71"></circle>
                    <circle cx="8" cy="2" r="2" fill="#6C6E71"></circle>
                    <circle cx="14" cy="2" r="2" fill="#6C6E71"></circle>
                  </svg>
                </a>
                <a>
                        <Image className="rounded-circle" src={avata} alt='logo' width={30} height={30} />
                </a>
            </div>
        </div>
</div>
    )
}