#### 快速排序
     var swap = (array, index1, index2) => {
        var tmp = array[index1];
            array[index1] = array[index2];
            array[index2] = tmp;
    }

#### 数组去重
    let arr = ['1', '2', '3', '1', 'a', 'b', 'b']
    const unique = arr => {
        let obj = {}
        arr.forEach(value => {
            obj[value] = 0
        })
        return Object.keys(obj)
    }
    console.log(unique(arr))

#### 冒泡排序
    let arr = [43, 32, 1, 5, 9, 22];
    const sort = arr => {
        let res = []
        arr.forEach((v, i) => {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    [arr[i],arr[j]] = [arr[j],arr[i]]
                }
            }
        })
        return arr
    }
    console.log(sort(arr))    