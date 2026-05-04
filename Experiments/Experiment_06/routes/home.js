const express = require('express');
const router = express.Router();



router.get('/', (req, res)=>{
    res.send('<h1>WElcome to the home page.</h1>');
})

router.get('/about', (req, res)=>{
    res.send('<h1>About Page</h1><p>This is the about page of this website.</p>');
})

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

module.exports = router;