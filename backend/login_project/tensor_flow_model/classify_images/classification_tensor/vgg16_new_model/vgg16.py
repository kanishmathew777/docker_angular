import keras
from keras.models import Sequential
from keras.layers import Input, Dense, InputLayer

vgg16_model = keras.applications.vgg16.VGG16()

# print(type(vgg16_model))

vgg16_model.summary()

new_model = Sequential()
inputs = InputLayer(input_shape=(224, 224, 3))
new_model.add(inputs)

for layer in vgg16_model.layers:
    new_model.add(layer)

new_model.summary()

new_model.save('vgg16_copy.h5')
