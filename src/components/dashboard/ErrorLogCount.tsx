import ReactECharts from 'echarts-for-react';
import { Flex } from '@chakra-ui/react';

export const ErrorLogCount = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(50, 50, 50, 0.8)',
      borderColor: '#ff4d4d',
      borderWidth: 1,
      textStyle: {
        color: '#ffffff',
      },
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        lineStyle: { color: '#ffffff' }, // 축 색상
      },
      axisLabel: {
        color: '#b0bec5',
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: { color: '#ffffff' },
      },
      axisLabel: {
        color: '#b0bec5',
      },
      splitLine: {
        lineStyle: { color: 'rgba(255, 255, 255, 0.2)' },
      },
    },
    series: [
      {
        name: 'Errors',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#ff4d4d', // 심각한 오류 - 빨간색
          borderColor: '#ffb3b3',
        },
        lineStyle: {
          width: 3,
          color: '#ff4d4d',
        },
        areaStyle: {
          color: 'rgba(255, 77, 77, 0.2)',
        },
      },
      {
        name: 'Warnings',
        data: [50, 80, 90, 100, 130, 150, 170],
        type: 'line',
        smooth: true,
        symbol: 'triangle',
        symbolSize: 8,
        itemStyle: {
          color: '#ffa502', // 경고 - 오렌지색
          borderColor: '#ffd180',
        },
        lineStyle: {
          width: 2,
          color: '#ffa502',
        },
        areaStyle: {
          color: 'rgba(255, 165, 2, 0.2)',
        },
      },
    ],
  };

  return (
    <Flex
      justify={'center'}
      align={'center'}
      direction={'column'}
      h={'full'}
      w={'full'}
    >
      <ReactECharts
        option={option}
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </Flex>
  );
};
