window.onload=function(){
loadItems();
};

async function saveItem(){

const itemName=document.getElementById('itemName').value.trim();
const itemUnit=document.getElementById('itemUnit').value.trim();
const storeId=localStorage.getItem('storeId')||1;

if(!itemName||!itemUnit){
alert('Fill all fields');
return;
}

const result=await api({
action:'saveItem',
store_id:storeId,
item_name:itemName,
unit:itemUnit
});

if(result.success){
alert('Item saved');
document.getElementById('itemName').value='';
document.getElementById('itemUnit').value='';
loadItems();
}else{
alert(result.message);
}
}

async function loadItems(){

const storeId=localStorage.getItem('storeId')||1;

const items=await api({
action:'getItems',
store_id:storeId
});

const table=document.getElementById('itemTable');

table.innerHTML='';

items.forEach(item=>{

table.innerHTML+=`
<tr>
<td>${item.item_name}</td>
<td>${item.unit}</td>
<td>${item.stock}</td>
</tr>
`;

});
}