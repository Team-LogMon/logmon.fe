import { FaDiscord, FaSlack } from 'react-icons/fa6';
import { IoHappyOutline } from 'react-icons/io5';

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'slack':
      return FaSlack;
    case 'discord':
      return FaDiscord;
    default:
      return IoHappyOutline;
  }
};
