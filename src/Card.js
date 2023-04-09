import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'

const CardItem = () =>
(<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://media.istockphoto.com/id/1286642964/photo/analyst-working-with-business-analytics-and-data-management-system-on-computer-to-make-report.jpg?s=612x612&w=0&k=20&c=Qo8jWvG-RtH2UIMRg0OlU8IWl4ve-Ups5kydf3TzgXs='
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Database Analysis Report</Heading>
      <Text>
       A written report taking 1-3 hours to produce, detailing all your biggest leaks in-depth.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $275 / hr
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Contact Me
      </Button>
      <Button variant='outline' colorScheme='blue'>
        What's In It?
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>)

export default CardItem;