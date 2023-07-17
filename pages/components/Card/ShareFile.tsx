import Image from "next/image"
export default function index() {
    return (
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

    )
}