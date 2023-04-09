import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';

const FAQItem = ({q, a}) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          {q}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
{a}
    </AccordionPanel>
  </AccordionItem>
);

const FAQ = () => (
<Accordion allowToggle>
  <FAQItem
    q="Why should I get a database review coaching?"
    a={`It is by far the most effective form of 1on1 coaching and the fastest way to find your most costly leaks. To be honest there is not much of a reason to pay any coach huge amounts of money to go through the classic "tournament deeprun review" and tell you enlightening stuff like "uhhhm, yeah I would like bigger bet here...". There are so many tools avalaible in 2023 that you don't need a coach for figuring out single spots.` }  
    />
  <FAQItem
    q="How many hands do I need for a DB review?"
    a={`I usually recommend around 100 000 hands or last 3-6 months of play. I've done a review with as few as 17 000 hands and the client was happy but obviously it was a lower stakes player with more basic leaks. I've also done reviews from up to 500 000 hands. It is not a problem for me, I will get the stats build pretty quickly. It depends mostly on you. Do you feel you have changed your game significantly 3 months ago? Then maybe better to not send outdated hands from 6 months ago. Do you not play online very often and you don't do much of a studying? Maybe you can just send whole last 12 months. Obviously more hands mean I can focus more on some advanced stats.` }  
    />
  <FAQItem
    q="
Why are you better than other coaches who offer database review?"
    a={`I have spent more than 1 000 hours developing my advanced stats and pop-ups in Hand2Note. This is what I specialize in. I've had students who had previous database reviews from some very well known players, coaches from prestigious stables and coaching sites, often even charging double what I do. I don't want to mention any specific names, but you know them. And even if some of them are really great players and might make very high quality coaching videos, their database review skills are very very basic. Just bunch of default stats with no regard for stack sizes, bet sizes etc. So yeah if you don't raise enough on BTN they will probably find that out, but that is about it.
Free tip: If your coach uses Holdem Manager or Poker Tracker for database review instead of Hand2Note, you are gonna get a shit database review.` }  
    />
  <FAQItem
    q="
How does it work, is there a voicecall and screenshare?"
    a={`None of that. I have found that this is not really so effective and puts unnecesary requirements on both of us having to find the right time, no breaks etc. Instead you will get a long written report (usually on Discord) with a lot of screenshots of your stats, GTO stats to compare, your ranges in various preflop or postflop spots and some explanation on why some things should be different. This way you can go back to all of it at any time. You can ask me any questions during that (if you are online at the time) or just after, I will answer them all.` }  
    />
  <FAQItem
    q="
What sites are supported?"
    a={`Most sites that can save hand histories should work. Pokerstars, WPN, 888, Winamax are all ok. GG hands work but you need to send them to me converted through this: https://hand2noteguide.com/ggpoker-hh/
Ignition should also work. Converter is needed but I can do those quickly on my side.` }  
    />
  <FAQItem
    q="At what stakes is this coaching targeted?"
    a={`Pretty much unlimited. I've worked with micro $5 ABI players for whom investing $250 was pretty significant, but one review helped them to turbocharge through their stakes, finding out leaks they were absolutely unaware of and probably would remain unaware for years. And I also did a lot of regs who battle in online $1050, $2100, even some $5k and $10k. And every single one of them was happy with the review. The way this coaching works gives me an opportunity to coach even players who are going to be better than me on average, but I will still find some hidden leaks in their game that they are unaware of.` }  
    />
  <FAQItem
    q="Do you offer database review for cashgames or sit and goes?"
    a={`I can do MTT SNGs, I've done some reviews on 18mans. It will however focus on the first few levels with deeper stacks. The endgame with a lot of pushfold and ICM is a job for something like HRC.
I have no plans to offer cash game database reviews as that is a completely different format.` }  
    />
  <FAQItem
    q="But how can data analysis like this be good when there are so many PKO tournaments and ICM effects?"
    a={`A lot of better regs were sceptical of my DB review at first and asking this specific question. And now you can read their happy testimonials if you scroll down a bit.

Don't worry, I am well aware which stats are susceptible to be skewed because of bounties or ICM and I do the db review in a way that it doesn't matter much. To be honest ICM and PKO are both effects very often just used as excuses for bad play - "yeah I did it because there was a big bounty". And what I actually see quite often are mistakes done because of ICM/PKO which are actually even worse in ICM/PKO situations than they would be in chip ev.` }  
    />
  <FAQItem
    q="I run a poker stable and..."
    a={`And you haven't contacted me yet to do reviews of your horses? Do you not like money? You should fix that ASAP.` }  
    />
  <FAQItem
    q="Do you offer other forms of coaching?"
    a={`I don't do stuff like reviews of tournaments, commenting a video from a session etc. because I don't find them very effective for the student. But I sometimes do some theory stuff for lower hourly rate and several hours at a time. Usually for lower/mid stakes players who already received database review so now we can focus more on some reasons behind different strategies and also comparing outputs of different preflop and postflop tools.` }  
    />
  <FAQItem
    q="I am a twitch streamer, can we cooperate?"
    a={`Sure, contact me. But all I offer is free/discounted high quality coaching for some good exposure. No paid shills or affiliate codes, just service for service.` }  
    />
  <FAQItem
    q="How do you recommend to study poker?"
    a={`
Scroll down to the Study Apps section for more on that.` }  
    />
</Accordion>)

export default FAQ;