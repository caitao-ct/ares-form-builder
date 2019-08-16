# ares-form-builder 表单构建器

## 安装依赖
```
yarn install
```

## 开发环境运行
```
yarn serve
```

## 打包到 dist目录
```
yarn build
```

## 构建后的数据
```javascript
[
  [
    {
      "tagName": "title",
      "lineType": "allLine",
      "title": "标题",
      "class": ""
    },
    {
      "tagName": "input",
      "value": "",
      "title": "文本框",
      "lineType": "halfLine",
      "placeholder": "",
      "class": ""
    },
    {
      "tagName": "radio",
      "title": "单选框",
      "name": "",
      "class": "",
      "lineType": "halfLine",
      "options": [
        {
          "id": "01",
          "name": "选项一"
        },
        {
          "id": "02",
          "name": "选项二"
        }
      ]
    },
    {
      "tagName": "checkbox",
      "title": "复选框",
      "name": "",
      "lineType": "halfLine",
      "options": [
        {
          "id": "01",
          "name": "选项一"
        },
        {
          "id": "02",
          "name": "选项二"
        }
      ],
      "class": ""
    },
    {
      "tagName": "select",
      "title": "证件类型",
      "name": "",
      "class": "",
      "lineType": "halfLine",
      "options": [
        {
          "id": "01",
          "name": "身份证"
        },
        {
          "id": "02",
          "name": "护照"
        }
      ],
      "attrs": [
        {
          "key": "data-name",
          "value": "cardType"
        }
      ]
    },
    {
      "tagName": "area",
      "title": "省市区",
      "name": "",
      "class": "",
      "lineType": "allLine"
    }
  ],
  [
    {
      "tagName": "title",
      "lineType": "allLine",
      "title": "标题",
      "class": ""
    },
    {
      "tagName": "input",
      "value": "",
      "title": "文本框",
      "lineType": "halfLine",
      "placeholder": "",
      "class": ""
    },
    {
      "tagName": "input",
      "value": "",
      "title": "文本框",
      "lineType": "halfLine",
      "placeholder": "",
      "class": ""
    },
    {
      "tagName": "input",
      "value": "",
      "title": "文本框",
      "lineType": "halfLine",
      "placeholder": "",
      "class": ""
    }
  ]
]
```

## 目前支持控件类型

|   字段   |   说明   |
| ---- | ---- |
| input | 输入框 |
| title | 标题 |
| radio | 单选框 |
| checkbox | 复选框 |
| select | 下拉选择框 |
| area | 省市区选择框 |

## 字段说明
> 生成的数据为两层数组,结构为 ```[[],[],[]]```, 数组中每一个数组代表一个 Form.

|   字段   |   说明   |
| ---- | ---- |
| tagName   |   控件的名称,可通过该字段解析为对应的控件   |
| value    | 在输入框中用于表示输入框中的默认值    |
| title   |  控件的标题名称    |
| placeholder | 输入框中表示placeholder的值 |
| lineType | 控件占行类型, halfLine 表示半行,allLine 表示整行 |
| class | 控件 class 属性 |
| options | 在 radio,checkbox,select中表示选择项的数组, 数组的一个元素代表一个选项, 数组元素中的id代表选项的值,name表示需要显示页面上的数据 |
| attrs | 表示自定义设置的其他属性, 为一个数组, 数组的元素中的key代表属性名,value代表属性值 |

