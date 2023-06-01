import Image from "next/image"
export default function index(){
    return (
        <div className='card w-100 h-100 shadow border-0'>
            <div className='card-header bg-white pt-1 border-0'>
                <div className='d-flex gap-0 mt-0 align-items-center justify-content-between'>
                    <div className='my-auto'>
                        <h6 className='mb-0'>Weather</h6>
                    </div>
                    <button className="border-0 bg-white">
                        <svg width="35px" height="35px" viewBox="-32 -32 96.00 96.00" xmlns="http://www.w3.org/2000/svg" fill="#ebe5e5" transform="rotate(90)" stroke="#ebe5e5" strokeWidth="0.704"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#373737"></path></g></svg>
                    </button>
                </div>
            </div>
            <div className='card-body pt-0 border-0 w-100'>
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
    )
}