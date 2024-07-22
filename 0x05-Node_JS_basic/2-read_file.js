const fs = require('node:fs');
const parse = require('csv-parse/sync');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = parse.parse(data, {
      columns: true, // first row as header
      skip_empty_lines: true
    });
    const number_of_students = lines.length
    
    const fieldCounts = {};

    lines.forEach(line => {
      const field = line.field;
      const firstName = line.firstname
      if (field) {
        if (!fieldCounts[field]) {
          fieldCounts[field] = {count: 0, names: []};
        }
        
        fieldCounts[field].count++;
        if (firstName) {
          fieldCounts[field].names.push(firstName);
        }
      }
    });
    // console.log(fieldCounts)
    console.log(`Number of students: ${number_of_students}`)
    for (const [field, data] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`)
    }
  } catch (err) {
    console.log(err)
    throw new Error('Cannot load the database');
  }
  
};
module.exports = countStudents;