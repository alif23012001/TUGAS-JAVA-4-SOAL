function getjumlah ()
   {
    //deklarasi variable
    var hasil;
    var input1;
    var input2;
    //input
    input1 = parseInt(document .
    getElementById("txtinput1").
    value);
  
    input2 = parseInt(document .
    getElementById("txtinput2").
    value);
    //proses
    hasil = input1 + input2;
    //output
    document.getElementById("txthasil") .value = hasil;
   }