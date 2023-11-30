# ECS-171-Group-Project

# Instructions for Frontend & Backend

The demo of our model is created using Next.js with React, leveraging Flask as the backend. You must run the server before launching the frontend.

### Backend
Ensure that you have Python3 installed, and it is the latest version. If not, you can install it [here](https://www.python.org/downloads/). The server file is a Python file located in the frontend/server directory, and it is called server.py. Please make sure to install the packages listed in the imports at the top of the file before running the server.

Install the following packages:

`pip3 install scikit-learn`

`pip3 install numpy`

`pip3 install Flask-Cors`

`pip3 install Flask`

Start the Flask server:

`python3 server.py`

The backend should be up and running now. You can proceed with starting the frontend.

### Frontend
First, open up a new terminal for running the frontend. Since our website is made using Next.js and React, to run our frontend you need to install Node.js version 18 or higher. Refer to this [link](https://nodejs.org/en/) for guidance on Node.js installation.

After installing Node.js, navigate to the frontend/sleep-and-stress directory. To install the necessary node modules, enter `npm i` in the command line. The modules listed in the package-lock.json file will be automatically installed with `npm i` or `npm install`. Next, to launch the website frontend, ensure you are still in the same directory (frontend/sleep-and-stress) and enter `npm run dev` into the command line. You should then be able to follow the provided link to a local host, and, with the server running, you will be able to see our app work!