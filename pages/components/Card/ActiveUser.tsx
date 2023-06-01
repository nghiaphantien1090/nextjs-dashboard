import Image from "next/image"
export default function index() {
    return (
        <div className='card border-0 h-100 shadow'>
            <div className='card-header border-0 py-1 d-inline-flex justify-content-between'>
                <div className='my-auto'>
                    <h6 className='mb-0 '>Active Users</h6>
                </div>
                <div>
                    <svg width="31px" height="31px" viewBox="-32 -32 96.00 96.00" xmlns="http://www.w3.org/2000/svg" fill="#ebe5e5" transform="rotate(90)" stroke="#ebe5e5" stroke-width="0.704"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#373737"></path></g></svg>
                </div>
            </div>
            <div className='card-body border-0 d-flex flex-column justify-content-between gap-xl-0 gap-1  '>
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


    )
}