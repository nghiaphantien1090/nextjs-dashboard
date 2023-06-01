import ReactECharts from 'echarts-for-react'
import utils from "@/utils/utils";
import * as echarts from 'echarts';
export default function index() {
    return (

        <div className='card border-0 h-100 shadow'>
            <div className='card-header border-0 py-1 d-inline-flex justify-content-between'>
                <div className='my-auto'>
                    <h6 className='mb-0 '>Top Products</h6>
                </div>
                <div className='d-flex gap-1'>
                    <div className='my-auto'>
                        <a className='text-primary text-decoration-none fw-400'>View Detail</a>
                    </div>
                    <svg width="31px" height="31px" viewBox="-32 -32 96.00 96.00" xmlns="http://www.w3.org/2000/svg" fill="#ebe5e5" transform="rotate(90)" stroke="#ebe5e5" stroke-width="0.704"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#373737"></path></g></svg>
                </div>
            </div>
            <div className='card-body border-0 py-0 top-product-chart'>
                <ReactECharts option={optTopProducts} className='' style={{ width: '100%', height: '95%' ,minHeight:'370px'}} />
            </div>

        </div>
    )
}
const optTopProducts = {
    color: [utils.rgbaColor(utils.getColor('primary'), 0.8), utils.getColor('gray-gray-400')],
    legend: {
        left: '0',
        top: '3%'
        , icon: 'circle'
    },
    tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getColor('gray-gray-100'),
        borderColor: utils.getColor('gray-gray-100'),
        textStyle: {
            color: utils.getColor('dark')
        },
        borderWidth: 1,
        formatter: function formatter(params: any) {
            return "<div class=\"font-weight-semi-bold\">".concat(params.seriesName, "</div><div class=\"fs--1 text-600\"><strong>").concat(params.name, ":</strong> ").concat(params.value[params.componentIndex + 1], "</div>");
        },
        transitionDuration: 0,
        position: function position(pos: number[], params: any, dom: HTMLElement, rect: DOMRect, size: any) {
            return utils.getPosition(pos, params, dom, rect, size);
        }
    },
    dataset: {
        source: [
            ['product', '2015', '2016'],
            ['Boots4', 43.3, 85.8],
            ['Reign Pro', 83.1, 73.4],
            ['Slick', 86.4, 65.2],
            ['Falcon', 72.4, 53.9],
            ['Sparrow', 72.4, 53.9],
            ['Hideway', 72.4, 53.9],
            ['Freys', 72.4, 53.9],
        ],
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: utils.getColor('gray-gray-300'),
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: utils.getColor('gray-gray-600'),
            formatter: function formatter(value: any) {
                return value
            },
            margin: 15,
            interval: 0
        }
    },
    yAxis: {
        axisLabel: {
            show: true,
            color: utils.getColor('gray-gray-600'),
            margin: 15
        },
        splitLine: {
            lineStyle: {
                color: utils.getColor('gray-gray-300'),
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                barBorderRadius: [50, 50, 0, 0]
            }
        }
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                barBorderRadius: [50, 50, 0, 0]
            }
        }
    }],
    barWidth: '10px',
    barCategoryGap: '30%',
    grid: {
        left: '7%',
        right: '2%',
        bottom: '9%',
        top: '15%'
    },
};