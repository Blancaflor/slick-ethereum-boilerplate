import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        <a href="https://slickcoin.netlify.app">Slick HOMEPAGE</a>
      </Heading>
      <Heading size="md" marginBottom={6}>
        <a href="https://widget.onramper.com?color=1d2d50">Buy cryptocurrencies</a>
      </Heading>
      <List spacing={3}>
        <ListItem marginTop={90}>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Moralis authentication
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display Transactions
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display ERC20 transfers
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display ERC20 balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display NFT balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display NFT transfers
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Multichain Support
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Adding explorer links to balances, transactions ...
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Better responsive design
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Rainbowkit integration
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Using Moralis from client-side
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          ... and more
        </ListItem>
      </List>
    </VStack>
  );
};

export default Home;
