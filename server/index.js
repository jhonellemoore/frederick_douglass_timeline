const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');
const { getFredInfo, getFredInfoForDate, getEventsLocInfoForDate } = require('./database/db');

// add timeline data to a dictionary for processing later
timelineData = {}
fs.createReadStream('timeline.csv')
  .pipe(csv())
  .on('data', (row) => {
    // const yearKey = `${row.Year}-${row.Month}-${row.Day}`;
    const yearKey = `${row.Year}`;
    timelineData[yearKey] = {
      displayDate: row['Year'],
      headline: row['Headline'],
      text: row['Text'],
      image: row['Media']
    };
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

// app.get('/events', async (req, res) => {
//   try {
//     const events = await getAllRecords(); 
//     console.log(events)
//     res.status(200).json(events); 
//   } catch (err) {
//     console.error('Error fetching events:', err);
//     res.status(500).send('Server Error'); 
//   }
// });

// data = object (list of dictionaries) [{id: 1, date: 2, location_id: ..., }]
app.get('/api/timeline/:date', (req, res) => {
  const date = req.params.date;
  const data = getFredInfoForDate(date).then((rows) =>{
    if (rows){
      res.json(rows);
    }
    else{
      res.status(404).json({ message: "No data found for this date." });
    }
  }).catch((err) => {
    console.log(err)
  })
});

app.get('/api/timeline/events/:date', (req, res) => {
  const date = req.params.date;
  const data = getEventsLocInfoForDate(date).then((rows) => {
    if (rows){
      res.json(rows);
    }
    else{
      res.status(404).json({ message: "No data found for this date." });
    }
  }).catch((err) => {
    console.log(err)
  })
});

  app.get('/api/home', (req, res) => {
    const data = timelineData;
    console.log(data)
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: "No data found for this date." });
    }
  });


app.listen(8080, () => {
    console.log('server listening on port 8080')
})

