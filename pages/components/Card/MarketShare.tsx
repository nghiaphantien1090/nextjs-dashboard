import Badge from "../Badge";
import ReactECharts from 'echarts-for-react'
import utils from "@/utils/utils";
import * as echarts from 'echarts';
export default function MarketShare() {
    return (
        <div className='card w-100 h-100 border-0 shadow'>
            <div className='d-flex card-body border-0 h-100' style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                <div className='h-100 w-100' >
                    <div className='d-flex' style={{ height: '100%' }}>
                        <div className="" style={{ fontSize: "11px" }}>
                            <div className='pb-1'>
                                <h6>Market Share</h6>
                            </div>
                            <div className='d-flex flex-column gap-1'>
                                <div className="d-flex justify-content-between gap-4">
                                    <div className="d-flex align-items-center"><span className="dot bg-primary"></span><span className="fw-semi-bold">Samsung</span></div>
                                    <div className="d-xxl-none">33%</div>
                                </div>
                                <div className="d-flex justify-content-between gap-4">
                                    <div className="d-flex align-items-center"><span className="dot bg-info"></span><span className="fw-semi-bold">Huawei</span></div>
                                    <div className="d-xxl-none">29%</div>
                                </div>
                                <div className="d-flex justify-content-between gap-4">
                                    <div className="d-flex align-items-center"><span className="dot bg-gray-400"></span><span className="fw-semi-bold">Apple</span></div>
                                    <div className="d-xxl-none">20%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' my-auto' style={{ position: 'relative' }}>
                    <ReactECharts option={optsMarketShare} style={{ width: '110px', height: '110px', top: '50' }} />
                </div>
            </div>
        </div>
    )
}
const optsMarketShare = {
    tooltip: {
        trigger: 'item',
        enterable: true,
        formatter: function (params: any) {
            return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params.color + '"></span>' + params.name + ' - ' + params.value;
        },
        padding: [7, 10],
        backgroundColor: utils.getColor('gray-gray-100'),
        borderColor: utils.getColor('gray-gray-100'),
        textStyle: {
            color: utils.getColor('dark')
        },
        borderWidth: 1,
        transitionDuration: 0,
        position: function position(pos: number[], params: any, dom: HTMLElement, rect: DOMRect, size: any) {
            return utils.getPosition(pos, params, dom, rect, size);
        }

    },
    legend: {
        show: false,
        orient: 'vertical',
        x: 'left',
        data: ['Samsung', 'Huawei', 'Apple']
    },
    series: [
        {
            type: 'pie',
            radius: ['90%', '100%'],
            avoidLabelOverlap: true,
            label: {
                show: false,
                position: 'center'
            },
            labelLine: {
                show: false
            },

            data: [
                { value: 335, name: 'Samsung' },
                { value: 310, name: 'Huawei' },
                { value: 234, name: 'Apple' }

            ],
            hoverAnimation: false
        }
    ],
    width: '100%',
    height: '100%'

};