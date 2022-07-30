import argparse
import shutil
import os
import random

# The code takes in 4 command line arguments 
# image_name --> input_model_image.jpg
# path_model --> path_to_model_image
# garment_name --> input_garment_image.jpg
# path_garment --> path_to_garment_image


parser = argparse.ArgumentParser()

parser.add_argument("--image_name",help = "enter model image name")
parser.add_argument("--path_model",help = "enter path to image ")
parser.add_argument("--garment_name",help = "enter garment image name")
parser.add_argument("--path_garment",help = "enter path to garment")

args = parser.parse_args()

path_model = args.path_model
path_garment = args.path_garment
image_name = args.image_name
garment_name = args.garment_name

# Moving the input model file to dataset/images
shutil.copy(path_model+image_name,'./dataset/images/'+image_name)

# choosing a random pose from available poses
list_of_keypoints = os.listdir('dataset/pose_coco')
random_pose = random.randint(0,len(list_of_keypoints))
random_pose = list_of_keypoints[random_pose]

# Moving the input garment file to dataset/cloth_image  
#shutil.move(path_garment+garment_name,'./dataset/cloth_image/'+garment_name)

# writing to text file
text_to_append = f"{image_name}\t{random_pose}\t{garment_name}\ttest"	
with open('./demo/demo1.txt','w') as f:
	f.write(text_to_append)
	
import subprocess
process= subprocess.run('bash demo.sh',shell=True,check=True)


