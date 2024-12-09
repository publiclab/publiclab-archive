---
title: 'Internationalization | Tutorial'
tagnames: 
author: jiteshxyz
path: /wiki/internationalization-tutorial.md
nid: 13380
uid: 468400

---

# Internationalization | Tutorial

by [mariakatosvich](../profile/mariakatosvich), [jiteshxyz](../profile/jiteshxyz)

August 22, 2016 15:18 | Tags: 

----

#Internationalization or "I18n"

##Internationalization Basics
i18n—short for "internationalization." (There are 18 letters between the "i" and the "n" in "internationalization.") Internationalization means architecting and developing an application in order to bring support for a second locale—possibly at a future time. 

The default tool for internationalizing a rails application is with the ruby i18n gem. 

Basically, the i18n gem creates a directory called config/locales. Rails then stores the application's various languages in a yaml file, such as en.yml for English or fr.yml for French.

The I18n gem ships with a feature called variable interpolation that allows you to use variables in translation definitions and pass the values for these variables to the translation method.

 Example en.yml file:

    en:
      hello_world: "Hello world"
      hello: "Hello %{name}"

Example fr.yml file:

    fr:
      hello_world: "Bonjour le monde"
      hello: "Bonjour %{name}"

Possible ERB code:

    <p>
       <%= I18n.translate("hello_world", :locale => "en") %>
    </p>
    <p>
       <%= I18n.translate("hello", :locale => "en", :name => "James") %>
    </p>
    <p>
       <%= I18n.translate("hello_world", :locale => "fr") %>
    </p>
    <p>
       <%= I18n.translate("hello", :locale => "fr", :name => "James") %>
    </p>

The output would be:

    Hello world
    Hello James
    Bonjour le monde
    Bonjour James


Similarly, I18n's translate method could also be used inside model or controller. For example:


    # app/controllers/home_controller.rb
    class HomeController < ApplicationController
      def index
        flash[:notice] = I18n.translate('hello_world')
      end
    end

##Organization of Locale Files


[plots2](https://github.com/publiclab/plots2) config/locales directory looks like this:


    |---de.rb
    |---en.rb
    |-controllers
    |---home_controller
    |---notes_controller 
    |---tag_controller
    |---users_controller
    |---user_sessions_controller
    |---user_tags_controller
    |---wiki_controller
    |-views
    |---comments
    |---dashboard
    |---home
    |---layouts
    |---notes
    |---questions
    |---sidebar
    |---tag
    |---talk
    |---users
    |---user_sessions
    |---wiki
    |-models
    |---spamaway
    |-js

##Using Safe HTML Translations
Keys with a '_html' suffix and keys named 'html' are marked as HTML safe. When you use them in views the HTML will not be escaped. For example:


    # config/locales/en.yml
    en:
      welcome: <b>welcome!</b>

    # app/views/home/index.html.erb
    <div><%= raw t('welcome') %></div>


For the above combination, the HTML output will be:

> **`welcome!`**

##Support
For more information, check out The Official Guide or write to us at [plots-dev@googlegroups.com](plots-dev@googlegroups.com)
