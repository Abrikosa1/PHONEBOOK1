class AbonentService
{
    getAllAbonent()
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/PhoneBook/GetAllAbonent',false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var abonentList= JSON.parse(request.responseText );
             return abonentList;
         }
         return null;
    }
    
    getAbonentById(id)
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/PhoneBook/GetAbonentById?id=' + id, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var abonent= JSON.parse(request.responseText );
             return abonent;
         }
         return null;
    }
    
    deleteAbonentById(id)
    {
        var request = new XMLHttpRequest();
        request.open('GET', '/PhoneBook/DeleteAbonentById?id=' + id, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var abonent= JSON.parse(request.responseText );
             return abonent;
         }
         return null;
    }
    insertAbonent(json)
    {
        var request = new XMLHttpRequest();
        request.open('GET', '/PhoneBook/InsertAbonent?json='+json, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             json= JSON.parse(request.responseText );
             return json;
         }
         return null;
    }
    updateAbonent(json)
    {
        var request = new XMLHttpRequest();
        request.open('GET', '/PhoneBook/UpdateAbonent?json='+json, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             json= JSON.parse(request.responseText );
             return json;
         }
         return null;
    }
    getAbonentByFullname(name)
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/PhoneBook/GetAbonentByFullname?name=' + name, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var abonentList= JSON.parse(request.responseText );
             return abonentList;
         }
         return null;
    }
}