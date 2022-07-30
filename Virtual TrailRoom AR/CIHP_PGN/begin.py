import numpy as np
import imageio as ii
from PIL import Image
import argparse
import test_pgn

parser=argparse.ArgumentParser(description='enter files')

parser.add_argument('--file_name',type=str,help='image to be segmeneted')
args=parser.parse_args()

file_name=args.file_name

nxb_img   = Image.open('./'+file_name+'.jpg')      # This is your image.
nxb_img.save('./datasets/CIHP/images/'+file_name+'.jpg')

# Reshape their label image to our size 
label_img = Image.open('./datasets/CIHP/labels/0005008.png')  # This is the label image from CIHP.
nxb_label_img = label_img.resize(nxb_img.size, Image.NEAREST)
nxb_label_img.save('./datasets/CIHP/labels/'+file_name+'.png')
nxb_label_img.save('./datasets/CIHP/labels_rev/'+file_name+'.png')

# Reshape their edge image to our size 
edge_img  = Image.open('./datasets/CIHP/edges/0005008.png')
nxb_edge_img  = edge_img.resize(nxb_img.size, Image.NEAREST)
nxb_edge_img.save('./datasets/CIHP/edges/'+file_name+'.png')

with open("./datasets/CIHP/list/val.txt", "w") as myfile:
    myfile.write("/images/"+file_name+'.jpg'+' '+'/labels/'+file_name+'.png')

with open("./datasets/CIHP/list/val_id.txt", "w") as myfile:
    myfile.write(file_name)

test_pgn.main()

