// class Printer {
//   printPDF(data: any) {
//     // ...
//   }

//   printWebDocument(data: any) {
//     // ...
//   }

//   printPage(data: any) {
//     // ...
//   }

//   verifyData(data: any) {
//     // ...
//   }
// }


interface Printer {
  print(data: any);
}

class PrinterImplementation {
  verifyData(data: any) {}
}

class WebPrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print web document
  }
}

class PDFPrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print PDF document
  }
}

class PagePrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print real page
  }
}
