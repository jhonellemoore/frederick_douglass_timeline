const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');

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

// Endpoint to get timeline info by date
app.get('/api/timeline/:date', (req, res) => {
    const date = req.params.date; 
    const data = timelineData[date];
    console.log(data)
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: "No data found for this date." });
    }
  });

  app.get('/api/home', (req, res) => {
    const date = req.params.date; 
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

