---
title: "MapKnitter Aerial Image labelling to detect Environmental issues using machine vision"

tagnames: 'software, gsoc, first-time-poster, gsoc-2019, soc-2019, soc-2019-proposals'
author: sauvzi13397
path: /notes/sauvzi13397/04-03-2019/mapknitter-aerial-image-labelling-to-detect-environmental-issues-using-machine-vision.md
nid: 18950
uid: 581175

cids: 23659,23661,23712,23717,23848

---

# MapKnitter Aerial Image labelling to detect Environmental issues using machine vision

by [sauvzi13397](../../../profile/sauvzi13397) | April 03, 2019 21:01

April 03, 2019 21:01 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [first-time-poster](../tag/first-time-poster), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-proposals](../tag/soc-2019-proposals)

----

## 

# MapKnitter Aerial Image labelling to detect Environmental issues using machine vision.

## About me

Name: Saurabh Dubey

Email: [sauvzi13397@gmail.com](mailto:sauvzi13397@gmail.com)

GitHub: [https://github.com/SKashyapD](https://github.com/SKashyapD)

Affiliation: JIIT Noida Place: Noida

## why?

Mapknitter is a visionary project and by integrating machine vision into it we can make it revolutionary.

There has never been a more important time to observe human activities and their impact on the earth. We can use MapKnitter as a tool to understand and evaluate how much damage we have done to the ecosystem, Sooner or later, we will have to recognise that the Earth has rights too, to live without pollution.

We can help environmentalist, journalists, citizen scientists, humanitarian agencies, social justice activists, archaeologists, and other researchers to discover such patterns by using Mapkintter. With the help of Mapknitter, they will able to identify, characterize and track the impacts which have not been detected earlier and mobilize to make significant changes.

The Mapknitter project will democratize the aerial image intelligence. By providing a means by which interested parties can quickly and easily scan extremely large aerial imagery for specific environmental issues and by democratizing MapKnitter, We can hope people will get a tool which will give them the ability to research and will be able to hold big organizations accountable for the damage they have done to Earth, which would otherwise remain in the dark.

For example Companies like Hunt oil commit grave violations against the ecological balance by risking the destruction of rainforest, threatening its indigenous peoples and endangering rare species on the coast. which was evident in the mining operations. Cases like this highlight the need for private citizens to step up and take charge.

![](https://i.imgur.com/dCLpUAB.jpg)

The primary reason why the aforementioned is one of the driving points for this project is the unique convenience aerial imagery provides in such cases. When mapping out the damage done to an area as big and harsh as the Amazon rainforest ground forces prove to be severely inadequate, this is where aerial imagery shines because of its convenience and sheer scope.

It's high time humans introspect and one line sums it up.

> If you really think the economic growth is more important than the environment, then try holding your breath while you count your money.

This project has the potential to outshine all environmental reconnaissance we have done till date by giving power back to the people on how their lives affect their planet and their role in it, all the while empowering everyone to be the change they want to be. There will be many important stories about exploitation of the earth and now with the help of aerial imagery and computer vision we are trying to make such stories discoverable.

## How?

**Implementing the Machine learning model in simple steps:**

1. Collect the pair of images and label(data),
2. Write a program that predicts labels for given images(model),
3. Testing our model on our performance metric (testing).

**Real World Objectives/Goals and Constraints:**

1. Predict as many labels as possible correctly.
2. Even it takes little more time to train our model, but we must ensure the accuracy of the model is high.
3. Cost of errors would be bad user experience.

### Flowchart

![](/i/31360.jpg "FLOW.jpg")

### So how we will get the dataset and make it a training set?

A DCNN neural net needs to be trained on a set of tagged images, the most important part is data. The larger and more accurate sample size will lead to better results.

OpenStreetMap is an astonishing crowdsourced project with the huge amount of data it is an opensource organization so we can use their data, which has generously categorized large parts of the world with its [Nominatim](https://wiki.openstreetmap.org/wiki/Nominatim/Special_Phrases/EN) taxonomy. We will train our DCNN using 466 of the Nominatim categories (such as "airport", "marsh", "gas station", "prison", "monument", "church", etc.), with approximately 1000 satellite images per category. without OpenStreetMap it is almost impossible for us to make and train our model, So this is the site which contains tagged images [OpenStreetMap\_tag](https://taginfo.openstreetmap.org/ "https://taginfo.openstreetmap.org/"). which is stored in SQlite formate and we can download it from this link [download](https://taginfo.openstreetmap.org/download)

To understand that what we will get after downloading the data this is statistics which shows it diversity and power.

![](https://i.imgur.com/VoxYYWR.png)

To get the overview of how the images were tagged which will eventually help us during Data-preprocessing.

![](https://i.imgur.com/NaUTzx5.png)

So, We have the data we needed, Now we have to pre-process the data so we can use it to fit it in our Deep convolution neural network(DCNN) model.Data preprocessing

---------

Steps needed to accomplish this are:

1. Find many lists of categories.
2. Generate a list of our 1000 categories.
3. Enter these into some sort of regular format/database/spreadsheet/csv/tsv/key-value store.
4. Extract/Scrape/Download many examples of each category as either address or lat/lng.
5. Enter these into our regular format/database/spreadsheet/csv/tsv/key-value store.
6. Convert each of theses that are an address into lat/lng.
7. Convert each of these lat/lng pairs into a URL for an image.
8. Scrape/API/Download all of the images.
9. Batch-process the URLs into the correct folders (with the correct names).

### Which convolution neural network we will use and how we will train it?

#### Step:1 Selecting the appropriate model- ResNet

Residual Nets was a major breakthrough in CNN because deep feed-forward conv nets tend to suffer from optimization difficulty. Beyond a certain depth, adding extra layers results in higher training error and higher validation error, even when batch normalization is used. ![](https://i.imgur.com/XxvTbh9.png)

As you can see that in this above image as the number of layer increases it leads to higher errors. The authors of the ResNet paper argue that this underfitting is unlikely to be caused by vanishing gradients, since this difficulty occurs even with batch normalized networks. The residual network architecture solves this by adding shortcut connections that are summed with the output of the convolution layers.

.![](https://i.imgur.com/Gsul3n3.png)

**Why ResNet works so well?**

1. ResNet work best for Deep CNN which is shown in this graph as the number of layers increases the error decrease proportionally![](https://i.imgur.com/uaeOXc8.png)
2. Allowing the training model with 100's of the layers for greater accuracy.
3. Each layer has less work to do(no copying).
4. Adding a new layer would not hurt our previous performance as regularization will skip over them.
5. If new layers are useful performance will not decrease but it can increase.

#### Step:2 Transfer learning and Using pretrained ResNet-34 model

**Transfer learning** A very common trick used in ML which is also known as transfer learning which means instead of training your model with random initialization we can initialize the parameters we got from another similar model who already trained on different data set. which is basically a great head start. Simply put, a pre-trained model is a model created by someone else to solve a similar problem. Instead of building a model from scratch to solve a similar problem, you use the model trained on other problem as a starting point.

For example, if you want to build a self-learning car. You can spend years to build a decent image recognition algorithm from scratch or you can take the inception model (a pre-trained model) from Google which was built on ImageNet data to identify images in those pictures. A pre-trained model may not be 100% accurate in your application, but it saves huge efforts required to re-invent the wheel.

**From where we get the pretrained ResNet-34 model?** Terrapattern is also using pretrained ResNet-34 model which we can find in this Github [link](https://github.com/facebook/fb.resnet.torch) and we can download it easily from this link [download\_link](https://github.com/facebook/fb.resnet.torch/tree/master/pretrained "https://github.com/facebook/fb.resnet.torch/tree/master/pretrained") which is working very well for terrapattern. So our pretrained model is trained on dataset Imagnet. In ImageNet aerial image categories are called "synsets". Each folder will contain 1000 images of a satellite photograph containing an image of the entity described by the tag. In terms of resolution and format: for reference, ImageNet is distributed as JPGs averaging 482x415 pixels with the full dataset of 1.2M images coming to 138GB. This is about 4.3 bits per pixel.

**Why pretrained ResNet-34?** As you can see in the image below ResNet-34 has greater error rate than ResNet-50\. Then why we will not use ResNet-50

![](https://i.imgur.com/C3vLWZZ.png)

The answer is that actually ResNet-34 is very less time consuming and uses very less computational power than any other model.

![](https://i.imgur.com/2WLbM3r.png)

#### Step:3 Fine tuning on our dataset.

**What is Fine Tuning of Network**

Fine Tuning is the process where we fine-tune our existing networks ResNet-34\. that are already trained on a larger dataset like ImageNet(1.2M labelled images) by continuing training it (i.e. running back-propagation) on the OpenStreetMap dataset we have. Given that, our dataset should not be largely different in context to the original dataset (e.g. ImageNet), the pre-trained model will already have learned features that are relevant to our own classification problem.

**Why to Fine-Tune a Network**

When we are given a Deep Learning task, say, one that involves training a Convolutional Neural Network (Convnet) on a dataset of images, our first instinct would be to train the network from scratch. However, in practice, deep neural networks like Convnet has a huge number of parameters, often in the range of millions, therefore it will take a lot of time to train a model. Hence, we should always try to find an existing trained neural network that accomplishes a similar task to the one you are trying to tackle, then just reuse the lower layers of such network: this is called Transfer Learning. It will not only speed up training considerably but will also require much less training data.

Secondly, Fine Tuning solves the limitation of high computational resources requirements. Even if we have a lot of data, training generally needs a lot of iterations and it takes a toll on computing resources. Since we will freeze the initial layers of architecture, the parameters that need to be updated is less and the amount of time and resources needed will also be less.

**How Fine-Tuning of Network Works**

The goal of fine-tuning our network is to tweak the parameters of an already trained network so that it transforms itself to the new task at hand. The initial layers learn universal features(like edges and curves) and as we go higher up the network, the layers tend to learn patterns more specific to the task it is being trained on. Therefore, for fine-tuning, we want to keep the initial layers as it is( or freeze them ) and retrain the later layers for our task. ![](https://i.imgur.com/8CNxSMD.png)

### Which performance metrics we will use to test our model?

The primary obstacle is the imbalance in the dataset which makes detecting rare labels a difficult task and to classifying environmental issues rare labels are very important. So, Micro-Averaged F1-Score performance metric work best in our case.

**Performance metric** _Micro-Averaged F1-Score (Mean F Score_): The F1 score can be interpreted as a weighted average of the precision and recall, where an F1 score reaches its best value at 1 and the worst score at 0\. The relative contribution of precision and recall to the F1 score are equal.

The formula for the F1 score is: _F1 = 2 \* (precision \* recall) / (precision + recall)_ In the multi-class and multi-label case, this is the weighted average of the F1 score of each class.

_'micro f1 score':_ Calculate metrics globally by counting the total true positives, false negatives and false positives. \_  
\_

_'macro f1 score':_ Calculate metrics for each label, and find their unweighted mean. This does not take label imbalance into account.

Our goal is to minimize Micro avg F1 Score as much as possible this will help us to evaluate our model

## Timeline

**Community Bonding period: I will use the community bonding period to**

1. To learn more about the Public lab community
2. I will discuss the project in detail with my mentor and the interested maintainers.
3. Research upon suggested changes and make any necessary modifications.

**27th May to 23rd June:**

**Week 1:**

1. Setting up my working environment, Revising the required technologies, Revising the coding standards.
2. Exploratory Data Analysis(EDA): After taking the dataset from OpenStreetMap. Perform initial investigations on data so as to discover patterns, isolate anomalies. Further test hypothesis and check assumptions with the help of summary statistics and graphical representations.

**Week 2:**

1. Data Preprocessing: Data preparation involves the rationalization and validation of data to make sure data is formatted consistently and cohesion is maintained post extraction from the source material.
2. Deleting duplicate files, Removing special characters, Changing tags into lowercase.
3. Find many lists of categories, Generate a list of our 1000 categories, Enter these into some sort of regular format/database/spreadsheet/csv/tsv/key-value store, Extract/Scrape/Download many examples of each category as either address or lat/lng.

**Week 3:**

1. Enter these into our regular format/database/spreadsheet/csv/tsv/key-value store, Convert each of theses that are an address into lat/lng
2. Convert each of these lat/lng pairs into a URL for an image, Scrape/API/Download all of the images.
3. Batch-process the URLs into the correct folders (with the correct names).

**Week 4:**

1. Buffer time for data preprocessing.
2. Analyze and visualize the dataset using graphical means.
3. Reach conclusions on a front line of attack, revealing intricate structure in data that cannot be absorbed in any other way. We will discover unimagined effects, and we will challenge imagined ones.

**24th June to 28th June: Evaluations Evaluation goal: Converting OpenStreetMap dataset into a training set to aid in the training of our model.**

**29th June to 21st July:**

**Week 1 :**

1. Obtain the pretrained model Resnet-34
2. Understanding the architecture of ResNet-34
3. Understanding the codebase of ResNet-34

**Week 2 :**

1. Code to augment pretrained ResNet-34 model to suit our needs.

**Week 3 :**

1. Begin fine tuning of the existing model on our Dataset.
2. Optimize the tag threshold to maximize F2 score.

**22nd July to 26th July: Evaluations** **Evaluation goal: We established the Pretrained ResNet-34 model as the standard and made efforts to fine tune it**

**27th July to 25th August:**

**Week 1 :**

1. Tune learning rate (LR) manually, to identify the LR with the best performance score.
2. To complete fine tuning our model on our dataset.

**Week 2 :**

1. Buffer time to complete fine tuning.
2. Buffer time to complete training.

**Week 3 :**

1. Testing our model with the help of performance metric(Micro avg F1).
2. Applying some experimental Machine learning approaches to obtain minimal Micro avg F1 Score.
3. Consolidate Micro avg F1 score by further fine tuning.

**Week 4 :**

1. Begin documentation process.
2. Initiate the final debugging process.
3. Conclude with a well-documented, bug free DCNN for MapKnitter.

**Final Evaluation** **Evaluation Goal: We have wrapped up the creation part of the deep CNN model and the model is ready to be deployed for further application.**

**Future Deliverables**

I will continue to associate myself with Public Lab Community and for the starter, I will try to train our model on the dataset which we are creating on zooniverse Public lab test project through batch processing.

## An Insight of me.

During my fifth semester of study, we undertook Environmental Studies as a subject. But, at that point in time, I pondered on the relevance of Enviorenmatal studies in an engineering course. At the end of the semester, after going through multiple case studies, I realised how giant organizations exploited our resources to mint money and that pollution is perhaps the biggest threat to our existence and wellbeing. I reached to a realization that we as a collective must take responsibility to make the change that matters, and subject like Environmental Studies is the need of the hour.

So, at that point in time, I thought, what can I do as an Engineering student. Then, I found, Public lab and thought that following the organization's footsteps, I can use my technical knowledge to contribute as an Environmentalist. Thus, I created an issue on Github plots2 repository [issue](https://github.com/publiclab/plots2/issues/4660) where I have been discussing the ideas with Public lab community and Jeffrey Warren suggested me to work on AERIAL IMAGE TAGGING FOR MAPKNITTER. He mentored me throughout my research and keeps motivating me by providing useful links and resources. We have been working on a zoonvierse Project-Public lab test project, In which we are making our own dataset for classifying environmental issues. The project is still in the development stage and we hope it will be ready soon. In the near future, we can train this model on our own dataset we are creating on zooniverse. So, during research, I also realized how important this project is and how much is this needed for all of us. By enhancing MapKnitter, We are giving people the power to research easily and reliably. Thus, this makes me highly motivated to work on this project.

Archimedes once said,

> Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.

As for myself, although this project looks small, it has the ability to make a great impact on the World.

I am working on machine learning and deep learning for the past one years this is project and case studies, which I have done.

1. Benchmarking of machine learning classification algorithms on the dataset provided by [https://www.kaggle.com/datafiniti/consumer-reviews-of-amazon-products](https://www.kaggle.com/datafiniti/consumer-reviews-of-amazon-products)
2. Chatbot using deep natural language processing in my university's minor project.
3. Sentiment analysis on the dataset provided by [https://www.kaggle.com/bittlingmayer/amazonreviews](https://www.kaggle.com/bittlingmayer/amazonreviews)
4. Object detection classifier on CNN

I am working on this project for the past 2 months and during my research, I have read tons of research papers and articles on aerial image labelling the most insightful ones are mentioned below

1. [http://www.cs.toronto.edu/~fritz/absps/road\_detection.pdf](http://www.cs.toronto.edu/%7Efritz/absps/road_detection.pdf)
2. [https://www.cs.toronto.edu/~vmnih/docs/Mnih\_Volodymyr\_PhD\_Thesis.pdf](https://www.cs.toronto.edu/%7Evmnih/docs/Mnih_Volodymyr_PhD_Thesis.pdf)
3. [https://arxiv.org/pdf/1605.08323.pdf](https://arxiv.org/pdf/1605.08323.pdf)
4. [https://towardsdatascience.com/keras-transfer-learning-for-beginners-6c9b8b7143e](https://towardsdatascience.com/keras-transfer-learning-for-beginners-6c9b8b7143e)
5. [https://arxiv.org/abs/1605.08323](https://arxiv.org/abs/1605.08323)
6. [https://medium.com/@sachinsharma9780/hands-on-experience-on-achieving-state-of-the-art-results-on-classifying-eurosat-satellite-images-91a9897f7433](https://medium.com/@sachinsharma9780/hands-on-experience-on-achieving-state-of-the-art-results-on-classifying-eurosat-satellite-images-91a9897f7433)
7. [https://ieeexplore.ieee.org/document/8014933](https://ieeexplore.ieee.org/document/8014933)
8. [https://www.tandfonline.com/doi/full/10.1080/01431160600746456](https://www.tandfonline.com/doi/full/10.1080/01431160600746456)

And few case studies which I have done on multilabel classification and aerial image labelling

1. Planet: Understanding the Amazon from Space on the dataset provided by kaggle [https://www.kaggle.com/c/planet-understanding-the-amazon-from-space/data](https://www.kaggle.com/c/planet-understanding-the-amazon-from-space/data) which is an almost similar task we are trying to do.
2. StackOverflow tag prediction [https://www.kaggle.com/miljan/predicting-tags-for-stackoverflow](https://www.kaggle.com/miljan/predicting-tags-for-stackoverflow) almost similar task the only difference is there are text instead of images.

After detailed research, I have devised a plan of action that I can pull off within the academic environment of Google Summer of Code.

thank you!