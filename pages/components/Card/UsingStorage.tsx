export default function index() {
    return (

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

    )
}