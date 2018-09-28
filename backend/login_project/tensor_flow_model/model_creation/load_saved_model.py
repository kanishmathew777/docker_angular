# load the model

from keras.models import load_model
new_model = load_model('trained_model.h5')

new_model.summary()

new_model.get_weights()


# save the model architecture

json_string = new_model.to_json()

import json
print(json_string)

with open('model_file_arch.json', 'w') as json_file:
    json.dump(json.loads(json_string), json_file)


# save weights
new_model.save_weights('trained_model_weights.h5')

#
