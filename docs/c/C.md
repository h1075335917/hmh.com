# C语言
```mdx-code-block
import Copyright from '@site/src/components/Copyright';

<Copyright behavior="参考" description="C 语言教程" url="https://wangdoc.com/clang" />
```
### GCC简介

```sql
-- 版本
-- K＆R C
K&R C指的是 C 语言的原始版本
-- ANSI C（又称 C89 或 C90）
美国国家标准协会（ANSI）制定了一套 C 语言标准
-- C95（1995）
美国国家标准协会对1989年的那个标准，进行了补充，加入多字节字符和宽字符的支持
-- C99（1999）
C 语言标准的第一次大型修订，发生在1999年，增加了许多语言特性，比如双斜杠（//）的注释语法。这个版本称为 C99，是目前最流行的 C 版本
-- C11（2011）
2011年，标准化组织再一次对 C 语言进行修订，增加了 Unicode 和多线程的支持
-- C17（2018）
只是解决了 C11 的一些缺陷，没有引入任何新功能
-- C2x
标准化组织正在讨论 C 语言的下一个版本，据说可能会在2023年通过，到时就会称为 C23
```

### 环境配置

```sql
在线编译器：https://www.onlinegdb.com/

-- MinGW-w64
下载地址：https://sourceforge.net/projects/mingw-w64/files/
-- 版本
i686纯32位版供32位win系统使用
x86_64是64位系统用的版本
seh结尾是纯64位编译
sjlj结尾是32 64两种编译，需加-m32或-m64参数
posix通常用于跨平台，比win32兼容性好一些
-- 选择
MinGW-W64 GCC-8.1.0 x86_64-posix-sjlj
-- 配置环境
path: D://hayes//mingw64//bin
-- 检查
gcc -v
```

### 运行文件

```sql
-- 编译 - 源码编译成二进制 - a.exe
gcc hello.c
-- 运行 - 执行入口代码
a.exe
-- 执行编译的文件名(-o)
gcc -o hello hello.c
-- 执行gcc标准（-std）
gcc -std=c99 hello.c
```

### 语法

#### printf

```sql
printf("There are %i apples\n", 3);
-- 占位符
%a：十六进制浮点数，字母输出为小写。
%A：十六进制浮点数，字母输出为大写。
%c：字符。
%d：十进制整数。
%e：使用科学计数法的浮点数，指数部分的e为小写。
%E：使用科学计数法的浮点数，指数部分的E为大写。
%i：整数，基本等同于%d。
%f：小数（包含float类型和double类型）。
%g：6个有效数字的浮点数。整数部分一旦超过6位，就会自动转为科学计数法，指数部分的e为小写。
%G：等同于%g，唯一的区别是指数部分的E为大写。
%hd：十进制 short int 类型。
%ho：八进制 short int 类型。
%hx：十六进制 short int 类型。
%hu：unsigned short int 类型。
%ld：十进制 long int 类型。
%lo：八进制 long int 类型。
%lx：十六进制 long int 类型。
%lu：unsigned long int 类型。
%lld：十进制 long long int 类型。
%llo：八进制 long long int 类型。
%llx：十六进制 long long int 类型。
%llu：unsigned long long int 类型。
%Le：科学计数法表示的 long double 类型浮点数。
%Lf：long double 类型浮点数。
%n：已输出的字符串数量。该占位符本身不输出，只将值存储在指定变量之中。
%o：八进制整数。
%p：指针。
%s：字符串。
%u：无符号整数（unsigned int）。
%x：十六进制整数。
%zd：size_t类型(非负整数)。
%%：输出一个百分号。

-- 输出格式
-- 限定宽度
printf("%5d\n", 123); // 输出为 "  123"
printf("%-5d\n", 123); // 输出为 "123  "
printf("%12f\n", 123.45); // 输出 "  123.450000"
-- 总是显示正负号
printf("%+d\n", 12); // 输出 +12
printf("%+d\n", -12); // 输出 -12
-- 限定小数位数
printf("Number is %.2f\n", 0.5); // 输出 Number is 0.50
printf("%6.2f\n", 0.5); // 输出为 "  0.50"
printf("%*.*f\n", 6, 2, 0.5); //等同于 printf("%6.2f\n", 0.5);
-- 输出部分字符串
printf("%.5s\n", "hello world"); // 输出 hello
```

### 数据类型

```
基本数据类型有三种：字符（char）、整数（int）和浮点数（float）。复杂的类型都是基于它们构建的。
```

#### 字符类型

```sql
-- 
字符类型使用一个字节（8位）存储
字符类型在不同计算机的默认范围是不一样的。一些系统默认为-128到127，另一些系统默认为0到255
-- 转义
\a：警报，这会使得终端发出警报声或出现闪烁，或者两者同时发生。
\b：退格键，光标回退一个字符，但不删除字符。
\n：换行符。
\r：回车符，光标移到同一行的开头。
\t：制表符，光标移到下一个水平制表位，通常是下一个8的倍数。
\v：垂直分隔符，光标移到下一个垂直制表位，通常是下一行的同一列。
\0：null 字符，代表没有内容。注意，这个值不等于数字0。

\nn：字符的八进制写法，nn为八进制值。 char x = '\102'; // 八进制
\xnn：字符的十六进制写法，nn为十六进制值。 char x = '\x42'; // 十六进制
-- 字符类型char也可以设置signed和unsigned
signed char c; // 范围为 -128 到 127
unsigned char c; // 范围为 0 到 255
-- 注意
C语言规定char类型默认是否带有正负号，由当前系统决定。这就是说，char不等同于signed char，它有可能是signed char，也有可能是unsigned char
```

#### 整数类型

```sql
不同计算机的int类型的大小是不一样的。比较常见的是使用4个字节（32位）存储一个int类型的值，但是2个字节（16位）或8个字节（64位）也有可能使用。它们可以表示的整数范围如下。
16位：-32,768 到 32,767。
32位：-2,147,483,648 到 2,147,483,647。
64位：-9,223,372,036,854,775,808 到 9,223,372,036,854,775,807。
-- signed，unsigned
C语言使用signed关键字，表示一个类型带有正负号，包含负值；使用unsigned关键字，表示该类型不带有正负号，只能表示零和正整数
对于int类型，默认是带有正负号的，也就是说int等同于signed int。默认情况，关键字signed一般都省略不写
16位的signed int最大值为32,767，而unsigned int的最大值增大到了65,535。unsigned int a;
unsigned int里面的int可以省略。 unsigned a;
-- 整数的子类型
short int（简写为short）：占用空间不多于int，一般占用2个字节（整数范围为-32768～32767)。
long int（简写为long）：占用空间不少于int，至少为4个字节。
long long int（简写为long long）：占用空间多于long，至少为8个字节。
-- 
不同的计算机，数据类型的字节长度是不一样的。确实需要32位整数时，应使用long类型而不是int类型，可以确保不少于4个字节；确实需要64位的整数时，应该使用long long类型，可以确保不少于8个字节。另一方面，为了节省空间，只需要16位整数时，应使用short类型；需要8位整数时，应该使用char类型。
-- 整数类型的极限值
有时候需要查看，当前系统不同整数类型的最大值和最小值，C 语言的头文件limits.h提供了相应的常量
SCHAR_MIN，SCHAR_MAX：signed char 的最小值和最大值。
SHRT_MIN，SHRT_MAX：short 的最小值和最大值。
INT_MIN，INT_MAX：int 的最小值和最大值。
LONG_MIN，LONG_MAX：long 的最小值和最大值。
LLONG_MIN，LLONG_MAX：long long 的最小值和最大值。
UCHAR_MAX：unsigned char 的最大值。
USHRT_MAX：unsigned short 的最大值。
UINT_MAX：unsigned int 的最大值。
ULONG_MAX：unsigned long 的最大值。
ULLONG_MAX：unsigned long long 的最大值。
-- 整数的进制
八进制使用0作为前缀：int a = 012; // 八进制，相当于十进制的10
十六进制使用0x或0X作为前缀：int a = 0x1A2B; // 十六进制，相当于十进制的6699
printf()的进制相关占位符如下：int x = 100;
%d：十进制整数。printf("dec = %d\n", x); // 100
%o：八进制整数。printf("octal = %o\n", x); // 144
%x：十六进制整数。printf("hex = %x\n", x); // 64
%#o：显示前缀0的八进制整数。printf("octal = %#o\n", x); // 0144
%#x：显示前缀0x的十六进制整数。printf("hex = %#x\n", x); // 0x64
%#X：显示前缀0X的十六进制整数。printf("hex = %#X\n", x); // 0X64
```

#### 浮点数类型

```sql
任何有小数点的数值，都会被编译器解释为浮点数。所谓“浮点数”就是使用 m * b^e的形式，存储一个数值，m是小数部分，b是基数（通常是2），e是指数部分
-- float c = 10.5;
float类型占用4个字节（32位），其中8位存放指数的值和符号，剩下24位存放小数的值和符号。float类型至少能够提供（十进制的）6位有效数字，指数部分的范围为（十进制的）-37到37，即数值范围为10^-37到10^37
-- 有时候，32位浮点数提供的精度或者数值范围还不够，C 语言又提供了另外两种更大的浮点数类型
double：占用8个字节（64位），至少提供13位有效数字。
long double：通常占用16个字节。
-- 注意
由于存在精度限制，浮点数只是一个近似值，它的计算是不精确的，比如 C 语言里面0.1 + 0.2并不等于0.3，而是有一个很小的误差
if (0.1 + 0.2 == 0.3) // false
-- C 语言允许使用科学计数法表示浮点数，使用字母e来分隔小数部分和指数部分
double x = 123.456e+3; // 123.456 x 10^3
-- 科学计数法的小数部分如果是0.x或x.0的形式，那么0可以省略
0.3E6 // 等同于 .3E6
3.0E6 // 等同于 3.E6
```

#### 布尔类型

```sql
C 语言原来并没有为布尔值单独设置一个类型，而是使用整数0表示伪，所有非零值表示真
-- 
头文件stdbool.h定义了另一个类型别名bool，并且定义了true代表1、false代表0。只要加载这个头文件，就可以使用这几个关键字
#include <stdbool.h>
bool flag = false;
```

#### 字面量的类型

```sql
字面量（literal）指的是代码里面直接出现的值
int x = 123;x是变量，123就是字面量。
编译时，字面量也会写入内存，因此编译器必须为字面量指定数据类型，就像必须为变量指定数据类型一样。
一般情况下，十进制整数字面量（比如123）会被编译器指定为int类型。如果一个数值比较大，超出了int能够表示的范围，编译器会将其指定为long int。如果数值超过了long int，会被指定为unsigned long。如果还不够大，就指定为long long或unsigned long long。
小数（比如3.14）会被指定为double类型。
```

#### 字面量后缀

```sql
有时候，程序员希望为字面量指定一个不同的类型。比如，编译器将一个整数字面量指定为int类型，但是程序员希望将其指定为long类型，这时可以为该字面量加上后缀l或L，编译器就知道要把这个字面量的类型指定为long
int x = 123L;
--
八进制和十六进制的值，也可以使用后缀l和L指定为 Long 类型，比如020L和0x20L
int y = 0377L;
int z = 0x7fffL;
--
如果希望指定为无符号整数unsigned int，可以使用后缀u或U
int x = 123U;
--
L和U可以结合使用，表示unsigned long类型。L和U的大小写和组合顺序无所谓
int x = 123LU;
--
对于浮点数，编译器默认指定为 double 类型，如果希望指定为其他类型，需要在小数后面添加后缀f（float）或l（long double）
--
科学计数法也可以使用后缀
1.2345e+10F
1.2345e+10L
```

#### 溢出

```sql
每一种数据类型都有数值范围，如果存放的数值超出了这个范围（小于最小值或大于最大值），需要更多的二进制位存储，就会发生溢出。大于最大值，叫做向上溢出（overflow）；小于最小值，叫做向下溢出（underflow）。
-- 
unsigned char x = 255;
x = x + 1;
示例中，变量x加1，得到的结果不是256，而是0。因为x是unsign char类型，最大值是255（二进制11111111），加1后就发生了溢出，256（二进制100000000）的最高位1被丢弃，剩下的值就是0
--
unsigned int ui = UINT_MAX;  // 4,294,967,295
ui++;
printf("ui = %u\n", ui); // 0
ui--;
printf("ui = %u\n", ui); // 4,294,967,295
示例中，常量UINT_MAX是 unsigned int 类型的最大值。如果加1，对于该类型就会溢出，从而得到0；而0是该类型的最小值，再减1，又会得到UINT_MAX
```

#### sizeof 运算符

```sql
sizeof是 C 语言提供的一个运算符，返回某种数据类型或某个值占用的字节数量。它的参数可以是数据类型的关键字，也可以是变量名或某个具体的值
// 参数为数据类型
int x = sizeof(int);
// 参数为变量
int i;
sizeof(i);
// 参数为数值
sizeof(3.14);
```

#### 类型的自动转换

```sql
-- 赋值运算 
赋值运算符会自动将右边的值，转成左边变量的类型
--
两个相同类型的整数运算时，或者单个整数的运算，一般来说，运算结果也属于同一类型。但是有一个例外，宽度小于int的类型，运算结果会自动提升为int
unsigned char a = 66;
if ((-a) < 0) printf("negative\n");
else printf("positive\n");
示例中，变量a是 unsigned char 类型，这个类型不可能小于0，但是-a不是 unsigned char 类型，会自动转为 int 类型，导致上面的代码输出 negative
-- 函数
函数的参数和返回值，会自动转成函数定义里指定的类型
int dostuff(int, unsigned char);
char m = 42;
unsigned short n = 43;
long long int c = dostuff(m, n);
示例中，参数变量m和n不管原来的类型是什么，都会转成函数dostuff()定义的参数类型
```

#### 类型的显式转换

```sql
原则上，应该避免类型的自动转换，防止出现意料之外的结果。C 语言提供了类型的显式转换，允许手动转换类型
只要在一个值或变量的前面，使用圆括号指定类型(type)，就可以将这个值或变量转为指定的类型，这叫做“类型指定”（casting）
(unsigned char) ch  
上面示例中，将变量ch转成无符号的字符类型。
long int y = (long int) 10 + 12;
上面示例中，(long int)将10显式转为long int类型。这里的显示转换其实是不必要的，因为赋值运算符会自动将右边的值，转为左边变量的类型
```

#### 可移植类型

```sql
C 语言的整数类型（short、int、long）在不同计算机上，占用的字节宽度可能是不一样的，无法提前知道它们到底占用多少个字节。
程序员有时控制准确的字节宽度，这样的话，代码可以有更好的可移植性，头文件stdint.h创造了一些新的类型别名
-- 精确宽度类型(exact-width integer type)，保证某个整数类型的宽度是确定的。
int8_t：8位有符号整数。
int16_t：16位有符号整数。
int32_t：32位有符号整数。
int64_t：64位有符号整数。
uint8_t：8位无符号整数。
uint16_t：16位无符号整数。
uint32_t：32位无符号整数。
uint64_t：64位无符号整数。
上面这些都是类型别名，编译器会指定它们指向的底层类型。比如，某个系统中，如果int类型为32位，int32_t就会指向int；如果long类型为32位，int32_t则会指向long。
-- 最小宽度类型（minimum width type），保证某个整数类型的最小长度
int_least8_t
int_least16_t
int_least32_t
int_least64_t
uint_least8_t
uint_least16_t
uint_least32_t
uint_least64_t
上面这些类型，可以保证占据的字节不少于指定宽度。比如，int_least8_t表示可以容纳8位有符号整数的最小宽度的类型。
-- 最快的最小宽度类型（fast minimum width type），可以使整数计算达到最快的类型
int_fast8_t
int_fast16_t
int_fast32_t
int_fast64_t
uint_fast8_t
uint_fast16_t
uint_fast32_t
uint_fast64_t
上面这些类型是保证字节宽度的同时，追求最快的运算速度，比如int_fast8_t表示对于8位有符号整数，运算速度最快的类型。这是因为某些机器对于特定宽度的数据，运算速度最快，举例来说，32位计算机对于32位数据的运算速度，会快于16位数据。
-- 可以保存指针的整数类型
intptr_t：可以存储指针（内存地址）的有符号整数类型。
uintptr_t：可以存储指针的无符号整数类型。
-- 最大宽度整数类型，用于存放最大的整数
intmax_t：可以存储任何有效的有符号整数的类型。
uintmax_t：可以存放任何有效的无符号整数的类型。
上面的这两个类型的宽度比long long和unsigned long更大。
```

### 指针

指针是什么？首先，它是一个值，这个值代表一个内存地址，因此指针相当于指向某个内存地址的路标

```sql
字符*表示指针，通常跟在类型关键字的后面，表示指针指向的是什么类型的值。比如，char*表示一个指向字符的指针，float*表示一个指向float类型的值的指针
int* intPtr;
上面示例声明了一个变量intPtr，它是一个指针，指向的内存地址存放的是一个整数
一个指针指向的可能还是指针，这时就要用两个星号**表示
int** foo;
上面示例表示变量foo是一个指针，指向的还是一个指针，第二个指针指向的则是一个整数。
```

```sql
-- * 运算符
*这个符号除了表示指针以外，还可以作为运算符，用来取出指针变量所指向的内存地址里面的值
void increment(int* p) {
  *p = *p + 1;
}
函数increment()的参数是一个整数指针p。函数体里面，*p就表示指针p所指向的那个值。对*p赋值，就表示改变指针所指向的那个地址里面的值
上面函数的作用是将参数值加1。该函数没有返回值，因为传入的是地址，函数体内部对该地址包含的值的操作，会影响到函数外部，所以不需要返回值。事实上，函数内部通过指针，将值传到外部，是 C 语言的常用方法。
变量地址而不是变量值传入函数，还有一个好处。对于需要大量存储空间的大型变量，复制变量值传入函数，非常浪费时间和空间，不如传入指针来得高效
```

```sql
-- & 运算符
&运算符用来取出一个变量所在的内存地址
int x = 1;
printf("x's address is %p\n", &x);
-- 
示例中，调用increment()函数以后，变量x的值就增加了1，原因就在于传入函数的是变量x的地址&x。
void increment(int* p) {
  *p = *p + 1;
}
int x = 1;
increment(&x);
printf("%d\n", x); // 2
--
&运算符与*运算符互为逆运算，下面的表达式总是成立
int i = 5;
if (i == *(&i)) // true
```

```sql
-- 指针变量的初始化
声明指针变量之后，编译器会为指针变量本身分配一个内存空间，但是这个内存空间里面的值是随机的，也就是说，指针变量指向的值是随机的。这时一定不能去读写指针变量指向的地址，因为那个地址是随机地址，很可能会导致严重后果

正确做法是指针变量声明后，必须先让它指向一个分配好的地址，然后再进行读写，这叫做指针变量的初始化。
int* p;
int i;
p = &i;
*p = 13;

为了防止读写未初始化的指针变量，可以养成习惯，将未初始化的指针变量设为NULL。
int* p = NULL;
NULL在 C 语言中是一个常量，表示地址为0的内存空间，这个地址是无法使用的，读写该地址会报错。
```

```sql
-- 指针的运算
指针本质上就是一个无符号整数，代表了内存地址。它可以进行运算，但是规则并不是整数运算的规则
-- 指针与整数值的加减运算
指针与整数值的运算，表示指针的移动
short* j;
j = (short*)0x1234;
j = j + 1; // 0x1236
j指向内存地址0x1234。由于0x1234本身是整数类型（int），跟j的类型（short*）并不兼容，所以强制使用类型投射，将0x1234转成short*。j + 1表示指针向内存地址的高位移动一个单位，而一个单位的short类型占据两个字节的宽度，所以相当于向高位移动两个字节。指针移动的单位，与指针指向的数据类型有关。数据类型占据多少个字节，每单位就移动多少个字节。
-- 指针与指针的减法 （两个指针进行加法是非法的）
相同类型的指针允许进行减法运算，返回它们之间的距离，即相隔多少个数据单位。
高位地址减去低位地址，返回的是正值；低位地址减去高位地址，返回的是负值。
这时，减法返回的值属于ptrdiff_t类型，这是一个带符号的整数类型别名，具体类型根据系统不同而不同。这个类型的原型定义在头文件stddef.h里面。
short* j1;
short* j2;
j1 = (short*)0x1234;
j2 = (short*)0x1236;
ptrdiff_t dist = j2 - j1;
printf("%td\n", dist); // 1
上面示例中，j1和j2是两个指向 short 类型的指针，变量dist是它们之间的距离，类型为ptrdiff_t，值为1，因为相差2个字节正好存放一个 short 类型的值
-- 指针与指针的比较运算
指针之间的比较运算，比较的是各自的内存地址哪一个更大，返回值是整数1（true）或0（false）
```

### 函数

```sql
-- 注意
函数必须声明后使用，否则会报错。也就是说，一定要在使用plus_one()之前，声明这个函数。如果像下面这样写，编译时会报错（只能调用上面的函数，下面的不能调用）
C 语言标准规定，函数只能声明在源码文件的顶层，不能声明在其他函数内部。（不能函数里面声明函数）。
不返回值的函数，使用void关键字表示返回值的类型。
没有参数的函数，声明时要用void关键字表示参数类型。（不传参数需要使用void声明）
```

```sql
-- 参数的传值引用
如果函数的参数是一个变量，那么调用时，传入的是这个变量的值的拷贝，而不是变量本身。（地址除外）
void Swap(int* x, int* y) {
  int temp;
  temp = *x;
  *x = *y;
  *y = temp;
}
int a = 1;
int b = 2;
Swap(&a, &b);
上面示例中，通过传入变量x和y的地址，函数内部就可以直接操作该地址，从而实现交换两个变量的值。
-- 注意
虽然跟传参无关，这里特别提一下，函数不要返回内部变量的指针
int* f(void) {
  int i;
  // ...
  return &i;
}
上面示例中，函数返回内部变量i的指针，这种写法是错的。因为当函数结束运行时，内部变量就消失了，这时指向内部变量i的内存地址就是无效的，再去使用这个地址是非常危险的。
```

#### 函数指针

函数本身就是一段内存里面的代码，C 语言允许通过指针获取函数。

```sql
void print(int a) {
  printf("%d\n", a);
}
void (*print_ptr)(int) = &print;
上面示例中，变量print_ptr是一个函数指针，它指向函数print()的地址。函数print()的地址可以用&print获得。注意，(*print_ptr)一定要写在圆括号里面，否则函数参数(int)的优先级高于*，整个式子就会变成void* print_ptr(int)。
--
有了函数指针，通过它也可以调用函数
(*print_ptr)(10);
// 等同于
print(10);
--
比较特殊的是，C 语言还规定，函数名本身就是指向函数代码的指针，通过函数名就能获取函数地址。也就是说，print和&print是一回事
-- 五种写法
// 写法一
print(10)
// 写法二
(*print)(10)
// 写法三
(&print)(10)
// 写法四
(*print_ptr)(10)
// 写法五
print_ptr(10)
-- 如果一个函数的参数或返回值，也是一个函数，那么函数原型可以写成下面这样。
int compute(int (*myfunc)(int), int, int);
上面示例可以清晰地表明，函数compute()的第一个参数也是一个函数
```

#### 函数原型

函数必须先声明，后使用。由于程序总是先运行`main()`函数，导致所有其他函数都必须在`main()`函数之前声明

```sql
C 语言提供的解决方法是，只要在程序开头处给出函数原型，函数就可以先使用、后声明。所谓函数原型，就是提前告诉编译器，每个函数的返回类型和参数类型。其他信息都不需要，也不用包括函数体，具体的函数实现可以后面再补上。
int twice(int);
int main(int num) {
  return twice(num);
}
int twice(int num) {
  return 2 * num;
}
```

#### exit()

该函数用来终止整个程序的运行。一旦执行到该函数，程序就会立即结束。该函数的原型定义在头文件`stdlib.h`里面。

```sql
exit()可以向程序外部返回一个值，它的参数就是程序的返回值。一般来说，使用两个常量作为它的参数：EXIT_SUCCESS（相当于 0）表示程序运行成功，EXIT_FAILURE（相当于 1）表示程序异常中止。这两个常数也是定义在stdlib.h里面
// 程序运行成功
// 等同于 exit(0);
exit(EXIT_SUCCESS);
// 程序异常中止
// 等同于 exit(1);
exit(EXIT_FAILURE);
--
C 语言还提供了一个atexit()函数，用来登记exit()执行时额外执行的函数，用来做一些退出程序时的收尾工作。该函数的原型也是定义在头文件stdlib.h。
int atexit(void (*func)(void));
atexit()的参数是一个函数指针。注意，它的参数函数（下例的print）不能接受参数，也不能有返回值。
void print(void) {
  printf("something wrong!\n");
}
atexit(print);
exit(EXIT_FAILURE);
```

#### 函数说明符

```sql
-- extern 说明符
对于多文件的项目，源码文件会用到其他文件声明的函数。这时，当前文件里面，需要给出外部函数的原型，并用extern说明该函数的定义来自其他文件。
extern int foo(int arg1, char arg2);
int main(void) {
  int a = foo(2, 3);
  // ...
  return 0;
}
上面示例中，函数foo()定义在其他文件，extern告诉编译器当前文件不包含该函数的定义。
不过，由于函数原型默认就是extern，所以这里不加extern，效果是一样的
```

```sql
-- static 说明符
默认情况下，每次调用函数时，函数的内部变量都会重新初始化，不会保留上一次运行的值。static说明符可以改变这种行为。
static用于函数内部声明变量时，表示该变量只需要初始化一次，不需要在每次调用时都进行初始化。也就是说，它的值在两次调用之间保持不变。
#include <stdio.h>
void counter(void) {
  static int count = 1;  // 只初始化一次
  printf("%d\n", count);
  count++;
}
int main(void) {
  counter();  // 1
  counter();  // 2
  counter();  // 3
  counter();  // 4
}
-- static可以用来修饰函数本身
static int Twice(int num) {
  int result = num * 2;
  return(result);
}
上面示例中，static关键字表示该函数只能在当前文件里使用，如果没有这个关键字，其他文件也可以使用这个函数（通过声明函数原型）。
-- static也可以用在参数里面，修饰参数数组
int sum_array(int a[static 3], int n) {
  // ...
}
上面示例中，static对程序行为不会有任何影响，只是用来告诉编译器，该数组长度至少为3，某些情况下可以加快程序运行速度。另外，需要注意的是，对于多维数组的参数，static仅可用于第一维的说明。
```

#### const 说明符

函数参数里面的`const`说明符，表示函数内部不得修改该参数变量

```sql
void f(int* p) {
  // ...
}
上面示例中，函数f()的参数是一个指针p，函数内部可能会改掉它所指向的值*p，从而影响到函数外部。

void f(const int* p) {
  *p = 0; // 该行报错
}
为了避免这种情况，可以在声明函数时，在指针参数前面加上const说明符，告诉编译器，函数内部不能修改该参数所指向的值

void f(const int* p) {
  int x = 13;
  p = &x; // 允许修改
}
但是这种写法，只限制修改p所指向的值，而p本身的地址是可以修改的。

void f(int* const p) {
  int x = 13;
  p = &x; // 该行报错
}
如果想限制修改p，可以把const放在p前面。

void f(const int* const p) {
  // ...
}
如果想同时限制修改p和*p，需要使用两个const
```

#### 可变参数

有些函数的参数数量是不确定的，声明函数的时候，可以使用省略号`...`表示可变数量的参数

```sql
int printf(const char* format, ...);
上面示例是printf()函数的原型，除了第一个参数，其他参数的数量是可变的，与格式字符串里面的占位符数量有关。这时，就可以用...表示可变数量的参数。
注意，...符号必须放在参数序列的结尾，否则会报错。
-- 头文件stdarg.h定义了一些宏，可以操作可变参数。
（1）va_list：一个数据类型，用来定义一个可变参数对象。它必须在操作可变参数时，首先使用。
（2）va_start：一个函数，用来初始化可变参数对象。它接受两个参数，第一个参数是可变参数对象，第二个参数是原始函数里面，可变参数之前的那个参数，用来为可变参数定位。
（3）va_arg：一个函数，用来取出当前那个可变参数，每次调用后，内部指针就会指向下一个可变参数。它接受两个参数，第一个是可变参数对象，第二个是当前可变参数的类型。
（4）va_end：一个函数，用来清理可变参数对象。
-- 例子
double average(int i, ...) {
  double total = 0;
  va_list ap;
  va_start(ap, i);
  for (int j = 1; j <= i; ++j) {
    total += va_arg(ap, double);
  }
  va_end(ap);
  return total / i;
}
上面示例中，va_list ap定义ap为可变参数对象，va_start(ap, i)将参数i后面的参数统一放入ap，va_arg(ap, double)用来从ap依次取出一个参数，并且指定该参数为 double 类型，va_end(ap)用来清理可变参数对象。
```

### 数组

```sql
-- 注意
注意，如果引用不存在的数组成员（即越界访问数组），并不会报错，所以必须非常小心。
int scores[100];
scores[100] = 51;
上面示例中，数组scores只有100个成员，因此scores[100]这个位置是不存在的。但是，引用这个位置并不会报错，会正常运行，使得紧跟在scores后面的那块内存区域被赋值，而那实际上是其他变量的区域，因此不知不觉就更改了其他变量的值。这很容易引发错误，而且难以发现。
-- 使用大括号赋值时，必须在数组声明时赋值，否则编译时会报错
C 语言规定，数组变量一旦声明，就不得修改变量指向的地址，具体会在后文解释。由于同样的原因，数组赋值之后，再用大括号修改值，也是不允许的。
-- 数组长度
sizeof运算符会返回整个数组的字节长度
int a[] = {22, 37, 3490};
int arrLen = sizeof(a); // 12
sizeof(a)是整个数组的字节长度，sizeof(a[0])是数组成员的字节长度，相除就是数组的成员数量。
--
注意，sizeof返回值的数据类型是size_t，所以sizeof(a) / sizeof(a[0])的数据类型也是size_t。在printf()里面的占位符，要用%zd或%zu
int x[12];
printf("%zu\n", sizeof(x));     // 48
printf("%zu\n", sizeof(int));  // 4
printf("%zu\n", sizeof(x) / sizeof(int)); // 12
上面示例中，sizeof(x) / sizeof(int)就可以得到数组成员数量12
-- 变长数组
数组声明的时候，数组长度除了使用常量，也可以使用变量。这叫做变长数组（variable-length array，简称 VLA）。
int n = x + y;
int arr[n];
上面示例中，数组arr就是变长数组，因为它的长度取决于变量n的值，编译器没法事先确定，只有运行时才能知道n是多少。
-- 数组的地址
数组是一连串连续储存的同类型值，只要获得起始地址（首个成员的内存地址），就能推算出其他成员的地址。
int a[5] = {11, 22, 33, 44, 55};
int* p;
p = &a[0];
printf("%d\n", *p);  // Prints "11"
--
由于数组的起始地址是常用操作，&array[0]的写法有点麻烦，C 语言提供了便利写法，数组名等同于起始地址，也就是说，数组名就是指向第一个成员（array[0]）的指针
int a[5] = {11, 22, 33, 44, 55};
int* p = &a[0];
// 等同于
int* p = a;
-- 函数接受数组作为参数，函数原型可以写成下面这样
// 写法一
int sum(int arr[], int len);
// 写法二
int sum(int* arr, int len);
```

```sql
-- 数组指针的加减法
C 语言里面，数组名可以进行加法和减法运算，等同于在数组成员之间前后移动，即从一个成员的内存地址移动到另一个成员的内存地址。比如，a + 1返回下一个成员的地址，a - 1返回上一个成员的地址。
int a[5] = {11, 22, 33, 44, 55};
for (int i = 0; i < 5; i++) {
  printf("%d\n", *(a + i));
}

由于数组名与指针是等价的，所以下面的等式总是成立。
a[b] == *(a + b)
理解：*a等价与*a[0], *(a+b)即*a[0]移动b个位置，即*a[b]

-- 如果指针变量p指向数组的一个成员，那么p++就相当于指向下一个成员，这种方法常用来遍历数组
int a[] = {11, 22, 33, 44, 55, 999};
int* p = a;
while (*p != 999) {
  printf("%d\n", *p);
  p++;
}
注意，数组名指向的地址是不能变的，所以上例中，不能直接对a进行自增，即a++的写法是错的，必须将a的地址赋值给指针变量p，然后对p进行自增。
-- 遍历数组一般都是通过数组长度的比较来实现，但也可以通过数组起始地址和结束地址的比较来实现
int sum(int* start, int* end) {
  int total = 0;
  while (start < end) {
    total += *start;
    start++;
  }
  return total;
}
int arr[5] = {20, 10, 5, 39, 4};
printf("%i\n", sum(arr, arr + 5));
```

```sql
-- 数组的复制
由于数组名是指针，所以复制数组不能简单地复制数组名。
int* a;
int b[3] = {1, 2, 3};
a = b;
上面的写法，结果不是将数组b复制给数组a，而是让a和b指向同一个数组。
复制数组最简单的方法，还是使用循环，将数组元素逐个进行复制。
for (i = 0; i < N; i++)
  a[i] = b[i];
另一种方法是使用memcpy()函数（定义在头文件string.h），直接把数组所在的那一段内存，再复制一份。
memcpy(a, b, sizeof(b));
上面示例中，将数组b所在的那段内存，复制给数组a。这种方法要比循环复制数组成员要快。
```

```sql
-- 作为函数的参数
数组作为函数的参数，一般会同时传入数组名和数组长度。
int sum_array(int a[], int n) {
  // ...
}
int a[] = {3, 5, 7, 3};
int sum = sum_array(a, 4);
由于数组名就是一个指针，如果只传数组名，那么函数只知道数组开始的地址，不知道结束的地址，所以才需要把数组长度也一起传入。
--
如果函数的参数是多维数组，那么除了第一维的长度可以当作参数传入函数，其他维的长度需要写入函数的定义。
int sum_array(int a[][4], int n) {
  // ...
}
int a[2][4] = {
  {1, 2, 3, 4},
  {8, 9, 10, 11}
};
int sum = sum_array(a, 2);
-- 变长数组作为参数
int sum_array(int n, int a[n]) {
  // ...
}
int a[] = {3, 5, 7, 3};
int sum = sum_array(4, a);
上面示例中，数组a[n]是一个变长数组，它的长度取决于变量n的值，只有运行时才能知道。所以，变量n作为参数时，顺序一定要在变长数组前面，这样运行时才能确定数组a[n]的长度，否则就会报错
因为函数原型可以省略参数名，所以变长数组的原型中，可以使用*代替变量名，也可以省略变量名。
int sum_array(int, int [*]);
int sum_array(int, int []);
变长数组作为函数参数有一个好处，就是多维数组的参数声明，可以把后面的维度省掉了。
// 原来的写法
int sum_array(int a[][4], int n);
// 变长数组的写法
int sum_array(int n, int m, int a[n][m]);
```

### 字符串

```
C 语言没有单独的字符串类型，字符串被当作字符数组，即char类型的数组。比如，字符串“Hello”是当作数组{'H', 'e', 'l', 'l', 'o'}处理的。
编译器会给数组分配一段连续内存，所有字符储存在相邻的内存单元之中。在字符串结尾，C 语言会自动添加一个全是二进制0的字节，写作\0字符，表示字符串结束。字符\0不同于字符0，前者的 ASCII 码是0（二进制形式00000000），后者的 ASCII 码是48（二进制形式00110000）。所以，字符串“Hello”实际储存的数组是{'H', 'e', 'l', 'l', 'o', '\0'}。
所有字符串的最后一个字符，都是\0。这样做的好处是，C 语言不需要知道字符串的长度，就可以读取内存里面的字符串，只要发现有一个字符是\0，那么就知道字符串结束了。
char localString[10];
上面示例声明了一个10个成员的字符数组，可以当作字符串。由于必须留一个位置给\0，所以最多只能容纳9个字符的字符串。
字符串写成数组的形式，是非常麻烦的。C 语言提供了一种简写法，双引号之中的字符，会被自动视为字符数组。
{'H', 'e', 'l', 'l', 'o', '\0'}
// 等价于
"Hello"
```

```sql
-- 声明
字符串变量可以声明成一个字符数组，也可以声明成一个指针，指向字符数组。
// 写法一
char s[14] = "Hello, world!";
-- 字符数组的长度可以让编译器自动计算
char s[] = "Hello, world!";
// 写法二
char* s = "Hello, world!";

-- 差异
1. 指针指向的字符串，在 C 语言内部被当作常量，不能修改字符串本身
char* s = "Hello, world!";
s[0] = 'z'; // 错误
为了提醒用户，字符串声明为指针后不得修改，可以在声明时使用const说明符，保证该字符串是只读的
const char* s = "Hello, world!";
2. 指针变量可以指向其它字符串
char* s = "hello";
s = "world";
字符数组变量不能指向另一个字符串
char s[] = "hello";
s = "world"; // 报错
```

```sql
-- strlen() #include <string.h>
strlen()函数返回字符串的字节长度，不包括末尾的空字符\0
// string.h
size_t strlen(const char* s);
注意，字符串长度（strlen()）与字符串变量长度（sizeof()），是两个不同的概念
char s[50] = "hello";
printf("%d\n", strlen(s));  // 5
printf("%d\n", sizeof(s));  // 50
-- strcpy() 用于将一个字符串的内容复制到另一个字符串 #include <string.h>
字符串的复制，不能使用赋值运算符，直接将一个字符串赋值给字符数组变量
char str1[10];
char str2[10];
str1 = "abc"; // 报错
str2 = str1;  // 报错
上面两种字符串的复制写法，都是错的。因为数组的变量名是一个固定的地址，不能修改，使其指向另一个地址
如果是字符指针，赋值运算符（=）只是将一个指针的地址复制给另一个指针，而不是复制字符串
char* s1;
char* s2;
s1 = "abc";
s2 = s1;
上面代码可以运行，结果是两个指针变量s1和s2指向同一字符串，而不是将字符串s1的内容复制给s2
strcpy(char dest[], const char source[])
第一个参数是目的字符串数组，第二个参数是源字符串数组
返回值是一个字符串指针（即char*），指向第一个参数
char* s1 = "beast";
char s2[40] = "Be the best that you can be.";
char* ps;
ps = strcpy(s2 + 7, s1);
puts(s2); // Be the beast
puts(ps); // beast
上面示例中，从s2的第7个位置开始拷贝字符串beast，前面的位置不变。这导致s2后面的内容都被截去了，因为会连beast结尾的空字符一起拷贝。strcpy()返回的是一个指针，指向拷贝开始的位置
-- strncpy() #include <string.h>
strncpy()跟strcpy()的用法完全一样，只是多了第3个参数，用来指定复制的最大字符数，防止溢出目标字符串变量的边界
char* strncpy(char* dest, char* src, size_t n);
第三个参数n定义了复制的最大字符数。如果达到最大字符数以后，源字符串仍然没有复制完，就会停止复制，这时目的字符串结尾将没有终止符\0，这一点务必注意。如果源字符串的字符数小于n，则strncpy()的行为与strcpy()完全一致
strncpy(str1, str2, sizeof(str1) - 1);
str1[sizeof(str1) - 1] = '\0';
上面示例中，字符串str2复制给str1，但是复制长度最多为str1的长度减去1，str1剩下的最后一位用于写入字符串的结尾标志\0。这是因为strncpy()不会自己添加\0，如果复制的字符串片段不包含结尾标志，就需要手动添加
strncpy()也可以用来拷贝部分字符串
char s1[40];
char s2[12] = "hello world";
strncpy(s1, s2, 5);
s1[5] = '\0';
printf("%s\n", s1); // hello
-- strcat() #include <string.h>
strcat()函数用于连接字符串。它接受两个字符串作为参数，把第二个字符串的副本添加到第一个字符串的末尾。这个函数会改变第一个字符串，但是第二个字符串不变
char* strcat(char* s1, const char* s2);
strcat()的返回值是一个字符串指针，指向第一个参数
char s1[12] = "hello";
char s2[6] = "world";
strcat(s1, s2);
puts(s1); // "helloworld"
-- strncat() #include <string.h>
strncat()用于连接两个字符串，用法与strcat()完全一致，只是增加了第三个参数，指定最大添加的字符数。在添加过程中，一旦达到指定的字符数，或者在源字符串中遇到空字符\0，就不再添加了
char* strncat(const char* dest,const char* src,size_t n);
strncat()返回第一个参数，即目标字符串指针
为了保证连接后的字符串，不超过目标字符串的长度，strncat()通常会写成下面这样
strncat(
  str1, 
  str2, 
  sizeof(str1) - strlen(str1) - 1
);
char s1[10] = "Monday";
char s2[8] = "Tuesday";
strncat(s1, s2, 3);
puts(s1); // "MondayTue"
-- strcmp() #include <string.h>
strcmp()函数用于比较两个字符串的内容
int strcmp(const char* s1, const char* s2);
按照字典顺序，如果两个字符串相同，返回值为0；如果s1小于s2，strcmp()返回值小于0；如果s1大于s2，返回值大于0
-- strncmp() #include <string.h>
由于strcmp()比较的是整个字符串，C 语言又提供了strncmp()函数，只比较到指定的位置
int strncmp(
  const char* s1,
  const char* s2, 
  size_t n
);
它的返回值与strcmp()一样。如果两个字符串相同，返回值为0；如果s1小于s2，strcmp()返回值小于0；如果s1大于s2，返回值大于0
-- sprintf() #include <stdio.h>
sprintf()函数跟printf()类似，但是用于将数据写入字符串，而不是输出到显示器。该函数的原型定义在stdio.h头文件里面
int sprintf(char* s, const char* format, ...);
sprintf()的第一个参数是字符串指针变量，其余参数和printf()相同，即第二个参数是格式字符串，后面的参数是待写入的变量列表
char first[6] = "hello";
char last[6] = "world";
char s[40];
sprintf(s, "%s %s", first, last);
printf("%s\n", s); // hello world
sprintf()的返回值是写入变量的字符数量（不计入尾部的空字符\0）。如果遇到错误，返回负值
-- snprintf() #include <stdio.h>
snprintf()只比sprintf()多了一个参数n，用来控制写入变量的字符串不超过n - 1个字符，剩下一个位置写入空字符\0
int snprintf(char*s, size_t n, const char* format, ...);
snprintf()总是会自动写入字符串结尾的空字符。如果你尝试写入的字符数超过指定的最大字符数，snprintf()会写入 n - 1 个字符，留出最后一个位置写入空字符
```

### 内存管理

C 语言的内存管理，分成两部分。一部分是系统管理的，另一部分是用户手动管理的

> 系统管理的内存，主要是函数内部的变量（局部变量）。这部分变量在函数运行时进入内存，函数运行结束后自动从内存卸载。这些变量存放的区域称为”栈“（stack），”栈“所在的内存是系统自动管理的。

> 用户手动管理的内存，主要是程序运行的整个过程中都存在的变量（全局变量），这些变量需要用户手动从内存释放。如果使用后忘记释放，它就一直占用内存，直到程序退出，这种情况称为”内存泄漏“（memory leak）。这些变量所在的内存称为”堆“（heap），”堆“所在的内存是用户手动管理的。

```sql
-- void 指针
1. 它只有内存块的地址信息，没有类型信息，等到使用该块内存的时候，再向编译器补充说明，里面的数据类型是什么
2. void 指针等同于无类型指针，可以指向任意类型的数据，但是不能解读数据。void 指针与其他所有类型指针之间是互相转换关系，任一类型的指针都可以转为 void 指针，而 void 指针也可以转为任一类型的指针
int x = 10;
void* p = &x; // 整数指针转为 void 指针
int* q = p; // void 指针转为整数指针
> 注意，由于不知道 void 指针指向什么类型的值，所以不能用*运算符取出它指向的值。
char a = 'X';
void* p = &a;
printf("%c\n", *p); // 报错
```

```sql
-- malloc() #include <stdlib.h>
malloc()函数用于分配内存，该函数向系统要求一段内存，系统就在“堆”里面分配一段连续的内存块给它
void* malloc(size_t size)
它接受一个非负整数作为参数，表示所要分配的内存字节数，返回一个 void 指针，指向分配好的内存块。这是非常合理的，因为malloc()函数不知道，将要存储在该块内存的数据是什么类型，所以只能返回一个无类型的 void 指针
1. 可以使用malloc()为任意类型的数据分配内存，常见的做法是先使用sizeof()函数，算出某种数据类型所需的字节长度，然后再将这个长度传给malloc()
int* p = malloc(sizeof(int));
*p = 12;
printf("%d\n", *p); // 12
2. 有时候为了增加代码的可读性，可以对malloc()返回的指针进行一次强制类型转换
int* p = (int*) malloc(sizeof(int));
3. 由于sizeof()的参数可以是变量，所以上面的例子也可以写成下面这样
int* p = (int*) malloc(sizeof(*p));
4. malloc()分配内存有可能分配失败，这时返回常量NULL。Null的值为0，是一个无法读写的内存地址，可以理解成一个不指向任何地方的指针。它在包括stdlib.h等多个头文件里面都有定义，所以只要可以使用malloc()，就可以使用NULL。由于存在分配失败的可能，所以最好在使用malloc()之后检查一下，是否分配成功
int* p = malloc(sizeof(int));
if (p == NULL) {
  // 内存分配失败
}
// or
if (!p) {
  //...
}
5. malloc()最常用的场合，就是为数组和自定义数据结构分配内存。
int* p = (int*) malloc(sizeof(int) * 10);
for (int i = 0; i < 10; i++)
  p[i] = i * 5;
上面示例中，p是一个整数指针，指向一段可以放置10个整数的内存，所以可以用作数组
6. malloc()用来创建数组，有一个好处，就是它可以创建动态数组，即根据成员数量的不同，而创建长度不同的数组
int* p = (int*) malloc(n * sizeof(int));
> 注意，malloc()不会对所分配的内存进行初始化，里面还保存着原来的值。如果没有初始化，就使用这段内存，可能从里面读到以前的值。程序员要自己负责初始化，比如，字符串初始化可以使用strcpy()函数
char* p = malloc(4);
strcpy(p, "abc");
```

```sql
-- free() #include <stdlib.h>
free()用于释放malloc()函数分配的内存，将这块内存还给系统以便重新使用，否则这个内存块会一直占用到程序运行结束
void free(void* block)
free()的参数是malloc()返回的内存地址
int* p = (int*) malloc(sizeof(int));
*p = 12;
free(p);
> 注意，分配的内存块一旦释放，就不应该再次操作已经释放的地址，也不应该再次使用free()对该地址释放第二次
一个很常见的错误是，在函数内部分配了内存，但是函数调用结束时，没有使用free()释放内存
void gobble(double arr[], int n) {
  double* temp = (double*) malloc(n * sizeof(double));
  // ...
}
上面示例中，函数gobble()内部分配了内存，但是没有写free(temp)。这会造成函数运行结束后，占用的内存块依然保留，如果多次调用gobble()，就会留下多个内存块。并且，由于指针temp已经消失了，也无法访问这些内存块，再次使用
```

```sql
-- calloc() #include <stdlib.h>
calloc()函数的作用与malloc()相似，也是分配内存块
1. calloc()接受两个参数，第一个参数是某种数据类型的值的数量，第二个是该数据类型的单位字节长度
void* calloc(size_t n, size_t size);
calloc()的返回值也是一个 void 指针。分配失败时，返回 NULL。
2. calloc()会将所分配的内存全部初始化为0。malloc()不会对内存进行初始化，如果想要初始化为0，还要额外调用memset()函数
int* p = calloc(10, sizeof(int));
// 等同于
int* p = malloc(sizeof(int) * 10);
memset(p, 0, sizeof(int) * 10);
calloc()分配的内存块，也要使用free()释放。
```

```sql
-- realloc() #include <stdlib.h>
realloc()函数用于修改已经分配的内存块的大小，可以放大也可以缩小，返回一个指向新的内存块的指针。如果分配不成功，返回 NULL
void* realloc(void* block, size_t size)
> block：已经分配好的内存块指针（由malloc()或calloc()或realloc()产生）。
> size：该内存块的新大小，单位为字节
1. realloc()可能返回一个全新的地址（数据也会自动复制过去），也可能返回跟原来一样的地址。realloc()优先在原有内存块上进行缩减，尽量不移动数据，所以通常是返回原先的地址。如果新内存块小于原来的大小，则丢弃超出的部分；如果大于原来的大小，则不对新增的部分进行初始化（程序员可以自动调用memset()）。
int* b;
b = malloc(sizeof(int) * 10);
b = realloc(b, sizeof(int) * 2000);
2. realloc()的第一个参数可以是 NULL，这时就相当于新建一个指针
char* p = realloc(NULL, 3490);
// 等同于
char* p = malloc(3490);
3. 如果realloc()的第二个参数是0，就会释放掉内存块
> 由于有分配失败的可能，所以调用realloc()以后，最好检查一下它的返回值是否为 NULL。分配失败时，原有内存块中的数据不会发生改变
float* new_p = realloc(p, sizeof(*p * 40));
if (new_p == NULL) {
  printf("Error reallocing\n");
  return 1;
}
> 注意，realloc()不会对内存块进行初始化。
```

```sql
-- restrict 说明符
声明指针变量时，可以使用restrict说明符，告诉编译器，该块内存区域只有当前指针一种访问方式，其他指针不能读写该块内存。这种指针称为“受限指针”（restrict pointer）
int* restrict p;
p = malloc(sizeof(int));
上面示例中，声明指针变量p时，加入了restrict说明符，使得p变成了受限指针。后面，当p指向malloc()函数返回的一块内存区域，就意味着，该区域只有通过p来访问，不存在其他访问方式
int* restrict p;
p = malloc(sizeof(int));
int* q = p;
*q = 0; // 未定义行为
上面示例中，另一个指针q与受限指针p指向同一块内存，现在该内存有p和q两种访问方式。这就违反了对编译器的承诺，后面通过*q对该内存区域赋值，会导致未定义行为
```

```sql
-- memcpy() #include <string.h>
memcpy()用于将一块内存拷贝到另一块内存
void* memcpy(
  void* restrict dest, 
  void* restrict source, 
  size_t n
);
1. dest是目标地址，source是源地址，第三个参数n是要拷贝的字节数n。如果要拷贝10个 double 类型的数组成员，n就等于10 * sizeof(double)，而不是10。该函数会将从source开始的n个字节，拷贝到dest。
2. dest和source都是 void 指针，表示这里不限制指针类型，各种类型的内存数据都可以拷贝。两者都有 restrict 关键字，表示这两个内存块不应该有互相重叠的区域。
3. memcpy()的返回值是第一个参数，即目标地址的指针
4. 因为memcpy()只是将一段内存的值，复制到另一段内存，所以不需要知道内存里面的数据是什么类型。下面是复制字符串的例子
  char s[] = "Goats!";
  char t[100];
  memcpy(t, s, sizeof(s));  // 拷贝7个字节，包括终止符
  printf("%s\n", t);  // "Goats!"
5. memcpy()可以取代strcpy()进行字符串拷贝，而且是更好的方法，不仅更安全，速度也更快，它不检查字符串尾部的\0字符
char* s = "hello world";
size_t len = strlen(s) + 1;
char *c = malloc(len);
if (c) {
  // strcpy() 的写法
  strcpy(c, s);
  // memcpy() 的写法
  memcpy(c, s, len);
}
```

```sql
-- memmove() #include <string.h>
memmove()函数用于将一段内存数据复制到另一段内存。它跟memcpy()的主要区别是，它允许目标区域与源区域有重叠。如果发生重叠，源区域的内容会被更改；如果没有重叠，它与memcpy()行为相同
void* memmove(
  void* dest, 
  void* source, 
  size_t n
);
1. 上面代码中，dest是目标地址，source是源地址，n是要移动的字节数。dest和source都是 void 指针，表示可以移动任何类型的内存数据，两个内存区域可以有重叠
2. memmove()返回值是第一个参数，即目标地址的指针
int a[100];
// ...
memmove(&a[0], &a[1], 99 * sizeof(int));
上面示例中，从数组成员a[1]开始的99个成员，都向前移动一个位置
3. 
char x[] = "Home Sweet Home";
// 输出 Sweet Home Home
printf("%s\n", (char *) memmove(x, &x[5], 10));
上面示例中，从字符串x的5号位置开始的10个字节，就是“Sweet Home”，memmove()将其前移到0号位置，所以x就变成了“Sweet Home Home”。
```

```sql
-- memcmp() #include <string.h>
memcmp()函数用来比较两个内存区域
int memcmp(
  const void* s1,
  const void* s2,
  size_t n
);
1. 它接受三个参数，前两个参数是用来比较的指针，第三个参数指定比较的字节数
2. 它的返回值是一个整数。两块内存区域的每个字节以字符形式解读，按照字典顺序进行比较，如果两者相同，返回0；如果s1大于s2，返回大于0的整数；如果s1小于s2，返回小于0的整数
char* s1 = "abc";
char* s2 = "acd";
int r = memcmp(s1, s2, 3); // 小于 0
```

### struct结构

#### 使用

`struct`关键字，允许自定义复合数据类型，将不同类型的值组合在一起。这样不仅为编程提供方便，也有利于增强代码的可读性。C 语言没有其他语言的对象（object）和类（class）的概念，struct 结构很大程度上提供了对象和类的功能

```c
//例子1
//定义
struct fraction {
  int numerator;
  int denominator;
};
//声明
struct fraction f1;
f1.numerator = 22;
f1.denominator = 7;
//例子2
struct car {
  char* name;
  float price;
  int speed;
};
//声明并赋值
struct car saturn = {"Saturn SL/2", 16000.99, 175};
// 注意，大括号里面的值的顺序，必须与 struct 类型声明时属性的顺序一致。否则，必须为每个值指定属性名
struct car saturn = {.speed=172, .name="Saturn SL/2"};
//修改值
saturn.speed = 168;

//struct 的数据类型声明语句与变量的声明语句，可以合并为一个语句
struct book {
  char title[500];
  char author[100];
  float value;
} b1;
//匿名数据类型 --- 如果类型标识符book只用在这一个地方，后面不再用到，这里可以将类型名省略
struct {
  char title[500];
  char author[100];
  float value;
} b1;
//可以在声明变量的同时，对变量赋值
struct {
  char title[500];
  char author[100];
  float value;
} b1 = {"Harry Potter", "J. K. Rowling", 10.0},
  b2 = {"Cancer Ward", "Aleksandr Solzhenitsyn", 7.85};
//typedef命令为 struct 结构指定一个别名
typedef struct cell_phone {
  int cell_no;
  float minutes_of_charge;
} phone;
phone p = {5551234, 5};
```

```c
//struct 结构占用的存储空间，不是各个属性存储空间的总和，而是最大内存占用属性的存储空间的倍数，其他属性会添加空位与之对齐。这样可以提高读写效率
struct foo {
  int a;
  char* b;
  char c;
};
printf("%d\n", sizeof(struct foo)); // 24
// 上面示例中，struct foo有三个属性，在64位计算机上占用的存储空间分别是：int a占4个字节，指针char* b占8个字节，char c占1个字节。它们加起来，一共是13个字节（4 + 8 + 1）。但是实际上，struct foo会占用24个字节，原因是它最大的内存占用属性是char* b的8个字节，导致其他属性的存储空间也是8个字节，这样才可以对齐，导致整个struct foo就是24个字节（8 * 3）。

// 多出来的存储空间，都采用空位填充，所以上面的struct foo真实的结构其实是下面这样。
struct foo {
  int a;        // 4
  char pad1[4]; // 填充4字节
  char *b;      // 8
  char c;       // 1
  char pad2[7]; // 填充7字节
};
printf("%d\n", sizeof(struct foo)); // 24

//由于这个特性，在有必要的情况下，定义 Struct 结构体时，可以采用存储空间递增的顺序，定义每个属性，这样就能节省一些空间
struct foo {
  char c;
  int a;
  char* b;
};
printf("%d\n", sizeof(struct foo)); // 16
```

#### 复制

struct 变量可以使用赋值运算符（`=`），复制给另一个变量，这时会生成一个全新的副本。系统会分配一块新的内存空间，大小与原来的变量相同，把每个属性都复制过去，即原样生成了一份数据

> 总结
>
> > 赋值运算符（=）可以将 struct 结构每个属性的值，一模一样复制一份，拷贝给另一个 struct 变量。这一点跟数组完全不同，使用赋值运算符复制数组，不会复制数据，只会共享地址。

```c
struct cat { char name[30]; short age; } a, b;
strcpy(a.name, "Hula");
a.age = 3;
b = a;
b.name[0] = 'M';
printf("%s\n", a.name); // Hula
printf("%s\n", b.name); // Mula
//上面这个示例是有前提的，就是 struct 结构的属性必须定义成字符数组，才能复制数据。如果稍作修改，属性定义成字符指针，结果就不一样。

struct cat { char* name; short age; } a, b;
a.name = "Hula";
a.age = 3;
b = a;
//上面示例中，name属性变成了一个字符指针，这时a赋值给b，导致b.name也是同样的字符指针，指向同一个地址，也就是说两个属性共享同一个地址。因为这时，struct 结构内部保存的是一个指针，而不是上一个例子的数组，这时复制的就不是字符串本身，而是它的指针。并且，这个时候也没法修改字符串，因为字符指针指向的字符串是不能修改的
```

#### 指针

如果将 struct 变量传入函数，函数内部得到的是一个原始值的副本

```c
struct turtle {
  char* name;
  char* species;
  int age;
};
void happy(struct turtle t) {
  t.age = t.age + 1;
}
int main() {
  struct turtle myTurtle = {"MyTurtle", "sea turtle", 99};
  happy(myTurtle);
  printf("Age is %i\n", myTurtle.age); // 输出 99
  return 0;
}
```

将 struct 变量的指针传入函数，通过指针来修改 struct 属性，就可以影响到函数外部

```c
void happy(struct turtle* t) {
    ///函数内部也必须使用(*t).age的写法，从指针拿到 struct 结构本身
    (*t).age = (*t).age + 1;
}
happy(&myTurtle);

//(*t).age这样的写法很麻烦。C 语言就引入了一个新的箭头运算符（->），可以从 struct 指针上直接获取属性，大大增强了代码的可读性
void happy(struct turtle* t) {
  t->age = t->age + 1;
}

// ptr == &myStruct
myStruct.prop == (*ptr).prop == ptr->prop
```

#### 嵌套

struct 结构的成员可以是另一个 struct 结构

```c
struct species {
  char* name;
  int kinds;
};
struct fish {
  char* name;
  int age;
  struct species breed;
};
```

赋值的时候有多种写法

```c
// 写法一
struct fish shark = {"shark", 9, {"Selachimorpha", 500}};
// 写法二
struct species myBreed = {"Selachimorpha", 500};
struct fish shark = {"shark", 9, myBreed};
// 写法三
struct fish shark = {
  .name="shark",
  .age=9,
  .breed={"Selachimorpha", 500}
};
// 写法四
struct fish shark = {
  .name="shark",
  .age=9,
  .breed.name="Selachimorpha",
  .breed.kinds=500
};
printf("Shark's species is %s", shark.breed.name);

//对字符数组属性赋值，要使用strcpy()函数，不能直接赋值，因为直接改掉字符数组名的地址会报错
strcpy(student1.name.first, "Harry");
```

自我引用

```c
struct node {
  int data;
  struct node* next;
};
struct node* head;
// 生成一个三个节点的列表 (11)->(22)->(33)
head = malloc(sizeof(struct node));

head->data = 11;
head->next = malloc(sizeof(struct node));

head->next->data = 22;
head->next->next = malloc(sizeof(struct node));

head->next->next->data = 33;
head->next->next->next = NULL;
// 遍历这个列表
for (struct node *cur = head; cur != NULL; cur = cur->next) {
  printf("%d\n", cur->data);
}
```

### typedef 命令

`typedef`命令用来为某个类型起别名

```c
//type代表类型名，name代表别名。
typedef type name;

typedef unsigned char BYTE;
BYTE c = 'z';
```

### Union 结构

可以灵活变更的数据结构

```c
union quantity {
  short count;
  float weight;
  float volume;
};
//上面示例中，union命令定义了一个包含三个属性的数据类型quantity。虽然包含三个属性，但是只能写入一个值，三个属性都是对这个值的不同解读。最后赋值的属性，往往就是可以取到有意义的值的那个属性。
```

使用时，声明一个该类型的变量

```c
// 写法一
union quantity q;
q.count = 4;
// 写法二
union quantity q = {.count=4};
// 写法三 : 不指定属性名，就会赋值给第一个属性
union quantity q = {4};

printf("count is %i\n", q.count); // count is 4
printf("weight is %f\n", q.weight); // 未定义行为
//如果要让q.weight属性可以取到值，就要先为它赋值
q.weight = 0.5;
printf("weight is %f\n", q.weight); // weight is 0.5
//一旦为其他属性赋值，原先可以取到值的q.count属性就跟着改变，使用它可能就没有意义了
```

### Enum 类型

如果一种数据类型的取值只有少数几种可能，并且每种取值都有自己的含义，为了提高代码的可读性，可以将它们定义为 Enum 类型

```c
enum colors {RED, GREEN, BLUE};
printf("%d\n", RED); // 0
printf("%d\n", GREEN);  // 1
printf("%d\n", BLUE);  // 2
```

使用时，可以将变量声明为 Enum 类型

```c
enum colors color;
//上面代码将变量color声明为enum colors类型。这个变量的值就是常量RED、GREEN、BLUE之中的一个
color = BLUE;
printf("%i\n", color); // 2

//指定值
enum { ONE = 1, TWO = 2 };
printf("%d %d", ONE, TWO);  // 1 2

//如果一组常量之中，有些指定了值，有些没有指定。那么，没有指定值的常量会从上一个指定了值的常量，开始自动递增赋值
enum {
  A,    // 0
  B,    // 1
  C = 4,  // 4
  D,    // 5
  E,    // 6
  F = 3,   // 3
  G,    // 4
  H     // 5
};
```

### 预处理器

C 语言编译器在编译程序之前，会先使用预处理器（preprocessor）处理代码

> 预处理器首先会清理代码，进行删除注释、多行语句合成一个逻辑行等工作。然后，执行`#`开头的预处理指令

#### #define

> `#define`是最常见的预处理指令，用来将指定的词替换成另一个词。它的参数分成两个部分，第一个参数就是要被替换的部分，其余参数是替换后的内容。每条替换规则，称为一个宏（macro）

```c
//示例：#define指定将源码里面的MAX，全部替换成100。MAX就称为一个宏
#define MAX 100

//#define允许多重替换，即一个宏可以包含另一个宏
#define TWO 2
#define FOUR TWO*TWO
```

```c
//带参数的宏
#define SQUARE(X) X*X
//替换成3 + 4*3 + 4 ，输出19 
printf("%d\n", SQUARE(3 + 4));	
```

```c
//由于宏不涉及数据类型，所以替换以后可能为各种类型的值。如果希望替换后的值为字符串，可以在替换文本的参数前面加上#
#define STR(x) #x
// 等同于 printf("%s\n", "3.14159");
printf("%s\n", STR(3.14159));

//如果替换后的文本里面，参数需要跟其他标识符连在一起，组成一个新的标识符，可以使用##运算符。它起到粘合作用，将参数“嵌入”一个标识符之中
#define MK_ID(n) i##n
int MK_ID(1), MK_ID(2), MK_ID(3);
// 替换成
int i1, i2, i3;
```

```c
//宏的参数还可以是不定数量的（即不确定有多少个参数），...表示剩余的参数，_VA_ARGS__代表多余的参数
#define X(a, b, ...) (10*(a) + 20*(b)), __VA_ARGS__
X(5, 4, 3.14, "Hi!", 12)
// 替换成
(10*(5) + 20*(4)), 3.14, "Hi!", 12
 
//__VA_ARGS__前面加上一个#号，可以让输出变成一个字符串
#define X(...) #__VA_ARGS__
printf("%s\n", X(1,2,3));  // Prints "1, 2, 3"
```

#### #undef

> `#undef`指令用来取消已经使用`#define`定义的宏

```c
//undef指令取消已经定义的宏LIMIT，后面就可以重新用 LIMIT 定义一个宏
#define LIMIT 400
#undef LIMIT

//GCC 的-U选项可以在命令行取消宏的定义，相当于#undef
$ gcc -ULIMIT foo.c
```

#### #include

> `#include`指令用于编译时将其他源码文件，加载进入当前文件

```c
// 形式一
#include <foo.h> // 加载系统提供的文件

// 形式二
#include "foo.h" // 加载用户提供的文件

//GCC 编译器的-I参数，也可以用来指定include命令中用户文件的加载路径
$ gcc -Iinclude/ -o code code.c
```

#### #if...#endif

> `#if...#endif`指令用于预处理器的条件判断，满足条件时，内部的行会被编译，否则就被编译器忽略

```c
//#if后面的判断条件，通常是一个表达式。如果表达式的值不等于0，编译内部的语句；如果表达式的值等于0，则忽略内部的语句
#if 0
  const double pi = 3.1415; // 不会执行
#endif

//#if...#endif之间还可以加入#else指令，用于指定判断条件不成立时，需要编译的语句
#define FOO 1
#if FOO
  printf("defined\n");
#else
  printf("not defined\n");
#endif

//如果有多个判断条件，还可以加入#elif命令
#if HAPPY_FACTOR == 0
  printf("I'm not happy!\n");
#elif HAPPY_FACTOR == 1
  printf("I'm just regular\n");
#else
  printf("I'm extra happy!\n");
#endif

//GCC 的-D参数可以在编译时指定宏的值，因此可以很方便地打开调试开关
$ gcc -DDEBUG=1 foo.c
```

#### #ifdef...#endif

> `#ifdef...#endif`指令用于判断某个宏是否定义过

```c
//有时源码文件可能会重复加载某个库，为了避免这种情况，可以在库文件里使用#define定义一个空的宏。通过这个宏，判断库文件是否被加载了
#define EXTRA_HAPPY
//然后，源码文件使用#ifdef...#endif检查这个宏是否定义过
#ifdef EXTRA_HAPPY
  printf("I'm extra happy!\n");
#endif

//#ifdef可以与#else指令配合使用
#ifdef EXTRA_HAPPY
  printf("I'm extra happy!\n");
#else
  printf("I'm just regular\n");
#endif

//#ifdef...#else...#endif可以用来实现条件加载
#ifdef MAVIS
  #include "foo.h"
  #define STABLES 1
#else
  #include "bar.h"
  #define STABLES 2
#endif
```

> defined 运算符
>
> > 上一节的`#ifdef`指令，等同于`#if defined`

```c
#ifdef FOO
// 等同于
#if defined FOO

//使用这种语法，可以完成多重判断。这个运算符的一个应用，就是对于不同架构的系统，加载不同的头文件
#if defined IBMPC
  #include "ibmpc.h"
#elif defined MAC
  #include "mac.h"
#else
  #include "general.h"
#endif
```

#### #ifndef...#endif

> `#ifndef...#endif`指令跟`#ifdef...#endif`正好相反。它用来判断，如果某个宏没有被定义过，则执行指定的操作

```c
#ifndef EXTRA_HAPPY
  printf("I'm just regular\n");
#endif

//#ifndef常用于防止重复加载。举例来说，为了防止头文件myheader.h被重复加载，可以把它放在#ifndef...#endif里面加载
#ifndef MYHEADER_H
  #define MYHEADER_H
  #include "myheader.h"
#endif

//#ifndef等同于#if !defined
#ifndef FOO
// 等同于
#if !defined FOO
```

#### 预定义宏

> C 语言提供一些预定义的宏，可以直接使用

```c
__DATE__：编译日期，格式为“Mmm dd yyyy”的字符串（比如 Nov 23 2021）。
__TIME__：编译时间，格式为“hh:mm:ss”。
__FILE__：当前文件名。
__LINE__：当前行号。
__func__：当前正在执行的函数名。该预定义宏必须在函数作用域使用。
__STDC__：如果被设为1，表示当前编译器遵循 C 标准。
__STDC_HOSTED__：如果被设为1，表示当前编译器可以提供完整的标准库；否则被设为0（嵌入式系统的标准库常常是不完整的）。
__STDC_VERSION__：编译所使用的 C 语言版本，是一个格式为yyyymmL的长整数，C99 版本为“199901L”，C11 版本为“201112L”，C17 版本为“201710L”。
```

#### #line

> `#line`指令用于覆盖预定义宏`__LINE__`，将其改为自定义的行号。后面的行将从`__LINE__`的新值开始计数

```c
// 将下一行的行号重置为 300
#line 300

//#line还可以改掉预定义宏__FILE__，将其改为自定义的文件名。下一行的行号重置为300，文件名重置为newfilename
#line 300 "newfilename"
```

#### #error

> `#error`指令用于让预处理器抛出一个错误，终止编译

```c
//如果编译器不使用 C11 标准，就中止编译
#if __STDC_VERSION__ != 201112L
  #error Not C11
#endif

//GCC 使用 C99 标准编译，就报错了
$ gcc -std=c99 newish.c
newish.c:14:2: error: #error Not C11
    
//编译器一旦发现INT类型的最大值小于100,000，就会停止编译
#if defined WIN32
  // ...
#elif defined MAC_OS
  // ...
#elif defined LINUX
  // ...
#else
  #error NOT support the operating system
#endif
```

#### #pragma

> `#pragma`指令用来修改编译器属性

```c
// 使用 C99 标准
#pragma c9x on
```

### I/O 函数

#### scanf

```c
//scanf()函数用于读取用户的键盘输入。程序运行到这个语句时，会停下来，等待用户从键盘输入。用户输入数据、按下回车键后，scanf()就会处理用户的输入，将其存入变量。它的原型定义在头文件stdio.h
scanf("%d", &i);
scanf("%d%d%f%f", &i, &j, &x, &y);
```

#### 占位符

```c
//scanf()常用的占位符如下，与printf()的占位符基本一致。
%c：字符。
%d：整数。
%f：float类型浮点数。
%lf：double类型浮点数。
%Lf：long double类型浮点数。
%s：字符串。
%[]：在方括号中指定一组匹配的字符（比如%[0-9]），遇到不在集合之中的字符，匹配将会停止。
//下面要特别说一下占位符%s，它其实不能简单地等同于字符串。它的规则是，从当前第一个非空白字符开始读起，直到遇到空白字符（即空格、换行符、制表符等）为止
```

#### 赋值忽略符

```c
scanf("%d-%d-%d", &year, &month, &day);
//上面示例中，如果用户输入2020-01-01，就会正确解读出年、月、日。问题是用户可能输入其他格式，比如2020/01/01，这种情况下，scanf()解析数据就会失败。
//为了避免这种情况，scanf()提供了一个赋值忽略符（assignment suppression character）*。只要把*加在任何占位符的百分号后面，该占位符就不会返回值，解析后将被丢弃。
scanf("%d%*c%d%*c%d", &year, &month, &day);
```

#### sscanf()

```c
//sscanf()函数与scanf()很类似，不同之处是sscanf()从字符串里面，而不是从用户输入获取数据。它的原型定义在头文件stdio.h里面
int sscanf(const char* s, const char* format, ...);
//sscanf()的第一个参数是一个字符串指针，用来从其中获取数据。其他参数都与scanf()相同。
//sscanf()主要用来处理其他输入函数读入的字符串，从其中提取数据。
fgets(str, sizeof(str), stdin);
sscanf(str, "%d%d", &i, &j);
//上面示例中，fgets()先从标准输入获取了一行数据，存入字符数组str。然后，sscanf()再从字符串str里面提取两个整数，放入变量i和j。
//sscanf()的一个好处是，它的数据来源不是流数据，所以可以反复使用，不像scanf()的数据来源是流数据，只能读取一次
//sscanf()的返回值是成功赋值的变量的数量，如果提取失败，返回常量 EOF
```

#### getchar()，putchar()

```c
char ch;
ch = getchar();
// 等同于
scanf("%c", &ch);

int len = 0;
while(getchar() != '\n')
  len++;
//getchar()函数返回用户从键盘输入的一个字符，使用时不带有任何参数。程序运行到这个命令就会暂停，等待用户从键盘输入，等同于使用scanf()方法读取一个字符。它的原型定义在头文件stdio.h。

//putchar()函数将它的参数字符输出到屏幕，等同于使用printf()输出一个字符。它的原型定义在头文件stdio.h。
putchar(ch);
// 等同于
printf("%c", ch);

//由于getchar()和putchar()这两个函数的用法，要比scanf()和printf()更简单，而且通常是用宏来实现，所以要比scanf()和printf()更快。如果操作单个字符，建议优先使用这两个函数。
```

#### puts()

```c
//puts()函数用于将参数字符串显示在屏幕（stdout）上，并且自动在字符串末尾添加换行符。它的原型定义在头文件stdio.h。
puts("Here are some messages:");
puts("Hello World");
//上面示例中，puts()在屏幕上输出两行内容。
//写入成功时，puts()返回一个非负整数，否则返回常量 EOF。
```

### 文件操作

#### 文件指针

```c
//C 语言提供了一个 FILE 数据结构，记录了操作一个文件所需要的信息。该结构定义在头文件stdio.h，所有文件操作函数都要通过这个数据结构，获取文件信息。
//开始操作一个文件之前，就要定义一个指向该文件的 FILE 指针，相当于获取一块内存区域，用来保存文件信息。
FILE* fp;
```

```c
//一个读取文件的完整示例
#include <stdio.h>
int main(void) {
  FILE* fp;
  char c;
  //使用fopen()打开指定文件，返回一个File指针
  fp = fopen("hello.txt", "r");
  if (fp == NULL) {
    return -1;
  }
  c = fgetc(fp);
  printf("%c\n", c);
  fclose(fp);
  return 0;
}
```

#### fopen()

```c
//fopen()函数用来打开文件。所有文件操作的第一步，都是使用fopen()打开指定文件。这个函数的原型定义在头文件stdio.h
FILE* fopen(char* filename, char* mode);
//它接受两个参数。第一个参数是文件名(可以包含路径)，第二个参数是模式字符串，指定对文件执行的操作，比如下面的例子中，r表示以读取模式打开文件。
fp = fopen("in.dat", "r");
//成功打开文件以后，fopen()返回一个 FILE 指针，其他函数可以用这个指针操作文件。如果无法打开文件（比如文件不存在或没有权限），会返回空指针 NULL
```

```
fopen()的模式字符串有以下几种。
r：读模式，只用来读取数据。如果文件不存在，返回 NULL 指针。
w：写模式，只用来写入数据。如果文件存在，文件长度会被截为0，然后再写入；如果文件不存在，则创建该文件。
a：写模式，只用来在文件尾部追加数据。如果文件不存在，则创建该文件。
r+：读写模式。如果文件存在，指针指向文件开始处，可以在文件头部添加数据。如果文件不存在，返回 NULL 指针。
w+：读写模式。如果文件存在，文件长度会被截为0，然后再写入数据。这种模式实际上读不到数据，反而会擦掉数据。如果文件不存在，则创建该文件。
a+：读写模式。如果文件存在，指针指向文件结尾，可以在现有文件末尾添加内容。如果文件不存在，则创建该文件。
```

#### 标准流

```c
//Linux 系统默认提供三个已经打开的文件，它们的文件指针如下：
stdin（标准输入）：默认来源为键盘，文件指针编号为0。
stdout（标准输出）：默认目的地为显示器，文件指针编号为1。
stderr（标准错误）：默认目的地为显示器，文件指针编号为2。
Linux 系统的文件，不一定是数据文件，也可以是设备文件，即文件代表一个可以读或写的设备。文件指针stdin默认是把键盘看作一个文件，读取这个文件，就能获取用户的键盘输入。同理，stdout和stderr默认是把显示器看作一个文件，将程序的运行结果写入这个文件，用户就能看到运行结果了。它们的区别是，stdout写入的是程序的正常运行结果，stderr写入的是程序的报错信息。
//这三个输入和输出渠道，是 Linux 默认提供的，所以分别称为标准输入（stdin）、标准输出（stdout）和标准错误（stderr）。因为它们的实现是一样的，都是文件流，所以合称为“标准流”。
```

```c
//Linux 允许改变这三个文件指针（文件流）指向的文件，这称为重定向（redirection）。
//如果标准输入不绑定键盘，而是绑定其他文件，可以在文件名前面加上小于号<，跟在程序名后面。这叫做“输入重定向”（input redirection）。
$ demo < in.dat
//demo程序代码里面的stdin，将指向文件in.dat，即从in.dat获取数据。
    
//如果标准输出绑定其他文件，而不是显示器，可以在文件名前加上大于号>，跟在程序名后面。这叫做“输出重定向”（output redirection）。
$ demo > out.dat
//上面示例中，demo程序代码里面的stdout，将指向文件out.dat，即向out.dat写入数据。
    
//输出重定向>会先擦去out.dat的所有原有的内容，然后再写入。如果希望写入的信息追加在out.dat的结尾，可以使用>>符号。
$ demo >> out.dat
//上面示例中，demo程序代码里面的stdout，将向文件out.dat写入数据。与>不同的是，写入的开始位置是out.dat的文件结尾。
      
//标准错误的重定向符号是2>。其中的2代表文件指针的编号，即2>表示将2号文件指针的写入，重定向到err.txt。2号文件指针就是标准错误stderr。
$ demo > out.dat 2> err.txt
//上面示例中，demo程序代码里面的stderr，会向文件err.txt写入报错信息。而stdout向文件out.dat写入。
    
//输入重定向和输出重定向，也可以结合在一条命令里面。
$ demo < in.dat > out.dat
// or
$ demo > out.dat < in.dat
    
//重定向还有另一种情况，就是将一个程序的标准输出stdout，指向另一个程序的标准输入stdin，这时要使用|符号。
$ random | sum
//上面示例中，random程序代码里面的stdout的写入，会从sum程序代码里面的stdin被读取。
```

#### fclose()

```c
//fclose()用来关闭已经使用fopen()打开的文件。它的原型定义在stdio.h。
int fclose(FILE* stream);
//它接受一个文件指针fp作为参数。如果成功关闭文件，fclose()函数返回整数0；如果操作失败（比如磁盘已满，或者出现 I/O 错误），则返回一个特殊值 EOF
if (fclose(fp) != 0)
  printf("Something wrong.");
//不再使用的文件，都应该使用fclose()关闭，否则无法释放资源。一般来说，系统对同时打开的文件数量有限制，及时关闭文件可以避免超过这个限制。
```

#### EOF

```
C 语言的文件操作函数的设计是，如果遇到文件结尾，就返回一个特殊值。程序接收到这个特殊值，就知道已经到达文件结尾了。
头文件stdio.h为这个特殊值定义了一个宏EOF（end of file 的缩写），它的值一般是-1。这是因为从文件读取的二进制值，不管作为无符号数字解释，还是作为 ASCII 码解释，都不可能是负值，所以可以很安全地返回-1，不会跟文件本身的数据相冲突。
需要注意的是，不像字符串结尾真的存储了\0这个值，EOF并不存储在文件结尾，文件中并不存在这个值，完全是文件操作函数发现到达了文件结尾，而返回这个值。
```

#### freopen()

```c
//freopen()用于新打开一个文件，直接关联到某个已经打开的文件指针。这样可以复用文件指针。它的原型定义在头文件stdio.h。
FILE* freopen(char* filename, char* mode, FILE stream);

//它跟fopen()相比，就是多出了第三个参数，表示要复用的文件指针。其他两个参数都一样，分别是文件名和打开模式。
freopen("output.txt", "w", stdout);
printf("hello");
//上面示例将文件output.txt关联到stdout，此后向stdout写入的内容，都会写入output.txt。由于printf()默认就是输出到stdout，所以运行上面的代码以后，文件output.txt会被写入hello。
//freopen()的返回值是它的第三个参数（文件指针）。如果打开失败（比如文件不存在），会返回空指针 NULL。
//freopen()会自动关闭原先已经打开的文件，如果文件指针并没有指向已经打开的文件，则freopen()等同于fopen()。
```

#### fgetc()，getc()

```c
//fgetc()和getc()用于从文件读取一个字符。它们的用法跟getchar()类似，区别是getchar()只用来从stdin读取，而这两个函数是从任意指定的文件读取。它们的原型定义在头文件stdio.h。
int fgetc(FILE *stream)
int getc(FILE *stream);
//fgetc()与getc()的用法是一样的，都只有文件指针一个参数。两者的区别是，getc()一般用宏来实现，而fgetc()是函数实现，所以前者的性能可能更好一些。注意，虽然这两个函数返回的是一个字符，但是它们的返回值类型却不是char，而是int，这是因为读取失败的情况下，它们会返回 EOF，这个值一般是-1
#include <stdio.h>
int main(void) {
  FILE *fp;
  fp = fopen("hello.txt", "r");
  int c;
  while ((c = getc(fp)) != EOF)
    printf("%c", c);
  fclose(fp);
}
```

#### fputc()，putc()

#### fprintf()

#### fscanf()

#### fgets()

#### fputs()

#### fwrite()

#### fread()

#### feof()

#### fseek()

#### ftell()

#### rewind()

#### fgetpos()，fsetpos()

#### ferror()，clearerr()

#### remove()

#### rename()

### 变量说明符

> C 语言允许声明变量的时候，加上一些特定的说明符（specifier），为编译器提供变量行为的额外信息。它的主要作用是帮助编译器优化代码，有时会对程序行为产生影响

#### const

> const说明符表示变量是只读的，不得被修改

```c
const double PI = 3.14159;
PI = 3; // 报错

//对于数组，const表示数组成员不能修改
const int arr[] = {1, 2, 3, 4};
arr[0] = 5; // 报错

//对于指针变量，const有两种写法，含义是不一样的。如果const在*前面，表示指针指向的值不可修改。

// const 表示指向的值 *x 不能修改
int const * x
// 或者
const int * x
//下面示例中，对x指向的值进行修改导致报错。
int p = 1
const int* x = &p;
(*x)++; // 报错

//如果const在*后面，表示指针包含的地址不可修改
// const 表示地址 x 不能修改
int* const x
//下面示例中，对x进行修改导致报错。
int p = 1
int* const x = &p;
x++; // 报错

//这两者可以结合起来.
const char* const x;
//上面示例中，指针变量x指向一个字符串。两个const意味着，x包含的内存地址以及x指向的字符串，都不能修改。

//const的一个用途，就是防止函数体内修改函数参数。如果某个参数在函数体内不会被修改，可以在函数声明时，对该参数添加const说明符。这样的话，使用这个函数的人看到原型里面的const，就知道调用函数前后，参数数组保持不变。
void find(const int* arr, int n);
//有一种情况需要注意，如果一个指针变量指向const变量，那么该指针变量也不应该被修改。
const int i = 1;
int* j = &i;
*j = 2; // 报错
```

#### static

> `static`说明符对于全局变量和局部变量有不同的含义

> 用于局部变量（位于块作用域内部）
>
> > `static`用于函数内部声明的局部变量时，表示该变量的值会在函数每次执行后得到保留，下次执行时不会进行初始化，就类似于一个只用于函数内部的全局变量。由于不必每次执行函数时，都对该变量进行初始化，这样可以提高函数的执行速度。
>
> 用于全局变量（位于块作用域外部）
>
> > `static`用于函数外部声明的全局变量时，表示该变量只用于当前文件，其他源码文件不可以引用该变量，即该变量不会被链接（link）

```c
//static修饰的变量，初始化时，值不能等于变量，必须是常量
int n = 10;
static m = n; // 报错

//只在当前文件里面使用的函数，也可以声明为static，表明该函数只在当前文件使用，其他文件可以定义同名函数。
static int g(int i);
```

#### auto

> `auto`说明符表示该变量的存储，由编译器自主分配内存空间，且只存在于定义时所在的作用域，退出作用域时会自动释放

```c
//由于只要不是extern的变量（外部变量），都是由编译器自主分配内存空间的，这属于默认行为，所以该说明符没有实际作用，一般都省略不写
auto int a;
// 等同于
int a;
```

#### extern

> `extern`说明符表示，该变量在其他文件里面声明，没有必要在当前文件里面为它分配空间。通常用来表示，该变量是多个文件共享的

```c
extern int a;
//上面代码中，a是extern变量，表示该变量在其他文件里面定义和初始化，当前文件不必为它分配存储空间

//但是，当变量声明时，同时进行初始化，extern就会无效。
// extern 无效
extern int i = 0;
// 等同于
int i = 0;

//函数内部使用extern声明变量，就相当于该变量是静态存储，每次执行时都要从外部获取它的值
//函数本身默认是extern，即该函数可以被外部文件共享，通常省略extern不写。如果只希望函数在当前文件可用，那就需要在函数前面加上static
extern int f(int i);
// 等同于
int f(int i);
```

#### register

> `register`说明符向编译器表示，该变量是经常使用的，应该提供最快的读取速度，所以应该放进寄存器。但是，编译器可以忽略这个说明符，不一定按照这个指示行事。register只对声明在代码块内部的变量有效

```c
register int a;
//上面示例中，register提示编译器，变量a会经常用到，要为它提供最快的读取速度

//设为register的变量，不能获取它的地址
register int a;
int *p = &a; // 编译器报错
//上面示例中，&a会报错，因为变量a可能放在寄存器里面，无法获取内存地址。

//如果数组设为register，也不能获取整个数组或任一个数组成员的地址
register int a[] = {11, 22, 33, 44, 55};
int p = a;  // 报错
int a = *(a + 2); // 报错

//历史上，CPU 内部的缓存，称为寄存器（register）。与内存相比，寄存器的访问速度快得多，所以使用它们可以提高速度。但是它们不在内存之中，所以没有内存地址，这就是为什么不能获取指向它们的指针地址。现代编译器已经有巨大的进步，会尽可能优化代码，按照自己的规则决定怎么利用好寄存器，取得最佳的执行速度，所以可能会忽视代码里面的register说明符，不保证一定会把这些变量放到寄存器
```

#### volatile

> `volatile`说明符表示所声明的变量，可能会预想不到地发生变化（即其他程序可能会更改它的值），不受当前程序控制，因此编译器不要对这类变量进行优化，每次使用时都应该查询一下它的值。硬件设备的编程中，这个说明符很常用

```c
volatile int foo;
volatile int* bar;

//volatile的目的是阻止编译器对变量行为进行优化，请看下面的例子。
int foo = x;
// 其他语句，假设没有改变 x 的值
int bar = x;
//上面代码中，由于变量foo和bar都等于x，而且x的值也没有发生变化，所以编译器可能会把x放入缓存，直接从缓存读取值（而不是从 x 的原始内存位置读取），然后对foo和bar进行赋值。如果x被设定为volatile，编译器就不会把它放入缓存，每次都从原始位置去取x的值，因为在两次读取之间，其他程序可能会改变x
```

#### restrict

> `restrict`说明符允许编译器优化某些代码。它只能用于指针，表明该指针是访问数据的唯一方式

```c
int* restrict pt = (int*) malloc(10 * sizeof(int));
//上面示例中，restrict表示变量pt是访问 malloc 所分配内存的唯一方式

//下面例子的变量foo，就不能使用restrict修饰符。
int foo[10];
int* bar = foo;
//上面示例中，变量foo指向的内存，可以用foo访问，也可以用bar访问，因此就不能将foo设为 restrict。

//如果编译器知道某块内存只能用一个方式访问，可能可以更好地优化代码，因为不用担心其他地方会修改值。

//restrict用于函数参数时，表示参数的内存地址之间没有重叠。
void swap(int* restrict a, int* restrict b) {
  int t;
  t = *a;
  *a = *b;
  *b = t;
}
//上面示例中，函数参数声明里的restrict表示，参数a和参数b的内存地址没有重叠。
```

### 多文件项目

> 一个软件项目往往包含多个源码文件，编译时需要将这些文件一起编译，生成一个可执行文件

#### 简单使用

```c
//假定一个项目有两个源码文件foo.c和bar.c，其中foo.c是主文件，bar.c是库文件。所谓“主文件”，就是包含了main()函数的项目入口文件，里面会引用库文件定义的各种函数。

// File foo.c
#include <stdio.h>
int main(void) {
  printf("%d\n", add(2, 3));  // 5!
}
//上面代码中，主文件foo.c调用了函数add()，这个函数是在库文件bar.c里面定义的。
// File bar.c
int add(int x, int y) {
  return x + y;
}

//现在，将这两个文件一起编译。
$ gcc -o foo foo.c bar.c
# 更省事的写法
$ gcc -o foo *.c
//上面命令中，gcc 的-o参数指定生成的二进制可执行文件的文件名，本例是foo。
    
//这个命令运行后，编译器会发出警告，原因是在编译foo.c的过程中，编译器发现一个不认识的函数add()，foo.c里面没有这个函数的原型或者定义。因此，最好修改一下foo.c，在文件头部加入add()的原型。
// File foo.c
#include <stdio.h>
int add(int, int);
int main(void) {
  printf("%d\n", add(2, 3));  // 5!
}

//现在再编译就没有警告了
//你可能马上就会想到，如果有多个文件都使用这个函数add()，那么每个文件都需要加入函数原型。一旦需要修改函数add()（比如改变参数的数量），就会非常麻烦，需要每个文件逐一改动。所以，通常的做法是新建一个专门的头文件bar.h，放置所有在bar.c里面定义的函数的原型。
// File bar.h
int add(int, int);
//然后使用include命令，在用到这个函数的源码文件里面加载这个头文件bar.h。
// File foo.c
#include <stdio.h>
#include "bar.h"
int main(void) {
  printf("%d\n", add(2, 3));  // 5!
}
//上面代码中，#include "bar.h"表示加入头文件bar.h。这个文件没有放在尖括号里面，表示它是用户提供的；它没有写路径，就表示与当前源码文件在同一个目录。

//然后，最好在bar.c里面也加载这个头文件，这样可以让编译器验证，函数原型与函数定义是否一致。
// File bar.c
#include "bar.h"
int add(int a, int b) {
  return a + b;
}
```

#### 重复加载

> 头文件里面还可以加载其他头文件，因此有可能产生重复加载。比如，`a.h`和`b.h`都加载了`c.h`，然后`foo.c`同时加载了`a.h`和`b.h`，这意味着`foo.c`会编译两次`c.h`

```c
//最好避免这种重复加载，虽然多次定义同一个函数原型并不会报错，但是有些语句重复使用会报错，比如多次重复定义同一个 Struct 数据结构。解决重复加载的常见方法是，在头文件里面设置一个专门的宏，加载时一旦发现这个宏存在，就不再继续加载当前文件了。
// File bar.h
#ifndef BAR_H
  #define BAR_H
  int add(int, int);
#endif
//上面示例中，头文件bar.h使用#ifndef和#endif设置了一个条件判断。每当加载这个头文件时，就会执行这个判断，查看有没有设置过宏BAR_H。如果设置过了，表明这个头文件已经加载过了，就不再重复加载了，反之就先设置一下这个宏，然后加载函数原型。
```

#### extern 说明符

> 当前文件还可以使用其他文件定义的变量，这时要使用`extern`说明符，在当前文件中声明，这个变量是其他文件定义的

```c
extern int myVar;
//上面示例中，extern说明符告诉编译器，变量myvar是其他脚本文件声明的，不需要在这里为它分配内存空间。

//由于不需要分配内存空间，所以extern声明数组时，不需要给出数组长度。
extern int a[];
//这种共享变量的声明，可以直接写在源码文件里面，也可以放在头文件中，通过#include指令加载。
```

#### static 说明符

> 正常情况下，当前文件内部的全局变量，可以被其他文件使用。有时候，不希望发生这种情况，而是希望某个变量只局限在当前文件内部使用，不要被其他文件引用

```c
//这时可以在声明变量的时候，使用static关键字，使得该变量变成当前文件的私有变量
static int foo = 3;
//上面示例中，变量foo只能在当前文件里面使用，其他文件不能引用
```

#### 编译策略

> 多个源码文件的项目，编译时需要所有文件一起编译。哪怕只是修改了一行，也需要从头编译，非常耗费时间

```shell
#为了节省时间，通常的做法是将编译拆分成两个步骤。
#第一步，使用 GCC 的-c参数，将每个源码文件单独编译为对象文件（object file）。
#第二步，将所有对象文件链接在一起，合并生成一个二进制可执行文件
$ gcc -c foo.c # 生成 foo.o
$ gcc -c bar.c # 生成 bar.o
# 更省事的写法
$ gcc -c *.c
#上面命令为源码文件foo.c和bar.c，分别生成对象文件foo.o和bar.o。
    
#对象文件不是可执行文件，只是编译过程中的一个阶段性产物，文件名与源码文件相同，但是后缀名变成了.o。
    
/#得到所有的对象文件以后，再次使用gcc命令，将它们通过链接，合并生成一个可执行文件。
$ gcc -o foo foo.o bar.o
# 更省事的写法
$ gcc -o foo *.o
    
#以后，修改了哪一个源文件，就将这个文件重新编译成对象文件，其他文件不用重新编译，可以继续使用原来的对象文件，最后再将所有对象文件重新链接一次就可以了。由于链接的耗时大大短于编译，这样做就节省了大量时间
```

#### make 命令

> 大型项目的编译，如果全部手动完成，是非常麻烦的，容易出错。一般会使用专门的自动化编译工具，比如 make
>
> > make 是一个命令行工具，使用时会自动在当前目录下搜索配置文件 makefile（也可以写成 Makefile）。该文件定义了所有的编译规则，每个编译规则对应一个编译产物。为了得到这个编译产物，它需要知道两件事。
> >
> > > - 依赖项（生成该编译产物，需要用到哪些文件）
> > > - 生成命令（生成该编译产物的命令）

```shell
#比如，对象文件foo.o是一个编译产物，它的依赖项是foo.c，生成命令是gcc -c foo.c。对应的编译规则如下：
foo.o: foo.c
  gcc -c foo.c
#上面示例中，编译规则由两行组成。第一行首先是编译产物，冒号后面是它的依赖项，第二行则是生成命令。
#注意，第二行的缩进必须使用 Tab 键，如果使用空格键会报错。
    
#完整的配置文件 makefile 由多个编译规则组成，可能是下面的样子。
foo: foo.o bar.o
  gcc -o foo foo.o bar.o

foo.o: bar.h foo.c
  gcc -c foo.c

bar.o: bar.h bar.c
  gcc -c bar.c
#上面是 makefile 的一个示例文件。它包含三个编译规则，对应三个编译产物（foo.o、bar.o和foo），每个编译规则之间使用空行分隔。
    
#有了 makefile，编译时，只要在 make 命令后面指定编译目标（编译产物的名字），就会自动调用对应的编译规则
$ make foo.o
# or
$ make bar.o
# or
$ make foo
#上面示例中，make 命令会根据不同的命令，生成不同的编译产物。

#如果省略了编译目标，make命令会执行第一条编译规则，构建相应的产物。
$ make
#上面示例中，make后面没有编译目标，所以会执行 makefile 的第一条编译规则，本例是make foo。由于用户期望执行make后得到最终的可执行文件，所以建议总是把最终可执行文件的编译规则，放在 makefile 文件的第一条。makefile 本身对编译规则没有顺序要求。
    
#make 命令的强大之处在于，它不是每次执行命令，都会进行编译，而是会检查是否有必要重新编译。具体方法是，通过检查每个源码文件的时间戳，确定在上次编译之后，哪些文件发生过变动。然后，重新编译那些受到影响的编译产物（即编译产物直接或间接依赖于那些发生变动的源码文件），不受影响的编译产物，就不会重新编译。

#举例来说，上次编译之后，修改了foo.c，没有修改bar.c和bar.h。于是，重新运行make foo命令时，Make 就会发现bar.c和bar.h没有变动过，因此不用重新编译bar.o，只需要重新编译foo.o。有了新的foo.o以后，再跟bar.o一起，重新编译成新的可执行文件foo。
```

```
注意：make : 无法将“make”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。
解决方法：渠道minGW/bin文件下，找到mingw32-make.exe文件，重命名为make.exe即可。
```

### 命令行环境

#### 命令行参数

> C 语言程序可以从命令行接收参数

```shell
$ ./foo hello world
#上面示例中，程序foo接收了两个命令行参数hello和world
#程序内部怎么拿到命令行参数呢？C 语言会把命令行输入的内容，放在一个数组里面。main()函数的参数可以接收到这个数组。
```

```c
#include <stdio.h>
int main(int argc, char* argv[]) {
  for (int i = 0; i < argc; i++) {
    printf("arg %d: %s\n", i, argv[i]);
  }
}
//上面示例中，main()函数有两个参数argc（argument count）和argv（argument variable）。这两个参数的名字可以任意取，但是一般来说，约定俗成就是使用这两个词。
//第一个参数argc是命令行参数的数量，由于程序名也被计算在内，所以严格地说argc是参数数量 + 1
//第二个参数argv是一个数组，保存了所有的命令行输入，它的每个成员是一个字符串指针。

//以上述为例，argc是3，表示命令行输入有三个组成部分：./foo、hello、world。数组argv用来获取这些输入，argv[0]是程序名./foo，argv[1]是hello，argv[2]是world。一般来说，argv[1]到argv[argc - 1]依次是命令行的所有参数。argv[argc]则是一个空指针 NULL。

//由于字符串指针可以看成是字符数组，所以下面两种写法是等价的
// 写法一
int main(int argc, char* argv[])
// 写法二
int main(int argc, char** argv)
```

#### 退出状态

> C 语言规定，如果`main()`函数没有`return`语句，那么结束运行的时候，默认会添加一句`return 0`，即返回整数`0`。这就是为什么`main()`语句通常约定返回一个整数值，并且返回整数`0`表示程序运行成功。如果返回非零值，就表示程序运行出了问题

```shell
# Bash 的环境变量$?可以用来读取上一个命令的返回值，从而知道是否运行成功
$ ./foo hello world
$ echo $?
0
# 上面示例中，echo $?用来打印环境变量$?的值，该值为0，就表示上一条命令运行成功，否则就是运行失败。
# 注意，只有main()会默认添加return 0，其他函数都没有这个机制
```

#### 环境变量

> C 语言提供了`getenv()`函数（原型在`stdlib.h`）用来读取命令行环境变量

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
  char* val = getenv("HOME");
  if (val == NULL) {
    printf("Cannot find the HOME environment variable\n");
    return 1;
  }
  printf("Value: %s\n", val);
  return 0;
}
//上面示例中，getenv("HOME")用来获取命令行的环境变量$HOME，如果这个变量为空（NULL），则程序报错返回
```

### 多字节字符

#### Unicode

```
C 语言诞生时，只考虑了英语字符，使用7位的 ASCII 码表示所有字符。ASCII 码的范围是0到127，也就是最多只能表示100多个字符，用一个字节就可以表示，所以char类型只占用一个字节。

Unicode 为每个字符提供一个号码，称为码点（code point），其中0到127的部分，跟 ASCII 码是重合的。通常使用“U+十六进制码点”表示一个字符，比如U+0041表示字母A。

Unicode 编码目前一共包含了100多万个字符，码点范围是 U+0000 到 U+10FFFF。完整表达整个 Unicode 字符集，至少需要三个字节。但是，并不是所有文档都需要那么多字符，比如对于 ASCII 码就够用的英语文档，如果每个字符使用三个字节表示，就会比单字节表示的文件体积大出三倍。

为了适应不同的使用需求，Unicode 标准委员会提供了三种不同的表示方法，表示 Unicode 码点：
UTF-8：使用1个到4个字节，表示一个码点。不同的字符占用的字节数不一样。
UTF-16：对于U+0000 到 U+FFFF 的字符（称为基本平面），使用2个字节表示一个码点。其他字符使用4个字节。
UTF-32：统一使用4个字节，表示一个码点。

其中，UTF-8 的使用最为广泛，因为对于 ASCII 字符（U+0000 到 U+007F），它只使用一个字节表示，这就跟 ASCII 的编码方式完全一样。

C 语言提供了两个宏，表示当前系统支持的编码字节长度。这两个宏都定义在头文件limits.h：
MB_LEN_MAX：任意支持地区的最大字节长度，定义在limits.h。
MB_CUR_MAX：当前语言的最大字节长度，总是小于或等于MB_LEN_MAX，定义在stdlib.h。
```

#### 字符的表示方法

> 字符表示方法的本质，是将每个字符映射为一个整数，然后从编码表获得该整数对应的字符

```
C 语言提供了不同的写法，用来表示字符的整数号码：
\123：以八进制值表示一个字符，斜杠后面需要三个数字。
\x4D：以十六进制表示一个字符，\x后面是十六进制整数。
\u2620：以 Unicode 码点表示一个字符（不适用于 ASCII 字符），码点以十六进制表示，\u后面需要4个字符。
\U0001243F：以 Unicode 码点表示一个字符（不适用于 ASCII 字符），码点以十六进制表示，\U后面需要8个字符。
```

#### 多字节字符的表示

> C 语言预设只有基本字符，才能使用字面量表示，其它字符都应该使用码点表示，并且当前系统还必须支持该码点的编码方法
>
> 所谓基本字符，指的是所有可打印的 ASCII 字符，但是有三个字符除外：`@`、`$`、```

```c
/*遇到非英语字符，应该将其写成 Unicode 码点形式*/
char* s = "\u6625\u5929";
printf("%s\n", s); // 春天

/*注意，\u + 码点和\U + 码点的写法，不能用来表示 ASCII 码字符（码点小于0xA0的字符），只有三个字符除外：0x24（$），0x40（@）和0x60（`）*/
char* s = "\u0024\u0040\u0060";
printf("%s\n", s);  // @$`
/*上面代码会输出三个 Unicode 字符“@$`”，但是其它 ASCII 字符都不能用这种表示法表示。*/

//为了保证程序执行时，字符能够正确解读，最好将程序环境切换到本地化环境。
setlocale(LC_ALL, "");
//上面代码中，使用setlocale()切换执行环境到系统的本地化语言。setlocale()的原型定义在头文件locale.h。
//像下面这样，指定编码语言也可以
setlocale(LC_ALL, "zh_CN.UTF-8");

//C 语言允许使用u8前缀，对多字节字符串指定编码方式为 UTF-8。
char* s = u8"春天";
printf("%s\n", s);

//一旦字符串里面包含多字节字符，就意味着字符串的字节数与字符数不再一一对应了。比如，字符串的长度为10字节，就不再是包含10个字符，而可能只包含7个字符、5个字符等等。
setlocale(LC_ALL, "");
char* s = "春天";
printf("%d\n", strlen(s)); // 6

//C 语言的字符串函数只针对单字节字符有效，对于多字节字符都会失效，比如strtok()、strchr()、strspn()、toupper()、tolower()、isalpha()等不会得到正确结果。
```

#### 宽字符

> 多字节字符串，每个字符的字节宽度是可变的。这种编码方式虽然使用起来方便，但是很不利于字符串处理，因此必须逐一检查每个字符占用的字节数。所以除了这种方式，C 语言还提供了确定宽度的多字节字符存储方式，称为宽字符（wide character）
>
> 所谓“宽字符”，就是每个字符占用的字节数是固定的，要么是2个字节，要么是4个字节。这样的话，就很容易快速处理
>
> 宽字符有一个单独的数据类型 wchar_t，每个宽字符都是这个类型。它属于整数类型的别名，可能是有符号的，也可能是无符号的，由当前实现决定。该类型的长度为16位（2个字节）或32位（4个字节），足以容纳当前系统的所有字符。它定义在头文件`wchar.h`里面
>
> 宽字符的字面量必须加上前缀“L”，否则 C 语言会把字面量当作窄字符类型处理

```c
setlocale(LC_ALL, "");

wchar_t c = L'牛'；
printf("%lc\n", c);

wchar_t* s = L"春天";
printf("%ls\n", s);
//上面示例中，前缀“L”在单引号前面，表示宽字符，对应printf()的占位符为%lc；在双引号前面，表示宽字符串，对应printf()的占位符为%ls。
//宽字符串的结尾也有一个空字符，不过是宽空字符，占用多个字节
//处理宽字符，需要使用宽字符专用的函数，绝大部分都定义在头文件wchar.h
```

#### 多字节字符处理函数

##### mblen()

> mblen()`函数返回一个多字节字符占用的字节数。它的原型定义在头文件`stdlib.h

```c
int mblen(const char* mbstr, size_t n);
//它接受两个参数，第一个参数是多字节字符串指针，一般会检查该字符串的第一个字符；第二个参数是需要检查的字节数，这个数字不能大于当前系统单个字符占用的最大字节，一般使用MB_CUR_MAX。

//它的返回值是该字符占用的字节数。如果当前字符是空的宽字符，则返回0；如果当前字符不是有效的多字节字符，则返回-1。
setlocale(LC_ALL, "");
char* mbs1 = "春天";
printf("%d\n", mblen(mbs1, MB_CUR_MAX)); // 3
char* mbs2 = "abc";
printf("%d\n", mblen(mbs2, MB_CUR_MAX)); // 1
//上面示例中，字符串“春天”的第一个字符“春”，占用3个字节；字符串“abc”的第一个字符“a”，占用1个字节
```

##### wctomb() 

> wctomb()`函数（wide character to multibyte）用于将宽字符转为多字节字符。它的原型定义在头文件`stdlib.h

```c
int wctomb(char* s, wchar_t wc);
//wctomb()接受两个参数，第一个参数是作为目标的多字节字符数组，第二个参数是需要转换的一个宽字符。它的返回值是多字节字符存储占用的字节数量，如果无法转换，则返回-1。
setlocale(LC_ALL, "");
wchar_t wc = L'牛';
char mbStr[10] = "";
int nBytes = 0;
nBytes = wctomb(mbStr, wc);
printf("%s\n", mbStr);  // 牛
printf("%d\n", nBytes);  // 3
//上面示例中，wctomb()将宽字符“牛”转为多字节字符，wctomb()的返回值表示转换后的多字节字符占用3个字节
```

##### mbtowc()

> mbtowc()`用于将多字节字符转为宽字符。它的原型定义在头文件`stdlib.h

```c
int mbtowc(
   wchar_t* wchar,
   const char* mbchar,
   size_t count
);
//它接受3个参数，第一个参数是作为目标的宽字符指针，第二个参数是待转换的多字节字符指针，第三个参数是多字节字符的字节数。
//它的返回值是多字节字符的字节数，如果转换失败，则返回-1
setlocale(LC_ALL, "");
char* mbchar = "牛";
wchar_t wc;
wchar_t* pwc = &wc;
int nBytes = 0;
nBytes = mbtowc(pwc, mbchar, 3);
printf("%d\n", nBytes); // 3
printf("%lc\n", *pwc);  // 牛
//上面示例中，mbtowc()将多字节字符“牛”转为宽字符wc，返回值是mbchar占用的字节数（占用3个字节）
```

##### wcstombs()

> wcstombs()`用来将宽字符串转换为多字节字符串。它的原型定义在头文件`stdlib.h

```c
size_t wcstombs(
   char* mbstr,
   const wchar_t* wcstr,
   size_t count
);
//它接受三个参数，第一个参数mbstr是目标的多字节字符串指针，第二个参数wcstr是待转换的宽字符串指针，第三个参数count是用来存储多字节字符串的最大字节数。
//如果转换成功，它的返回值是成功转换后的多字节字符串的字节数，不包括尾部的字符串终止符；如果转换失败，则返回-1
setlocale(LC_ALL, "");
char mbs[20];
wchar_t* wcs = L"春天";
int nBytes = 0;
nBytes = wcstombs(mbs, wcs, 20);
printf("%s\n", mbs); // 春天
printf("%d\n", nBytes); // 6
//上面示例中，wcstombs()将宽字符串wcs转为多字节字符串mbs，返回值6表示写入mbs的字符串占用6个字节，不包括尾部的字符串终止符。
//如果wcstombs()的第一个参数是 NULL，则返回转换成功所需要的目标字符串的字节数
```

##### mbstowcs()

> mbstowcs()`用来将多字节字符串转换为宽字符串。它的原型定义在头文件`stdlib.h

```c
size_t mbstowcs(
  wchar_t* wcstr,
  const char* mbstr,
  size_t count
);
//它接受三个参数，第一个参数wcstr是目标宽字符串，第二个参数mbstr是待转换的多字节字符串，第三个参数是待转换的多字节字符串的最大字符数。
//转换成功时，它的返回值是成功转换的多字节字符的数量；转换失败时，返回-1。如果返回值与第三个参数相同，那么转换后的宽字符串不是以 NULL 结尾的。
setlocale(LC_ALL, "");
char* mbs = "天气不错";
wchar_t wcs[20];
int nBytes = 0;
nBytes = mbstowcs(wcs, mbs, 20);
printf("%ls\n", wcs); // 天气不错
printf("%d\n", nBytes); // 4
//上面示例中，多字节字符串mbs被mbstowcs()转为宽字符串，成功转换了4个字符，所以该函数的返回值为4。
//如果mbstowcs()的第一个参数为NULL，则返回目标宽字符串会包含的字符数量
```

