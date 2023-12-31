async function mymain() {

   var obj = [
      { "Cammands": "LIN" },
      { "AccountStutas": { "Stutas": false } }
   ];
   const urlParams = new URLSearchParams(window.location.search);
   const parameterValue1 = await urlParams.get('status');
   const parameterValue2 = await urlParams.get('Gmail');
   const parameterValue3 = await urlParams.get('Password');
    
   obj[0]["gmail"] = parameterValue2;
   obj[0]["password"] = parameterValue3;
   if (parameterValue1 === "Entery") {
      obj[1].AccountStutas.Stutas = true;
      var value = await get_and_set_value(obj);
      await elementCR(value);
     
   }
   else {


      var value = await get_and_set_value(obj);
      await elementCR(value);


   }
}

mymain();