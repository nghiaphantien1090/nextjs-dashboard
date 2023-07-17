import Badge from "../Badge"

export default function index() {
    return (
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

    )
}
const ProjectRunning = () => {
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