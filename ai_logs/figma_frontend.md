# Initialize static frontend from Figma design

## Main takeaways

- Initialized React + NextJS project for us to work in.
- I (Peter) used the Figma designed that I made before and had a plug-in for Figma that implemented a static version of the Figma design into React.
- The buttons don't work other than the button that goes into the rating page and the buttons switching between the student and professor views.


## Resource Usage

Tool and Model(s) Used: Codex (GPT-6.1 Sol)

Tokens Used & Dollar Equivalent: 119K tokens used

## Chat Log

[@Figma](plugin://figma@openai-curated-remote) Read my rate my class design and specifically look at the search page







12:28 PM






Worked for 18s



Please send the Figma link to your Rate My Class design, ideally with the search page frame selected. The Figma connection needs a file link to read the design.

  
12:28 PM







https://www.figma.com/design/2on8OPLadnmy9dGHE6LulU/CS320-Rate-My-Class?node-id=0-1&t=J07gHaJwlBQzenT8-1







12:31 PM






Worked for 23s



I’ve reviewed the search page, “Class search and results”.

It includes:
- A green-and-white header with branding, sign in, and account creation.
- A search bar with a clear button and “Search classes.”
- Department, workload, and collaboration filters, plus Reset.
- A comparison table showing class/professor, overall rating, review count, and four attribute scales: group work, presentations, in-class workload, and outside workload.
The desktop layout makes course comparison clear. Two details to consider: the rating scales resemble interactive sliders, and the results currently have no visible count or sorting control.

  
12:31 PM







can you implement the search page adn the rating pages from this. It does not have any other functionality other than just a static screen. I want to be able to switch to either page, but that's it.







12:32 PM






Worked for 6m 31s



Implemented all three static Figma screens:
- Search results at /
- Student ratings at /ratings
- Professor comments at /ratings/professor
Course links, view tabs, and back links provide navigation. All other controls are static.

Preview: localhost:3000

Lint, TypeScript, and route checks passed. Visual preview was unavailable; production build was blocked by an environment port-permission error.

  Edited 8 files+1,394-97View changesUndoView changes

frontend/README.mdfrontend/README.md+8-2
frontend/app/components/header.tsxfrontend/app/components/header.tsx+25-0
frontend/app/components/rating-scale.tsxfrontend/app/components/rating-scale.tsx+15-0
Show 5 more files



  
12:38 PM







what model are you and how many tokens did this session use







12:54 PM






I’m Codex, based on GPT-6. I don’t have access to this session’s token usage, so I can’t give an accurate total.