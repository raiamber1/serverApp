printPdf = function (documentId) {
    var doc = document.getElementById(documentId);

    //Wait until PDF is ready to print    
    if (typeof doc.print === 'undefined') {    
       alert("not printing");
        window.open(pdfUrl,"_downloadwin");
       // setTimeout(function(){printPdf(documentId);}, 4000);
    } else {
        doc.print();
        alert("printing");
    }
}

printpdf2 = function(pdfUrl)
    {

    {
    var w = window.open(pdfUrl);
    //w.print();
    //w.close();
    }
    }