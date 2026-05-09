function selectStore(storeId){

const pin=prompt('Enter Store PIN');

if(
(storeId==1&&pin=='1234')||
(storeId==2&&pin=='5678')
){
localStorage.setItem('storeId',storeId);
alert('Store Selected');
location.reload();
}else{
alert('Invalid PIN');
}
}