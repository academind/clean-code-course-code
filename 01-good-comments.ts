// (c) Maximilian Schwarzmüller / Academind GmbH
// Created in 2020

let sqlDriver: any;
let mongoDbDriver: any;

class DatabaseAdapter {
  private dbEngine: any;

  loadDatabaseDriver(engine: string) {
    if (engine === 'sql') {
      this.dbEngine = sqlDriver;
    } else {
      this.dbEngine = mongoDbDriver;
    }
  }

  connect() {
    this.dbEngine.tryConnect();
  }

  insertData(data: any) {
    this.dbEngine.insert(data);
  }

  findOne(id: string) {
    // Todo: Needs to be implemented
  }
}