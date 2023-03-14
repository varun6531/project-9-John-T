# Git Good: Water Filter Building Application

## Description 
This is a mobile application for understanding issues around global clean water supply. The partner is Engineers Without Borders (Water for the World - WT4W). This organization is concerned with educating the world about the global clean water supply and the disparities of access to it for different parts of the world. The app is intended to educate people on the disparities of access to clean water through a series of questions along with an interactive module. A common use case for the app would be for students to use the app to learn about the unequal distribution of resources in the world. The app would also support educators as a teaching method while also assessing and providing information on student responses to the educator

## Key Features
1. Registering/logging into a student/teacher account
 * Due to the differing features of a student and a teacher (a student can answer questions, a teacher can create a homeroom, etc), the registration process for a student and a teacher differs. 
2. Completing a pre-game questionnaire on global water supply
 * Slider questions to test a student’s base knowledge on global water supply
3. Building an interactive water filter with varying countries’ resources and literacy rate
 * The interactive module is a simple exercise where the user selects a country of the world, and depending on which country, is given a limited amount of in-app currency to create a virtual water filter whose parts have various costs. 
* This simulation helps us understand both how a simple water filter is made, as well as the lack of resources some countries of the world face when required to build such systems. The limited instructions relate to literacy rate which in turn relates to general education levels in the population of the country.
4. Completing a post-game questionnaire on global water supply
* Short open-ended questions to test a student’s knowledge on global water supply after playing the game, as well as understanding student's perspective on the issue
5. Data storage via database cloud service railway
* User accounts including teachers and students, country information, game results are stored in a database cloud service called Railway
6. Emailing teacher result of most recent game
* Teachers will receive a result of the most recent game via email automatically. An offline version of the app is available as well where this feature is turned off.

## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? For example: Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described in the previous section.
 * This section is critical to testing your application and must be done carefully and thoughtfully.
 Our application is deployed on the Expo App Store which is accessible by the Expo Go App on iOS App store or the Google Play Store. The link to download for the iOS version is https://apps.apple.com/us/app/expo-go/id982107779 and the link for Android is https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_CA&gl=US. After installing the Expo Go App, our application can be accessed by inputting exp://exp.host/@albertwelong/WaterForTheWorld?release-channel=default in the URL input or with this QR code. 
 
 ![expo go](https://user-images.githubusercontent.com/78889780/224879826-f3f7919a-df38-4c0e-951f-6745184b4812.png)

 
## Development requirements
 * What are the technical requirements for a developer to set up on their machine or server (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application. You should address this part like how one would expect a README doc of real-world deployed application would be.
 * You can see this [example](https://github.com/alichtman/shallow-backup#readme) to get started.
 
## Deployment and Github Workflow

Describe your Git/GitHub workflow. Essentially, we want to understand how your team members share codebase, avoid conflicts and deploys the application.

Naming conventions used in building the app include camelCase. To merge our code, we used a seperate branch from the main branch called d2-test. This branch was the original branch that included the merged code from all 3 sub teams: back-end, front-end, database. We did not use pull requests, we used our local machines and uploaded specific features from each sub team to add to the back-end's codebase. To add new featues we used pull request complete with descriptions of such features and had other teammates reivew such pull request to be approved. These featuers would be added to the same d2-test branch instead of the main branch. The overall development process from writing code to viewing a live application included extensive testing in each small feature to ensure that the codebase is extendable in the future for aditional featuers. Other than tests, we tested the codebase with the railway database cloud service to ensure that the database is working. Finally we used postman to connect the backend with the frontend app design and used expo react native to test the app. We decided to use this workflow because it made most sense to us to use the backend's codebase and work from there. Moreover, we used descriptive pull requests to ensure that new code can be easily checked by other teammates to avoid mishaps.

Backend Deployment: 
To deploy our backend code, we used a service called Heroku. The reason we pushed our backend code to heroku is because it is able to run the server 24/7 so that any API calls the frontend requires will always be up and available. We first installed heroku from their website and created an account. Then, by installing the heroku commandline (CLI) we were able to create a heroku app which provides us with a domain address. Heroku will set up a virtual machine on this domain that is able to run our code. Next, we installed the heroku/python buildpack on the heroku app, and git add/commit/push our backend code to the heroku git repo. Our list of APIs can be found on https://csc301-group9-john.herokuapp.com/.

Frontend Deployment:
To deploy our frontend, which is a react native mobile app, we used the Expo App Store. The Expo App Store allows us to deploy our app such that it can be accessible by anyone, anywhere, and at anytime. Our mobile app can be accessed by inputting exp://exp.host/@albertwelong/WaterForTheWorld?release-channel=default as a url input  or by scanning the QR code above in the Expo Go app, which is available on the iOS App store or Google Play Store. 

## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase? And why?

[Subject to change]
We will be using the MIT open-source license it is simple and permissive. It allows for redistribution, modification, and commercial use, while limitting liability and warranty. 

* What affect does it have on the development and use of your codebase?

There will be no drastic differences from the development and use of our codebase. We hope that the open-source license will allow other similar organizations such as Engineers Without Borders to develop similar apps that require a pre-game questionaire, a game, and a post-game questionare to be developed at a lower cost.

