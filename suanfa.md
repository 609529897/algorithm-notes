# 算法数据结构

## 数量级，输入，输出，

**数量级：**

- k
- m
- g
- 具体的数字用来记录客观世界
- 模糊的数字用来理解客观世界

**输入和输出：**

- 算法是输入到输出的映射

---

## 计算机能力的变革

- `1946` 世界上第 1 台计算机 ENIAC 每秒可以执行 5000 次加法或者 400 次乘法

- `1978` 8086 芯片主频 4.77 - 10 MHZ，拥有了浮点计算，三角函数等数学指令。每秒可以处理 [百万] 级指令。
- `2018` 骄龙 845 芯片拥有 8 核心，2.8 GHZ 的主频；同时集成了 GPU。

- 量子计算机，微观领域从一个位置到另一个位置的时差为 0 。

---

## CPU，寄存器和内存

- 短期记忆（很少事情）--- 寄存器（Register）
  + 8086 有 8 个
  + i7 有 24 个
  
- 推理计算 --- 算数逻辑单元（ALU）
  + 从寄存器取值进行计算
  + 一般来讲它同时只会从两个寄存器取值，计算后把结果放回另一个寄存器

- 长期记忆（很多事情） --- 随机存储器（RAM）
  + 内存
  + 前面的序数称为内存地址
  + 每个内存地址对应 8 位（ 1 个字节） 
  + 专门用来存数据的地址称为 ==数据空间==
  + 专门用来存指令的地址称为 ==指令空间==
  + CPU 指令集，写成字符串只是便于理解，实际是 2 进制
  
  | 计算（ALU-寄存器） | RAM-寄存器 | 控制程序流程 |
  | ------------------ | ---------- | ------------ |
  | ADD                | LOAD       | BRANCH       |
  | SUB                | STORE      | BREQ         |
  | MUL                | MOV        | BRNE         |
  | AND                |            | BRIO         |
  | OR                 |            |              |
  | SIN                |            |              |
  | ...                |            |              |

![Snipaste_2019-09-22_12-31-03](C:\Users\15661\Desktop\数据结构与算法\求老仙奶我到不了p10\Snipaste_2019-09-22_12-31-03.png)

​                                                                                     RAM 内存

- 其他：缓存等

- 晶振不停震动位 CPU 提供动力

---

## 二分查找

- 时间复杂度 `	O(log(2)N)`

> N 为输入的数量

- ==循环不变式：== 循环之前关键变量是那个，满足什么样的条件。循环之后关键变量是那个，满足什么样的条件

```javascript
function bsearch(A, x) {
    let left = 0;
    let right = A.length - 1;
    let guess;
    while (left <= right) {
        guess = Math.floor((left + right) / 2);
        if (A[guess] === x) {
            return guess;
        } else if (A[guess] > x) {
            right = guess - 1;
        } else {
            left = guess + 1;
        };
    };
    return -1;
};

console.log(bsearch([1, 4, 7, 8, 8, 7], 7))
```

---

## 插入排序

> 数组的 find，findIndex 方法传入的是函数
>
> splice(开始位置, 删除的项数, 插入的项1,插入的项2)：在指定位置插入并且后面的项往后退

```javascript
function insert(A, x) {
    // p 指向下一个需要比较的元素
    // p + 1 指向空位
    let p = A.length - 1;
    while (p >= 0 && A[p] > x) {
        A[p + 1] = A[p];
        p ++;
    };
    A[p + 1] = x;
};

// 如果数组有值必须是有序的
const A = []
const x = 8
const y = 9;
const z = 3;
insert(A, x)
insert(A, y)
insert(A, z)
console.log(A) 
```

+ 完整的插入排序代码

```javascript
function insert(A, i, x) {
    let p = i - 1
    while (p >= 0 && A[p] > x) {
        A[p + 1] = A[p]
        p--
    }
    A[p + 1] = x
}

function insertion_sort(A) {
    for (let i = 1; i < A.length; i++) {
        insert(A, i, A[i])
    }
}

const A = [5, 7, 9, 7, 3]
insertion_sort(A)
console.log(A)
```

> 时间复杂度：最好情况 O(N) ，最坏情况 O(N^2) 

---

## 冒泡排序 bubble sort

```javascript
function swap(A, i, j) {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
};

function bubble_sort(A) {
    for (let i = A.length - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            A[j - 1] > A[j] && swap(A, j - 1, j);
            // 循环结束 j 指向 A[0] - A[j] 中的最大值
        };
        // 循环结束 A[i] - A[n - 1] 已排序
    };
};

const A = [5, 8, 7, 3 ,22]
bubble_sort(A)
console.log(A)
```

> 时间复杂度：O(N^2)

---

## 时间复杂度和空间复杂度

## 复杂度的本质

- 复杂度是度量==指标==随着输入规模增长关系的一种==分类==。描述的是随着输入规模增加算法中==最大的影响因子==。
- BIG-O 是一种==渐进记号==

