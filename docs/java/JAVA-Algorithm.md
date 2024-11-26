# 算法

## 数据排名

```java
/**
 * 排名
 * 如：a=3.1;b=3.1;c=2 ==> a=1/3;b=1/3;c=3/3
 *
 * @param dataList 数据
 * @return 《数据，排名》
 */
public static Map<BigDecimal, String> calculateRanks(List<BigDecimal> dataList) {
    dataList.sort(Collections.reverseOrder());
    Map<BigDecimal, String> rankMap = new HashMap<>();
    int size = dataList.size();
    String rankStr = "/" + size;
    int rank = 1;
    for (int i = 0; i < size; i++) {
        BigDecimal value = dataList.get(i);
        BigDecimal nextValue = (i + 1 < size) ? dataList.get(i + 1) : null;
        if (nextValue == null || value.compareTo(nextValue) != 0) {
            rankMap.put(value, rank + rankStr);
        } else {
            rankMap.put(value, rank + rankStr);
            while (i + 1 < size && value.compareTo(dataList.get(i + 1)) == 0) {
                i++;
                rank++;
            }
        }
        rank++;
    }
    return rankMap;
}
```

## 树数据

```java
public List<IndustryClassifyVO> buildTree(List<IndustryClassifyVO> nodes) {
    Map<String, IndustryClassifyVO> nodeMap = new HashMap<>();
    // 将节点映射到其ID
    for (IndustryClassifyVO node : nodes) {
        nodeMap.put(node.getIndustrySid(), node);
    }
    List<IndustryClassifyVO> roots = new ArrayList<>();
    for (IndustryClassifyVO node : nodes) {
        IndustryClassifyVO parent = nodeMap.get(node.getParentIndSid());
        if (parent != null) {
            parent.addChild(node);
        } else {
            roots.add(node);
        }
    }
    return roots;
}
```

