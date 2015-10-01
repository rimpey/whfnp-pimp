# pimpmycause-rebuild
Pimp My Cause Rebuild

# Installation & Setup Linux/Mac

1. First you will need to install NPM to manage packages https://nodejs.org/
2. Clone the repo `git clone git@github.com:womenhackfornonprofits/pimpmycause-rebuild.git`
3. Install all required packages by running `npm install` within the /frontend/ directory, this will read the package.json file and install all required packages.

# Local Server Installation
To view .php scripts on your local machine a local web server must be installed. It's always best to install the recommend version. Each operating system has its own installer.
  - **Windows:** http://www.wampserver.com/en/
  - **Mac:** https://www.mamp.info/en/
  - **Linux:** https://bitnami.com/stack/lamp/installer

## Mac OSx
1. Once installed launch the MAMP application
2. The servers should automatically start connecting. If they don't, click *'start servers'*
3. Once the servers have started you'll be automatically taken to the **MAMP** homepage http://localhost:8888/MAMP/?language=English
4. By default the port number will be 8888
5. Go back to the **MAMP** application
6. The **document root** (the directory with the cloned repo) must be set in *Preferences* -> *Web Server*
7. http://localhost:8888 will take you to your **document root**. From here you can navigate to your *pimpmycause-rebuild* repo and your local changes can be viewed
