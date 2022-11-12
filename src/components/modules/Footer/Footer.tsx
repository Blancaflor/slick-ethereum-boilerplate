import { Box, Link, Text } from '@chakra-ui/react';

const links = {
  github: 'https://github.com/ethereum-boilerplate/ethereum-boilerplate/',
  forum: 'https://forum.moralis.io/',
  moralis: 'https://moralis.io/?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Text>
        {' '}
        <Link href={links.github} isExternal alignItems={'center'}></Link>
      </Text>
      <Text>
        {' '}
        <Link href={links.forum} isExternal alignItems={'center'}></Link>
      </Text>
      <Text>
        {' '}
        <Link href={links.moralis} isExternal alignItems={'center'}></Link>
      </Text>
    </Box>
  );
};

export default Footer;
