# ECS-171-Group-Project

# Instructions for Frontend & Backend

The demo of our model is created using Next.js with React, leveraging Flask as the backend. You must run the server before launching the frontend to ensure model predictions are displayed.

### Backend
The server file is a Python file located in the frontend/server directory, and it is called server.py. Please make sure to navigate to the folder in your terminal before following the instructions below to run the server.

---

### Downloading Python
Ensure that you have latest version of Python3 installed. You can check the version in the terminal with `python --version`. If not, you can install it [here](https://www.python.org/downloads/). It should print out `Python 3.12.0` if done properly. If you run into the issue where the version is not updated for some reason, make sure to *add* to your `PATH` variable in your System Environmental Variables with the following:

```
    C:\Users\user\AppData\Local\Programs\Python\Python312\
    C:\Users\user\AppData\Local\Programs\Python\Python312\Scripts\
```
- These lines should enable global usage of Python regardless of where you are in your file tree.
- user should correspond to the current user for your PC.

---

### Setting up a Virtual Environment
The reason we need a virtual environment is to prevent global installations of Python packages/libraries that may have conflicting versions/dependencies when used across different projects. It provides a safe, contained space where modifications to dependencies in our existing project will have no effect on other Python related projects.

To create a virtual environment, run the following command:
```py
    python -m venv name_of_venv
```
- Please create the venv within the root of frontend/server.
- name_of_venv is up to you. For best practices, name it in relation to the use case for your project (i.e flaskVenv).

To start up a virtual environment, run the following command:
```py
    ./name_of_venv/Scripts/activate
```
- Your terminal should now have (name_of_venv) in front of your path. This indicates that you are working within the virtual environment.

To exit a virtual environment, run the following command:
```py
    deactivate
```
- And now your terminal should return to just the path of where you currently are.

---

### Installing Packages
First, make sure that your virtual environment is active. Follow the steps above to get your virtual environment working. Then, install the following packages with pip: 
```py
    pip install flask
    
    pip install flask-cors
    
    pip install scikit-learn
```
- To check if the packages were properly installed, type `pip list` in your terminal and check to see if their names show up.

---

### Starting the server
Make sure your virtual environment is active prior to starting the server. To start the flask server, run the following command:
```py
    python server.py
```

The backend should hopefully be up and running now. You can now proceed to starting the frontend.

---

### Frontend
First, open up a new terminal. This can be done in VSC by simply clicking the `+` with the terminal panel open or `ctrl+shift+` shortcut. We need two separate terminals as the backend is a separate process from the frontend. Since our website is made using Next.js and built with React.js, you will need to install Node.js version 18 or higher. Refer to this [link](https://nodejs.org/en/) for guidance on Node.js installation.

After installing Node.js, navigate to the frontend/sleep-and-stress directory in the new terminal. To install the necessary node modules, enter `npm i` or `npm install` in the command line. The modules listed in the package-lock.json file will then be automatically installed. These modules are necessary for our frontend to function. To launch the website, ensure you are still in the same directory (frontend/sleep-and-stress) and enter `npm run dev` into the same terminal. You should soon see a provided link to a local host, which you should click, and, with the server running, you will be able to test out our app!