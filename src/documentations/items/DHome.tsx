import { Heading, ListItem, ListRoot, Text } from '@chakra-ui/react';
import { DocumentationLayout } from '@/documentations/DocumentationLayout.tsx';

export const DHome = () => {
  return (
    <DocumentationLayout name={'Home'}>
      <Heading as={'h1'}>Logmon is the simplest log management system.</Heading>
      <Text>It provides the following features:</Text>
      <ListRoot>
        <ListItem>Loggin by severity level</ListItem>
        <ListItem>Fast log retrieval based on powerful queries</ListItem>
        <ListItem>Notifications based on log levels</ListItem>
        <ListItem>Secure log storage through encryption</ListItem>
      </ListRoot>
      <Text>Enjoy programming with LogMon!</Text>
    </DocumentationLayout>
  );
};
