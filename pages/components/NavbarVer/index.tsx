import styles from '../NavbarVer/index.module.scss'
import  falcon  from '../../../public/images/falcon.png'
import {img} from '../../../public/index'
import Image from "next/image"
import { Accordion } from 'react-bootstrap'
import { Category } from '@/type/type'
import CategoryList from '../MultiLevelMenu/index'
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../../redux/actions/toggleSidebar'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/redux/store'
import { useAppSelector } from '@/redux/hook'
import { CSSProperties, useEffect, useLayoutEffect, useState } from 'react'
import { changeLargerXlSizeAction, toogleAction } from '@/redux/reducers/showNavbarReducer'
import clsx from 'clsx'


export default function NavbarVer() {
    const [width, setWidth] = useState(0);
    const dispatch = useAppDispatch();
    useEffect(() => {
        function handleResize() {
            const container = document?.querySelector('.container') as HTMLElement
            const containerWidth = container?.offsetWidth;
            setWidth(containerWidth );
            const widthWindow = window.innerWidth;
            if (widthWindow >= 1200) {
                dispatch(changeLargerXlSizeAction(true));
            } else {
                dispatch(changeLargerXlSizeAction(false));
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [dispatch]);
    const style: CSSProperties = width <= 960 ? { width: width } : {};
    
    const handleToggleSidebar = () => {
        dispatch(toggleSidebar())
    }
    const navbar = useAppSelector(state => state.navbar);
    
    const handleNavbarToggle = () => {
        dispatch(toogleAction());
    };
    let styleNav=[]
    if (navbar.largerXlSize) {
        if (navbar.isShowNavbar) {
           styleNav=[styles.navbarVerExpand] 
        }
        else {
           styleNav=[styles.navbarVerCollapse] 
        }
    }
    else {
        if (navbar.isShowNavbar) {
            styleNav=[styles.navbarHorCollapse]
        }
        else {
            styleNav=[styles.navbarHorExpand]
        }
    }
    return (
        <>
            <div className={'position-fixed top-0 pb-3' } style={{ zIndex: '501' ,width:0}} >
                <div className={'mb-0 ' + styles.navbarToogle}>
                    <div className={'d-flex justify-content-between ' + styles.toogleIcon}>
                        <button className='ps-0 border-0' onClick={handleNavbarToggle}>
                            <img.BarsSolid width={20} height={20} fill='#7a6894' />
                        </button>
                        <div className="d-flex gap-1">
                            <Image src={falcon} alt='logo' width={40} height={40} />
                            <div className={styles.textBranch}>
                                <span> falcon </span>
                            </div>
                        </div>
                    </div>
                </div> 
                
                <div className={clsx('overflow-scroll pb-0 mx--1 px-1 bg-body scroll', ...styleNav)}
                    style={style} >
                      <CategoryList level={0} prop={Categories}  /> 
                </div>
               
            </div>
        </>
    )
}
const Categories: Category[] = [
    {
        type: 'Dashboard',
        url: 'Default',
        avata: 'dashboard.svg',
        subCat: [
            {
                type: 'Default',
                url: 'url',
            },
            {
                type: 'Analytics',
                url: 'url',
            },
            {
                type: 'CRM',
                url: 'url',
            },
            {
                type: 'E commerce',
                url: 'url',
            },
            {
                type: 'LMS',
                url: 'url',
                isNew: true
            },
            {
                type: 'Management',
                url: 'url',
            },
            {
                type: 'Saas',
                url: 'url',
            },
            {
                type: 'Support desk',
                url: 'url',
                isNew: true
            },
        ]
    },
    {
        type: 'Calendar',
        url: 'url',
        avata: 'calendar.svg',
    },
    {
        type: 'Chat',
        url: 'url',
        avata: 'chat.svg',
    },
    {
        type: 'Email',
        url: 'url',
        avata: 'email.svg',
        subCat: [
            {
                type: 'Inbox',
                url: 'url'
            },
            {
                type: 'Email detail',
                url: 'url'
            },
            {
                type: 'Compose',
                url: 'url'
            }
        ]
    },
    {
        type: 'Events',
        url: 'url',
        avata: 'events.svg',
        subCat: [
            {
                type: 'Create an event',
                url: 'url'
            },
            {
                type: 'Event detail',
                url: 'url'
            },
            {
                type: 'Event list',
                url: 'url'
            },
        ]

    }
    , {
        type: 'E commerce',
        url: 'url',
        avata: 'ecommerce.svg',
        subCat: [
            {
                type: 'Product'
                , url: 'url'
                , subCat: [
                    {
                        type: 'Product list'
                        , url: 'url'
                    },
                    {
                        type: 'Product grid'
                        , url: 'url'
                    },
                    {
                        type: 'Product detail'
                        , url: 'url'
                    }
                ]
            }
            , {
                type: 'Order'
                , url: 'url'
                , subCat: [
                    {
                        type: 'Order list'
                        , url: 'url'
                    }
                    , {
                        type: 'Order detail'
                        , url: 'url'
                    }
                ]
            }
            , {

                type: 'Customers'
                , url: 'url'
            }
            , {

                type: 'Customer details'
                , url: 'url'
            }
            , {

                type: 'Shopping cart'
                , url: 'url'
            }
            , {

                type: 'Chekout'
                , url: 'url'
            }
            , {

                type: 'Billing'
                , url: 'url'
            }
            , {

                type: 'Invoice'
                , url: 'url'
            }
        ]
    }

    , {
        type: 'E learning'
        , url: 'url'
        , avata: 'elearning.svg'
        , subCat: [
            {
                type: 'Course'
                , url: 'url'
                , subCat: [
                    {
                        type: 'Course list'
                        , url: 'url'
                    }
                    , {
                        type: 'Course grid'
                        , url: 'url'
                    }
                    , {
                        type: 'Course detail'
                        , url: 'url'
                    }
                    , {
                        type: 'Create a course'
                        , url: 'url'
                    }
                ]
            }
            , {
                type: 'Student overview'
                , url: 'url'
            }
            , {
                type: 'Trainer profile'
                , url: 'url'
            }
        ]
    }
    , {
        type: 'Kanban'
        , url: 'url'
        , avata: 'kanban.svg'
    }
    , {
        type: 'Social'
        , url: 'url'
        , avata: 'social.svg'
        , subCat: [
            {
                type: 'Feed'
                , url: 'url'
            }
            , {
                type: 'Activity log'
                , url: 'url'
            }
            , {
                type: 'Notification'
                , url: 'url'
            }
            , {
                type: 'Followers'
                , url: 'url'
            }

        ]
    }
    , {
        type: 'Support desk'
        , url: 'url'
        , avata: 'supportdesk.svg'
        , subCat: [
            {
                type: 'Table view'
                , url: 'url'
            }
            , {
                type: 'Card view'
                , url: 'url'
            }
            , {
                type: 'Contacts'
                , url: 'url'
            }
            , {
                type: 'Contact details'
                , url: 'url'
            }
            , {
                type: 'Tickets preview'
                , url: 'url'
            }
            , {
                type: 'Quick links'
                , url: 'url'
            }
            , {
                type: 'Reports'
                , url: 'url'
            }

        ]
    }
]