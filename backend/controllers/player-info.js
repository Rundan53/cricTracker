const Player = require('../models/player')

exports.postPlayer = (req, res) => {
    const playerToAdd = req.body;
    console.log(playerToAdd);
    const playerName = req.body.name;
    console.log(playerName);

    Player.findAll({where: {name: playerName}})
    .then((players)=> {
        const player = players[0];
        if(player) {
           return Player.update(playerToAdd, {where: {name: playerName}})
        }
        else {
            return Player.create(playerToAdd);
        }
    })
    .then((result)=> {
        let player;
        if(Array.isArray(result)) {
            player =  result[1];
            return res.json(player);
        }

        player = result;
        res.json(result);
    })
    .catch(err=> console.log(err));
   
}


exports.getPlayer = (req, res) => {
    const playerName = req.params.playerName;
    Player.findAll({ where: { name: playerName } })
        .then(players => {
            console.log(players)
            res.json(players[0])
        })
        .catch(err => console.log(err.message));
}



