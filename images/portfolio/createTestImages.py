from PIL import Image
import random

for i in range(200):
    img = Image.new("RGB", (100 + random.randint(0, 100), 100 + random.randint(0, 100)),
                    color=(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)))
    img.save(str(i) + ".jpg")
