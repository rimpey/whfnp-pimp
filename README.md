# pimpmycause-rebuild
Pimp My Cause Rebuild
If you are a windows user, you can skeep al the below stages and skip to the windows section at the end

# 1. Install PHP and mcrypt
## Mac OSX
1. Install PHP 5.6 if needed ([Installation Guide](http://ziad.eljammal.com/install-php-5-5-on-mac-os-x/). Make sure you run command `curl -s http://php-osx.liip.ch/install.sh | bash -s 5.6` during step 1. as this guide is for installing php 5.5)
2. Install [HomeBrew](http://brew.sh/)
3. Install mcrypt php extention `brew install php54-mcrypt`

## Windows
`mcrypt` installs automatically with PHP for Windows
1. Install PHP 5.6 if needed ([Installation Guide](http://windows.php.net/download/))

## Linux
This needs review:

1. Install PHP 5.6 if needed
2. Install [HomeBrew](http://brew.sh/)
3. Install mcrypt php extention `brew install php54-mcrypt`


# 2. Install OctoberCMS
## Mac OSX
1. [Install Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)
2. Follow the October CMS Command Line [installation instructions](http://octobercms.com/docs/console/commands#console-install)

# 3. Get the code
## Backend
1. In the same folder that has cotobercms and composer clone the repo `git clone git@github.com:womenhackfornonprofits/pimpmycause-rebuild.git`

## Front End
(soon will be merged with octobercms)

1. First you will need to install NPM to manage packages https://nodejs.org/
2. Clone the repo `git clone git@github.com:womenhackfornonprofits/pimpmycause-rebuild.git`
3. Install all required packages by running `npm install` within the /frontend/ directory, this will read the package.json file and install all required packages.

# 4. Local Server Installation
To view .php scripts on your local machine a local web server must be installed. It's always best to install the recommend version. **MAMP** can now be used on *Windows* as well as *Mac*, however the installation differs.
  - **MAMP:** (https://www.mamp.info/en/)

## Mac OSx
1. Once installed launch the MAMP application
2. The servers should automatically start connecting. If they don't, click ***'start servers'***
3. Once the servers have started you'll be automatically taken to the **MAMP** homepage **http://localhost:8888/MAMP/?language=English**
4. By default the port number will be **8888**
5. Go back to the **MAMP** application
6. The **document root** (the directory with the cloned repo) must be set in *Preferences* -> *Web Server*
7. **http://localhost:8888** will take you to your **document root**. From here you can navigate to your ***pimpmycause-rebuild*** repo and your local changes can be viewed

## Windows
1. First clone this repository to your computer.
2. Download MAMP (make sure it's the Windows version)
3. In the MAMP GUI go to Preferences:
  a. Leave the start page url as empty
  b. Ports tab - click on "Set MAMP port to default", this will change Apache to **8888** and MySQL to **8889**
  c. PHP tab - the php version should be 5.6.8
  d. Web Server - choose "Select" and navigate to the project directory.
4. Before you try out MAMP and run the servers to go to the start page (via the GUI), you should make sure that you are on 
   the development branch (not on the master branch).
5. If your MAMP is working properly with the project, you should get an error message saying that you are missing vendor
   files
6. This will be the time to install Composer (which will handle the php dependencies).
   Download Composer - **https://getcomposer.org/download/** you will find there a Windows Installer. Run the .exe file .
7. Before running the .exe file - make sure that you have php on your windows in **C:\php\** and in your PATH as well!
   Another thing to check for, will be going over the php5.6.8 .ini files and making sure the openssl line is not commented     out. There are 2 files in the **C:\MAMP\bin\php\php5.6.8** folder, and one file on the **C:\MAMP\conf\php5.6.8**.
8. If Composer is still complaining and you search google and stack overflow for an answer with no success even after you've    added a new variable to the PATH (**PHPRC**)- you might want to move on to manual installation of Composer which includes    downlodaing the latest .phar file from the Composer website (you'll find it at the bottom of the page there) and asking      one of us for the scripts we have in **C:\ProgramData\ComposerSetup\bin** and the project's vendor files.

# 5. Unit Testing and Static Analysis
## PHP Unit
PHP Unit is used for backend unit testing and requires PHP 5.6. It can be installed via **Composer** `composer global require "phpunit/phpunit=5.0.*"`. For more info refer to the [PHP manual](https://phpunit.de/manual/current/en/phpunit-book.pdf)

