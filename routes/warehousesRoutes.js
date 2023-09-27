const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('',(req, res)=>{
    const data = JSON.parse(fs.readFileSync(`./data/videos.json`))
  
    return res.status(200).json(data)
  })


router.get('/:id', (req, res) => {
const warehousid = req.params.id
const data = JSON.parse(fs.readFileSync(`./data/videos.json`))

// const filteredData = data.find(video => video.id === videoid)

// if (!filteredData) {
//     return res.status(404).json(`video ${videoid} not found :(`)
// }

return res.status(200).json(filteredData)
})

module.exports = router