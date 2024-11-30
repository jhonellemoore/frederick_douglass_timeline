const { Client } = require('pg');
const { Pool } = require('pg');

// Database connection configuration
const dbConfig = {
	user: 'postgres',
  password: 'DatabasePasswordForPurposes!!',
  host: 'database-2.c9m6sq8awrsq.us-east-2.rds.amazonaws.com',
  port: '5432',
  database: 'postgres',
  ssl: {
    rejectUnauthorized: false,  
  },
};

const pool = new Pool(dbConfig);
const getFredInfoForDate = async (date) => {
  const statement = `
    SELECT 
        de.headline, 
        de.description, 
        l.location_name, 
        l.latitude, 
        l.longitude
    FROM 
        douglass_events de
    JOIN 
        locations l ON de.location_id = l.location_id
    WHERE 
        de.year = $1
  `; 
  const response = await executeQuery(statement, [date]);
  return response;
};

const getEventsInfoForDate = async (date) => {
  statement = "SELECT * FROM events WHERE year = $1"; /* parameter filled in in function */
  const response = await executeQuery(statement, [date]);
  return response;
};

const getEventsLocInfoForDate = async(year) => {
  const resp = await executeQuery("SELECT e.event, e.event_type, e.date, l.location_name, l.latitude, l.longitude FROM events e JOIN locations l ON e.location_id = l.location_id WHERE e.year = $1", [year])
  return resp
}

const executeQuery = async (queryText, values=[]) => {
  // Create a new client
  const client = new Client(dbConfig);
  try {
    // Connect to the database
    const result = values.length > 0 
      ? await pool.query(queryText, values) // if > 0, send parameters
      : await pool.query(queryText); // else, don't send params
    return result.rows; 
  } catch (err) {
    console.error('Error executing the query:', err); // Log any errors
  } 
};

// for local testing purposes
// query.then(onfulfilled, onrejected)
// executeQuery('SELECT * FROM events').then((rows) => {
//   console.log('Rows returned:', rows); 
// }).catch((err) => {
//   console.error('Error fetching events:', err);
// });

getEventsLocInfoForDate(1818).then((rows) => {
  console.log(rows);
}).catch((err) => {
  console.log(err)
});

getFredInfoForDate(1818).then((rows) => {
  console.log(rows);
}).catch((err) => {
  console.log(err)
});

// getEventsInfoForDate(1818).then((rows) => {
//   console.log(rows);
// }).catch((err) => {
//   console.log(err)
// });

module.exports = {
  getFredInfoForDate, 
  getEventsInfoForDate,
  getEventsLocInfoForDate,
};