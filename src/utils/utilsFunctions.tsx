import React from 'react';

// 去除陣列重複值
export function removeDuplicates<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

// 把陣列轉成 key: value 用於下拉選單
export const formatArrOpt = (e: any) =>
  e?.map((item: any) => ({label: item, value: item, key: item}));

// 表格若為空就顯示 "--"
export const renderIfNull = (e: any) => {
  // 判斷如果是陣列, 且不為空陣列, 就用逗號分隔成字串回傳
  if (Array.isArray(e) && e?.length > 0) {
    return e.join(', ');
  } else if (Array.isArray(e) && e?.length === 0) {
    return '--';
  }
  return <>{!e || e === null ? '--' : e}</>;
};

// 計算一個值在陣列出現的次數
export const countInArray = (array: any, what: any) => {
  return array.filter((item: any) => item === what).length;
};

// 計算一個值在陣列的哪個位置第一次出現
export const findIndexInArray = (array: any, what: any) => {
  return array.findIndex((item: any) => item === what);
};

// 去除陣列內所有的 null undefined 以及空字串""
export const removeNull = (array: any) => {
  return array.filter(
    (item: any) => item !== null && item !== undefined && item !== '',
  );
};

// 傳入一個數字n，建立從 1 - n 的 array, 格式為 [{label: 1, value: 1}, {label: 2, value: 2}, ...]
export const createArr = (n: number) => {
  let arr: any = [];
  for (let i = 0; i <= n; i++) {
    arr?.push({label: i, value: i});
  }
  return arr;
};

// 輸入轉大寫
export const handleNormalizeToUpperCase = (value: string) => {
  return value.toUpperCase();
};

// 把一個 object 內所有的 undefined 轉成 null
export const undefinedToNull = (obj: any) => {
  for (let key in obj) {
    if (obj[key] === undefined) {
      obj[key] = null;
    }
  }
  return obj;
};

// 從陣列 A 中刪除 陣列 B 的值, 返回刪除後的陣列 A
export const removeArr = (arrA: any, arrB: any) => {
  return arrA.filter((item: any) => !arrB.includes(item));
};

// 把陣列變成指定倍數的長度，不足的部分用 undefined 補齊
export const adjustArrayLength = (arr: any, number: number) => {
  const length = arr?.length;
  const remainder = length % number;
  if (remainder === 0) {
    return arr;
  }
  const fillCount = 3 - remainder;
  const adjustedArray = Array.from({length: length + fillCount}, (_, index) =>
    index < length ? arr[index] : undefined,
  );
  return adjustedArray;
};

// // 日期格式顯示
// export const dateFormatter = (e: any) => {
//   return e ? ellipsis(moment(e).format('YYYY/MM/DD HH:mm')) : '--';
// };

// // 省略顯示 hover 顯示完整
// export const ellipsis = (e: any) => {
//   if (e) {
//     return <Text ellipsis={{tooltip: {placement: 'bottom'}}}>{e}</Text>;
//   } else {
//     return '--';
//   }
// };

//  輸入一個陣列, 跟一個字串, 把陣列的所有元素用輸入的字串連接成一個新的字串
export const joinArr = (arr: any, str: string) => {
  return arr.join(str);
};
