import numpy as np
from random import randint
from sklearn.preprocessing import MinMaxScaler

train_labels = []
train_samples = []

test_samples = []
test_labels = []

# Train Samples
for i in range(1000):
    random_younger = randint(13, 64)
    train_samples.append(random_younger)
    train_labels.append(0)

    random_older = randint(65, 100)
    train_samples.append(random_older)
    train_labels.append(1)

# Test Samples
for i in range(2):
    random_younger = randint(13, 64)
    test_samples.append(random_younger)
    test_labels.append(0)

    random_older = randint(65, 100)
    test_samples.append(random_older)
    test_labels.append(1)

print(test_samples)
# for i in train_samples:
#     print(i)

# Create a numpy array for train_samples
train_labels = np.array(train_labels)
train_samples = np.array(train_samples)

# Create a numpy array for test_samples
test_labels = np.array(train_labels)
test_samples = np.array(train_samples)

# for i in train_samples:
#     print(i)

scaler = MinMaxScaler(feature_range=(0, 1))
scaled_train_samples = scaler.fit_transform((train_samples).reshape(-1, 1))

scaler = MinMaxScaler(feature_range=(0, 1))
scaled_test_samples = scaler.fit_transform((test_samples).reshape(-1, 1))


# for i in scaled_train_samples:
#     print(i)