

    {
        "_id" : "5327010328645530500",
        "members" : [
            {
                "participationCoeff" : 1,
                "tweetID" : "5327010328645530500"
            },
            {
                "participationCoeff" : 1,
                "tweetID" : "2820402625046999289"
            }
        ]
    }
   
```javascript
db.clusters.update(
	{}, 
    {$pull: {members: {tweetID: '5327010328645530500'}}}, 
    {multi: true}
    )
```
