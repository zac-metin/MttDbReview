import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const TabsDemo = () => (
<Tabs variant='enclosed'>
  <TabList>
    <Tab>DTO</Tab>
    <Tab>GTO Wizard</Tab>
    <Tab>Preflop Academy</Tab>
    <Tab>HRC</Tab>
    <Tab>Hand2Note</Tab>
    <Tab>ICMizer</Tab>
    <Tab>GTOBase</Tab>
    <Tab>Odin</Tab>
    <Tab>BBZ Preflop Charts</Tab>
    <Tab>Postflop+ and Preflop+</Tab>
    <Tab>ICM X% Field Charts</Tab>
    <Tab>Videos</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>
If I should recommend one simple and useful trainer for postflop tournament poker, especially for beginners, it will be DTO Postflop with it's SHR level subscription. Carefully set up simple strategies solved to much higher accuracy than most competitors, which are easy to learn and reproduce. Includes even some fancy stuff like postflop final table spots or non-equal chip ev stack play (30bb BTN open vs 10bb SB flat is some very fun chaotic gameplay :-) ). They also have very helpful discord server and you can try a limited postflop version for free users.
You can get 20 % discount for any DTO products using my code "g6dto". Don't worry, it's not just a shill, I am a very happy user of ALL of their MTT products - Postflop SHR, Preflop Basic+Advanced+ICM and DTO 3way.
 </p>
 <p>
I believe the two most useful are the Postflop (SHR level) which I mentioned and DTO 3way. Let's face it, I suck in 3way spots, you suck in 3way spots, everyone sucks in 3way spots. But with a proper 3way trainer you have the chance to suck a little bit less than your opponents and thats what makes the profit.
 </p>
 <p>
Preflop Basic is fine, but not the highest priority, especially when GTO Wizard has free preflop ranges. Preflop ICM has some pretty cool unique final table spots. While most tools are pretty tame and solve final tables with stacks like 30 20 50 40 25 40 and then switch the stacks for 5 similar solves, DTO just goes to the extreme and does fun spots like 5 5 75 30. And no, the answer is not "jam 100%", this is not icmizer, there are hands you just want to raise as the chipleader. And last Preflop Advanced includes lot of chip ev mixed stacks. Pretty common ingame spots like defending short BB with 7/10/12/15bb vs an openraise when everyone else is deeper stacked. Very different from ranges with equal stacks. But right now Preflop Advanced is the least useful DTO product, especially because GTO Wizard and Preflop Academy have a lot of asymmetric solutions now too.
</p>
    </TabPanel>
    <TabPanel>
      <p>Somewhat of a competitor to DTO. Has more postflop sizings which is sometimes useful and sometimes less useful since a beginner can just get overloaded with too many options. Unlike DTO you can choose specific run outs and browse them. I think it's a great second tool to get after DTO, especially because of their very well done aggregate reports. Preflop ranges are actually avalaible even for free users (except ICM ranges) and you can go through 1 postflop spot + 10 hands in trainer for free. So it's pretty much a must to make at least free account.

https://app.gtowizard.com/p/g6 should give you 10 % discount, but only if you make a new account right after using this link.

They also have a huge library of ICM preflop solutions and mixed stack chip ev solutions.

Extra tip: If you use GTO Wizard, don't focus majority of your studying on just putting your biggest played pots into their analyzer (line-checking). Using the trainer, going through the aggregate reports or studying their ICM charts will be much more useful.</p>
    </TabPanel>
    <TabPanel>
<p>It has probably the best range viewer, you can quickly go through different charts to easily compare how ranges change if you either change someone's position or stacksize. Also a lot of ICM charts and mixed chip ev charts and nice quick trainer which is great for a quick 10min warmup before session. Recently even some PKO charts. Largest negative compared to DTO/GTOW is that it's oviously Preflop only product. But for that purpose it works great.

</p> </TabPanel>
    <TabPanel>
<p>Hold'em Resources Calculator is a very useful tool to help you solve your own preflop spots, especially ICM on final tables. The new HRC Beta is a very solid competitor even to Simple Preflop, while having much lower requirements to run, so you can do some basic preflop solving even without a dedicated server. Great investment for like 100 eur yearly. (You have to download the HRC Beta version!)
</p> </TabPanel>
    <TabPanel>
<p>Not so much a study tool, but trackers are a very useful thing, not just for hud on the table but also keeping track of your game. I've used both Poker Tracker and Holdem Manager for a long time, even made a lot of custom stats via Notecaddy. And I just can't recommend H2N enough! So many times my PT or HM has frozen, crashed, worked slowly... Sure, H2N costs more (30 day free trial) but it's just so much nicer and less stressful to use. Making new stats is easier, everything is so tidy, customer support is actually very helpful and fast. And quite honestly, my database reviews could never be this high quality without H2N. It still took me over 1 000 hours to set up everything for these advanced database reviews, but it would not even be possible in other trackers (hence why I say you should stay away from any coach not using H2N for database reviews).

If you want to make me happy and save 10 %, go through this link:
https://www.hand2note.com/?aid=19e2
or use this code at checkout: H2N10QMJ
</p> </TabPanel>
    <TabPanel>
<p>Used it for many years in the past, but I don't really see much reason to use it now when HRC can do so much more.
</p> </TabPanel>
    <TabPanel>
<p>If you are serious with poker, you should eventually get one of these, but it is not the priority in the beginning. Especially if you are not experienced, it is pretty much guaranteed that you will use bad inputs in your sims, therefore creating bad solutions. So training in premade spots in DTO or GTO Wizard will be easier way to study.
</p> </TabPanel>
    <TabPanel>
<p>Basically worse GTO Wizard with stupidly huge numbers of flop sizings and questionable accuracy of solves.</p><p>A lot of high profile players shill Odin but I don't see that many solid regs actually using it.
</p> </TabPanel>
    <TabPanel>
<p>Not as good charts viewer as other services, but 20 bucks a month is pretty affordable price and you also get a lot of ICM spots and some useful basic PKO charts.
</p> </TabPanel>
    <TabPanel>
<p>Absolute trash developed by guys with no experience in poker targeting beginners who won't recognize good sim from shit sim. Accuracy is low, sizings are randomly horrible. And I got banned on their discord after mentioning some of "their" preflop ranges are actually outdated RangeConverter charts with huge mistakes in them.
</p> </TabPanel>
    <TabPanel>
<p>Stuff like preflop charts for when 50 % of field is left are pretty much nonsense. These solves expect that the tournament is going to end after the hand finishes (like a happy multitable 80way deal) which is obviously a huge simplification that might be ok on final tables but not with a big number of tables left. The slower the blind structure is, the more nonsensical these ranges are. Perhaps a little more realistic in hyper turbos where you might be on the bubble in one or two orbits. You can go check some of these ranges if whatever tool you are using has them, but don't waste your money on specifically buying this.
</p> </TabPanel>
    <TabPanel>
<p>I don't really see paid video subscriptions and 500+ usd masterclasses as the best way to study poker in 2022. This was the way before solvers and all the new tools, when your only option was to find someone who wins at the game a lot, hear what they have to say and hope that it's mostly correct.</p>
<p>But why do you want to pay a monthly subscription to watch videos of someone going through hand histories or PIO sims, when you can get something like DTO Postflop for similar price and play unlimited numbers of hands YOURSELF, you making all those decisions and then comparing them to correct ranges, which will be much more precise that an opinion of any human coach. And if you don't understand something, just discuss it with your friends, some discord poker group etc. and you will always figure it out.</p>
<p>Sure some videos which explain theory concepts very well might be useful, I also imagine for example some BBZpoker bundles could be fine for just 100 bucks (I haven't seen any of it, but I've seen some examples and talked with people who are subscribers. And they do have some good coaches), but I would still prefer just investing in some of the other tools I mentioned. Maybe the most useful videos are those, which show you how to properly use some tool, so if you are beginning with DTO, definitely watch their Youtube channel, seeing highstakes crusher like BowieEffect playing DTO will give you more value than 95 % of paid poker videos. GTO Wizard also has some free videos on how to use all the features and if you get HRC then definitely watch the tutorial by Gareth James on Youtube.</p>
</TabPanel>
  </TabPanels>
</Tabs>
);

export default TabsDemo;