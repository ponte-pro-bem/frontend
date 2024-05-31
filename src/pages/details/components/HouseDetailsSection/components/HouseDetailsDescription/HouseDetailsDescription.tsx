import { Box, Button, Collapse } from '@chakra-ui/react';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

export default function HouseDetailsDescription({
  description,
}: {
    description: string;
  }) {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box pt={5}>
      <Collapse in={show} startingHeight={50}>
        {description}
      </Collapse>
      <Button
        variant="ghost"
        rightIcon={<FaChevronDown />}
        size="sm"
        onClick={handleToggle}
        mt="1rem"
        w="100%"
      >
        Show
        {' '}
        {show ? 'Less' : 'More'}
      </Button>
    </Box>
  );
}
