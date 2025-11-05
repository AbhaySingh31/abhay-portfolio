---
title: "Building Neural Networks with PyTorch"
date: "2024-10-28"
description: "Learn how to build and train neural networks from scratch using PyTorch."
tags: ["AI", "Deep Learning", "PyTorch", "Neural Networks"]
---

# Building Neural Networks with PyTorch

PyTorch is one of the most popular deep learning frameworks. In this tutorial, we'll build a simple neural network from scratch and train it on a classification task.

## Setting Up

First, install PyTorch:

```bash
pip install torch torchvision
```

## Creating a Neural Network

Let's create a simple feedforward neural network:

```python
import torch
import torch.nn as nn
import torch.optim as optim

class SimpleNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(SimpleNN, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x

# Initialize the model
model = SimpleNN(input_size=784, hidden_size=128, output_size=10)
```

## Training the Model

Here's how to train the model:

```python
# Define loss function and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(num_epochs):
    for batch_idx, (data, targets) in enumerate(train_loader):
        # Forward pass
        outputs = model(data)
        loss = criterion(outputs, targets)
        
        # Backward pass and optimization
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
    
    print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')
```

## Key Concepts

### 1. Automatic Differentiation

PyTorch automatically computes gradients using its autograd system.

### 2. GPU Acceleration

Move your model and data to GPU for faster training:

```python
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = model.to(device)
data = data.to(device)
```

### 3. Model Evaluation

Always set your model to evaluation mode when testing:

```python
model.eval()
with torch.no_grad():
    predictions = model(test_data)
```

## Conclusion

PyTorch makes it easy to build and train neural networks with its intuitive API and dynamic computation graphs. Practice with different architectures and datasets to master deep learning!
