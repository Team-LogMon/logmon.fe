import { HStack, Progress, Text } from '@chakra-ui/react';

interface NotificationQuotaProgressProps {
  label: string;
  used: number;
  max: number;
}

export const NotificationQuotaProgress = (
  props: NotificationQuotaProgressProps
) => {
  const { label, used, max } = props;

  const ratio = (used / max) * 100;

  let progressColor;

  if (ratio < 40) {
    progressColor = 'green';
  } else if (ratio < 70) {
    progressColor = 'blue';
  } else if (ratio < 90) {
    progressColor = 'yellow';
  } else {
    progressColor = 'red';
  }

  return (
    <Progress.Root value={ratio}>
      <HStack gap={5}>
        <Progress.Label w={{ base: '180px', md: '120px' }}>
          {label}
        </Progress.Label>
        <Progress.Track w={{ base: 'full', md: '360px' }}>
          <Progress.Range colorPalette={progressColor} />
        </Progress.Track>
        <Progress.ValueText>
          <HStack>
            <Text>{ratio}%</Text>
            <Text>
              ( {used} / {max} )
            </Text>
          </HStack>
        </Progress.ValueText>
      </HStack>
    </Progress.Root>
  );
};
