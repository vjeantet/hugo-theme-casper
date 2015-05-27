# CASPER theme for hugo
    

Casper is a single-column theme for [Hugo](http://gohugo.io/).
Ported from [Casper theme for Ghost ](https://github.com/TryGhost/Casper)

blog demo : http://vjeantet.fr

## Features

* Google Analytics (optional)
* Disqus ( can disable comments by content)
* Share buttons on Facebook, Twitter, Google (can disable share by content)
* Big cover image (optional)
* Custom cover by content (optional)
* Tagging
* Pagination
* Menu

# Installation

## Installing this theme

    mkdir themes
    cd themes
    git clone https://github.com/vjeantet/hugo-theme-casper casper

## Build your website with this theme

    hugo server -t casper

# Configuration

**config.toml**

``` toml
BaseUrl= "http://example.com"
LanguageCode= "fr-FR"
Title= "My blog is awesome"
paginate = 5
DisqusShortname = "YOUR_SHORT_NAME_HERE"
Copyright = "All rights reserved - 2015"

[params]
  description = "this is my description"
  cover = "images/cover.jpg"
  author = "Valère JEANTET"
  authorlocation = "Paris, France"
  authorwebsite = "http://vjeantet.fr"
  bio= "my bio"
  logo = "images/logo.png"
  googleAnalyticsUserID = "UA-79101-12"
  # Optional RSS-Link, if not provided it defaults to the standard index.xml
  RSSLink = "http://feeds.feedburner.com/..." 
  githubName = "vjeantet"
  twitterName = "vjeantet"
  # set true if you are not proud of using Hugo (true will hide the footer note "Proudly published with HUGO.....")
  hideHUGOSupport = false

```

Example : [config.toml](https://github.com/vjeantet/vjeantet.fr/blob/master/config.toml)

## Menu configuration

On top right of the screen, a "Subscribe" button is displayed with a link to the RSS feed.

When you define a menu in the main config file, Then a menu button is displayed instead of the subscribe button
When the use clicks the menu button, a sidebar appears and shows the subscribe button and all items defined in the main config file


Example of a menu definition in main config file.
(If you add ```menu="main"```in the metadata of your content file, it will be displayed too)

```
[[menu.main]]
  name = "My Blog"
  weight = -120
  identifier = "blog"
  url = "/"

[[menu.main]]
  name = "About me"
  weight = -110
  identifier = "about"
  url = "/about"
  
```

## Metadata on each content file, example

``` markdown
+++
date = "2014-07-11T10:54:24+02:00"
draft = false
title = "dotScale 2014 as a sketch"
slug = "dotscale-2014-as-a-sketch"
tags = ["event","dotScale","sketchnote"]
image = "images/2014/Jul/titledotscale.png"
comments = true
share = true
+++

Contents here
```

## Create new content based with default metadata from this theme
You can easyly create a new content with all metadatas used by this theme, using this command 
```
hugo new -t casper post/my-post.md
```

You can easily create a new blank page, with menu integration, with all metadatas used by this theme, using this command 
```
hugo new -t casper about.md --kind=page
```


# Contact me

open an issue in github

[https://twitter.com/vjeantet](https://twitter.com/vjeantet)
