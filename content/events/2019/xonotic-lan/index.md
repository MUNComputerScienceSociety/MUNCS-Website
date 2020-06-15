---
title: Game Night! - Xonotic LAN
date: "2019-11-15"
description: "Psuedo-tournament in the CS lab, playing some Xonotic!"
---

##### EN 2036 (CS Lab, 6 to 8pm)

_No registration required, just come on down!_

#### What is Xonotic?

Xonotic is a modern yet authentic Quake; it runs on the 'DarkPlaces engine', which was initially based on the Quake 1 engine.

As explained by: https://www.xonotic.org/

_"Xonotic is an addictive, arena-style first person shooter with crisp movement and a wide array of weapons. It combines intuitive mechanics with in-your-face action to elevate your heart rate. Xonotic is and will always be free-to-play. It is available under the copyleft-style GPLv3+ license."_

#### How do I install it?

## Installing on Labnet (MUN Desktops)

If you want to use the desktops at the university to play Xonotic, there's a quicker way to download the game files.

```bash
# head to your home dir, and make a directory named 'games'
cd ~
mkdir games
cd games

# copy the xonotic zip to said ~/games folder, and unzip it
cp ~csclub/games/xonotic-0.8.2.zip .
unzip xonotic-0.8.2.zip

# execute the linux startup script for xonotic
cd Xonotic
./xonotic-linux64-sdl

# or, startup xonotic and directly connect to the server being used for the LAN
./xonotic-linux64-sdl +connect cssbin.cs.mun.ca
```

<br />

## Installing on your own setup

Use the previous instructions above, but switch out the `cp ~csclub...` line for this:

```bash
...
# download the xonotic zip to said ~/games folder, and unzip it
wget https://dl.xonotic.org/xonotic-0.8.2.zip
unzip xonotic-0.8.2.zip
...
```

This setup also assumes you're using Linux/MacOS, see https://www.xonotic.org/faq/ for Windows instructions.

<br />

#### Connecting to the LAN

If you're using the desktops on campus, then you should be set.

However, if you're using your own setup, make sure you are connected to the `@Memorial` wifi network, _not_ the `@Memorial-Guest` network; **you cannot access the local network through `@Memorial-Guest`!**

The server will be running on campus, by the hostname of `cssbin`, connecct it to it by putting into following into your address field within Xonotic: `cssbin.cs.mun.ca`.

After following the instructions above to download Xonotic, just run the following command in the root directory of the game to connect to the server.

```bash
# within the ~/games/Xonotic folder
./xonotic-linux64-sdl +connect cssbin.cs.mun.ca
```

**Reminder: the keyboards and mice in the lab are a little sub-par for highspeed first person shooters, and there's also a significant lack of audio coming from said computers too, therefore if you have your own gear to bring with you, bring it!**
