## Progress on Version 4.3.6 [Beta]

![version type](https://img.shields.io/badge/version-beta-yellow.svg?style=flat-square)
![improvements](https://img.shields.io/badge/improvements-13-green.svg?style=flat-square)
![bug fixes](https://img.shields.io/badge/bug%20fixes-6-red.svg?style=flat-square)
![translations](https://img.shields.io/badge/translations-6-blue.svg?style=flat-square)

### IMPROVEMENTS
- **Global**
	- [ ] Preparations for Manifest v3 (some fixes and testing can be found at [testing branch](https://github.com/DinoDevs/GladiatusCrazyAddon/tree/manifest-v3-testing))
	- [x] Item names in forge/smelt timers tooltip are now colored based on item quality (by @MiguelSOliveira)
	<details> ![forgesmelt_timers_colored](Pictures/Pictures/4.3.5%20to%204.3.6/forgesmelt_timers_colored.png)</details>
	
	![forgesmelt_timers_colored](Pictures/Pictures/4.3.5%20to%204.3.6/forgesmelt_timers_colored.png)
	- [x] Show mercenary real name: Names are now translated automatically if previously seen in auction
	- [x] Menu shortcuts: added new auction menu entry [+] with various shortcuts
	- [x] Shortcuts bar: added button to guild baths Vox I (#372)
	- [x] Display buff values on reinforcements & upgrades
- **Auction**
	- [x] Show item names (disabled by default, by @MiguelSOliveira)
- **Accessibility**
	- [ ] Improve experience on mobile phones
	- [x] Added loot per side in reports lists (#337)
- **Guild Bath**
	- [x] Pin message that will be displayed at the top of messages (#348)
- **Merchants**
	- [x] Items that costs rubies can now have an icon (#355)
- **Forge**
	- [x] Forging time is now displayed under the required resources in the tooltip (#350)
- **Market**
	- [x] Added button to include fees in the market price (#308)
- **Underworld**
	- [x] Expedition shortcut will always redirect to the last open location (#223)
- **Packages**
	- [x] Packages can be displayed as a list view (#323, #309)

### BUG FIXES
- **Global**
	- [x] Style fix for double line tab names when shortcuts bar is active along with an event
	- [x] Show online family members fixes (#314)
	- [x] Style fix for stats box (shortcuts bar) rendering behind event timers (#367)
- **Forge**
	- [x] Fixed a loop when gettings items from workbench (Firefox) (#335)
	- [x] Style adjustments on book of scrolls (lists with known prefixes & suffixes)
- **Settings**
	- [x] Export settings to notes: messing up `&"'<>` chars bug fixed
- **Messages**
	- [x] Fixed styling of the success/failure notice in new message layout (#357)

### TRANSLATIONS
-  **Updates**
	- [x] Czech update by @FrutyX
	- [x] German update by @Sleeping*Shadow
	- [x] Greek update by @GreatApo
	- [x] Portuguese update by @MiguelSOliveira
	- [x] Turkish update by @mattemre
	- [x] Croatian update by @0eXer
