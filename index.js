async function mymain() {


   const urlParams = new URLSearchParams(window.location.search);
   const parameterValue = await urlParams.get('status');
  

   if (parameterValue !== null) {



   }
   else {

      var obj = [
         {"Cammands": "LIN"},
         {"AccountStutas": {"Stutas": false}}
     ];
     var value = await get_and_set_value(obj);
     await elementCR(value);
     console.log(value);
     
     
   }
}

mymain();