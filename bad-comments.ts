// (c) Maximilian Schwarzmüller / Academind GmbH
// Created in 2020

// ***************
// GLOBALS
// ***************
let sqlDriver: any;
let mongoDbDriver: any;

// ***************
// CLASSES
// ***************
// Acts as an adapter, connecting models to various database engines (SQL, MongoDB)
class Database {
  private dbDriver: any; // the database engine to which we connect

  loadDatabaseDriver(driver: string) {
    if (driver === 'sql') {
      // Connect to the SQL Driver if "driver" is set to SQL
      this.dbDriver = sqlDriver;
    } else {
      // Otherwise, connect to MongoDB
      this.dbDriver = mongoDbDriver;
    }
  }

  connect() {
    this.dbDriver.connect(); // This may fail and throw an error
  }

  insertData(data: any) {
    this.dbDriver.insert(data); // updates a user
  }

  findOne(id: string) {
    // Todo: Needs to be implemented
  }

  // findMany(filter: any) {
  //   this.dbDriver.find(filter);
  // }
}