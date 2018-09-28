import keras

from preprocess_data import scaled_train_samples, train_labels, scaled_test_samples

from keras.models import Sequential
from keras.layers import Activation
from keras.layers.core import Dense
from keras.optimizers import Adam
from keras.metrics import categorical_crossentropy

# pass layers of model as:
# model = Sequential([l1, l2, l3])
# or
# model.add(l1)

# create a model and define layers
model = Sequential([
    Dense(16, input_shape=(1,), activation='relu'),
    Dense(32, activation='relu'),
    Dense(2, activation='softmax')
])


# get model summary
# model.summary()

# Compile the model
model.compile(Adam(lr=.0001), loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# create a validation set
# valid_set = [(sample, lable), (sample, lable), (sample, lable),(sample, lable)]
#
# and add to model train
#
# model.fit(scaled_train_samples, train_labels, validation_data=valid_set
#           batch_size=10, epochs=20, shuffle=True, verbose=2)

# or create a validation split
# which creates a validation set of 10 % and validation samples as 90 %

# train the model
model.fit(scaled_train_samples, train_labels, validation_split=0.1,
          batch_size=10, epochs=20, shuffle=True, verbose=2)

# save the model
model.save('trained_model.h5')

# predict model

# for predicting with %
# predictions = model.predict(scaled_test_samples, batch_size=10, verbose=0)
# for i in predictions:
#     print(i)

# for predict with classes
rounded_predictions = model.predict_classes(scaled_test_samples, batch_size=10, verbose=0)
for i in rounded_predictions:
    print(i)