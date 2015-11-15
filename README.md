# Skeleton Project for Inclusion in October CMS Folder

This is a skeleton project to be used with the October CMS. If you have not yet installed the October CMS please scroll down the page and follow the instructions outlined. As a result of installing the CMS you will have a directory on your local machine containing a full set of October CMS files, there is no need to upload these files to GitHub each time. In fact to guard against the overhead of GitHub stored CMS files these have been placed in the .gitignore file so that they are not uploaded to GitHub. The only files in the CMS for which will be modified during project development and stored in source control are those in the CMS themes and plugin directories.

The skeleton project is designed to work for both front and backend. Front end development will take place in the pimp themes directory:

      [october-install-dir]/themes/pimp/src

where best practices have been applied to the directory structure of this project including the Sass partials. The gruntfile.js watches for changes made in the this directory and will subsequently process files and output them up a directory and into: 

      [october-install-dir]/themes/pimp/assets

Where they form the static version of the site but are also in the correct location for being accessed by CMS pages. The gruntfile currently copies; scripts, styles and static html files into the assets directory however closer to project deployment will also uglify and compress files, this is yet to be done. The inclusion of the Zurb Foundation for Sass framework is also yet to be done. 

In its current form this skeleton project is ready to be integrated into your October CMS directory on your local machine. Once you have installed the October CMS all that is left to do is to checkout this project from GitHub. As you do not have an empty directory you will need to follow these git commands for cloning the repo into an existing installation of the October CMS.

      git init
      git remote add origin PATH/TO/REPO
      git fetch
      git reset --hard origin/master

The PATH/TO/REPO is the https url link located in GitHub and can be copied and pasted into the command line terminal.A

s yet this repo is simply the infrastracture of the pimp website and is in the process of being built so will eventually contain pages built statically for later inclusion in the October CMS.


# Installation wizard for October

The wizard installation is a recommended way to install October. It is simpler than the command-line installation and doesn't require any special skills.

1. Prepare a directory on your server that is empty. It can be a sub-directory, domain root or a sub-domain.
1. [Download the installer archive file](https://github.com/octobercms/install/archive/master.zip).
1. Unpack the installer archive to the prepared directory.
1. Grant writing permissions on the installation directory and all its subdirectories and files.
1. Navigate to the install.php script in your web browser.
1. Follow the installation instructions.

## Minimum System Requirements

October CMS has a few system requirements:

* PHP 5.4 or higher
* PDO PHP Extension
* cURL PHP Extension
* MCrypt PHP Extension
* ZipArchive PHP Library
* GD PHP Library

As of PHP 5.5, some OS distributions may require you to manually install the PHP JSON extension.
When using Ubuntu, this can be done via ``apt-get install php5-json``.
