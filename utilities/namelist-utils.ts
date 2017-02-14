/**
 * Created by Ray on 2/14/2017.
 */


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

