var express = require('express');
var router = express.Router();
const students = ["Birbs", "Doges", "Cates", "Buges", "sneks", "zardins", "marsupials"];
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        students
    });
});

// router.get('/football', (req, res)=>{
//     const AtlTeams = [
//         "united",
//         "braves"
//     ]
//     res.render('index', {atlTeams} )
// })

module.exports = router;
