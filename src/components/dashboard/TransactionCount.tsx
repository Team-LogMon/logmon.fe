import ReactECharts from 'echarts-for-react';
import { Flex } from '@chakra-ui/react';

export const TransactionCount = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: '#4db8ff',
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
      data: [
        '00:00',
        '03:00',
        '06:00',
        '09:00',
        '12:00',
        '15:00',
        '18:00',
        '21:00',
      ],
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
        name: 'Transactions',
        data: [320, 450, 390, 580, 720, 880, 1020, 1100],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#4db8ff', // 트랜잭션 - 푸른 계열
          borderColor: '#a0e7ff',
        },
        lineStyle: {
          width: 3,
          color: '#4db8ff',
        },
        areaStyle: {
          color: 'rgba(77, 184, 255, 0.2)',
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
