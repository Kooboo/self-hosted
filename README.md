# What is the Problem with SaaS?

Many SaaS applications are released as open source on GitHub but charge for hosted solutions. Paying $20 for each of the 10 applications adds up quickly, and managing isolated applications is cumbersome.
 

# Self-Hosted Alternatives

I have created a solution named kooboo for the community to self-host numerous open source applications on their desktop or in the cloud.  

It can be run on Windows, Mac or Linux server, and it is totally *FREE* 

Currently, there are about a hundred applications and tools included, such as:

DrawIO, Excalidraw, Quant UX Prototype, TL Draw canvas, Polotno studio, Variant Form, Grapes page builder, Unlayer page designer, API Test, Paint Board, Toast Image Editor, Json editor, Mermaid Diagram, vvveb js designer, SVG image editor, Block note writer, nunu 3d Studio, Glyphs Font Studio, Pictode Drawing, IDraw UI designer, FileRobot Image editor, Mongo DB modeler, DrawDB Database designer, TypeFlow editor and more.
 

# How to Get Started

The process for installing and using Kooboo varies depending on your operating system. Follow the instructions below to get started with Kooboo on different platforms.

After logging in, install or open the AppBox application. AppBox is a Kooboo tool designed to help you easily manage and install Kooboo applications. Once inside AppBox, you will reach a screen where you can connect, install, and use various Kooboo applications.
 
![{~HX08TPUW~(L16 XRX$N%O](https://github.com/user-attachments/assets/5d344b9d-bf5d-44c7-9b95-3d2e54390c83)
 
# Windows Portable 

Download the source code or the release package. This is a compiled Portable Windows Application with default user and password.  The original source code refer to
https://github.com/kooboo/kooboo

Unzip and double click on Kooboo.exe to run, no installation needed. You may access http://localhost and login anywhere by:

```Text
user name: admin
password: admin
```
*NOTE: This login is only for Windows Portable. For other OS, configure the login manually or register an online account

After logging in, you can either install additional applications or click on an existing application to log in and start using it. AppBox is installed by default, you can open the application by clicking on the site link or by navigating directly to:
 
https://appbox.localkooboo.com

# Microsoft Store
Windows user may search Kooboo on Microsoft Store and install from there

https://apps.microsoft.com/store/detail/XP898V0JVK3CTB

# Mac

Download and Click to run, support both Arm and X64

https://www.kooboo.com/__kb/kfile/Kooboo-2.1-osx.zip


# Docker

Assume that docker container is running on port 80, and the user data will stored in /var/lib/kooboo
 
Run: 
```Text
docker run -d -p 80:80 -v /var/lib/kooboo:/data --name kooboo kooboo/kooboo:latest
```
Open the application from browser and register an account to login



Download

Windows user may search Kooboo on Microsoft Store and install from there.
 
Go to install



# Linux

Use wget to install or update：
 ```Text
sudo wget -O - https://www.kooboo.com/install.sh | /bin/bash
 ```
 
Or use curl to install or update：
  ```Text
sudo /bin/bash -c "$(curl -fsSL https://www.kooboo.com/install.sh)"
  ```
After installation successfully, use below commands to start or stop service
  ```Text
sudo systemctl status kooboo
sudo systemctl stop kooboo
sudo systemctl start kooboo
 ```

# Use Online

Go to
https://www.kooboo.com

Click Login, Register an account and Use directly online. 

# Source Code

Kooboo Source Code is available at:

https://github.com/kooboo/kooboo

Download packages are available at:

https://www.kooboo.com/downloads

