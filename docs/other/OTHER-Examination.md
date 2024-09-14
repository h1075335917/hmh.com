---
sidebar_position: 1
---

# 其他-考试

### 1.JOptionPane

```
 JOptionPane类的常用静态方法如下：
 	showInputDialog()    输入弹窗
 	showConfirmDialog()  确认弹窗
 	showMessageDialog()  消息弹窗
 	showOptionDialog()   操作弹窗
```

```java
JOptionPane.showMessageDialog(null, "在对话框内显示的描述性的文字", "标题条文字串", JOptionPane.ERROR_MESSAGE);
```

### 2.求素数

```java
public class Test01  extends JFrame implements ActionListener {
    JTextField nval = new JTextField(10);
    //**********Found**********
    JButton calcBtn = new JButton("计算") ;
    JTextArea result = new JTextArea(10,20);
    void initFrame(){
        Container content = getContentPane();
        JPanel calcPanel = new JPanel();
        calcPanel.add(new JLabel("N值"));
        //**********Found**********
        calcPanel.add(nval);
        calcPanel.add(calcBtn);
        content.add(calcPanel,"North");
        //**********Found**********
        calcBtn.addActionListener(this);//添加监听时事件
        content.add(result,"Center");
        result. setEditable(false)  ;
    }
    public Test01(){
        super("计算素数");
        setSize(500,200);
        initFrame();
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
    public void actionPerformed(ActionEvent e){
        if(e.getSource()==calcBtn){
            int N=Integer.parseInt(nval.getText());
            int [] prime=new int[N/3+2];
            prime[0]=2;prime[1]=3;
            int k=2;
            for(int m=5;m<=N;m+=2){
                int j=1,isprime=1;
                int kk=Math.round((float)Math.sqrt(m));
                while(prime[j]<=kk){
                    if(m%prime[j]==0){
                        //**********Found**********
                        isprime=0;
                        break;
                    }else
                        //**********Found**********
                        j++;
                }
                if(isprime==1) prime[k++]=m;
            }
            //**********Found**********
            String str="Total prime number: "+k;
            result.setText("");
            result.append(str );
        }
    }
    public static void main(String[] args){
        new Test01();
    }
}
```

### 3.简单qq

```java
public class Test01 extends JFrame {
    private JTextField username;
    private JPasswordField password;
    private JLabel jl1;
    private JLabel jl2;
    private JLabel jl3;
    private JLabel jl4;
    private JButton bu1;
    private JButton bu2;
    private JButton bu3;
    private JCheckBox jc1;
    private JCheckBox jc2;
    private JComboBox jcb;
    public Test01() {
        this.setTitle("QQ2022正式版");
        init();
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // 设置布局方式为绝对定位
        this.setLayout(null);
        this.setBounds(0, 0, 355, 265);
        // 设置窗体的标题图标
        Image image = new ImageIcon("a.png").getImage();
        this.setIconImage(image);
        // 窗体大小不能改变
        this.setResizable(false);
        // 居中显示
        this.setLocationRelativeTo(null);
        this.setVisible(true);
    }
    public void init() {
        Container con = this.getContentPane();
        jl1 = new JLabel();
        // 设置背景图片
        Image image1 = new ImageIcon("background.jpg").getImage();
        jl1.setIcon(new ImageIcon(image1));
        jl1.setBounds(0, 0, 355, 265);
        jl2 = new JLabel();
        Image image2 = new ImageIcon("a.gif").getImage();
        jl2.setIcon(new ImageIcon(image2));
        jl2.setBounds(40, 95, 50, 60);
        username = new JTextField();
        username.setBounds(50, 50, 150, 20);
        jl3 = new JLabel("注册账号");
        jl3.setBounds(210, 50, 70, 20);
        password = new JPasswordField();
        password.setBounds(50, 80, 150, 20);
        jl4 = new JLabel("找回密码");
        jl4.setBounds(210, 80, 70, 20);
        jc1 = new JCheckBox("记住密码");
        jc1.setBounds(125, 135, 80, 15);
        jc2 = new JCheckBox("自动登录");
        jc2.setBounds(215, 135, 80, 15);
        jcb = new JComboBox();
        jcb.addItem("在线");
        jcb.addItem("隐身");
        jcb.addItem("离开");
        jcb.setBounds(40, 135, 55, 20);
        bu1 = new JButton("登录");
        bu1.setBounds(250, 200, 65, 20);
        bu1.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String str=e.getActionCommand();
                if("登录".equals(str)){
                    String getName =username.getText();
                    JOptionPane.showConfirmDialog(null, "您输入的用户名是"+getName);
                }
            }
        });
        bu2 = new JButton("多账号");
        bu2.setBounds(25, 200, 75, 20);
        bu3 = new JButton("设置");
        bu3.setBounds(140, 200, 65, 20);
        // 所有组件用容器装载
        jl1.add(jl2);
        jl1.add(jl3);
        jl1.add(jl4);
        jl1.add(jc1);
        jl1.add(jc2);
        jl1.add(jcb);
        jl1.add(bu1);
        jl1.add(bu2);
        jl1.add(bu3);
        con.add(jl1);
        con.add(username);
        con.add(password);
    }
    public static void main(String[] args) {
        Test01 qq = new Test01();
    }
}
```

### 4.AWT

```
主要包含组件（Component）、容器（Container）和布局管理器（LayoutManager）
Java的图形用户界面的最基本组成部分是组件（Component），组件不能独立地显示出来，必须将组件放在一定的容器中才可以显示出来；
```

```
组件（Component）类重要成员方法:
getComponentAt（int x，int y） //获得坐标（x，y）上的组件对象
getFont（） //获得组件的字体
paint（Grahics g） //绘制组件
repaint（） //重新绘制组件
setVisible（Boolean b） //设置组件是否可见
```

```
容器（Container）类，实际上是Component的子类，因此容器本身也是一个组件，具有组件的所有性质，但是它的主要功能是用来放置其他组件和容器；
```

