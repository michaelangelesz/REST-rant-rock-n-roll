const router = require('express').Router()

// add routes here
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/kristina-truniak-cDKRNUG4uec-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/dragne-marius-EdzsUFqHbaY-unsplash.jpg'
      }]
      
    res.render('places/index', { places })
})

module.exports = router

// sushi pic -- Photo by <a href="https://unsplash.com/@kristinatruniak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kristina Truniak</a> on <a href="https://unsplash.com/photos/cDKRNUG4uec?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

// beans n rice pic -- Photo by <a href="https://unsplash.com/@marius_dragne?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dragne Marius</a> on <a href="https://unsplash.com/photos/EdzsUFqHbaY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  