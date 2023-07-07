# Translation App

**URL Link:** https://translation-app.surge.sh/

**Overview:**

The Translation App retrieves and translates basic information about a dog. The user can select to translate to 3 major languages.

- **User Flow Diagram:**
  ![db schema model](User_Flow.png?raw=true 'database_schema')

- **Component Diagram:**
  ![db schema model](Component_Diagram.png?raw=true 'database_schema')

**How to Run and/or Install the Translation App:**

1. Simply visit https://translation-app.surge.sh/ or continue reading for local installation

2. Clone the github repo to a local directory

3. Install npm if not already installed

4. From the root project directory, change directory to the backend folder

5. Run npm install

6. Change directory to the frontend folder

7. Run npm install

8. From the 'frontend' directory, run 'npm run start' to start app

9. Go to 'http://localhost:3000/' to start at the homepage

**Design Approach:**

1. React was used to easily scale with reusable components at a later date and easily control state throughout the app

2. Established user flow and components in advance to avoid excessive refactoring

3. Placed an emphasis on the frontend development per the instructions.

4. Error handling

   -Try/catch was used to catch any errors when calling the api. Error messaging was customized to help user the user identify problems more easily

   -404 route created to alert the user of an incorrect url

5. Material UI (MUI) was used to quickly build the app with off the shelf components.

6. A single page react application was utilized

   -This way, I could run almost all my code on the frontend

   -This also allows the user to use the back and forward icons

7. useContext was used to share state variables throughout the app without passing down props through all components

8. The free Dog and libreTranslate APIs were utilized in the app. No api keys were required which simplified the app. Otherwise, the api keys would need to be stored on the backend for security reasons, which would've add time to the project.

9. Axios was used to send HTTP requests to the external api

**Next Steps:**

•Testing is extremely important. With more time, I would focus on this first. Please see full note at the end of this document.

•Add loading wheel while data is being retrieved from api calls

•Api errors were inconsistent between the two apis. With more time, I would find a better way to handle those.

•Refactor with help functions and place in utility folder

•Allow for more random dogs to be selected

**Step-by-step User guide:**

1. Go to the home page, https://translation-app.surge.sh/

2. Click on the menu icon to go to the select language page

3. Select the language of your choice

4. Click 'Get New Dog'

5. Review Information

6. Click 'Translate'

**Technology Stack Used:**

-Node & Express on the backend

-React was used on the frontend

**Disclaimer:**
I had extremely limited time due to the 4th of July holiday and a preplanned international flight. Despite that, I was still make the progress you see here. If given the chance to go to the next round, I promise you'll see an even further improvement with my code. I am sincerce when I say testing is extremely important. I will add unit tests in the next challenge.

Also, please talk to Akshay about the conversation we had. My interest in the company is authentic. Let me know if you have any questions I can answer.
