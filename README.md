# Bit of Hungr

Winner: Best use of Google Cloud - MLH

Bit Camp Link: https://devpost.com/software/bit-of-hungr

Inspiration

Before entering BitCamp, our team was already really good friends. We often spend time hanging out, playing games, working, and eating together. Inevitably, someone yells into the room asking, "Does anyone want to get food?!", without any place in mind. It becomes such a hassle to find a place everyone wants to eat. We wanted to create something fun that could help us decide.

What it does

Our application asks users to enter a location and number of participants on the welcome screen. The location is used a central starting point when our app contacts the Google Maps API to retrieve the 20 restaurants closest to the entered location. From there, each participant takes a turn on the application. Much like Tinder and other dating apps, a participant is presented a photo of the restaurant, its name, its address, and its rating on Google. Some of the 20 restaurants pulled from Google are excluded from this if they are closed at the time the app is used. The participant will choose "Yes" or "No" to indicate whether they would be willing to eat at the prompted restaurant. When all participants have made their selections, the app determines which restaurant was selected by the most people. Any ties are broken by restaurant rating. The app then presents the selection to the users!

How we built it

We started by agreeing to use the Ionic platform because of previous experience some of our members had and the knowledge that this could allow our application to be built for Android, iOS, and most web browsers, from one source code. We then used Ionic to build an Angular application. From there we modified the home.page.ts, home.page.html, and home.page.scss files in order to display the different screens required to carry out our application. We were able to make use of standard ionic UI components found at https://ionicframework.com/docs/api/ to build the face of application and corresponding Angular functions and variables to make the necessary computations and transitions on our screen. We were able to see the incremental changes the code was making by running ionic serve and inspecting elements from localhost:8100 on our Google Chrome browsers.

Challenges we ran into

There were many nuisances associated with the addition of the Google Maps API that made getting the restaurants close to a given location difficult. This took most of Friday night early Saturday morning. Additionally, getting the UI to have a standard and user-friendly appearance took a great amount of effort and modification.

Accomplishments that we're proud of

Luckily, we were able to complete the hackathon from the same location making conversations incredibly productive. We are really proud of how we display the locations to the users and the transitions to the next location when buttons are selected. We are also proud of our communication with the Google Maps API, especially after the time it took us to learn it.

What we learned

As stated above, we learned a lot about contacting the Google Maps API to retrieve information about the restaurants. Additionally, two of our members had never worked in Angular or Ionic and were able to learn a bit of those frameworks on the job.

What's next for Bit of Hungr

We would love to expand on this in the future. We want to add the ability to use the phone's current position to determine the nearest restaurants. Additionally, we want to add a way to users to complete the matching process from multiple devices through some shared "room code".
