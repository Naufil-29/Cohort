const express = require('express');
const app = express();

var users = [{ 
    name: "John",
    kidneys: [
        { no: 1, healthy: false },    ]
}];

app.use(express.json());

app.get("/", function(req, res) { 
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;

    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) { 
        if (johnKidneys[i].healthy) { 
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({ 
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys,
    });
});

app.post("/", function(req, res){ 
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({ 
        healthy: isHealthy
    });

    res.json({ 
        msg:"done"
    });
});

app.put("/", function(req, res){ 
    for(let i = 0; i < users.length; i++){ 
        users[0].kidneys[i].healthy = true;
    };
    res.json({})
});

app.delete("/", function(req, res) {
        if(isThereAtleastOnebadKidney()){ 

        
        const newKidneys = [];
        for (let i = 0; i<users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})   
    }
    else( 
        res.status(411).json({msg:"no bad kidney found"})
    )
    });

    function isThereAtleastOnebadKidney(){ 
        let atleastOneBadKidney = false;
        for(let i = 0; i<users[0].kidneys.length; i++){ 
            if(!users[0].kidneys[i].healthy){ 
                atleastOneBadKidney = true;
            };
        };
        return atleastOneBadKidney;
    }

app.listen(3000, '0.0.0.0', () => {
    console.log("Server running on port 3000");
});

