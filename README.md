# Yelp / Weather Hackathon

# Discussion Questions

## Data

1. Weather could change people's moods to affect how they review something.
We could check to see if there is a correlation between the type of weather
(i.e. rainy, sunny) and the type of review (i.e. funny, useful, cool, etc.).
2. We don't really see how the correlation could go backwards like that; it
doesn't make sense of Yelp to affect the weather.
3. Could see if key words are affected, general ratings for a given area, etc.

## Method

1. Stars, number of posts over a given time, review types, etc.
2. Natural language processor to find key words perhaps. You could also just
see how many words are in the body of the post and see if that relates to the
location at all.

## Bias

1. Couldn't be enough Yelp data on certain cities that have weather associated.
Some reviewers are getting paid to post for certain businesses.
2. If companies that have high reviews are all that show up, this may create a 
confirmation bias and other posts may also push towards a bias.
3. Some of the biases (paid reviews) are not something you have a lot of power
over to change.

# Objective 1

1. Pull weather data:
> db.percipitation.aggregate([{ $match : {"DATE" : /20100421.*/}}, {$match : {"STATION_NAME" : "MADISON DANE CO REGIONAL AIRPORT WI US"}}, { $group: { _id: null, total: { $sum: "$HPCP" } }}])

  Rainy Days:

  (date):(precipitation):(temperature)

  2010 04 24 : 27 : 50.9
  2010 04 25 : 62 : 51.2
  2010 06 18 : 10 : 69.6
  2010 07 05 : 32 : 71.2

  Sunny Days:

  2010 04 23 : 0 : 50.6
  2010 07 19 : 2 : 72.5
  2010 07 30 : 1 : 71.8
  2010 07 11 : 1 : 72.5

2. 

Find all business reviews in Madison:
```
var x = db.business.find({city:'Madison'},{business_id: 1})
var madisonBusinesses = [];
x.forEach(function(d){madisonBusinesses.push(d['business_id'])});
db.review.find({business_id:{$in: madisonBusinesses}})
```

#####Average rainy day stars
> db.yelpReviews.aggregate([ {$match:{ business_id:{$in: madisonBusinesses}, "date":{$in: ["2010-04-24", "2010-04-25", "2010-06-18", "2010-07-05"]}} },{$group:{ "_id":null, "avgStars":{$avg:"$stars"}}}])
answer: { "_id" : null, "avgStars" : 3.810810810810811 }

#####Rainy day count
> db.yelpReviews.count({business_id:{$in: madisonBusinesses}, "date":{$in: ["2010-04-24", "2010-04-25", "2010-06-18", "2010-07-05"]}})
answer: 37

#####Average sunny day stars
> db.yelpReviews.aggregate([ {$match:{ business_id:{$in: madisonBusinesses}, "date":{$in: ["2010-04-23", "2010-07-19", "2010-07-30", "2010-07-11"]}} },{$group:{ "_id":null, "avgStars":{$avg:"$stars"}}}])
answer: { "_id" : null, "avgStars" : 4.142857142857143 }

#####Sunny day count
> db.yelpReviews.count({business_id:{$in: madisonBusinesses}, "date":{$in: ["2010-04-23", "2010-07-19", "2010-07-30", "2010-07-11"]}})
answer: 49

3. Surpisingly, there does actually seem to be a correlation between the
weather and average reviews. We can see that over the given days, the average
review for rainy days hovers around ~3.81 stars, and around ~4.14 stars on
sunny days. You can also see that on the sunnier days, the averge review count
was a bit higher.

4. Visualization:

![Visualization](img/visual.png?raw=true)


