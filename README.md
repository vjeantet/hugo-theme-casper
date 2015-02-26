# CASPER theme for hugo
    

Casper is a single-column theme for [Hugo](http://gohugo.io/).

## Features

* Google Analytics
* Disqus
* Share buttons (Facebook, Twitter, Google)
* Big cover image
* Custom cover by post
* Tagging


# Installation

Referred from [hugoThemes#Installing Themes](https://github.com/spf13/hugoThemes#installing-themes).

## Installing a this theme

    mkdir themes (if it does not exists)
    cd themes
    git clone https://github.com/vjeantet/hugo-theme-casper casper
    
## Build your site with this theme

    hugo server -t casper

# Configuration

**config.toml**

``` yaml
BaseUrl: "http://example.com"
LanguageCode: "fr-FR"
Title: "My blog is awesome"

Params:
  Author: "My Name"
  DateForm: "Mon, Jan 2, 2006"
  GoogleAnalyticsUserID: "Your ID."
  Disqus: "Your Disqus."
  Cover
  logo
  bio
  authorimage

permalinks:
  post: /blog/:year/:month/:day/:title/

```

Example : [config.toml](https://github.com/vjeantet/vjeantet.fr/blob/master/config.toml)

**example post**

``` markdown
---
title: "Post title here"
date: 2015-05-11
comments: true
tags: ["docker", "golang", "web"]
image: "/images/hugo.png" # cover image for this post, (optional)
---

Contents here
```

# Contact me

open an issue in github

[https://twitter.com/vjeantet](https://twitter.com/vjeantet)
