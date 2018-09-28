from keras.models import load_model
from keras.layers import Dense
from keras.optimizers import Adam
from keras.models import model_from_json
from PIL import Image
import numpy as np

from classify_images.classification_tensor.model import train_batches, valid_batches
from classify_images.classification_tensor.model import test_batches
from classify_images.classification_tensor.confusion_matrix import plot_confusion_matrix

new_model = load_model('vgg16_copy.h5')
new_model.pop()

for layer in new_model.layers:
    layer.trainable = False

new_model.layers.pop()
new_model.layers.pop()
new_model.outputs = [new_model.layers[-1].output]
new_model.layers[-1].outbound_nodes = []
new_model.add(Dense(2, activation='softmax'))

new_model.compile(Adam(lr=.0001), loss='categorical_crossentropy', metrics=['accuracy'])

new_model.fit_generator(train_batches, steps_per_epoch=4,
                        validation_data=valid_batches, validation_steps=4, epochs=5, verbose=2)


# new_model.save('my_model.h5')
#
# del new_model

# new_model = load_model('my_model.h5')

test_images, test_labels = next(test_batches)
np_images = np.array(test_images).astype(np.uint8)

for i in range(len(np_images)):
    img = Image.fromarray(np_images[i], 'RGB')
    # img.show()
    print("test_label:", test_labels[i][0])

predictions = new_model.predict_generator(test_batches, steps=1, verbose=0)

from sklearn.metrics import confusion_matrix

y_pred = np.argmax(predictions, axis=1)

# cm = confusion_matrix(test_labels, np.round(predictions[:, 0]))
cm = confusion_matrix(test_labels, y_pred)

cm_plot_lables = ['cat', 'dog']

plot_confusion_matrix(cm, cm_plot_lables, title='Confusion Matrics')
print(predictions)
# for predict in predictions:
#     print(predict[0], int(predict[1]))

# model_json = new_model.to_json()
# with open("model.json", "w") as json_file:
#     json_file.write(model_json)
# new_model.save_weights("trained_vgg16_weights.h5")