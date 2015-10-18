# pimpmycause-rebuild
Pimp My Cause Rebuild


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
## Windows
 1. [Install Composer](https://github.com/composer/windows-setup)
 2. Follow the October CMS Command Line [installation instructions](http://octobercms.com/docs/console/commands#console-install)

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
coming soon

# 5. Unit Testing and Static Analysis
## PHP Unit
PHP Unit is used for backend unit testing and requires PHP 5.6. It can be installed via **Composer** `composer global require "phpunit/phpunit=5.0.*"`. For more info, refer to the [PHP Unit manual](https://phpunit.de/manual/current/en/phpunit-book.pdf)

## Static Analysis Tool
