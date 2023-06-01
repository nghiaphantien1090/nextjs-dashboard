import { useState } from 'react';
export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='container'>
    <div id="accordion">
  <div className="card">
    <div className="card-header" id="heading-1">
      <h5 className="mb-0">
        <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
          Item 1
        </a>
      </h5>
    </div>
    <div id="collapse-1" className="collapse show" data-parent="#accordion" aria-labelledby="heading-1">
      <div className="card-body">

        <div id="accordion-1">
          <div className="card">
            <div className="card-header" id="heading-1-1">
              <h5 className="mb-0">
                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                  Item 1  1
                </a>
              </h5>
            </div>
            <div id="collapse-1-1" className="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-1">
              <div className="card-body">

                  <div id="accordion-1-1">
                    <div className="card">
                      <div className="card-header" id="heading-1-1-1">
                        <h5 className="mb-0">
                          <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-1-1-1" aria-expanded="false" aria-controls="collapse-1-1-1">
                            Item 1  1  1
                          </a>
                        </h5>
                      </div>
                      <div id="collapse-1-1-1" className="collapse" data-parent="#accordion-1-1" aria-labelledby="heading-1-1-1">
                        <div className="card-body">
                          Text 1  1  1
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="heading-1-1-2">
                        <h5 className="mb-0">
                          <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-1-1-2" aria-expanded="false" aria-controls="collapse-1-1-2">
                            Item 1  1  2
                          </a>
                        </h5>
                      </div>
                      <div id="collapse-1-1-2" className="collapse" data-parent="#accordion-1-1" aria-labelledby="heading-1-1-2">
                        <div className="card-body">
                          Text 1  1  2
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="heading-1-1-3">
                        <h5 className="mb-0">
                          <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-1-1-3" aria-expanded="false" aria-controls="collapse-1-1-3">
                            Item 1  1  3
                          </a>
                        </h5>
                      </div>
                      <div id="collapse-1-1-3" className="collapse" data-parent="#accordion-1-1" aria-labelledby="heading-1-1-3">
                        <div className="card-body">
                          Text 1  1  3
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="heading-1-2">
              <h5 className="mb-0">
                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                  Item 1  2
                </a>
              </h5>
            </div>
            <div id="collapse-1-2" className="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-2">
              <div className="card-body">
                Text 1  2
              </div>
            </div>
          </div>
        </div>      
      
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="heading-2">
      <h5 className="mb-0">
        <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
          Item 2
        </a>
      </h5>
    </div>
    <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
      <div className="card-body">
        Text 2
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="heading-3">
      <h5 className="mb-0">
        <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
          Item 3
        </a>
      </h5>
    </div>
    <div id="collapse-3" className="collapse" data-parent="#accordion" aria-labelledby="heading-3">
      <div className="card-body">
        Text 3
      </div>
    </div>
  </div>
</div> 
    </div>
  );
}
