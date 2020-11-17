interface Database {
  storeData(data: any);
}

interface RemoteDatabase {
  connect(uri: string);
}

class SQLDatabase implements Database, RemoteDatabase {
  connect(uri: string) {
    console.log('Connecting to SQL database!');
  }

  storeData(data: any) {
    console.log('Storing data...');
  }
}

class InMemoryDatabase implements Database {
  storeData(data: any) {
    console.log('Storing data...');
  }
}

class App {
  private database: Database;

  constructor(database: Database) {
    this.database = database; 
  }

  saveSettings() {
    this.database.storeData('Some data');
  }
}


const sqlDatabase = new SQLDatabase();
sqlDatabase.connect('my-url');
const app = new App(sqlDatabase);