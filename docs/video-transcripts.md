# Video Transcripts

## STYLIST Walkthrough

Source:
https://www.youtube.com/watch?v=gbyDAjrPlco

Transcript:
[00:00:01
 This is our app, Stylist. The purpose is to create kind of a mobile walking closet, and our target users are those with large wardrobes so that they can't physically catalog it all. And and maybe if you're like really busy, you can't put together outfit, or if the weather is super, you know, it's super dynamic in your area, you want something to kind of help keep up with that. This is where our app shines. And so, we're going to log in here using Firebase authentication. And first we're going to use a a wrong

00:00:27
 sign up to show that we do in fact have the try catch blocks, but we're going to use an actual email now to really sign up and create this new account. So, now we're just going to log in with a testing account that we made. Populate it with some images already. So, as you can see, we're presented with the home page, and this has a couple of components here. First, we have the weather widget at the top. This one pulls from Expo location for coordinates if you granted location permission. Um

00:00:59
 we also use Google weather API for weather, obviously. We have time zone API, and we have a geocoding API for that little address you see at the top. And then the main feature here is the user's closet, which has a collection of their clothing items in images. These photos are served from Firestore, so we store them using the URI, and then we pull them uh to display as image components, and they're tied to user ID as well. And so, now we're going to head over to the settings page, and you'll see we

00:01:28
 have a variety of settings, uh many of which are stored using async storage, local storage on the device. Here, for example, static location, we're going to change the location to Toronto for the app to pull from. And of course, we have our display name as well. This one's actually stored within Firestore in order to authenticate it with the user. I'll call it Stylist. And yeah, you can see there are a lot of different settings here, the Celsius, saving username for future login, those

00:01:51
 are both async. The color theme as well. And yeah, that's a local storage as well. You can save settings, you can reset to default or you can log out for, you know, Firestore um Firestore authentication. And now we're going to go to add item screen. And we did utilize Expo image picker. Um this allows the application to access the camera and media files and kind of upload them into our app. And you can see here we go straight into the file library. And all of these all of these fields that you're going to see, all these

00:02:26
 attributes are um attached to the data object. I'm just going to go ahead and add this black tee for example. Oh yes, and the item tags there that you saw that is stored as an array. And so yeah, here in the closet we can kind of see click on the detail of these items. And yeah, you'll see the attributes that we put set in as well as the ability to close or uh delete item from our collection from our data collection in Firestore. I'll do that right now. So this is the section of the code where

00:03:06
 um we utilize Firestore to insert items into the database. And so it kind of revolves around these use states of where the attributes are held and this corresponds with uh the UI element so the user can set those accordingly. Um you can see we did we did import Firestore as we should and also um one of the main features we have is utilizing the camera. And so one of the options here get camera image, it let it launches the image picker launch camera async and then these are kind of the options for

00:03:33
 that as well as this is the this is the code for letting the user pick through the library, the media library. And there's options here. Yeah, so we have native camera and file system support. And this is where this is where the the item actually gets inserted into the collection and this in this function here that we kind of create an object with the attributes of the clothing. And then Yeah, and then we just kind of just add the doc to the images collection in our database for Firestore. And of course, you know, we have

00:04:04
 statuses and navigations for if it's successful. We have the catch in case it's not. And then yeah, this this just a quick overview of the CSS. And HTML. So, let's switch over to the outfit generation page. And so, this is it's not a complicated algorithm. It's one Firestore query and then um some systematic application of array filters using JavaScript. And um this is for the most part this done completely on the device. And we're going to see we're going to make a casual outfit here.

00:04:41
 And there you go. There's four clothing items right there. Um we actually we we don't necessarily pull the images, but we we store we we we generate an array a four-item array of photo IDs, image paths, and then we use those image paths to kind of tell the app which file to display and where. Uh you can see here on this page we do have the ability to set the outfit formality as well as uh the ability to input a tag. And of course, this aligns with the attributes of the clothes that we've set earlier.

00:05:12
 And while formality is quite strict, the tag is for the most part a suggestion more than like um direct control over what items show up. Here's the code for the main function in our application, which of course is generating outfits. It uses both Firestore and Google Maps API data and Google Weather. And so, here we'll have some use states that we use to kind of iterate through to kind of build our outfit array. And here, yes, we used a Google Maps API key, as I stated. Import that theme. Update location permission.

00:05:39
 Since it's a different screen, we do have to ask for location permissions again, if possible. Um and either way uh Like user can choose to use the saved settings from async storage. Yeah, and here we um start pulling from the Maps API to fetch uh the coordinates of where the user is. Here's a helper function to for temperature and then return a warm value to use in the clothing algorithm. And this is the actual algorithm here. As you can see, we start with a null array, and each Some of these values, it doesn't have to

00:06:07
 be all of them, but some of them may be replaced by a string or a photo ID, and then that can be used to pull the image path from the database. And here, here's the query for every every item that belongs to the user. And then, as you can kind of see, we just start filtering it out systematically based on the attributes of what the user kind of needs in that moment, which uh primarily is formality and the warm value, as we stated. Oh, yeah, and here we fetch the longitude latitude from an address.

00:06:34
 Here's Yep, here's the call to the REST API geocoding. Fetching current temperature, this is using uh the Weather API, another REST API. And use effects are kind of like guide the some of the components. Yeah, that's pretty much it. And then here's the HTML, the CSS.]

---

## Export to: Reality Trailer

Source:
https://youtu.be/tfkRV_6g7Qc

Transcript:
[00:00:00
 Hey, you. >> Huh? >> Yeah, you. Do you like puzzles? Do you like platformers? Do you like uh making stuff? Introducing. In this puzzle platforming game, your goal is to escape the game world by completing puzzles and reaching back doors in the game space. But you're not alone. This game is co-op. specifically half puzzler, half platformer. You will work together to get the video game character that doesn't belong here out of the level using special maker tools as long as the game's antiche doesn't stop us.

00:01:11
 Oh, speaking of which So, what are you waiting for? >> Huh? >> Uh, yes. I'm still talking to you. Get your head in the game, then get out of the game.]