# Yelp / Weather Hackathon

# Discussion Questions

## Data

[Put your answers to the questions here]

1.
There could be less data in the Yelp dataset because people probably are more likely to stay inside if it's rainy.  Additionally, people could have more negative views of restaurants because a rainy day may influence someone's opinion to be worse of a restaurant.
2.
No, weather is a natural event and doesn't care who is reviewing what.
3.
We can correlate certain weather to purchases or reviews of certain products. i.e. people may enjoy coffee more when it rains and thus the company should advertise more then.  We could connect length of review and rating - people may be more patient when giving positive reviews or something.

## Method

[Put your answers to the questions here]

1.
Avg weather vs. number of a certain type of restaurant.
Types of votes vs. weather
2.
We could connect length of review and rating - people may be more patient when giving positive reviews or something.

We could NLP on the reviews to determine nearly infinite amount of information about how people review things in different conditions.


## Bias

[Put your answers to the questions here]

1.
People with negative thoughts are more likely to review or the other way around. Certain cities have more datapoints than others.  Number of reviews changes with the date and weather.
2.
This would ignore poorly reviewed restaurants and bias the data towards more positive, making all data seem at worst mediocre. You lose some span of possibilities which makes the data less variant.
3.
In number 2, we could scale the data to have a minimum at 3 and ignore all that don't have a star count already.

# Objective 1
[Put your answers here]

1.
5 rainy days 
 * "20100608 09:00" - 06/08/2010 - 3.375
 * "20100723 08:00" - 07/23/2010 - 3.78947368421
 * "20101211 19:00" - 12/11/2010 - 3.66666666667
 * "20100121 13:00" - 01/21/2010 - 4.11111111111
 * "20100119 21:00" - 01/19/2010 - 4.25

5 sunny days
 * "20100905 02:00" - 09/05/2010 - 4.125 total : 33
 * "20100906 02:00" - 09/06/2010 - 4.28571428571 total: 30
 * "20100904 01:00" - 09/04/2010 - 3.28571428571 total: 23
 * "20100902 00:00" - 09/02/2010 - 3.46153846154 total: 45
 * "20100901 00:00" - 09/01/2010 - 3.53846153846 total: 30
2.
3.
4.
{
        "_id" : ObjectId("54691e599da379ba100874e4"),
        "DATE" : "20100711 15:00",
        "HLY-TEMP-NORMAL" : 808
}
{
        "_id" : ObjectId("54691e599da379ba10086fb6"),
        "DATE" : "20100517 09:00",
        "HLY-TEMP-NORMAL" : 600
}
{
        "_id" : ObjectId("54691e599da379ba10086c7f"),
        "DATE" : "20100413 02:00",
        "HLY-TEMP-NORMAL" : 400
}
{
        "_id" : ObjectId("54691e599da379ba100865b0"),
        "DATE" : "20100130 10:00",
        "HLY-TEMP-NORMAL" : 200
}
{
5.

# Objective 2

1. A graph with star values on the y-axis and the 5 five rainy and 5 sunny days on the x -axis
2. A graph with raininess on the y-axis and day of the week on the x-axis. This would not be useful because we are entirely leaving out the star values. Another useless graph would be a timeline graph. It does not include a metric for star values.

# Objective 3

[Tell your story!  Link your graphics!]

# Objective 4

[Do it again!]


