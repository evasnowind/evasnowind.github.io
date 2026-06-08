---
title: "10 Programming Proverbs Every Developer Should Know[转载]"
date: "2011-07-21"
categories: [学习, 读书, 读书笔记]
source: "http://prayerlaputa.com/?p=384"
---

# 10 Programming Proverbs Every Developer Should Know[转载]

转载地址：[http://www.kevinwilliampang.com/2008/10/07/10-programming-proverbs-every-developer-should-know/](http://www.kevinwilliampang.com/2008/10/07/10-programming-proverbs-every-developer-should-know/ "http://www.kevinwilliampang.com/2008/10/07/10-programming-proverbs-every-developer-should-know/")\
Proverbs are used to express universal truths or life lessons in a short and memorable fashion.  I find that they are a great way to keep things in perspective, both in life and in work.  Because of this, I have assembled 10 programming proverbs that every developer needs in their arsenal.

#### 1. There is no smoke without fire

![](http://www.kevinwilliampang.com/wp-content/uploads/Smoke.jpg)\
*Relax. It’s probably just another fire drill*\
Poorly designed code tends to manifest itself through some common tell-tale signs.  Some examples of these are:

- Giant classes and/or functions
- Large blocks of commented out code
- Duplicated logic
- Deeply nested if/else blocks

Developers often refer to these as [code smells](http://en.wikipedia.org/wiki/Code_smell), but personally, I think the term “code smoke” or “code fumes” is more appropriate as it implies a higher sense of urgency.  If you don’t address the underlying problem it will come back to burn you later on.

#### 2. An ounce of prevention is worth a pound of cure

![](http://www.kevinwilliampang.com/wp-content/uploads/Nurse.jpg)\
*Ok, I’m convinced*\
Toyota’s assembly line of the 1980s was famously efficient due to its revolutionary approach towards defect prevention.  Each member of the assembly line was given the ability to halt production when they noticed a problem in their sector.  The idea was that it was better to halt production and fix the problem as early on as possible than to continue producing faulty units that would be tougher and more costly to fix/replace/recall later on.\
Developers often make the faulty assumption that productivity = cranking out code quickly.  Many programmers dive straight into coding without a second thought towards design.  Unfortunately, this [Leeroy Jenkins](http://en.wikipedia.org/wiki/Leeroy_Jenkins) approach towards software development tends to lead to sloppy, fragile code that will need to be constantly monitored and patched — perhaps even replaced altogether down the line.  Ultimately, productivity must be measured not only in how much time is spent writing it, but also by how much time is spent debugging it.  A short term gain may prove to be a long term loss if one isn’t careful.

#### 3. Don’t put all your eggs in one basket

A software team’s [bus factor](http://en.wikipedia.org/wiki/Bus_factor) is defined as “the total number of key developers who would if incapacitated, as by getting hit by a bus, send the project into such disarray that it would not be able to proceed”.\
In other words, what happens if you suddenly lost a key member of your team?  Would business continue as usual or would it grind to a halt?\
Unfortunately, most software teams fall into the latter category.  These are the teams that turn their programmers into “domain experts” who only deal with requests that fall into their area of expertise..  At first, this appears to be a fairly reasonable approach.  It works for the automaking assembly lines, why not for software development teams?  After all, it’s unreasonable to expect each member of the team to be intimately familiar with each and every nuance in the application, right?\
The problem is that developers cannot be easily substituted and replaced.  And while the pidgeon-hole approach works fairly well when everybody is available and accounted for, it quickly falls apart when “domain experts” suddenly become unavailable due to turnover, sickness, or even freak bus accidents. It is imperative that software teams have some sort of redundancy built in.  Code reviews, pair programming, and communal code go a long way to foster an environment where each developer is at least superficially familiar with parts of the system outside their comfort zone.

#### 4. As you sow, so shall you reap

![](http://www.kevinwilliampang.com/wp-content/uploads/SowReap.jpg)\
[The Pragmatic Programmer](http://en.wikipedia.org/wiki/Pragmatic_Programmer) has this to say about the [Broken Window theory](http://en.wikipedia.org/wiki/Fixing_Broken_Windows):

> Don’t leave “broken windows” (bad designs, wrong decisions, or poor code) unrepaired. Fix each one as soon as it is discovered. If there is insufficient time to fix it properly, then board it up. Perhaps you can comment out the offending code, or display a “Not Implemented” message, or substitute dummy data instead. Take some action to prevent further damage and to show that you’re on top of the situation.\
> We’ve seen clean, functional systems deteriorate pretty quickly once windows start breaking. There are other factors that can contribute to software rot, and we’ll touch on some of them elsewhere, but neglect accelerates the rot faster than any other factor.

In short, good code begets good code and bad code begets bad code.  Do not underestimate the power of inertia.  No one wants to be the one who has to clean up sloppy code, but neither does anyone want to be the one that makes a mess out of beautiful code.  Write it right and your code will have a far better chance at standing the test of time.

#### 5. Great haste makes great waste

Managers, clients, and programmers are getting more impatient by the day.  Everything needs to be done and it needs to be done **now**.  Because of this, the temptation to throw together hacks and quick-fixes becomes very tough to resist.\
No time to properly unit test a new feature?  Oh well, it works for the one test run you put it through.  You can always come back to it later!\
Mysterious object referencing error when you try to access property Y?  Whatever, just throw a try/catch block around the code.  We’ve got bigger fish to fry!\
Sound familiar?  It’s because we’ve all done it at some point in time.  And in certain instances, it is justifiable.  After all, we have deadlines to meet and clients/managers to satisfy.  But do it too often and you’ll soon find yourself with a very unstable code base full of hotfixes, duplicated logic, untested solutions, and porous error handling.  In the end, you have to strike a balance between getting things done and getting things done right.

#### 6. Look before you leap

![](http://www.kevinwilliampang.com/wp-content/uploads/Agile.gif)\
The term “[Agile Development](http://en.wikipedia.org/wiki/Agile_development)” is used and abused frequently these days, often as a way for programmers to justify ignoring the dreaded planning/designing phase of software development.  We are creators, and as such we derive pleasure from seeing actual progress made towards a finished product.  Surprisingly, [UML diagrams](http://en.wikipedia.org/wiki/UML_Diagram#Diagrams) and [use case analysis](http://en.wikipedia.org/wiki/Use_case) just don’t seem to satisfy that desire.  So, we developers often start off coding without any idea of what we are doing or where we are going.  It’s like heading out for dinner when you haven’t yet decided where you want to go.  You’re hungry so you don’t want to waste time finding a restaurant and booking a table.  Instead, you just hop in your car and figure you’ll think of something along the way.  Only, it ends up taking you longer because you have to make a bunch of U-turns and stops at restaurants that end up having too long of a wait.  True, you’ll probably find your way to food eventually, but you probably didn’t end up with the meal you wanted and it probably took a lot more time and hassle than it would have had you just called and booked a reservation at a restaurant you wanted to go to.

#### 7. When the only tool you have is a hammer, everything looks like a nail

![](http://www.kevinwilliampang.com/wp-content/uploads/SquarePegRoundHole.jpg)\
*See?  I \*told\* you Active Record would work for this project!*\
Programmers have a tendency to get tunnel vision when it comes to their tools.  Once something “just works” for us on one project, we tend to insist on using it for every project therafter.  It can be a pain to learn something new and, at times, highly unsettling.  The entire time we’re thinking “it would have been easier had I just done it the old way!”.  Enough of these moments and we will simply go with what we know, even if it isn’t a perfect fit for the task.\
It’s easy to stick with what you know, but in the long run it’s much easier to pick the right tools for the job.  Otherwise you will be fitting square pegs into round holes for the rest of your career.

#### 8. Silence is construed as approval

![](http://www.kevinwilliampang.com/wp-content/uploads/Schultz.jpg)\
*I see nothing! Nuh-thing!*\
This ties in with the theory on broken windows and programming inertia, only on a larger scale.\
The programming community is just that, a community.  Each programmer is a reflection on the craft.  The more bad code that is released into the wild, the more it becomes the status quo.  If you don’t make an effort to write good, clean, [SOLID](http://codebetter.com/blogs/david_laribee/archive/2008/09/09/why-solid-gimme-an-s.aspx) code, you will find yourself having to work with it on a day-to-day basis.\
Likewise, if you see poorly designed code written by someone else, you should make the effort to bring it up with the creator. I should note, however, that tact ought to be employed in such a situation. In general, programmers are willing to admit that they do not know everything there is to know about software development and will appreciate the gesture.  We all benefit when we help each other out.  Turning a blind eye to problems only perpetuates them.

#### 9. A bird in the hand is worth two in the bush

There is a time and place to discuss system architecture and refactoring opportunities, and a time to just get things done.  It is important to weigh the pros and cons of revamping something that already works just to make it cleaner.  It’s an admirable goal, of course, but there will always be code that you want to restructure.  The programming world simply changes too frequently for code to *not* get outdated.  But at some point you have to provide value to your customers.  The simple fact remains: you can’t do two things at once.  The more time you spend refactoring old code, the less time you spend creating new code.  Striking a balance is critical to enhancing as well as maintaining your application in a timely manner.

#### 10. With great power comes great responsibility

![](http://www.kevinwilliampang.com/wp-content/uploads/Spiderman.jpg)\
Software has undoubtedly become an integral and vital part of our lives.  Because of this, practicing good software development is more crucial than ever.  It’s one thing to have a bug in a game of Pong, it’s another to have one in the guidance system of a space shuttle or air traffic control system.  [Slashdot](http://slashdot.org/) recently posted an [article](http://tech.slashdot.org/article.pl?sid=08/09/10/203233&from=rss) describing how a minor glitch in [Google News](http://www.google.com/news) singlehandedly evaporated $1.14 billion in shareholder wealth.  Events such as these demonstrate how much power we wield.  It’s a little frightening to think that the code you write today, whether you intend it to or not, may one day be recycled and depended upon for mission-critical applications.  Write accordingly.\
Do you have any proverbs you feel should be added to this list?  Feel free to let me know in the comments!