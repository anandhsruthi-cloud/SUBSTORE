async function addRow(){

const storeId=localStorage.getItem('storeId')||1;

const items=await api({
action:'getItems',
store_id:storeId
});

const tbody=document.querySelector('#entryTable tbody');

let options='';

items.forEach(item=>{
options+=`<option value="${item.item_name}">${item.item_name}</option>`;
});

const row=document.createElement('tr');

row.innerHTML=`
<td>
<select class='itemSelect'>
${options}
</select>
</td>

<td>
<input type='number' class='qty'>
</td>

<td>
<input type='number' class='rate'>
</td>

<td>
<button onclick='this.parentElement.parentElement.remove()'>❌</button>
</td>
`;

tbody.appendChild(row);
}

addRow();

async function saveEntries(){

const rows=document.querySelectorAll('#entryTable tbody tr');

const items=[];

rows.forEach(row=>{

items.push({
item:row.querySelector('.itemSelect').value,
qty:row.querySelector('.qty').value,
rate:row.querySelector('.rate').value
});

});

const result=await api({
action:'saveEntry',
store_id:localStorage.getItem('storeId')||1,
bill_no:document.getElementById('billNo').value,
items:items
});

if(result.success){
alert('Entries Saved');
location.reload();
}
}