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
                    myTable.innerHTML+=`<tr idoftr='${exproduitList[i]["id"]}'>
                    <td>${exproduitList[i]["id"]}</td>
                    <td>${exproduitList[i]["titre"]}</td>
                    <td>${exproduitList[i]["type"]}</td>
                    <td>${exproduitList[i]["prix"]}</td>
                    <td><span>Edit</span></td>
                    <td><span class="delete">Delete</span></td>
                    </tr>`
                }
                delet()
            }
        })
        
    }
    getall()
    

    document.querySelector('.submit-exproduit').onclick=()=>{
        let name,
            type,
            prix;
            name = document.querySelector('.exproduitName').value;
            type = document.querySelector('.exproduitType').value;
            prix = document.querySelector('.exproduitPrix').value;

            $.ajax({
                url:'api/addExproduit.php',
                type:'POST',
                data:{
                    titre:name,
                    type:type,
                    prix:prix
                },
                datatype:JSON,
                success:(data)=>{
                    document.querySelector('.exproduitName').value="";
                    document.querySelector('.exproduitType').value="";
                    document.querySelector('.exproduitPrix').value="";
                    getall()
                }
            })
    }


    function delet(){
        document.querySelectorAll('.delete').forEach(element => {
            console.log(element);
            element.addEventListener('click',(e)=>{
                console.log(element);
                let deletedE = e.target;
                deletedE = deletedE.closest('tr');
                let deletedEID = deletedE.getAttribute('idoftr');
                
                $.ajax({
                    url:"api/delete.php",
                    type:"post",
                    data:{
                        id:deletedEID
                    },
                    datatype : JSON,
                    success: (data)=>{
                        getall()
                    }
                })
            })
        })
    }
})