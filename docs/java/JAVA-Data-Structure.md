# 数据结构

## 枚举（Enumeration）

```java
/*
	Enumeration接口中定义了一些方法，通过这些方法可以枚举（一次获得一个）对象集合中的元素
 */
public static void main(String args[]) {
    Enumeration<String> days;
    Vector<String> dayNames = new Vector<String>();
    dayNames.add("Sunday");
    dayNames.add("Monday");
    dayNames.add("Tuesday");
    dayNames.add("Wednesday");
    dayNames.add("Thursday");
    dayNames.add("Friday");
    dayNames.add("Saturday");
    days = dayNames.elements();
    while (days.hasMoreElements()){
        System.out.println(days.nextElement()); 
    }
}
```

## 位集合（BitSet）

```java
 public static void main(String args[]) {
    BitSet bits1 = new BitSet(16);
    BitSet bits2 = new BitSet(16);
    // set some bits
    for(int i=0; i<16; i++) {
        if((i%2) == 0) bits1.set(i);
        if((i%5) != 0) bits2.set(i);
    }
    System.out.println("Initial pattern in bits1: ");
    System.out.println(bits1);
    System.out.println("\nInitial pattern in bits2: ");
    System.out.println(bits2);
    // AND bits 逻辑与
    bits2.and(bits1);
    System.out.println("\nbits2 AND bits1: ");
    System.out.println(bits2);
    // OR bits 逻辑或
    bits2.or(bits1);
    System.out.println("\nbits2 OR bits1: ");
    System.out.println(bits2);
    // XOR bits 逻辑异或
    bits2.xor(bits1);
    System.out.println("\nbits2 XOR bits1: ");
    System.out.println(bits2);
}
```

## 向量（Vector）

```java
public static void main(String args[]) {
    // initial size is 3, increment is 2  初始化3，扩容2
    Vector v = new Vector(3, 2);
    System.out.println("Initial size: " + v.size());
    System.out.println("Initial capacity: " +
                       v.capacity());
    v.addElement(new Integer(1));
    v.addElement(new Integer(2));
    v.addElement(new Integer(3));
    v.addElement(new Integer(4));
    System.out.println("Capacity after four additions: " +
                       v.capacity());
    v.addElement(new Double(5.45));
    System.out.println("Current capacity: " +
                       v.capacity());
    v.addElement(new Double(6.08));
    v.addElement(new Integer(7));
    System.out.println("Current capacity: " +
                       v.capacity());
    v.addElement(new Float(9.4));
    v.addElement(new Integer(10));
    System.out.println("Current capacity: " +
                       v.capacity());
    v.addElement(new Integer(11));
    v.addElement(new Integer(12));
    System.out.println("First element: " +
                       (Integer)v.firstElement());
    System.out.println("Last element: " +
                       (Integer)v.lastElement());
    if(v.contains(new Integer(3)))
        System.out.println("Vector contains 3.");
    // enumerate the elements in the vector.
    Enumeration vEnum = v.elements();
    System.out.println("\nElements in vector:");
    while(vEnum.hasMoreElements())
        System.out.print(vEnum.nextElement() + " ");
    System.out.println();
}
```

## 栈（Stack）

```java
//栈是Vector的一个子类，它实现了一个标准的后进先出（LIFO）的栈。
/*
	boolean empty() 测试堆栈是否为空。
	Object peek( ) 查看堆栈顶部的对象，但不从堆栈中移除它。
	Object pop( ) 移除堆栈顶部的对象，并作为此函数的值返回该对象。
	Object push(Object element) 把项压入堆栈顶部。
	int search(Object element) 返回对象在堆栈中的位置，以 1 为基数。
*/
static void showpush(Stack<Integer> st, int a) {
    st.push(new Integer(a));
    System.out.println("push(" + a + ")");
    System.out.println("stack: " + st);
}
static void showpop(Stack<Integer> st) {
    System.out.print("pop -> ");
    Integer a = (Integer) st.pop();
    System.out.println(a);
    System.out.println("stack: " + st);
}
public static void main(String args[]) {
    Stack<Integer> st = new Stack<Integer>();
    System.out.println("stack: " + st);
    showpush(st, 42);
    showpush(st, 66);
    showpush(st, 99);
    showpop(st);
    showpop(st);
    showpop(st);
    try {
        showpop(st);
    } catch (EmptyStackException e) {
        System.out.println("empty stack");
    }
}
```

## 字典（Dictionary）(过时)

```
类似与map，键值对形式。以键取值。
```

## 哈希表（Hashtable）

```
Hashtable是原始的java.util的一部分， 是一个Dictionary具体的实现 。
ava 2 重构的Hashtable实现了Map接口，因此，Hashtable现在集成到了集合框架中。它和HashMap类很相似，但是它支持同步。
```

## 属性（Properties）

```java
/*
	String getProperty(String key) 用指定的键在此属性列表中搜索属性。
	String getProperty(String key, String defaultProperty)
	void list(PrintStream streamOut) 将属性列表输出到指定的输出流。
	void list(PrintWriter streamOut)
	void load(InputStream streamIn)  从输入流中读取属性列表（键和元素对）
	Enumeration propertyNames( ) 按简单的面向行的格式从输入字符流中读取属性列表（键和元素对）
	Object setProperty(String key, String value) 调用 Hashtable 的方法 put
	void store(OutputStream streamOut, String description) 以适合使用load(InputStream)方法加载到Properties表中的格式，将此 Properties 表中的属性列表（键和元素对）写入输出流。
*/
public static void main(String args[]) {
    Properties capitals = new Properties();
    Set states;
    String str;
    capitals.put("Illinois", "Springfield");
    capitals.put("Missouri", "Jefferson City");
    capitals.put("Washington", "Olympia");
    capitals.put("California", "Sacramento");
    capitals.put("Indiana", "Indianapolis");
    // Show all states and capitals in hashtable.
    states = capitals.keySet(); // get set-view of keys
    Iterator itr = states.iterator();
    while(itr.hasNext()) {
        str = (String) itr.next();
        System.out.println("The capital of " +
                           str + " is " + capitals.getProperty(str) + ".");
    }
    System.out.println();
    // look for state not in list -- specify default
    str = capitals.getProperty("Florida", "Not Found");
    System.out.println("The capital of Florida is "
                       + str + ".");
}
```