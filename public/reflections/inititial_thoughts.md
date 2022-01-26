# Initial thoughts and reactions

### The product

I still like the idea, for an MVP sort of situation I am still pretty proud of what we were able to accomplish, and immediately find myself wondering if this could leverage more interaction for immersion.

The whole concept of this app relies pretty heavily on the assumption that a user can see, so I would imagine that screen reading/tab through accessibility may be a bit of a nightmare.

Functionally the micro service really doesn't lend too much and the lack of a database makes behavior unreliable at best and unusable at worst. Tbh I think user authentication and having an actual database of journal reflections might not be worth the effort/detracts some from the initial charm for me. I know that we were trying to show that we accomplish a range of engineering feats. I do think now though that functionality was too wide and not deep enough for the time and resources we had.

I think if I had to redesign this app now or continue to iterate on it, I would want to tighten up the vision and purpose of the app a bit. I might lean more on the lack of a database and have the "journaling" feature deliberately be a lesson in impermanence and have the emotional feedback create more of an environment for the stream of consciousness than a log of personal well being. I found myself wondering who the user of this is, and what habits are we expecting, and while there was work to account for consistent journaling and mood tracking, I do really think the strength and passion was more behind the fleeting emotional immersion environment created.

### The design

I am the first to admit I am an engineer before I am designer, but I don't think engineering has to exclude artistry or creativity. I have officially spent a year with designers handing my designs for the client side work I am engineering, and I think digging into these designs a bit could be a fun exercise.

Right now I am struggling to put my finger on what exactly I would change, but I can tell just by looking at this that it was a student project. Not 100% sure what all is betraying that, but it has a sort of early internet feeling or something akin to powerpoint animation.

Clearly I am not an animator and there is an immense amount of work I *could* put into this, and the sky really is the limit. I think for now my goal would just be a more polished app user experience and then addressing the animations themselves. I also may need to do some design work and might even consult some folks I trust for feedback there.

### The engineering
#### The process

My immediate knee jerk reactions are the lack of meaningful PR interactions and processes given that this was a team project. I don't want to be hard on us, we were new and honestly largely having zoom conversations about just about ever line. It is just funny to go from primarily working in a large monolith, with hundreds of active pull requests at any given time, requiring multiple approvals, so this really small seemingly free for all.

I don't know that this is something I can or will do much to change given that I don't see myself scaling this enough to include other engineers again. I do however think that some continuous integration and deployment could be nice to keep a second pair of eyes on functionality should I be making a lot of improvements.

#### The tech stack

I'm excited to dig back into this a bit and see how I feel working on styled components and with so many things from scratch, since recently I have been working mostly with material ui and predetermined design components.

I would also look at shifting the micro service to ruby since that is the server language I am the most familiar with these days but it doesn't feel worth the level of effort given the limited value add.

#### The code itself

I do like the metaphorical file structure naming and it matching the client terminology. I think it can be really challenging when a UX concept being verbally described by product has a different syntactical name for engineering and in the code. I also think currently I don't see any immediate changes I would make to the file structure other than organizing the assets at all, likely by where they are being used or what they are being used for and potentially sourcing all the test files into their own location.

An attempt was made with test coverage for sure, and I wonder how I might dig into that a little differently now and if I can solve the commented out issues.

I am immediately seeing class components that could be refactored into functional components, otherwise the react is pretty simple so I don't see glaring fixes needed. App is a little bloated. I am also not sure if we used a linter/had any standardized design patterns we wanted to employ other than general legibility.

There is also a lot of css, which isn't bad. I just don't really interact with css files for most of my work and I wonder if there are ways to be better leveraging styled components and reusable components with inline styling vs having so many css files.

I had initially thought about refactoring this project with typescript and still might, but since there is not a lot of data transfer I wonder what the benefit would really be other than ts practice 🤷🏻‍♂️
