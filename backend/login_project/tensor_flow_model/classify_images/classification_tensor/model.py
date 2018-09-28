import numpy as np
import os
import matplotlib.pyplot as plt
from PIL import Image

from keras.preprocessing.image import ImageDataGenerator

train_path = '../../train'
test_path = '../../test'
valid_path = '../../valid'

print(os.getcwd())

train_batches = ImageDataGenerator().flow_from_directory(train_path, target_size=(224, 224),
                                                         classes=['dog', 'cat'], batch_size=10)
test_batches = ImageDataGenerator().flow_from_directory(test_path, target_size=(224, 224),
                                                         classes=['dog', 'cat'], batch_size=10)
valid_batches = ImageDataGenerator().flow_from_directory(valid_path, target_size=(224, 224),
                                                         classes=['dog', 'cat'], batch_size=10)
imgs, labels = next(train_batches)

# print(type(imgs), labels)


# test_images, test_labels = next(test_batches)
#
# Convert to np.array
# np_images = np.array(test_images).astype(np.uint8)

# for i in range(len(np_images)):
#     img = Image.fromarray(np_images[i], 'RGB')
#     img.show()
