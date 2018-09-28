from classify_images.classification_tensor.model import test_batches
from classify_images.classification_tensor.confusion_matrix import plot_confusion_matrix

"dog : 1, cat: 0"

from PIL import Image
import numpy as np
import matplotlib.pyplot as plt
from keras.models import load_model
new_model = load_model('classify_image.h5')



test_images, test_labels = next(test_batches)

# for image in test_images:
#     print(type(image))
np_images = np.array(test_images).astype(np.uint8)

for i in range(len(np_images)):
    img = Image.fromarray(np_images[i], 'RGB')
    # img.show()
    print("test_label:", test_labels[i][0])
    # plot_fig = plt.imshow(np_images[i])
    # plot_fig.show()

predictions = new_model.predict_generator(test_batches, steps=1, verbose=0)

for predict in predictions:
    print(predict[0], int(predict[1]))

plot_confusion_matrix(test_labels, predictions)
