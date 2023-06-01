import Badge from "../Badge";
import ReactECharts from 'echarts-for-react'
import utils from "@/utils/utils";
import * as echarts from 'echarts';

export default function TotalOrder() {
    return (
        <div className='card border-0 w-100 h-100 shadow '>
            <div className='card-header pt-1 bg-white border-0'>
                <div className='d-flex gap-0 mt-0 align-items-center'>
                    <div className='my-auto'>
                        <h6 className='mb-0'>Total Order</h6>
                    </div>
                </div>
            </div>
            <div className='card-body border-0 pt-0 w-100'>
                <div className='d-flex  h-100'>
                    <div className='d-flex flex-column justify-content-end' >
                        <p className='font-34  mb-1 ' >58.4k</p>
                        <Badge content='13.6%' cssProps={{
                            borderRadius: '50px', backgroundColor: '#ccf6e4', fontSize: '12px'
                            , color: '#00864e', fontWeight: '600',
                        }} />
                    </div>
                    <div className='w-100 my-auto d-flex justify-content-end' style={{ position: 'relative' }}>
                        <ReactECharts option={optsChartTotalOrder} style={{ width: '148px', height: '90px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
const optsChartTotalOrder =
{
    "tooltip": { 
                trigger: 'axis',
                padding: [7, 10],
                backgroundColor: utils.getColor('gray-gray-100'),
                borderColor: utils.getColor('gray-gray-100'),
                textStyle: {
                    color: utils.getColor('dark')
                },
                borderWidth: 1,
                formatter: function formatter(params: any[]) {
                   return utils.getFormatter(params);
                },
                transitionDuration: 0,
                position: function position(pos: number[], params: any, dom: HTMLElement, rect: DOMRect, size: any) {
                    return utils.getPosition(pos, params, dom, rect, size);
                }
    
     },
    "yAxis": {
        type: 'value', show: false
    },
    "xAxis": { "data": ["Week 4", "Week 5", "Week 6", "Week 7"], "show": false },
    "series": [{
        "type": "line",
         "data": [20, 40, 100, 120],
        "smooth": true,
        "lineStyle": { "width": 3,
         color: utils.rgbaColor(utils.getColor('primary'),0.8)},
        showSymbol: false,
        areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: utils.rgbaColor(utils.getColor('primary'), 0.2)
                        }, {
                            offset: 1,
                            color: utils.rgbaColor(utils.getColor('primary'), 0)
                        }]
                    }
        },
        label:{
      show:false
    }
    }],
    "grid": { "bottom": "2%", "top": "5%", "right": "0", "left": "0px" }
}