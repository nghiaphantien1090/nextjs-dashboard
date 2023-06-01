import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react'
import utils from '@/utils/utils';
import { ChangeEvent, SelectHTMLAttributes, useState } from 'react';

type DataSale = {
    saleData: string[],
    monthData: string[]
}

export default function TotalSaleMonthly() {

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var monthsSeries = [[60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70], [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50], [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60], [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80], [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50], [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70], [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50], [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110], [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70], [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110], [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70], [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70]];
    var dataX= ['2019-01-05', '2019-01-06', '2019-01-07', '2019-01-08', '2019-01-09', '2019-01-10', '2019-01-11', '2019-01-12', '2019-01-13', '2019-01-14', '2019-01-15', '2019-01-16'];


    const dataSales:DataSale[] = Array.from({ length: 12 }).reduce((acc, curVal, curIndex) => {
        const curData = {
            saleData: monthsSeries[curIndex],
            monthData: dataX.map(data => {
                var date = new Date(data)
                return months[curIndex].concat('-', date.getDate().toString())
            })
        }
        return [...acc as [], curData]
    }, []) as DataSale[]


    const [dataSale,setDataSale]=useState<DataSale>(dataSales[0])

    const handleChange= (e:ChangeEvent<HTMLSelectElement>)=>{
        const indexMonth = e.target.value 
        setDataSale(dataSales[indexMonth as unknown as number])
    }

    return (
        <div className='card border-0 shadow h-100'>
            <div className='card-header bg-white border-0 border-0'>
                <div className='d-flex gap-0 mt-0 align-items-center justify-content-between'>
                    <div>
                        <h6>Total Sales</h6>
                    </div>
                    <div className="d-flex">
                        <select className="form-select form-select-sm me-2 bg-light fs-16" onChange={handleChange}>
                            {
                                months.map((month,index)=>{
                                    return(
                                        <option key={index} value={index}>{month}</option>
                                    )
                                })
                            }
                        </select>
                        <div>
                            <svg width="31px" height="31px" viewBox="-32 -32 96.00 96.00" xmlns="http://www.w3.org/2000/svg" fill="#ebe5e5" transform="rotate(90)" stroke="#ebe5e5" stroke-width="0.704"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#373737"></path></g></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-body border-0 border-0'>
                <div className='d-flex justify-content-between h-100'>
                    <ReactECharts option={getDefaultOptions(dataSale)} style={{ width: '100%', height: '285px', transition:'all .3s ease-in' }} />
                </div>
            </div>
        </div>
    )
}
    
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // Get options from data attribute

    var getDefaultOptions = function getDefaultOptions(dataSale:DataSale) {
        return {
            color: utils.getColor('gray-gray-100'),
            tooltip: {
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
            xAxis: {
                type: 'category',
                data: dataSale.monthData ,
                boundaryGap: false,
                axisPointer: {
                    show:true,
                    lineStyle: {
                        color: utils.getColor('gray-gray-300'),
                        type: 'dashed'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    
                    lineStyle: {
                        // color: utils.rgbaColorgetGrays()['300'],
                        color: utils.getColor('gray-gray-300'),
                        type: 'dashed'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: utils.getColor('gray-gray-600'),
                    formatter:function formatter(value:any){
                        return value
                    },
                    margin: 15
                }
            },
            yAxis: {
                type: 'value',
                axisPointer: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: utils.getColor('gray-gray-300'),
                        type: 'dashed'
                    }
                },
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    color: utils.getColor('gray-gray-600'),
                    margin: 15
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            },
            series: [{
                type: 'line',
                data: dataSale.saleData,
                lineStyle: {
                    color: utils.getColor('primary')
                },
                itemStyle: {
                    borderColor: utils.getColor('primary'),

                    borderWidth: 2
                },
                symbol: 'circle',
                symbolSize: 10,
                smooth: false,
                hoverAnimation: true,
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
                }
            }],
            grid: {
                right: '28px',
                left: '40px',
                bottom: '15%',
                top: '5%'
            }
        };
    };