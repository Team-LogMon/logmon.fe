import { ReactNode, useEffect, useRef, useState } from 'react';
import { Card } from '@chakra-ui/react';

export const IntroductionCard = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // ✅ 30% 이상 화면에 보일 때 감지
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect(); // ✅ 컴포넌트 언마운트 시 감지 해제
    };
  }, []);

  return (
    <Card.Root
      ref={cardRef} // ✅ 감지할 요소 지정
      data-state={isVisible ? 'open' : 'closed'} // ✅ 한 번 보이면 'open' 상태 유지
      _open={{
        animation: 'fade-in 2000ms ease-out',
      }}
    >
      <Card.Body>{children}</Card.Body>
    </Card.Root>
  );
};
