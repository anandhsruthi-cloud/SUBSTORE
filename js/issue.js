async function addIssueRow(){

const storeId=localStorage.getItem('storeId')||1;

const items=await api({
action:'getItems',
store_id:storeId
});

const tbody=document.querySelector('#issueTable tbody');

let options='';

items.forEach(item=>{
options+=`<option value="${item.item_name}">${item.item_name} (${item.stock})</option>`;
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
<button onclick='this.parentElement.parentElement.remove()'>❌</button>
</td>
`;

tbody.appendChild(row);
}

addIssueRow();

async function saveIssue(){

const rows=document.querySelectorAll('#issueTable tbody tr');

const items=[];

rows.forEach(row=>{

items.push({
item:row.querySelector('.itemSelect').value.split(' (')[0],
qty:row.querySelector('.qty').value
});

});

const result=await api({
action:'saveIssue',
store_id:localStorage.getItem('storeId')||1,
department:document.getElementById('department').value,
items:items
});

if(result.success){
alert('Issue Saved');
location.reload();
}else{
alert(result.message);
}
}