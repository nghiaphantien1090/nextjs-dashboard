import utils from "@/utils/utils";
import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
export default function index(){
    return(

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
                                            <div className=' mx-auto my-auto align-middle h-100 w-100 '>
                                                {/* <CircularProgressbar value={93} text={`${93}%`} styles={buildStyles({backgroundColor:'#2c7be5'})} /> */}
                                                <EChartsReact className="my-1" option={optsBandwidthSave} onEvents={undefined} style={{ width: '85%', height: '85%', margin: 'auto' }} />

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
    )
}
const optsBandwidthSave= {
    series: [{
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        radius: '90%',
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: '#1970e2'
              }, {
                offset: 1,
                color: '#4695ff'
              }]
            }
          }
        },
        axisLine: {
          lineStyle: {
            width: 8,
            color: [[1, utils.getColor('gray-gray-200')]]
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        data: [{
          value: 93,
          detail: {
            offsetCenter: ['7%', '4%']
          }
        }],
        detail: {
          width: 50,
          height: 14,
          fontSize: 32,
          fontWeight: 500,
          fontFamily: utils.getPropsStyleValue('body-font-family'),
          color: utils.getColor('gray-gray-500'),
          formatter: '{value}%',
          valueAnimation: true
        },
        animationDuration: 3000
      }]
      };