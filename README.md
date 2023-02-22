# Front-end-Horse-Dragon
# Bone-Fracture-Regonition-Using-Deep-Neural-Network


This project aims to classify X-ray images into two categories: fractured or non-fractured, which is a binary classification problem. Additionally, it also aims to determine which body part the X-ray image belongs to, which is a multi-class classification problem.

To achieve both objectives, Transfer Learning and Random Forest methods were used, 

            Transfer Learning + Random Forest
![image](https://user-images.githubusercontent.com/110224556/220574926-deda20e0-082a-42ec-858f-a1dd8ad1ea74.png)



              Used one-hot encoding technique.
![image](https://user-images.githubusercontent.com/110224556/220575051-21e9c5fc-0b96-4167-bc6e-4835ed2c08a6.png)





Objective 1 (Binary classification) & Objective 2 (Multi-Class classification)

Five state-of-the-art models were used to extract features and train the Random Forest for both objectives:

VGG16

DenseNet169

ResNet50

Xception

InceptionV3


Dataset:

To achieve the objectives, X-ray images were collected from the MURA dataset, and the different types of X-ray images are:


             Elbow
![X-rayelbowimages (62)](https://user-images.githubusercontent.com/110224556/220575399-2f060ddc-fffe-4453-8401-0cd8c195007f.png)


            Finger
![X-ray-Fingerimages (41)](https://user-images.githubusercontent.com/110224556/220576483-3efb6d56-3a08-47ea-a092-cdd1325faad3.png)

           Forearm
![X-ray-Forearmimages (1)](https://user-images.githubusercontent.com/110224556/220576866-a337e58c-3ed8-477a-b5d5-49f8724fdaa7.png)

           Hand
![X-rayhandimages (4)](https://user-images.githubusercontent.com/110224556/220577020-9e346ade-78f1-4e54-ae75-1ee9133c16f3.png)

        Humerus

![X-rayhumerusimages (11)](https://user-images.githubusercontent.com/110224556/220577366-edf7f887-ee0a-4cd6-a4f6-5c9bcd49d0f1.png)

       Shoulder
![X-rayShoulderimages (87)](https://user-images.githubusercontent.com/110224556/220577557-f7a271cc-6b64-430f-9d5e-1185b4302b1f.png)

      Wrist
![X-raywristimages (36)](https://user-images.githubusercontent.com/110224556/220577642-142012bd-faf4-4224-aaa6-2de9099bf87e.png)

Results:

   
   Objective 1: 
   
![image](https://user-images.githubusercontent.com/110224556/220578032-b94ca1e8-2ef0-4d5b-855a-484e6b750542.png)


   Objective 2: 
   
![image](https://user-images.githubusercontent.com/110224556/220578332-1f936fb7-e64c-47c6-8b6c-28dbb1b4b6bb.png)
