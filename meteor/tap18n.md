# direction of i18n

![](https://raw.githubusercontent.com/asgaraliyev/notes/main/meteor/images/locationOf18n.jpeg)
# sturucture of json files
![](https://raw.githubusercontent.com/asgaraliyev/notes/main/meteor/images/stuructureOfJsonFiles.jpeg)
# set language

```javascript
if (Meteor.isClient) {
    let lang = localStorage.getItem("lang")
    lang = lang || "az"
    TAPi18n.setLanguage(lang)
}

```

# display translated text

```json
{
  "categories": "Kateqoriyalar",
  "foundProduct": "__productCount__ mehsul tapildi",
  "Search": "Axtar",
  "Favorites": "Sevimliler",
  "Get Started": "Basla gorek",
  "newest": "En Yeniler",
  "lowest": "Ucuzdan bahaya",
  "highest": "Bahadan ucuza",
  "oldest": "Kohneden yeniye"
}
```

_In Html_

```html
<h3>{{_ "foundProduct" productCount=13}}</h3><!--13 mehsul tapildi -->
```

_In javascript_

```javascript
TAPi18n.__("categories");
```
