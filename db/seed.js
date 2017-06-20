'use strict'

/*
 * To Seed Your Local Database
 * Check Postico... do you have a lisas-bikes database?
 * NO: npm run dev will create the database
 * YES: npm run seed
 */

const db = require('APP/db'),
  { User, Product, Review, Order, Item, Promise } = db,
  { mapValues } = require('lodash')

function seedEverything() {
  const seeded = {
    products: products(),
  }


  return Promise.props(seeded)
}


const products = seed(Product, {
  road7: {
    name: 'Miyata Road',
    category: 'Road',
    price: 139999,
    image: `12.jpg`,
    description: `Campagnolo Chorus equipped Miyata with hand-brazed gold lugs.  A classic frame with the most modern components available.`
  },
  road6: {
    name: 'Sarthe',
    category: 'Road',
    price: 120000,
    image: `10.jpg`,
    description: `The Lemond “Sarthe” is a competitive steel road bike complete with Shimano Ultegra, Bontrager cranks, Bontrager Race wheels, FIZIK Arione saddle, Bontrager Race Lite X stem, carbon fork, Cane Creek headset, Speedplay pedals. `
  },
  road4: {
    name: 'R33',
    category: 'Road',
    price: 249999,
    image: `8.jpg`,
    description: `The Waterford “R33” bike is a custom steel road bike with SRAM Red with Mavic Ksyrium ES wheels, Ritchey stem, handlebar, and seatpost, FIZIK Arione saddle, Chris King headset, and Speedplay pedals.`
  },
  road1: {
    name: 'Sphera',
    category: 'Road',
    price: 169999,
    image: `5.jpg`,
    description: `The Casati “Sphera” is a competitive road bike purchased from Mill Valley Cycle Works.`
  },
  road2: {
    name: '5900',
    category: 'Road',
    price: 135999,
    image: `6.jpg`,
    description: `The "Trek 5900" is a competitive carbon road racing bike `
  },
  road3: {
    name: 'Challenger',
    category: 'Road',
    price: 230000,
    image: `7.jpg`,
    description: `The Ciocc “Challenger” is a sleek competitive road bike with Shimano Dura Ace, Syntace Aero bars, 3T stem, Mavic Open Pro rims on Dura Ace hubs, and Terry saddle. `
  },

  road5: {
    name: 'Sirius',
    category: 'Road',
    price: 230000,
    image: `9.jpg`,
    description: `The Somec "Sirius" is a triathlon road bike from the early 2000s. Its unique design is aimed to minimize drag whilst improving aerodynamics.`
  },


  road8: {
    name: 'Allez S-Works',
    category: 'Road',
    price: 125000,
    image: `13.jpg`,
    description: `The Specialized “Allez S-Works Festina” is a competitive road bike equipped with Campagnolo Record, Mavic Ksyrium wheels, 3T handlebars, 3T Zepp stem, and LOOK pedals.`
  },
  road9: {
    name: 'Blade',
    category: 'Road',
    price: 159999,
    image: `15.jpg`,
    description: `The Litespeed “Blade” is a competitive titanium road racing bike equipped with Campagnolo Record, Campagnolo Shamal wheels, Reynolds carbon fork, LOOK pedals, Deda bar and stem,  and Selle Italia "Trans Am" saddle.`
  },
  Mountain4: {
    name: `Downhill X-Treme`,
    category: 'Mountain',
    price: 55000,
    image: `29.jpg`,
    description: `Guaranteed to make your face melt!  The Downhill X-Treme is X to the Treme!!! May not work to well though...`
  },
  mountain1: {
    name: 'Proflex 5500',
    category: 'Mountain',
    price: 75000,
    image: '2.jpg',
    description: `The K2 “ProFlex 5500” is a carbon fiber, full suspension mountain bike with variable electronic suspension damping.`
  },
  mountain2: {
    name: 'VPP',
    category: 'Mountain',
    price: 125000,
    image: `3.jpg`,
    description: `The Outland “VPP” is a rare, full suspension mountain bike. The groundbreaking VPP suspension design makes it a genuine piece of mountain biking history.`
  },
  mountain3: {
    name: 'Element T.O.',
    category: 'Mountain',
    price: 140000,
    image: `4.jpg`,
    description: `The Rocky Mountain “Element T.O.” is a full suspension cross country mountain bike, finished with legendary bike shop “Sausalito Cyclery” Canadian emblems.`
  },
  mountain5: {
    name: 'X-Country Elite',
    category: 'Mountain',
    price: 99999,
    image: `28.jpg`,
    description: `A cross country bike ready for anything you want to throw it's way.  Professional spec and an excellent frame will make this your dream bike for all sorts of single track.`
  },
  town2: {
    name: 'Country Road Bob',
    category: 'Town',
    price: 89999,
    image: `11.jpg`,
    description: `The Van Dessel “Country Road Bob” is a single speed cyclocross bike with a fun green finish and yellow grip.`
  },
  town3: {
    name: 'Java Town',
    category: 'Town',
    price: 89999,
    image: `14.jpg`,
    description: `The Sycip “Java Town” is a custom, single speed cafe-racer style city bike equipped with MICHE Primato crankset, 3T bars, Brooks leather B72 saddle, Sun Ringle CR18 wheels, Wellgo flat pedals, Dynamic 13 stem, XTR brake calipers, and Dia-Compe brake levers. `
  },
  town5: {
    name: `Guv'nor`,
    category: 'Town',
    price: 110000,
    image: `25.jpg`,
    description: `Pashley’s elegant “Guv’nor” is a cafe racer, vintage style city bike.  The bike is equipped Sturmey Archer hubs (with drum brake), Brooks Champion Special B17 leather saddle with titanium rails, Brooks leather grips, MKS pedals with Power Grip straps. `
  },
  town4: {
    name: 'Chopper Hog Roadster',
    category: 'Town',
    price: 100000,
    image: `22.jpg`,
    description: `Schwinn “Chopper Hog Roadster” is a single speed chopper with 20 inch wheels.`
  },
  town1: {
    name: 'Classic Tourer',
    category: 'Town',
    price: 39999,
    image: '1.jpg',
    description: `This is an elegant vintage Dutch style bike with an integrated bike stand and Brooks leather saddle.`
  },
})


if (module === require.main) {
  db.didSync
    .then(() => db.sync({ force: true }))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others = {}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
          // Is other a function? If so, call it. Otherwise, leave it alone.
          typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
        .map(key => {
          const row = rows[key]
          return {
            key,
            value: Promise.props(row)
              .then(row => Model.create(row)
                .catch(error => {
                  throw new BadRow(key, row, error)
                })
              )
          }
        }).reduce(
          (all, one) => Object.assign({}, all, {
            [one.key]: one.value
          }), {}
        )
      ))
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, { products })
