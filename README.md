# ECS-171-Group-Project

# Instructions for Frontend & Backend

Our model demo can be shown using a Next JS app with React that uses Flask as the backend. The server must be run before the actual frontend website is run. 

### Backend
The server file is a python file located in the frontend/server directory, and it is called server.py. Please make sure to install the packages listed in the imports at the top of the file before running the server. 

### Frontend
Since our website is made using Next JS and React, to run our frontend you need to install Node.js version 18 or higher. See this [link](https://nodejs.org/en/).

After installing Node.js, navigate to the frontend/sleep-and-stress directory. From here, it is necessary to install the node modules by typing npm i in the command line. The modules installed are the ones liste in the package-lock.json file, but this is done automatically with npm i or npm install. Next, to run the website frontend, make sure you are still in the same directory frontend/sleep-and-stress and type "npm run dev" into the command line. Then, you should be able to click the link it gives you to a local host, and as long as you have the server running, you will be able to see our app work!