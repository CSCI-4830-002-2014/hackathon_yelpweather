# Yelp / Weather Hackathon

# Discussion Questions

## Data

[Put your answers to the questions here]

1.
2.
3.

## Method

[Put your answers to the questions here]

1.
2.

## Bias

[Put your answers to the questions here]

1.
2.
3.

# Objective 1
Location Madison, WI
1. 	5 Rainy days - 07-22-2010,06-23-2010,07-15-2010,08-13-2010,06-27-2010 	5 Sunny Days - 07-04-2010,07-05-2010,07-06-2010,07-19-2010,07-24-2010

rainy precip sum
> db.precip.aggregate([{"$match":{"DATE":{$regex:/20100722/}}},{"$group":{"_id":"$STATION","total_precip":{"$sum":"$HPCP"}}}])
{ "_id" : "COOP:474961", "total_precip" : 361 }
> db.precip.aggregate([{"$match":{"DATE":{$regex:/20100623/}}},{"$group":{"_id":"$STATION","total_precip":{"$sum":"$HPCP"}}}])
{ "_id" : "COOP:474961", "total_precip" : 187 }
> db.precip.aggregate([{"$match":{"DATE":{$regex:/20100715/}}},{"$group":{"_id":"$STATION","total_precip":{"$sum":"$HPCP"}}}])
{ "_id" : "COOP:474961", "total_precip" : 186 }
> db.precip.aggregate([{"$match":{"DATE":{$regex:/20100813/}}},{"$group":{"_id":"$STATION","total_precip":{"$sum":"$HPCP"}}}])
{ "_id" : "COOP:474961", "total_precip" : 147 }
> db.precip.aggregate([{"$match":{"DATE":{$regex:/20100627/}}},{"$group":{"_id":"$STATION","total_precip":{"$sum":"$HPCP"}}}])
{ "_id" : "COOP:474961", "total_precip" : 100 }

Sunny precip sum
> db.precip.aggregate([{"$match":{"DATE":{$regex:/20100704/}}},{"$group":{"_id":"$STATION","total_precip":{"$sum":"$HPCP"}}}])
{ "_id" : "COOP:474961", "total_precip" : 0 }
> db.precip.aggregate([{"$match":{"DATE":{$regex:/20100705/}}},{"$group":{"_id":"$STATION","total_precip":{"$sum":"$HPCP"}}}])
{ "_id" : "COOP:474961", "total_precip" : 32 }
> db.precip.aggregate([{"$match":{"DATE":{$regex:/20100706/}}},{"$group":{"_id":"$STATION","total_precip":{"$sum":"$HPCP"}}}])
{ "_id" : "COOP:474961", "total_precip" : 0 }
> db.precip.aggregate([{"$match":{"DATE":{$regex:/20100719/}}},{"$group":{"_id":"$STATION","total_precip":{"$sum":"$HPCP"}}}])
{ "_id" : "COOP:026481", "total_precip" : 0 }
{ "_id" : "COOP:474961", "total_precip" : 2 }
> db.precip.aggregate([{"$match":{"DATE":{$regex:/20100724/}}},{"$group":{"_id":"$STATION","total_precip":{"$sum":"$HPCP"}}}])
{ "_id" : "COOP:474961", "total_precip" : 80 }

2.  
3.
4.
5.

# Objective 2
[Put your answers here]

1.
2.


# Objective 3

[Tell your story!  Link your graphics!]
![screenshot](stars.png)
![screenshot](precip.png)

# Objective 4

[Do it again!]


