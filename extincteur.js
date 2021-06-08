$(document).ready(function(){
    var myTable = document.querySelector('.exproduitLists'),
        exproduitList;

    function getall(){
        myTable.innerHTML="";
        $.ajax({
            url:"api/getExproduit.php",
            method:"GET",
            success:function(data){
                myTable.innerHTML=`<tr>
                <th>ID</th>
                <th>titre</th>
                <th>type</th>
                <th>prix</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>`
                console.log(data);
                exproduitList = JSON.parse(data);
                console.log(data);
                
                for(var i=0; i < exproduitList.length; i++){
                    myTable.innerHTML+=`<tr>
                    <td>${exproduitList[i]["id"]}</td>
                    <td>${exproduitList[i]["titre"]}</td>
                    <td>${exproduitList[i]["type"]}</td>
                    <td>${exproduitList[i]["prix"]}</td>
                    <td><span>Edit</span></td>
                    <td><span>Delete</span></td>
                    </tr>`
                }
            }
        })

    }
    getall()
})