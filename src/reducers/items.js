const LS=window.localStorage;
const ROLE = "admin";

function addItem(item){
  let goods = JSON.parse(LS.goods);
  goods.push(item);
  LS.max = item.id;
  LS.goods = JSON.stringify(goods);
  return calculateStatistic(goods);
}

function calculateStatistic(array){
  let count = array.length;
  let totalCost = array.reduce((total,elem) => total+Number(elem.price),0);
  let avg =(count !== 0)?(totalCost/count).toFixed(2):0;
  return [count,totalCost,avg];
}

function deleteItem(id){
  if(id!==undefined){
    let goods = JSON.parse(LS.goods);
    goods = goods.filter(elem => elem.id!==id);
    LS.max = LS.max>id?LS.max:(id-1);
    LS.goods=JSON.stringify(goods);
    return calculateStatistic(goods);
  }else {
    LS.max = 0;
    LS.goods='[]';
    return [0,0,0];
  }
}

function initState(){
  if(LS.goods === undefined||LS.goods.length<3){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/items/items.json', false);
    xhr.send();
    if (xhr.status != 200) {
      console.log( xhr.status + ': ' + xhr.statusText ); 
    } else {
      LS.goods = xhr.responseText;
    }
  }
  let goods = JSON.parse(LS.goods);
  LS.max = Math.max(...goods.map(elem =>elem.id));
  let state = {
    statistic:calculateStatistic(goods),
    role:ROLE
  };
  return state;
}

export default function itemsList(state = initState(), action){
    if(action.type === 'ADD_ITEM'){
      let newState={};
      newState.statistic=addItem(action.payload);
      newState.role=state.role;
      return newState;
    }else if (action.type === 'DELETE_ITEM') {
      let newState={};
      newState.statistic=deleteItem(action.payload);
      newState.role=state.role;
      return newState;
     }
    return state;
}