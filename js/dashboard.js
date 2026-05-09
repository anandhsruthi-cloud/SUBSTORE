window.onload=function(){
loadDashboardInventory();
};

async function loadDashboardInventory(){

const storeId=localStorage.getItem('storeId')||1;

const items=await api({
action:'getItems',
store_id:storeId
});

const table=document.getElementById('dashboardInventory');

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