const API_URL = "https://script.google.com/macros/s/AKfycbxtmpYkKYka01H2eP5zOHhtsgE0IXeESp5OEXa77kchn-bj4Nbcz3hORCNcFrpBBBX24w/exec";

async function api(data){
  const response = await fetch(API_URL,{
    method:'POST',
    headers:{
      'Content-Type':'text/plain;charset=utf-8'
    },
    body:JSON.stringify(data)
  });

  return await response.json();
}