(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{10:function(t,e,s){t.exports=s.p+"assets/img/device-instance-general-info.229a6c08.png"},11:function(t,e,s){t.exports=s.p+"assets/img/device-instance-run-info.db488b8d.png"},12:function(t,e,s){t.exports=s.p+"assets/img/device-instance-log.780e22d1.png"},291:function(t,e,s){t.exports=s.p+"assets/img/rule-dingding-message-info.fc959daf.png"},292:function(t,e,s){t.exports=s.p+"assets/img/rule-dingding-message-gateway.56375ae4.png"},293:function(t,e,s){t.exports=s.p+"assets/img/rule-dingding-notice-dingding.f30c8234.png"},294:function(t,e,s){t.exports=s.p+"assets/img/dingding-config-info.f4765e2e.png"},295:function(t,e,s){t.exports=s.p+"assets/img/dingding-template-info.0dd771f5.png"},296:function(t,e,s){t.exports=s.p+"assets/img/save-rule-dingding.35a06b67.png"},297:function(t,e,s){t.exports=s.p+"assets/img/rule-list.982f7a7d.png"},298:function(t,e,s){t.exports=s.p+"assets/img/rule-example-list.a85aa074.png"},299:function(t,e,s){t.exports=s.p+"assets/img/rule-dingding-result.3e016475.jpg"},34:function(t,e,s){t.exports=s.p+"assets/img/mqttfx-device-event-report.d5ed86b2.png"},356:function(t,e,s){"use strict";s.r(e);var a=s(0),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"通过规则引擎处理设备事件消息发送钉钉通知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过规则引擎处理设备事件消息发送钉钉通知"}},[t._v("#")]),t._v(" 通过规则引擎处理设备事件消息发送钉钉通知")]),t._v(" "),a("p",[t._v("本文档介绍通过MQTT.fx发送消息到物联网平台，物联网平台通过规则引擎的将MQTT.fx发送的消息到用户"),a("code",[t._v("钉钉")]),t._v("客户端上。")]),t._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("已在平台中创建产品和设备")])]),t._v(" "),a("li",[a("p",[t._v("设备已接入平台（设备已上线）")])])]),t._v(" "),a("blockquote",[a("p",[t._v("创建产品和设备具体操作细节，请参考"),a("router-link",{attrs:{to:"/basics-guide/device-manager.md/#添加设备型号"}},[t._v("添加设备型号")]),t._v("、"),a("router-link",{attrs:{to:"/basics-guide/device-manager.md/#添加设备实例"}},[t._v("添加设备实例")]),t._v("。")],1),t._v(" "),a("p",[t._v("设备接入平台，请参考"),a("router-link",{attrs:{to:"/basics-guide/course/device-connection.html"}},[t._v("设备接入教程")])],1)]),t._v(" "),a("h3",{attrs:{id:"创建成功的设备实例信息展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建成功的设备实例信息展示"}},[t._v("#")]),t._v(" 创建成功的设备实例信息展示")]),t._v(" "),a("p",[t._v("i. 设备基本信息")]),t._v(" "),a("p",[a("img",{attrs:{src:s(10),alt:"设备基本信息"}})]),t._v(" "),a("p",[t._v("ii. 设备运行状态信息")]),t._v(" "),a("p",[a("img",{attrs:{src:s(11),alt:"设备运行状态信息"}})]),t._v(" "),a("p",[t._v("iii. 设备日志")]),t._v(" "),a("p",[a("img",{attrs:{src:s(12),alt:"设备日志"}})]),t._v(" "),a("h2",{attrs:{id:"新建规则引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建规则引擎"}},[t._v("#")]),t._v(" 新建规则引擎")]),t._v(" "),a("p",[t._v("进入系统: "),a("code",[t._v("规则引擎")]),t._v("-"),a("code",[t._v("规则模型")]),t._v(" 点击列表上的"),a("code",[t._v("添加模型")]),t._v(" 添加一个规则模型模板。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(291),alt:"add rule dingding"}})]),t._v(" "),a("p",[t._v("1.添加"),a("code",[t._v("消息网关")]),t._v("规则节点，用于接收设备事件上报消息。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(292),alt:"add rule dingding"}})]),t._v(" "),a("p",[t._v("i. "),a("code",[t._v("网关")]),t._v(":选择"),a("code",[t._v("系统默认")]),t._v("。")]),t._v(" "),a("p",[t._v("ii. "),a("code",[t._v("类型")]),t._v(":选择"),a("code",[t._v("订阅信息")]),t._v("。")]),t._v(" "),a("p",[t._v("iii. 填写"),a("code",[t._v("主题(Topic)")]),t._v("，该文档Topic使用"),a("code",[t._v("/device/**")]),t._v("(代表订阅以/device/开头的所有topic)。")]),t._v(" "),a("p",[t._v("2.添加"),a("code",[t._v("通知")]),t._v("规则节点，用于转发设备上报消息通知至"),a("code",[t._v("钉钉")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(293),alt:"add rule dingding"}})]),t._v(" "),a("blockquote",[a("p",[t._v("说明：上图第2步连线代表规则引擎节点指向下一个规则节点。参考文档"),a("router-link",{attrs:{to:"/basics-guide/course/rule-engine.html#连线"}},[t._v("规则引擎-连线")])],1)]),t._v(" "),a("p",[t._v("i. "),a("code",[t._v("通知类型")]),t._v(":选择"),a("code",[t._v("钉钉")]),t._v("。")]),t._v(" "),a("p",[t._v("ii. "),a("code",[t._v("通知器")]),t._v(":选择"),a("code",[t._v("钉钉")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("通知器")]),t._v("详情如下图，自定义"),a("code",[t._v("通知器")]),t._v("请参考文档"),a("router-link",{attrs:{to:"/basics-guide/course/notification.html#钉钉通知"}},[t._v("钉钉通知配置")])],1)]),t._v(" "),a("p",[a("img",{attrs:{src:s(294),alt:"add rule dingding"}})]),t._v(" "),a("p",[t._v("iii. "),a("code",[t._v("通知模板")]),t._v(":选择"),a("code",[t._v("钉钉")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("通知模板")]),t._v("详情如下图。")]),t._v(" "),a("p",[t._v("通知模板内容中，表达式："),a("code",[t._v('${#data["message"]["data"]}')]),t._v(" 会被规则引擎内置变量替换为消息网关所收到的设备上报事件数据。")]),t._v(" "),a("p",[t._v("自定义"),a("code",[t._v("通知模板")]),t._v("请参考文档："),a("router-link",{attrs:{to:"/basics-guide/course/notification.html#钉钉通知"}},[t._v("钉钉通知模板")])],1),t._v(" "),a("p",[t._v("规则引擎内置变量说明："),a("router-link",{attrs:{to:"/basics-guide/course/rule-engine.html#内置节点"}},[t._v("规则引擎-内置变量")])],1)]),t._v(" "),a("p",[a("img",{attrs:{src:s(295),alt:"add rule dingding"}})]),t._v(" "),a("p",[t._v("3."),a("code",[t._v("消息网关")]),t._v("和"),a("code",[t._v("通知")]),t._v("配置完成后，鼠标点击中间"),a("code",[t._v("空白处")]),t._v("，将会显示模型信息，"),a("code",[t._v("模型ID")]),t._v("填写完成后点击"),a("code",[t._v("保存")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(296),alt:"add rule dingding"}})]),t._v(" "),a("blockquote",[a("p",[t._v("点击中间空白区域将会显示"),a("code",[t._v("保存")]),t._v("按钮")])]),t._v(" "),a("p",[t._v("4.点击"),a("code",[t._v("操作")]),t._v("列中的"),a("code",[t._v("发布")]),t._v("按钮，发布规则引擎，发布成功后"),a("code",[t._v("规则实例")]),t._v("将会显示发布的"),a("code",[t._v("规则模型")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(297),alt:"rule list"}})]),t._v(" "),a("p",[t._v("5.进入"),a("code",[t._v("规则实例")]),t._v("列表也，点击"),a("code",[t._v("操作")]),t._v("列的"),a("code",[t._v("启动")]),t._v("按钮，运行"),a("code",[t._v("规则模型")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(298),alt:"rule list"}})]),t._v(" "),a("h2",{attrs:{id:"设备事件上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备事件上报"}},[t._v("#")]),t._v(" 设备事件上报")]),t._v(" "),a("p",[t._v("MQTT。fx 推送设备事件消息到平台")]),t._v(" "),a("p",[t._v("以火灾报警事件为例。")]),t._v(" "),a("p",[t._v("1.在MQTT。fx上，单击 "),a("code",[t._v("Publish")]),t._v("。")]),t._v(" "),a("p",[t._v("2.输入事件上报Topic和要发送的事件内容，单击Publish按钮，向平台推送该事件消息。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(34),alt:"设备事件上报"}})]),t._v(" "),a("p",[t._v("该文档使用的topic: "),a("code",[t._v("/chiefdata/push/fire_alarm/department/1/area/1/dev/test001")])]),t._v(" "),a("p",[t._v("该文档所使用的回复内容")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pname"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"烟感001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("105")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"a_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"未来科技城"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"b_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C2 栋"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12-05-201"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-06 16:28:50"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alarm_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alarm_describe"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"火灾报警"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"event_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"event_count"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("devid")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备Id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("pname")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备型号名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("aid")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("区域Id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("a_name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("区域名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("b_name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("建筑名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l_name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("位置名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("上报时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("alarm_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("报警类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("alarm_describe")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("报警描述")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("event_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("事件 ID")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("event_count")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("该事件上报次数")])])])]),t._v(" "),a("h2",{attrs:{id:"测试结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试结果"}},[t._v("#")]),t._v(" 测试结果")]),t._v(" "),a("p",[a("img",{attrs:{src:s(299),alt:"rule result"}})])])}),[],!1,null,null,null);e.default=v.exports}}]);