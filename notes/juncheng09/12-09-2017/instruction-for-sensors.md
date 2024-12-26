---
title: "Sensor Collection For KnowFlow --a water-quality-testing facility"\ntagnames: 'water-quality, water, sensor, seeks:replications, knowflow, activity:data-logging, activity:knowflow, lang:zh, activity:water-sensors'
author: juncheng09
path: /notes/juncheng09/12-09-2017/instruction-for-sensors.md
nid: 15343
uid: 520219

---

![](https://publiclab.org/public/system/images/photos/000/022/879/original/geGuqxuCSrSFzCw7ZSHShQ.jpg)

# Sensor Collection For KnowFlow --a water-quality-testing facility

by [juncheng09](../profile/juncheng09) | December 09, 2017 14:38

December 09, 2017 14:38 | Tags: [water-quality](../tag/water-quality), [water](../tag/water), [sensor](../tag/sensor), [seeks:replications](../tag/seeks:replications), [knowflow](../tag/knowflow), [activity:data-logging](../tag/activity:data-logging), [activity:knowflow](../tag/activity:knowflow), [lang:zh](../tag/lang:zh), [activity:water-sensors](../tag/activity:water-sensors)

----

# foreword
I made a sensor collection for KnowFlow --a water-quality-testing facility. 
All these sensors do well with Arduino Uno.
You can get what you need more efficiently through my work.
Hope you can build your own KnowFlow with this research note.

# Main Tutorial for KnowFlow

[http://www.dfrobot.com.cn/community/forum.php?mod=viewthread&tid=29686&highlight=knowflow](http://www.dfrobot.com.cn/community/forum.php?mod=viewthread&tid=29686&highlight=knowflow)

HERE IS AN APPENDIX FOR THE TUTORIAL OF THE SENSORS WE USED ON KNOWFLOW 
---------

## SD card

[http://wiki.dfrobot.com.cn/index.php/SKU:DFR0229\_MicroSD卡模块\_兼容Arduino](http://wiki.dfrobot.com.cn/index.php/SKU:DFR0229_MicroSD%E5%8D%A1%E6%A8%A1%E5%9D%97_%E5%85%BC%E5%AE%B9Arduino)

## real time clock circuit board

[https://www.dfrobot.com/wiki/index.php/Gravity:\_I2C\_SD2405\_RTC\_Module\_SKU:\_DFR0469](https://www.dfrobot.com/wiki/index.php/Gravity:_I2C_SD2405_RTC_Module_SKU:_DFR0469)

## Water Sensors:

pH (pH probe and pH circuit board);

EC (EC probe and EC circuit board);

ORP (ORP probe and ORP circuit board);

Temperature (temperature probe and temperature circuit board);

Dissolved Oxygen (DO probe, BNC, and circuit board);

### pH (pH probe and pH circuit board)

[http://wiki.dfrobot.com.cn/index.php/(SKU:SEN0161)pH\_meter\_pH计](http://wiki.dfrobot.com.cn/index.php/(SKU:SEN0161)pH_meter_pH%E8%AE%A1)

背景资料： 在水中pH值的允许范围一般在6.5～8.5之间。就天然水域而言，其pH值的变化范围是比较小的。一般认为鱼能正常生存的酸碱度就是pH值的允许范围。当降雨时，鲑鱼在pH为5.5的条件下，就全部死亡。显然，pH值为5.5时就不是允许范围了。

使用步骤 注意： 请使用外接开关电源，使电压尽量接近+5.00V，电压越准，精度越高！ 电极在每次连续使用前均需要使用标准缓冲溶液进行校正，为取得更正确的结果，环境温度最好在25℃左右，已知PH值要可靠，而且其PH值愈接近被测值愈好。如您测量的样品为酸性，请使用PH4.00的缓冲溶液对电极进行校正，如果您测量的样品为碱性，请使用PH9.18缓冲溶液对电极进行校正。分段进行校准，只是为了获得更好的精度。 pH电极每测一种pH不同的溶液，都需要使用清水清洗，建议使用去离子水清洗。 为保证测量精度，建议使用校准液对pH计定期校准，以防止出现较大误差。一般半年校准一次，如果测量的溶液中含有较多杂质，建议增加校准次数！

(1)将各个设备按照图示方式连接，即：pH电极连接到pH meter电路板的BNC接口，然后用模拟连接线，将pH meter电路板连接到Arduino主控器的模拟口2。对Arduino主控器供电后，可以看到pH meter电路板的蓝色指示灯变亮。 (2)对Arduino主控器烧写样例代码。 (3)将pH电极插入到pH值为7.00的标准溶液中， 或者直接短接BNC接口的两个输入， 打开Arduino IDE的串口监视器，可以看到当前打印出的pH值，误差不会超过0.3。记录下此时打印的值，然后与7.00相比，把差值修改到程序中的Offset处（差值 = 标准值(7.0) - 打印值）。比如，打印出的pH值为6.88，则差值为0.12，则在样例程序中把#define Offset 0.00改成#define Offset 0.12。 (4)将pH电极插入pH值为4.00的校准液中，等待一分钟后，调整增益电位器，使打印出的pH值尽量稳定在4.00左右。此时，酸性段校准已经完成，您可以测试酸性溶液的pH值。 注意:测量其他溶液时，必须清洗电极。 (5)依靠pH电极自身的线性特性，经过以上的校准，可以直接测量碱性溶液的pH值，但如果您想获得更好的精度，建议重新校准。碱性段校准采用pH值为9.18的标准液，同样是调节增益电位器，使之稳定在9.18左右。经过校准，此时您可以测量碱性溶液的pH值了。

维护及注意事项

电极在初次使用或久置不用重新使用时，把电极球泡及砂芯，浸在3NKCL溶液中活化8小时。 取下电极保护套后要注意，在塑料保护栅内的敏感玻璃泡不与硬物接触，任何破损和擦毛都会使电极失效。 测量完毕，不用时应将电极保护套套上，保护套内应放少量3.3mol/L氯化钾溶液，以保持电极球泡的湿润。 电极的引出端，必须保持清洁和干燥，绝对防止输出两端短路，否则将导致测量结果失准或失效。 电极避免长期浸在蒸馏水中或蛋白质溶液和酸性氯化物溶液中，并防止和有机硅油脂接触。 电极经长期使用后，如发现梯度略有降低，则可把电极下端浸泡在4%HF（氢氟酸）中3-5秒钟，用蒸馏水洗净，然后在氯化钾溶液中浸泡，使之复新。 被测溶液中如含有易污染敏感球泡货堵塞液接界的物质，而使电极钝化，其现象是敏感梯度降低，货读数不准。如此，则应根据污染物质的性质，以适当溶液清洗，使之复新。 选用清洗剂时，如能溶解聚碳酸树脂的清洗液，如四氯化碳，三氯乙烯，四氢呋喃等，则可能把聚碳酸树脂溶解后，涂在敏感玻璃球泡上，而使电极失效，请慎用！

### EC (Electrical Conductivity)(EC probe and EC circuit board)

[http://wiki.dfrobot.com.cn/index.php/(SKU:DFR0300)Analog\_EC\_Meter\_模拟电导率计](http://wiki.dfrobot.com.cn/index.php/(SKU:DFR0300)Analog_EC_Meter_%E6%A8%A1%E6%8B%9F%E7%94%B5%E5%AF%BC%E7%8E%87%E8%AE%A1)

使用步骤 //波特率115200 注意： 请使用外接电源，使得EC Meter的供电电压接近+5.00V，电压越准，精度越高。 每测量不同的溶液前，需要使用清水清洗电导率电极和温度传感器，以防止示数不准和溶液污染。建议使用去离子水清洗。 测量溶液的电导率时，请务必确保温度电极插进被测溶液中，并且用电导电极搅拌溶液，使得电导电极的导电部分充分接触溶液。待温度值和电导率值稳定后，即可读取所需的值。受溶液极化影响，测量高电导率的溶液时，电导率示数会出现一定范围内的抖动。电导率越高，抖动越厉害。

(1)将各个设备按照图示方式连接，即：电导率电极连接到EC Meter电路板的BNC接口，然后用模拟连接线，将EC Meter电路板连接到Arduino主控器的模拟口1。然后把防水型DS18B20温度传感器连接到可插拔传感器转接器的接线端子，然后用数字连接线，连接到Arduino主控器的数字口2。对Arduino主控器供电后，可以看到EC Meter电路板的蓝色指示灯变亮。 (2)对Arduino主控器烧写样例代码。 (3)打开Arduino IDE的串口监视器，此时能输出一些参数，如电压值、温度值，并且提示没有溶液。

(4)将电导率电极和温度传感器插入校准溶液中，可以测量该溶液的电导率值。搅拌溶液，待示数稳定。如果示数接近标准溶液瓶身所标的值，则可以投入使用。 以测试电导率为1413us/cm的电导率溶液为例：

注意事项

电导率电极有光亮和铂黑两种，镀铂黑的目的在于增加电极片的有效面积，减弱电极的极化，测量电导率较大的溶液，使用铂黑电极比较适宜。 铂黑电极的铂金片表面附着有疏松的铂黑层，应避免任何物体与其触碰，只能用去离子水进行冲洗，否则会损伤铂黑层，导致电极测量不准确。 如发觉铂黑电极使用性能下降，可依次使用无水乙醇和去离子水浸洗铂金片，特别是用户对测量精度要求较高时尤为重要。 铂黑电极的铂金片表面附着有疏松的铂黑层，在测量样品时有可能会吸附样品成分，在使用电极测量完毕后一定要及时冲洗电极。 电导率电极在放置一段时间或者使用一段时间后，其电极常数有可能发生变化。如用户对测量准确度要求较高，建议按照仪器说明书定期校正电极常数。

### ORP (Oxidation Reduction Potential)(ORP probe and ORP circuit board)

[http://wiki.dfrobot.com.cn/index.php/(SKU:SEN0165)Analog\_ORP\_Meter\_模拟ORP计](http://wiki.dfrobot.com.cn/index.php/(SKU:SEN0165)Analog_ORP_Meter_%E6%A8%A1%E6%8B%9FORP%E8%AE%A1)

使用步骤 注意： 请使用高品质开关电源，电压尽量接近+5.00V，电压越准，精度越高！ ORP电极使用时无需标定,直接使用即可。只有对ORP电极的品质或测试结果有疑问时,可用ORP标准溶液检查电极电位,以判断ORP电极或仪器的好坏。 ORP电极每测一种溶液，都需要使用清水清洗，建议使用去离子水清洗。

///////////////////////////////////////////////////////////////// ORP电极连接到ORP meter电路板上时，严禁按下calibration按键，否则会损坏ORP电极！ ////////////////////////////////////////////////////////////////////

(1)用模拟连接线，把ORP meter电路板右边的接口连接到Arduino主控器的模拟口1，对Arduino主控器供电后，可以看到ORP meter电路板的蓝色指示灯变亮。 (2)对Arduino主控器烧写样例代码(注意：此时样例程序中应该是#define OFFSET 0)。 (3)打开Arduino IDE的串口监视器，可以看到当前打印出的ORP值。按下ORP meter电路板上的calibration按键保持不放，应该能看到打印出的值是一个很小的值，然后根据这个打印值，修改样例程序中的偏移量。比如，串口打印出:"ORP: 8mV"，那么把样例程序中的"#define OFFSET 0"修改成"#define OFFSET 8"即可。修改偏移量的目的是为了消除运算放大器产生的零漂电压，提高测量精度。修改完样例程序后，重新编译下载即可，这样便完成了校准。 (4)把ORP电极连接到ORP meter电路板的BNC接口。完整的连线图请对照连接示意图。经过校准后，ORP电极就能测量溶液的ORP值了，通过串口监视器，能很方便的查看当前溶液的ORP值。

维护及注意事项

测量前和测量后，都应用去离子水清洗电极，以保证测量精度，在粘稠试样中测定时，电极需用热去离子水反复冲洗几次，以除去黏在铂金片上的试样，或先用适宜的溶剂清洗，再用去离子水洗去溶剂。 电极经长期使用后会发生钝化，其现象是敏感梯度降低，响应变慢，读数不准，此时可将电极下端铂金片用0.1M稀盐酸浸泡24小时。 电极污染或者液接面堵塞，也会使电极钝化，此时，应根据污染物的性质选择适当溶液清洗，如下（仅供参考）： Clean.jpg 电极使用周期为一年左右，老化后应及时更换新的电极。

### DO(Dissolved Oxygen) (DO probe, BNC, and circuit board);

[http://wiki.dfrobot.com.cn/index.php?title=(SKU:SEN0237)溶解氧传感器#.E6.8A.80.E6.9C.AF.E8.A7.84.E6.A0.BC](http://wiki.dfrobot.com.cn/index.php?title=(SKU:SEN0237)%E6%BA%B6%E8%A7%A3%E6%B0%A7%E4%BC%A0%E6%84%9F%E5%99%A8#.E6.8A.80.E6.9C.AF.E8.A7.84.E6.A0.BC)

使用步骤 注意 //注意！⾮常重要！每⼀次重新烧录程序⾄ Arduino 主板时，需要将Rx(0) Tx(1)接线拔出，否则⽆法烧录成功。

使用新的溶解氧电极前，位于电极头部的膜帽需要加入0.5mol/L氢氧化钠溶液作为电极的填充液。该溶液碱性较强，请带好防水手套后操作。如不慎滴到皮肤上，请用大量清水冲洗。 膜帽上透明的氧渗透膜为敏感元件，请注意保护，不能用指甲或者其他尖锐物体碰触。 溶解氧电极在测量过程中需要耗氧，故测量的时候，需要轻轻搅拌液体，使得溶解氧均匀分布在液体中。但不能剧烈搅拌，以防空气中的氧气迅速溶入液体中！

准备： 使用全新的溶解氧电极之前，需要在膜帽（位于电极头部）中加入0.5mol/L氢氧化钠溶液，作为电极的填充液。如果电极使用有一段时间后，误差明显增大时，需要更换填充液。 下面将详细说明如何给溶解氧电极添加填充液。 1.取出溶解氧电极，然后去掉电极连线接口上的BNC短接帽。 这个BNC短接帽是直接短路电极的信号输出线，在不添加填充液的情况下，可使得电极的两极保持相同的电势，从而保护电极。但添加保护液后，电极将输出电信号，此时不能短路电极的输出，因此在添加填充液之前，必须去掉电极连线接口上的BNC短接帽，否则会影响电极寿命。 BncPullOut2.png 2.拧开电极的膜帽盖，倒入0.5mol/L氢氧化钠溶液到膜帽盖中，倒入量大概为膜帽内部容积的三分之二，然后使电极方向与水平面方向垂直，把膜帽套到电极上再拧紧，以溢出一点氢氧化钠溶液为佳。 在套上加有填充液的膜帽并拧紧时，电极尽量与水平面垂直，否则会出现不均匀，导致气泡产生。 加入填充液时，不能把膜帽加满，否则套到电极上时，会溢出很多填充液；也不可太少，没加够填充液会导致膜帽内部产生气泡。故倒入三分之二左右，膜帽拧紧后，以溢出一点氢氧化钠溶液为佳。 膜帽上溢出的氢氧化钠溶液，请用吸水纸吸干。 开封过的氢氧化钠溶液瓶，需尽快密封好，防止空气中的二氧化碳对其产生影响。

电极的填充液加入完毕后，需要进行一次校准。在校准前，请按照下图所示的接线图连接：电极接到信号转接板的BNC接口上，信号转接板接到arduino主控板的模拟口上。

校准电极 为保证精度，初次使用的电极，或者使用了一段时间的电极，需要进行校准。 常用的校准有：单点校准和两点校准。单点校准只进行饱和氧校准，而两点校准则要进行零氧校准和饱和氧校准。 大多数情况下采用单点校准即可，简单方便。 下面将详细说明如何进行单点校准。

1. 先上传样例代码至arduino主控板中，上传完毕后，打开串口监视器，即可看到溶解氧浓度值。
2. 将溶解氧电极插入到饱和氧水中，轻轻搅拌。查看串口监视器打印的溶解氧浓度值，等待浓度值慢慢稳定。 溶解氧电极的反应需要一定时间，故通常需要一分钟以上，才能得到比较稳定的数值。 如没有饱和氧水，用空气也可替代。方法是：将溶解氧电极放入水溶液中搅拌几下，即可湿润膜帽上的渗透膜，然后把电极静置在空气中即可，通常一分钟以上。
3. 待溶解氧浓度值几乎稳定后，即可进行饱和氧校准。具体步骤如下： 1.在串口监视器中输入Calibration指令，进入校准模式. 2.输入SATCAL指令进行饱和氧校准，校准成功与否会有相应的提示 3.校准完毕后，输入EXIT指令退出校准模式。
4. 经过上述步骤，饱和氧校准就完成了,之后就可用于实际的测量。

常见问题

Q1\. 如何配制饱和氧水？ A. 一般情况下，往水里充空气冒泡20分钟。这样就会使空气与氧气在水中达到饱和，从而制出了100%的溶氧校准标液。 Q2\. 如何配置无氧水？ A. 一般情况下，往水里加亚硫酸钠直至亚硫酸钠饱和，消耗掉水中的氧气，从而制得无氧水。 Q3\. 电极不使用了，如何保存？ A. 短期(过夜或者一周): 装配好的电极应该存放在去离子水或蒸馏水中，防止填充液蒸发。任何不用的时候需要把它从仪器设备上拔下来。 长期:将电极的膜帽拧下来，用去离子水或蒸馏水冲洗电极芯（阴极：白金，阳极：铅）和膜帽组件。再用吸水纸将所有部件吸干。膜帽也可以放置电极上，但是它必须被存放在无填充液的状况下，以防止电极正极的消耗。把所有部件安全地保存在原有的电极盒里。 Q4\. 如何配制电极填充液（氢氧化钠溶液（NaOH）,浓度为0.5mol/L）？ A. 在使用本传感器前，可能需要配置氢氧化钠溶液（NaOH）, 浓度为0.5mol/L，且每100mL氢氧化钠溶液中，添加1~2滴甘油。此溶液作为电极填充液，需要加入电极中，电极才能使用。如无法购买或配置好氢氧化钠溶液，本产品将不能正常使用！ Q5\. 常见的故障有哪些？怎么处理？ A. 如果电极在无氧水中的读数不在零或不是非常接近零，请对电极芯头部（阴极）抛光。如果电极读数不在正常读数范围，或者电极读数漂移，请检测膜帽上的薄膜。如果膜帽上的薄膜有可看得见的破裂、穿孔、或污染，请更换膜帽。