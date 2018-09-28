import os, sys
from PIL import Image

train_path = 'train'
test_path = 'test'
valid_path = 'valid'

labels = ['cat', 'dog']

folders = [train_path, test_path, valid_path]

size = 224, 224


def convert_to_specific_dimensions():

    for folder in folders:
        for label in labels:
            label_folder = '{}/{}/{}'.format('..', folder, label)
            for filename in os.listdir(label_folder):
                print(folder, label, filename)
                image_path = os.path.join(label_folder, filename)
                im = Image.open(image_path)

                # im.thumbnail(size, Image.ANTIALIAS)
                new_img = im.resize(size, Image.ANTIALIAS)
                output_folder = '{}/{}/{}/{}'.format('..', 'resize', folder, label)
                if not os.path.exists(output_folder):
                    os.makedirs(output_folder)
                output_image_path = os.path.join(output_folder, filename)
                new_img.save(output_image_path, "JPEG")


convert_to_specific_dimensions()


