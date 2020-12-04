<p align="center">
  <img src="./public/img/floaty.png" height="148">
  <h2 align="center">Floaty</h2>
  <p align="center">Cross-platform application to open website or media in a floating window<p>
  <p align="center">
    <a href="https://github.com/timo123950/floaty/blob/master/license">
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
    </a>
    <a href="https://github.com/timo123950/floaty/releases">
    	<img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux-blue.svg" alt="platforms" />
    </a>
    <a href="https://github.com/timo123950/floaty/releases">
	    <img src="https://img.shields.io/github/downloads/timo123950/floaty/total.svg" alt="prs welcome">
    </a>
  </p>
</p>

Floaty opens any website or media in a **small floating window that remains on top of all other applications**. Floaty windows stays up **all the time**. No need to keep struggling with <kbd>alt + tab</kbd>, use Floaty for **easy multitasking**.

## Features
* Always **stays on top** of any open applications
* **Adjustable opacity** – it gets out of your way while you work
* **Resize and place** it anywhere
* **Shortcuts** to make you more productive
* Lets you **multitask** while you work
* **Open source** licensed under MIT
* **Lean** small resource footprint, minimal User Interface.
* **Cross-platform** works on Windows and Linux

## Installation

Download and install the relevant distribution from the [releases page](http://github.com/timo123950/floaty/releases).

### Enable Flash Support

To enable flash support, copy or link Chrome's Pepperflash plugin into your $HOME/.floaty-flash. You can find the plugin at the installation path of the Chrome. For example, on MacOS, you can do the below to enable Flash support

```
ln -s ~/Library/Application\ Support/Google/Chrome/PepperFlash/[version]/PepperFlashPlayer.plugin" ~/.floaty-flash
```

## Usecases

> Here is the list of some of the possible use cases off the top of my head

* Use it as a floating window for your calendar/checklist/assigned-tickets etc
* Watching tutorial while you code? Open the video in Floaty and keep it in front of you
* Making a video course? Open the demo in Floaty and show the output in real time
* Working on some web UI? Open it in Floaty to avoid pressing <kbd>alt + tab</kbd> again and again
* Play some video, watch some talk or play some TV series while you work
* Working on something non-familiar? Open the docs in Floaty
* Open that live football match that you won't want to miss
* Use it as a desktop widget

## Development

Clone the repository, install the dependencies and start the app

```bash
yarn install
yarn start
```

## Shortcuts

> Here is the list of available shortcuts that you may use

| **Shortcut**                       | **Description**                  |
|------------------------------------|----------------------------------|
| <kbd>Cmd/Ctrl + L</kbd>            | Show Navbar and focus URL input  |
| <kbd>Cmd/Ctrl + Shift + D</kbd>    | Enable detached mode             |
| <kbd>Cmd/Ctrl + M</kbd>            | Refresh Page                     |
| <kbd>Cmd/Ctrl + Shift + L</kbd>    | Toggle Navbar on WebPages        |
| <kbd>Cmd/Ctrl + Shift + Up</kbd>   | Increase Opacity                 |
| <kbd>Cmd/Ctrl + Shift + Down</kbd> | Decrease Opacity                 |
| <kbd>Cmd/Ctrl + Alt + I</kbd>      | Show Developer Tools             |
| <kbd>Cmd/Ctrl + [0-9]</kbd>        | Switch Window Opacity            |
| <kbd>Cmd/Ctrl + Shift + F</kbd>    | Switch to Frameless Window       |
| <kbd>Cmd/Ctrl + O</kbd>            | Open a file (txt)                |

> **Note** – Changing the opacity is only supported in Windows and MacOS

**Detached Mode** 
* Enabling the detached mode makes Floaty non-interactive – it will let any interactions fall through to the window below it. To remove the detached mode, focus the window either by clicking the dock icon or by activating it using <kbd>alt + tab</kbd>

## Screenshots

> Homescreen for the application

![](./public/img/home.png)


> Anything running in floaty stays on top of everything

> You can change the opacity too

## Auto-embed Videos
For some video streaming websites such as Youtube, Vimeo, Twitch, Daily Motion etc, Floaty shows you the video only web page by default (using the auto-generated embed links), showing you the video in a distract free manner. You can disable that by toggling the `Edit > Embed Videos`.

> **Note** – In case of youtube, `it might not work sometime` when the user has put restrictions on the video – in that case, you will have to disable "Auto Embed" option from the Edit menu to make them work. 

## Planned Roadmap

* [ ] Persist options and linking options to website
* [ ] Bookmarking links for later use
* [ ] Write tests

## Contributions
Feel free to implement anything from the roadmap, submit pull requests, create issues, discuss ideas or spread the word.

## License
MIT &copy; [Timo van Balen](https://github.com/timo123950/floaty/blob/master/license)
