/**
 * Created by Ray on 2/11/17.
 */

export namespace Tree {

  export interface Branch {
    name: string,
    value: number,
    branches: any[]
  }

  export function parseForValues(tree: Branch[]): number[] {

    let values: number[] = [];
    fillValues(tree, 1, values);
    return values;
  }

  export function parseForNameLists(tree: Branch[]): string[][] {

    let nameLists: string[][] = [];
    fillNameLists(tree, [], nameLists);
    return nameLists;
  }

  function fillValues(
    tree: Branch[],
    initialValue: number,
    values: number[]): void {

    for (let i = 0; i < tree.length; i++) {
      let value = initialValue * tree[i].value;
      values.push(value);
      //console.log('value: ' + value);
      fillValues(tree[i].branches, value, values );
    }
  }

  function fillNameLists(
    tree: Branch[],
    initialNameList: string[],
    nameLists: string[][]
  ): void {

    for (let i = 0; i < tree.length; i++) {
      let nameList = initialNameList.slice(0); //clone array
      nameList.push(tree[i].name);
      nameLists.push(nameList);
      //console.log('nameList: ' + JSON.stringify(nameList)) ;
      fillNameLists(tree[i].branches, nameList, nameLists );
    }
  }
}

export namespace NameList {

  export function label(names: string[]) : string {

    if (names.length == 0) return '';

    let prefixItem = '- ';
    let midfixItem = '& ';
//    let prefix = prefixItem.repeat(Math.max(0, names.length - 2 ));
    let prefix = '';
    for (let i=0; i < names.length - 2; i++){
      prefix += prefixItem;
    }

    let midfix = '';
    if (names.length > 1) {
      midfix = midfixItem;
    }
    return prefix + midfix + names[names.length - 1];
  }

  export function displayName(prefix: string, names: string[]) : string {

    let prefixItem = ': ';
    let midfixItem = ' & ';
    let displayName = prefix;

    if (names.length == 0) return displayName;

    displayName = displayName + prefixItem + names[0];

    for (let i=1; i < names.length; i++) {
      displayName = displayName + midfixItem + names[i];
    }
    return displayName;
  }

}

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
