This is the code for the front end of the Purdue EPICS DKC CAT team. The app is meant to be a "middle-man" between a deaf person and a non deaf person in order for them to communicate.

The app is written using the Ionic framework, a simple and easy framework for writing and testing ios and android apps.

The app has two routes for data flow:

1. The first flow is when the non-deaf user speaks into the app, their speech is recorded and is sent to the backend where it is translated from english to gloss, then the app creates a signing avatar to show the deaf person.

2. The second flow is when the deaf user signs using gloves with flex sensors on the fingers. The flex sensors pick up how much each finger is flexed and then this data is sent to the backend where it determines the correct word or phrase depending on the deaf users signing. The word or phrase is then displayed on the app for the non-deaf user to read or hear.
