import cv2 
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--path",help = "enter the path to imag")
parser.add_argument("--image_name",help = "enter image name")
args = parser.parse_args()
path = args.path
image_name = args.image_name

img = cv2.imread(path,cv2.IMREAD_GRAYSCALE)
img_binary = cv2.threshold(img,128,255,cv2.THRESH_BINARY)[0]
cv2.imwrite(f'./dataset/cloth_mask/{image_name[:-4]}_mask.png',img_binary)







