---
title: Location privacy
tagnames: website, leaflet, lat:38, privacy, location:blurred, lon:-77, lat:30, location-privacy, blurred:true, website-utilities, lon:-70, place:sell-your-house-in-7-days, place:washington-dc, place:mobile-notary-dc
author: sagarpreet
path: /wiki/location-privacy.md
nid: 15685
uid: 516343

---

# Location privacy

by [warren](../profile/warren), [sagarpreet](../profile/sagarpreet)

February 05, 2018 12:25 | Tags: [website](../tag/website), [leaflet](../tag/leaflet), [lat:38](../tag/lat:38), [privacy](../tag/privacy), [location:blurred](../tag/location:blurred), [lon:-77](../tag/lon:-77), [lat:30](../tag/lat:30), [location-privacy](../tag/location-privacy), [blurred:true](../tag/blurred:true), [website-utilities](../tag/website-utilities), [lon:-70](../tag/lon:-70), [place:sell-your-house-in-7-days](../tag/place:sell-your-house-in-7-days), [place:washington-dc](../tag/place:washington-dc), [place:mobile-notary-dc](../tag/place:mobile-notary-dc)

With the new **Share your Location** feature on your [profile page](/profile) come important questions about how much you should share about where you are. This page discusses this sensitive topic and offers tips.

For more on general anonymity and privacy, see [our anonymity page](/anonymity)

For information on location privacy in the context of our [Privacy Policy](/privacy), see [Privacy Policy Location](#Privacy+Policy+Location) below.

## How it works

On different pages on the site, you'll see special tags marking the geographic location or region of the content, which could be a wiki page, a blog post, a research note, a question or a profile page. They take the form `lat:1.00` or `lon:1.00` (where the number is an actual coordinate). They look like this:


[![Screen_Shot_2021-08-31_at_3.46.15_PM.png](/i/44767)](/i/44767?s=o)



However, you don't have to know how to create these yourself. You can just use the `Add your location` buttons and you'll be guided to create them. 

Once they're added, a small map will appear on the page (you may have to reload) and you'll see the location the page is associated with.

You can ALWAYS delete a location you've added by deleting the tags. You may not be able to delete locations entered by others.

## Location privacy

Sharing location can come with some privacy concerns. So we've made it possible to share **inexact** or "blurred" locations.

Advantages of _sharing your location_ : 

* **helps** the community to know where you live approximately
* **helps** you to find and learn about projects near you (feature which we will be working on in the near future)

However, there are **risks to sharing your location**, even if it's not exact:

* you may not want to share your identity at all
* you may not want a polluter to know where you live
* you may just want to maintain your privacy even while collaborating with people based on general location

****

Here are some ways we've tried to make it easy to share your location with varying amounts of precision:

## Location blurring
 
The new system enables "location blurring" of the location shared on your profile or on any [note](/research) or [wiki page](/wiki) on the site. Location blurring truncates your latitude and longitude coordinates, making it **harder to see exactly where you are** by simply lowering the resolution of your coordinates. 

This is like saying "around Chicago" instead of giving your precise address. For example:

| BEFORE | AFTER |
|------|------|
| lat:17.213821 | lat:17 |
| lon:77.232323 | lon:77 |

When you enable location blurring, you won't see a marker (or if you do, it won't be exactly on your location):


[![before-after.png](/i/26394)](/i/26394)



****

## Zoom levels and precision

Lower zoom levels on a map means that the map shows entire continents, while higher zoom levels means that the map can show details, like the streets of a city.

When we represent the world at zoom level zero, it’s 256 pixels wide and high. When we go into zoom level one, it doubles its width and height, and can be represented by four 256-pixel-by-256-pixel images. At each zoom level, each tile is divided in four, and its size doubles, quadrupling the area. 

This principle is common in web maps, but how does it relate to the blurred locations we're helping you share?

[![Screen_Shot_2018-02-05_at_5.41.31_PM.png](https://publiclab.org/system/images/photos/000/023/453/large/Screen_Shot_2018-02-05_at_5.41.31_PM.png)](https://publiclab.org/system/images/photos/000/023/453/original/Screen_Shot_2018-02-05_at_5.41.31_PM.png)

(source : [leafletjs library](http://leafletjs.com))

What happens is that the shorter the coordinates (the more they're blurred) the less precise they are, and so they correspond to the scale of a given zoom level, roughly as explained in the chart below. 

| Zoom level | Lat/lon coordinate precision | Human-readable placename |
|------------|---------------|----------------|
| 0 | `x0.0` | planet |
| 5 | `x0.0` | state, province, country |
| 6 | `x.0` | state, province, region |
| 10 | `0.x` | city, postal code |
| 13 | `0.0x` | neighborhood |
| 16 | `0.00x` | block |

What this means is that if you blur your location even a little, people won't be able to determine your location to within a certain distance, which can protect your privacy. 

****

## Questions

[questions:location-privacy]

****

## Privacy Policy Location

Our [Privacy Policy](/privacy) mentions that we will truncate your IP address in Google Analytics, and explaining the amount of privacy this offers is not simple. Because of how IP addresses are used globally, in some countries everyone has the same IP address; truncating it will therefore not make a difference and individuals privacy is relatively well protected from IP address geolocation. In other countries, such as the US, an IP address may reveal an exact geographic location such as a street address. 

Read Google's documentation on IP Anonymization in Analytics here: https://support.google.com/analytics/answer/2763052

With IP-address truncation, the last 3 digits (those following the final period) are omitted, to offer some privacy from IP address geolocation. This has different results depending on region, and is hard to quantify. 

However, [this post documents a study done in the UK](https://www.conversionworks.co.uk/blog/2018/04/16/ip-anonymization-ga-impact-assessment/) to assess the amount of real-world "location blurring" (and thus, degree of privacy) that occurred due to this kind of IP address truncation:

> After switching on IP anonymization in Google Analytics using GTM, we observed an average 174 km city-level discrepancy in the attributed geolocation. But don’t panic, this number is highly distorted. Most sessions were still attributed to the same country/continent after switching on IP anonymization. When it comes to the city level accuracy, 67% of the IP-anonymised visits were attributed to the same city, and 14% of the visits were attributed to the adjacent cities within 50 km (about the distance from London to Luton). Therefore, despite the average distance being 174 km apart, 81% of the visits have less than 50 km discrepancy (or no discrepancy at all).

They also observed:

> In addition, it’s also worth noting that the number of sessions with ‘(not set)’ value in their city field (which means GA cannot identify which city is this visit coming from) increased by 21.65% after IP anonymization.

> On average, only 56% of the visits from Europe were attributed to the same city. Whereas for visits from Americas the average city level accuracy is 80%. "

(Also see: https://www.conversionworks.co.uk/blog/2017/05/19/anonymize-ip-geo-impact-test/)

Also note that, independent of IP address truncation,"Google Analytics rounds latitude and longitude to 4 digits, thus, providing a maximum precision of 11.1m." (miles) -- https://radical-analytics.com/case-study-accuracy-precision-of-google-analytics-geolocation-4264510612c0

### In summary

This IP address truncation makes the biggest difference for **areas of the world where IP based geolocation is most precise -- such as Europe and the US**. In those areas, rather than possibly being locatable to within tens of meters, you'll likely be locatable to within only tens of kilometers. And within Google Analytics, your individual actions or behaviors are not correlatable with your location nor viewable except in the aggregate with others' data. 

At Public Lab, we take privacy very seriously. Please read the [full Privacy Policy](/privacy) to learn more. 