import { Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { DateFormatter } from '@/shared/utils/DateFormatter.ts';
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoRefreshOutline,
} from 'react-icons/io5';
import { Slider } from '@/components/ui/slider.tsx';
import { useLogsTimeSliderStore } from '@/shared/store/logsTimeSliderStore.ts';
import { Time } from '@/shared/utils/Time.ts';

export const LogFilteringSlider = () => {
  const min = useLogsTimeSliderStore((state) => state.min);
  const max = useLogsTimeSliderStore((state) => state.max);
  const left = useLogsTimeSliderStore((state) => state.left);
  const right = useLogsTimeSliderStore((state) => state.right);
  const clear = useLogsTimeSliderStore((state) => state.clear);
  const optimize = useLogsTimeSliderStore((state) => state.optimize);
  const onSliderValueChange = useLogsTimeSliderStore((state) => state.onChange);

  const calculateMarks = () => {
    const range = max - min;
    const step = range / 4; // 5개 생성 (0%, 25%, 50%, 75%, 100%)

    return Array.from({ length: 5 }, (_, i) => {
      const timeStamp = min + step * i;
      const isDateChange =
        i > 0 &&
        new Date(timeStamp).getDate() !==
          new Date(min + step * (i - 1)).getDate();

      if (range < Time.days(1)) {
        // 1일 이내
        return {
          value: timeStamp,
          label: isDateChange
            ? DateFormatter.formatTimeStampToYYYYMMDD(timeStamp, '.')
            : DateFormatter.formatTimeStampToHHMMSS(timeStamp, ':'),
        };
      } else if (range <= Time.days(5)) {
        // 5일 이내
        return {
          value: timeStamp,
          label: isDateChange
            ? DateFormatter.formatTimeStampToYYYYMMDD(timeStamp, '.')
            : DateFormatter.formatTimeStampToHHMMSS(timeStamp, ':'),
        };
      } else {
        // 5일 초과
        return {
          value: timeStamp,
          label: DateFormatter.formatTimeStampToYYYYMMDD(timeStamp, '.').slice(
            2
          ),
        };
      }
    });
  };
  return (
    <Flex
      w={'full'}
      bg={'bg.panel'}
      h={'120px'}
      p={2}
      border={'1px solid'}
      borderColor={'border'}
    >
      <IconButton
        bg={'bg'}
        color={'fg'}
        position={'relative'}
        top={'33px'}
        onClick={() => {
          onSliderValueChange(min, right);
        }}
      >
        <IoChevronBackOutline />
      </IconButton>

      <Flex grow={1} px={8}>
        <Slider
          flexGrow={1}
          min={min}
          max={max}
          label={
            <Flex align={'center'} gap={2}>
              <Text>
                time {DateFormatter.formatTimeStampToYYYYMMDDHHMMSS(left, '.')}{' '}
                ~ {DateFormatter.formatTimeStampToYYYYMMDDHHMMSS(right, '.')}
              </Text>
              <IconButton bg={'bg'} color={'fg'} onClick={clear}>
                <IoRefreshOutline />
              </IconButton>
              <Button
                size={'xs'}
                bg={'bg.panel'}
                color={'blue'}
                onClick={optimize}
              >
                Optimize Slider
              </Button>
            </Flex>
          }
          value={[left, right]} // ✅ 상태를 직접 사용하여 UI 업데이트 반영
          h={'40px'}
          step={(max - min) / 50}
          marks={calculateMarks()}
          colorPalette={'blue'}
          onValueChangeEnd={(details) => {
            onSliderValueChange(details.value[0], details.value[1]);
          }}
        />
      </Flex>

      <IconButton
        bg={'bg'}
        color={'fg'}
        position={'relative'}
        top={'33px'}
        onClick={() => {
          onSliderValueChange(left, max);
        }}
      >
        <IoChevronForwardOutline />
      </IconButton>
    </Flex>
  );
};
