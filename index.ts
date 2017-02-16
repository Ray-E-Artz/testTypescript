/**
 * Created by Ray on 2/11/17.
 */

import { Tree } from './utilities/tree-utils'
import { NameList } from './utilities/namelist-utils'

/* remaining code for testing */

let aTree =
 [
   {
     'name': 'absent',
     'value': 0.5,
     'branches': []
   },
   { name: 'present',
     value: 0.5,
     branches: [
       {
         name: 'productive',
         value: .75,
         branches: [
           {
             name: 'normal sputum',
             value: .75,
             branches: []
           },
           {
             name: 'abnormal sputum',
             value: .25,
             branches: []
           }
         ]
       },
       {
         name: 'unproductive',
         value: .25,
         branches: []
       }
     ]
   }
 ] as Tree.Branch[];


console.log(JSON.stringify(aTree, null, 2));
console.log('');




let values = Tree.parseForValues(aTree);

let nameLists = Tree.parseForNameLists(aTree);
for  (let i=0; i < nameLists.length; i++){
  console.log(nameLists[i]);
}
console.log('');
for  (let i=0; i < values.length; i++){
  console.log(values[i]);
}

console.log('');
for (let i = 0; i< nameLists.length; i++) {
  console.log(NameList.label(nameLists[i]));
}
console.log('');
for (let i = 0; i< nameLists.length; i++) {
  console.log(NameList.displayName('cough', nameLists[i]));
}

let aBranch : Tree.Branch =
 {name:'', value: 1, branches: [], tbd:''} as Tree.Branch;
console.log(aBranch);

