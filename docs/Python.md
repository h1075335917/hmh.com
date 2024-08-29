### 1.基础知识

```
1.
CPython : Python3.5自带解释器
Jython : 运行在Java平台上的Python解释器，可以直接把Python代码编译成Java字节码执行。
2. : ,类似为代码块{}
input() -- 输入,类似Scanner()
3. 'Hello, %s' % 'world' == 'Hello,world'
'Hi, %s, you have $%d.' % ('Michael', 1000000) == 'Hi, Michael, you have $1000000.'
4.
list是一种有序的集合，可以随时添加和删除其中的元素
classmates = ['Michael', 'Bob', 'Tracy']
len(classmates)
classmates[0]
classmates[-1]
classmates.append('Adam') -- 新增末尾元素
classmates.insert(1, 'Jack') -- 新增指定位置元素
classmates.pop() --- 删除末尾元素
classmates.pop(1)
classmates[1] = 'Sarah' -- 覆盖
a.sort() -- 排序
5.
tuple和list非常类似,tuple一旦初始化就不能修改
classmates = ('Michael', 'Bob', 'Tracy')
6.
for…in --- for name in names:
while循环 --- while n > 0:
7.
range(101) -- 随机数,类似Random
8.
dict -- 类似map
d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
d['Jack'] = 90
d['Adam']
Thomas' in d -- 判断是否存在
d.get('Thomas')
9.
set -- 类似set
s = set([1, 2, 3])
s.add(4)
s.remove(4)
10.def 
def my_abs(x):  -- 定义函数
def calc(*numbers): -- 可变函数
def person(name, age, **kw): -- 关键字参数函数
11.切片
L[0:3] -- 取前3个元素
L[:10:2] -- 前10个数，每两个取一个
L[::5] -- 所有数，每5个取一个
12.迭代
--同时迭代索引和元素本身
for i, value in enumerate(['A', 'B', 'C']):
	print(i, value)
--正常迭代
for ch in 'ABC':
	print(ch)
--同时引用了两个变量
for x, y in [(1, 1), (2, 4), (3, 9)]:
	print(x, y)
13.列表生成式
list(range(1, 6)) == [1, 2, 3, 4, 5]
[x * x for x in range(1, 6)] == [1, 4, 9, 16, 25]
--筛选出仅偶数的平方
[x * x for x in range(1, 6) if x % 2 == 0] == [4, 16]
--双层循环
[m + n for m in 'ABC' for n in 'XYZ'] == ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']
--os.listdir可以列出文件和目录
[d for d in os.listdir('.')]
--迭代map
d = {'x': 'A', 'y': 'B', 'z': 'C' }
[k + '=' + v for k, v in d.items()]
--把一个list中所有的字符串变成小写
L = ['Hello', 'World', 'IBM', 'Apple']
[s.lower() for s in L]
14.生成器generator
第一种方法:只要把一个列表生成式的[]改成()，就创建了一个generator
g = (x * x for x in range(10))
通过next()函数获得generator的下一个返回值
next(g)
g = (x * x for x in range(10))
for n in g:
	print(n)
```

```
15.变量可以指向函数
f = abs
f(-10) == abs(-10)
16.函数名也是变量
传入函数
def add(x, y, f):
    return f(x) + f(y)
add(-5, 6, abs) == 11
17.map()
将传入的函数依次作用到序列的每个元素，并把结果作为新的Iterator返回
list(map(str, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
18.reduce()
把结果继续和序列的下一个元素做累积计算
reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)
19.filter()
把传入的函数依次作用于每个元素，然后根据返回值是True还是False决定保留还是丢弃该元素。
def is_odd(n):
    return n % 2 == 1
list(filter(is_odd, [1, 2, 4, 5, 6, 9, 10, 15])) == [1, 5, 9, 15]
20.sorted()
接收一个key函数来实现自定义的排序
sorted([36, 5, -12, 9, -21], key=abs) == [5, 9, -12, -21, 36]
21.函数作为返回值
def lazy_sum(*args):
    def sum():
        ax = 0
        for n in args:
            ax = ax + n
        return ax
    return sum
f = lazy_sum(1, 3, 5, 7, 9)
f() == 25
22.匿名函数
list(map(lambda x: x * x, [1, 2, 3, 4])) == [1, 4, 9, 16]
23.name属性拿到函数的名字
now.__name__
24.装饰器decorator
```

```python
def log(func):
    def wrapper(*args, **kw):
        print('call %s():' % func.__name__)
        return func(*args, **kw)
    return wrapper
@log
def now():
    print('2015-3-25')
>>> now()
call now():
2015-3-25
```

```
25.偏函数
int()函数可以把字符串转换为整数，当仅传入字符串时，int()函数默认按十进制转换
int('12345') == 12345
int()函数还提供额外的base参数，默认值为10。如果传入base参数，就可以做N进制的转换
int('12345', base=8) == 5349
int('12345', 16) == 74565
int2('1000000') == 64
```

```
26.
type()判断对象类型
isinstance()就可以告诉我们，一个对象是否是某种类型
dir()获得一个对象的所有属性和方法
```

