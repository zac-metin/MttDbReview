import { Card, CardBody, Stack, Heading, Text } from '@chakra-ui/react'

const CardItem = () =>
(
<Card
>
  <CardBody>
    <Stack mt='3' spacing='1'>
      <Heading size='md'>The Process</Heading>
      <Text>

         Most reviews will take 1-3 hours to make (written report means we don't have to set up a specific time to call). I'd usually recommend the first one as at least 1,5h. It depends on how many leaks you have and how much in depth you want to go. If you are not sure, you can send me your hands for free to quickly check and I can give you a suggestion based on that. (Or we can for example just start with preflop and extend it to postflop later). 

Warning: the 3 hour version is a lot longer than you expect. Not for lazy people who don't like studying :) . It is charged "per hour" but realistically its several days of back and forth chatting on discord while I am sending you huge walls of texts and screenshots all the time about every single aspect of your game from how BB 3bet ranges change based on stack depth and opener position and how ICM and exploits change that to things like how turn probes change if they are vs one player or 3way to things like analysis of what river sizings you are using.

It is also able to go into population stats and compare your game not just with GTO, but also with your averaged opponents, see what mistakes they are doing and find where it is reasonable to play exploitably and how.

Following db reviews (lot of players choose once a month db review or roughly every 25-75k hands) are usually fine being charged as 1 hour or 1,5 hour max, since hopefully there should not be that many leaks to talk about anymore.

Theory/Tools coaching and group coaching for stables on agreement.
      </Text>
    </Stack>
  </CardBody>
</Card>)

export default CardItem;